<template>
    <form @submit.prevent="test">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button type="submit">Log in</button>
    </form>
</template>

<script setup lang="ts">
const isSignUp = ref<boolean>(false)
const email = ref<string>("")
const password = ref<string>("")
const client = useSupabaseClient()

const SignUp = async () => {
    const { user, error } = await client.auth.signUp({
        email: email.value,
        password: password.value
    })

    console.log('user', user)
    console.log('error', error)
}

const Login = async () => {
    const { user, error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })

    console.log('user', user)
    console.log('error', error)
}

const test = async () => {
    const { data, error } = await client.from('Test').select('*');

    if (error) {
        throw new Error('Failed to fetch records.');
    }

    console.log('All records from "Test" table:', data);
}

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
        cursor: pointer;
    }
}
</style>