<script setup lang="ts">
import { noteController } from '@/stores/noteManager';
import TrashIcon from './icons/TrashIcon.vue';

const notes = noteController.view();
console.log(notes.value);

const startDrag = (event: DragEvent, item: { id: string }) => {
    event.dataTransfer!.dropEffect = 'move';
    event.dataTransfer!.effectAllowed = 'move';
    event.dataTransfer!.setData('itemID', item.id);
};

const onDrop = (event: DragEvent, position: number) => {
    const itemID = event.dataTransfer!.getData('itemID');
    const item = notes.value.find((note) => note.id === itemID);
    const index = notes.value.findIndex((note) => note.id === itemID);
    if (item && index !== -1) {
        notes.value.splice(index, 1);
        notes.value.splice(position, 0, item);
    }
};
</script>
<template>
    <section class="flex flex-col gap-3 bg-violet-100">
        <div
            v-for="note in notes"
            :key="note.id"
            class="flex flex-col bg-violet-300 rounded-sm my-3 min-w-50 text-black"
            draggable="true"
            @dragstart="startDrag($event, note)"
            @drop="onDrop($event, notes.indexOf(note))"
            @dragenter.prevent
            @dragover.prevent
        >
            <h1 class="text-lg font-bold text-center">{{ note.title }}</h1>
            <h2>{{ note.subtitle }}</h2>
            <p>{{ note.content }}</p>
            <span>{{ note.createdAt }}</span>
            <button
                class="p-0.1 self-end transition duration-300 easy-in-out hover:scale-120 active:scale-70"
                @click="noteController.delete(note.id)"
            >
                <TrashIcon class="w-8 h-8 scale-90" />
            </button>
        </div>
    </section>
</template>
<style lang="scss"></style>
