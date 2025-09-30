import { noteController } from '@/stores/noteManager';
import mockData from './mockData.json';

mockData.notes.forEach((note) => {
    noteController.create(note.title, note.subtitle, note.content);
});
