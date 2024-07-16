
<template>
    <div>
        <header>
            <img class="spider" src="/img/spider.png" alt="">
        </header>
        <slot />
    </div>
</template>

<style>

    header {
        padding-top: 40px;
        background-color: black;

        position: relative;
    }

    .spider {
        position: absolute;
        top: 0;
        left: 100px;
    }

</style>