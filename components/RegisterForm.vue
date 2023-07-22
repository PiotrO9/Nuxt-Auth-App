<template>
    <form @submit.prevent="SignUp">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button type="submit">Sign in</button>
        <span v-if="errorMsg">
            {{ errorMsg }}
        </span>
    </form>
</template>

<script setup lang="ts">

const supabase = useSupabaseClient()
const email = ref<string>("")
const password = ref<string>("")
// const repeatedPassword = ref<string>("")
const errorMsg = ref<string | null>(null)
const successMsg = ref<string | null>(null)

const SignUp = async () => {
    try {
        const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value
        });

        if (error) {
            if (error.code === 'auth.email-already-in-use') {
                errorMsg.value = 'This email address is already registered. Please log in or use a different email.';
            } else if (error.code === 'auth.too-many-requests') {
                errorMsg.value = 'Email rate limit exceeded. Please try again later.';
            } else {
                throw new Error('Sign up failed.');
            }
        } else {
            successMsg.value = 'Check your email to confirm your account.';
        }
    } catch (error) {
        errorMsg.value = error.message || 'An error occurred during sign up.';
    }
};

const addSampleData = async () => {
    try {
        const sampleData = [
            { email: 'sample1@example.com', password: 'password123' },
            { email: 'sample2@example.com', password: 'pass456word' },
        ];

        const { data, error } = await supabase.from('Test').select("*");

        if (error) {
            throw new Error('Failed to add sample data.');
        }

        console.log('Sample data added successfully:', data);
    } catch (error) {
        console.error(error.message || 'An error occurred while adding sample data.');
    }
};

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

    span {
        text-align: start;
        color: red;
        font-weight: 500;
        font-size: 20px;
        padding-left: 10px;
    }
}
</style>