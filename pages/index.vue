<template>
    <main>
        <h1>Nuxt 3 + Supabase Auth</h1>
        <LoginForm />
        <NuxtLink to="/register">
            <span>Create a new account</span>
        </NuxtLink>
    </main>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap");

* {
    font-family: 'Inter', sans-serif;
}

main {
    width: 100vw;
    max-width: 800px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: white;
        font-weight: 300;
        text-align: start;
        align-self: flex-start;
        margin-bottom: 30px;
        margin-top: 10px;
    }

    a {
        margin-top: 30px;
        text-decoration: underline;
        font-size: 20px;
        color: white;
        cursor: pointer;
    }

}
</style>