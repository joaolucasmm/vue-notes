<script setup lang="ts">
import { noteController } from '@/stores/noteManager';
function handleSubmit() {
    const titleInput = (document.getElementById('title') as HTMLInputElement).value;
    const subtitleInput = (document.getElementById('subtitle') as HTMLInputElement).value;
    const contentInput = (document.getElementById('content') as HTMLInputElement).value;
    noteController.create(titleInput, subtitleInput, contentInput);
    console.log(noteController.view());
}
</script>

<template>
    <section class="flex flex-col gap-3">
        <form class="max-w-sm mx-auto" @submit.prevent="handleSubmit">
            <div class="mb-5">
                <label
                    for="title"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Title for your note</label
                >
                <input
                    type="text"
                    id="title"
                    class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                    placeholder="Title"
                    required
                />
            </div>
            <div class="mb-5">
                <label
                    for="subtitle"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Subtitle for your note</label
                >
                <input
                    type="text"
                    id="subtitle"
                    class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                    required
                />
            </div>
            <label
                for="content"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your note</label
            >
            <textarea
                id="content"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a your note here..."
            ></textarea>
            <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
            >
                Submit
            </button>
        </form>
    </section>
</template>
