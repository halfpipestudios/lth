<template>
    <div class="blogs">
        <Blog v-if="blogs" v-for="(blog, index) in blogs" :key="index" 
            :title="blog.title"
            :image="blog.image"
            :text="blog.text"
            :theme="theme"
        />
        
        <button v-if="more_blogs_to_fetch" @click="fetch_blogs">{{ texts["blogs-cargar-mas"] }}</button>
    
    </div>
</template>

<script setup>
    const props = defineProps({
        category: {
            type: String,
        },
        amount: {
            type: String,
        },
        theme: {
            type: String,
            default: "light"
        }
    });

    const language = useState('language');
    const texts = useState('texts');
    
    const blogs = ref(null);
    const more_blogs_to_fetch = ref(true);
    let blogs_amout = Number(props.amount);
    let blogs_feched = 0;

    function translate_blogs(blogs) {
        const result = [];
        for (let blog of blogs) {
            blog["title"] = blog["Titulo_" + language.value];
            blog["text"] = blog["Texto_" + language.value];
            result.push(blog);
        }
        return result;
    }

    async function fetch_blogs_ssr() {
        
        const amount_to_fetch_next = blogs_feched + blogs_amout + 1;
        const {data: records, status, error, refresh, clear} = await useFetch(`/api/blogs?category=${props.category}&start=1&end=${amount_to_fetch_next}`);
        
        blogs_feched = blogs_feched + blogs_amout;
        
        const translated_blogs = translate_blogs(records.value.items);
        if(records.value.items.length <= blogs_feched) {
            more_blogs_to_fetch.value = false;
        } else {
            translated_blogs.pop();
        }
        
        blogs.value = translated_blogs;
    }

    async function fetch_blogs() {
        if(more_blogs_to_fetch.value) {
      
            const amount_to_fetch_next = blogs_feched + blogs_amout + 1;
            const records = await $fetch(`/api/blogs?category=${props.category}&start=1&end=${amount_to_fetch_next}`);
            
            blogs_feched = blogs_feched + blogs_amout;
            if(records.items.length > blogs_feched) {
                records.items.pop();
            } else {
                more_blogs_to_fetch.value = false;
            }

            blogs.value = translate_blogs(records.items);
        }
    }

    watch(language, ()=> {
        translate_blogs(blogs.value);
    })

    await fetch_blogs_ssr();
    
</script>

<style scoped lang="scss">


.blogs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.blogs button {
    font-family: open-sans;
    font-weight: bold;
    font-size: 20px;
    background-color: white;
    border: 3px solid #8A8A8A;
    border-radius: 40px;
    color: black;

    box-sizing: border-box;
    margin: 40px;
    padding: 10px 30px 10px 30px;

    cursor: pointer;
}

.blogs button:hover {
    background-color: #eeeeee;
}

</style>