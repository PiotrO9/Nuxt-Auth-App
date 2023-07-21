<template>
    <main>
        <h1>Nuxt 3 + Supabase Auth</h1>
        <LoginForm />
        <span>Create a new account</span>
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

    span {
        color: white;
        text-decoration: underline;
        margin-top: 30px;
        font-size: 20px;
    }

}
</style>