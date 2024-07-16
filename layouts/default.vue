
<template>
    
    <div>
        <header>
            <ul>
                <NuxtLink class="navbtn" to="/">Home</NuxtLink>
                <NuxtLink class="navbtn" to="/about">About</NuxtLink>
            </ul>
        </header>
        
        <slot />

    </div>
    
</template>

<style>

.navbtn {
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: aquamarine;
    text-decoration: none;
}

.navbtn:hover{
    background-color: gray;
}

</style>