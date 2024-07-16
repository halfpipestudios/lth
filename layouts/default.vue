
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
        padding-top: 60px;
        background-color: white;

        position: relative;
    }

    .spider {
        position: absolute;
        top: 0;
        left: 130px;
    }

</style>