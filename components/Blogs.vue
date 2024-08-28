<template>
    <div class="blogs">
        <Blog v-for="(blog, index) in blogs" :key="index" 
            :title="blog.title"
            :image="blog.image"
            :text="blog.text"
        />
        <button v-if="more_blogs_to_fetch" @click="fetch_blogs">Ver mas ...</button>
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
    });

    const blogs = ref([]);

    const language = useState('language');
    function translate_blogs(blogs) {
        for (let blog of blogs) {
            blog["title"] = blog["Titulo_" + language.value];
            blog["text"] = blog["Texto_" + language.value];
        }
        return blogs;
    }
    watch(language, ()=> {
        translate_blogs(blogs.value);
    })

    let more_blogs_to_fetch = ref(true);

    let blogs_amout = Number(props.amount);
    let blogs_feched = 0;
    
    fetch_blogs();

    async function fetch_blogs() {
        if(more_blogs_to_fetch.value) {
      
            const amount_to_fetch_next = blogs_feched + blogs_amout + 1;
            const records = await $fetch(`/api/blogs?category=${props.category}&start=1&end=${amount_to_fetch_next}`);
            
            blogs_feched = blogs_feched + blogs_amout;
            if(records.items.length > blogs_feched) {
                records.items.pop();
                console.log("there are more blogs to fetch!");  
            } else {
                more_blogs_to_fetch.value = false;
                console.log("no more blogs to fetch!");
            }

            blogs.value = translate_blogs(records.items);
        }
    }

</script>

<style scoped lang="scss">


.blogs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #f2f2f2;

    width: 100%;
}

</style>