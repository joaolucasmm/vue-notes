<script setup lang="ts">
import NoteController from '@/stores/noteManager'

const noteController = new NoteController()
noteController.create('Titulo', 'Subtítulo', 'Conteúdo')
noteController.create('Titulo', 'Subtítulo', 'Conteúdo')
noteController.create('Titulo 2', 'Subtítulo 2', 'Conteúdo 2')
noteController.create('Titulo 3', 'Subtítulo 3', 'Conteúdo 3')

const notes = noteController.view()
console.log(notes)
</script>
<template>
  <section class="flex flex-col gap-3">
    <div v-for="note in notes" :key="note.id" class="bg-violet-500 rounded-e-lg my-3">
      <h1>{{ note.title }}</h1>
      <h2>{{ note.subtitle }}</h2>
    </div>
  </section>
</template>
<style lang="scss"></style>
