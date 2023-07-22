<template>
    <h1>Notes</h1>
    <span>
        User email:
        {{ user?.email }}
    </span>
    <ul v-if="Notes?.length > 0">
        <li v-for="(note, index) in Notes" :key="index">
            <span>
                {{ note.Name }}
            </span>
            <span>
                {{ note.Content }}
            </span>
        </li>
    </ul>
    <span v-else>
        You do not have notes
    </span>
    <button @click="logout">
        Logout
    </button>
</template>

<script setup lang="ts">
import type Note from "@/types/Note"
import { v4 as uuidv4 } from 'uuid';

definePageMeta({
    middleware: ["auth"],
})

const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const Notes = ref<Note[] | null>()

async function insertNote(note: Note): Promise<void> {
    const { error } = await client.from('Notes').insert([note]);

    if (error) {
        console.error('Error inserting note:', error);
        return;
    }
}

onMounted(async () => {
    const newNote: Note = {
        id: uuidv4(),
        Email: user.value?.email || "",
        Content: "Test content",
        Name: "Test name",
    }

    const { data, error } = await client.from("Notes").select("*").eq('Email', user.value?.email)
    Notes.value = data
    console.log(data)

    watchEffect(() => {
        if (!user.value) {
            navigateTo('/')
        }
    })
})

const logout = async () => {
    try {
        const { error } = await client.auth.signOut()
        if (error) throw error
    } catch (error) {

    }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap");

* {
    font-family: 'Inter', sans-serif;
}

h1 {
    color: white;
}

span {
    color: white;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
    list-style-type: none;

    li {
        width: 400px;
        height: 100px;
        display: flex;
        flex-direction: column;
        padding: 6px;
        border-radius: 8px;
        color: white;
        background-color: grey;

        span {
            &:nth-child(1) {
                font-size: 20px;
                font-weight: bold;
            }

            &:nth-child(2) {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
                font-size: 14px;
                font-weight: 400;
            }
        }
    }
}

button {
    height: 50px;
    width: 200px;
    margin-top: 10px;
    background-color: #01bf5b;
    color: white;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
</style>