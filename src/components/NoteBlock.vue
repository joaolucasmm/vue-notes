<script setup lang="ts">
import { noteController } from '@/stores/noteManager';
import TrashIcon from './icons/TrashIcon.vue';

noteController.create('Titulo', 'Subtítulo', 'Conteúdo');
noteController.create('Titulo', 'Subtítulo', 'Conteúdo');
noteController.create('Titulo 2', 'Subtítulo 2', 'Conteúdo 2');
noteController.create('Titulo 3', 'Subtítulo 3', 'Conteúdo 3');

const notes = noteController.view();
console.log(notes);
</script>
<template>
    <section class="flex flex-col gap-3 bg-violet-100">
        <div
            v-for="note in notes"
            :key="note.id"
            class="flex flex-col bg-violet-300 rounded-sm my-3 min-w-50 text-black"
        >
            <h1 class="text-lg font-bold text-center">{{ note.title }}</h1>
            <h2>{{ note.subtitle }}</h2>
            <p>{{ note.content }}</p>
            <button
                class="p-0.1 self-end hover:scale-110 active:scale-60"
                @click="noteController.delete(note.id)"
            >
                <TrashIcon class="w-8 h-8" />
            </button>
        </div>
    </section>
</template>
<style lang="scss"></style>
