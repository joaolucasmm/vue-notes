<script setup lang="ts">
import { noteController } from '@/stores/noteManager';

noteController.create('Titulo', 'Subtítulo', 'Conteúdo');
noteController.create('Titulo', 'Subtítulo', 'Conteúdo');
noteController.create('Titulo 2', 'Subtítulo 2', 'Conteúdo 2');
noteController.create('Titulo 3', 'Subtítulo 3', 'Conteúdo 3');

const notes = noteController.view();
console.log(notes);
</script>
<template>
    <section class="flex flex-col gap-3">
        <div v-for="note in notes" :key="note.id" class="bg-violet-500 rounded-e-lg my-3">
            <h1>{{ note.title }}</h1>
            <h2>{{ note.subtitle }}</h2>
            <button
                class="bg-red-400 text-white rounded-lg p-2 hover:bg-red-500 focus:outline-offset-2 focus:outline-red-600"
                @click="noteController.delete(note.id)"
            >
                delete
            </button>
        </div>
    </section>
</template>
<style lang="scss"></style>
