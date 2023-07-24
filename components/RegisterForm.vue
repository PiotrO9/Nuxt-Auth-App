<template>
    <form @submit.prevent="SignUp">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button type="submit">Sign in</button>
        <span v-if="errorMsg" class="error">
            {{ errorMsg }}
        </span>
        <span v-if="successMsg" class="succes">
            {{ successMsg }}
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
    errorMsg.value = ""
    successMsg.value = ""

    try {
        const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value
        });

        if (error) {
            throw error
        } else {
            successMsg.value = 'Check your email to confirm your account.';
        }
    } catch (error) {
        errorMsg.value = error.message || 'An error occurred during sign up.';
    }
};

</script>

<style scoped lang="scss">
@import "../assets/styles/globalStyles";

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
        background-color: $inputSlateGray;
        color: $inputTextSlateGray;
    }

    button {
        background-color: $buttonGreen;
        box-sizing: border-box;
        color: white;
        font-weight: 500;
        cursor: pointer;
    }

    span {
        text-align: start;
        font-weight: 500;
        font-size: 20px;
        padding-left: 10px;

        &.error {
            color: $errorRed;
        }

        &.succes {
            color: $buttonGreen;
        }
    }
}
</style>