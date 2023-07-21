<template>
    <form>
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Password">
        <button>Log in</button>
    </form>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap");

* {
    font-family: 'Inter', sans-serif;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    input,
    button {
        width: 100%;
        height: 50px;
        outline: none;
        border: none;
        font-size: 24px;
        box-sizing: border-box;
        border-radius: 6px;
    }

    input {
        padding-left: 10px;
        background-color: #444b5a;
        color: #7f8695;
    }

    button {
        background-color: #01bf5b;
        box-sizing: border-box;
        color: white;
        font-weight: 500;
    }
}
</style>