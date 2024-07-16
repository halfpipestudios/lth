<template>
    <h1>Hello Lemon Tree</h1>
    <ul>
        <li v-for="user in users" :key="user.id">
            <h2>{{user.name}}</h2>
            <p>{{user.email}}</p>
            <img :src="$pb.files.getUrl(user, user.avatar)" alt="profile">
        </li>
    </ul>
</template>

<script setup>

    const { $pb } = useNuxtApp();

    let users = useState("users", () => []);
    const { data: usersData } = await useAsyncData("fetching-users", () => $pb.collection('users').getFullList());
    users.value = usersData.value;
    
    if(import.meta.client) {
        console.log("component mounted on client");
    } else {
        console.log("component mounted on server");
    }
    
    onBeforeUnmount(() => {
        if(import.meta.client) {
            console.log("component unmounted on client");
        } else {
            console.log("component unmounted on server");
        }
        
    });

</script>

<style scoped>

    img {
        max-width: 400px;
    }

</style>