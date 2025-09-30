import { ref, type Ref } from 'vue';

type Note = {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    date: number;
};

class NoteController {
    objects: Ref<Note[]> = ref([]);

    create(title: string, subtitle: string, content: string) {
        const date = Date.now();
        this.objects.value.push({
            id: 'id' + date + Math.random().toString(16).slice(2),
            title,
            subtitle,
            content,
            date: date,
        });
    }

    delete(id: string) {
        console.log(id);
        this.objects.value = this.objects.value.filter((note) => note.id !== id);
        console.log(this.objects.value);
    }

    view() {
        return this.objects;
    }
}

export const noteController = new NoteController();
