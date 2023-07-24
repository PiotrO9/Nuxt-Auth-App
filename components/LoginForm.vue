<template>
    <form @submit.prevent="signIn">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button type="submit">Log in</button>
        <span v-if="errorMsg">
            {{ errorMsg }}
        </span>
    </form>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const router = useRouter()

const email = ref<string>("")
const password = ref<string>("")
const errorMsg = ref<string | null>(null)
const user = useSupabaseUser()

const signIn = async () => {
    try {
        const { error } = await client.auth.signInWithPassword({
            email: email.value,
            password: password.value
        });
        if (error) throw error;
        router.push("/notes")
    }
    catch (error) {
        errorMsg.value = error.message
    }
}

onMounted(() => {
    watchEffect(() => {
        if (user.value) {
            navigateTo('/notes')
        }
    })
})

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
        color: $errorRed;
    }
}
</style>