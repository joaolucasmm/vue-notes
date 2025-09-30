import { ref, type Ref } from 'vue';

type Note = {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    createdAt: string;
};

class NoteController {
    objects: Ref<Note[]> = ref([]);

    create(title: string, subtitle: string, content: string) {
        const now = new Date();
        const time = now.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const date = `${day}/${month}/${year} - ${time}`;
        this.objects.value.push({
            id: 'id' + date + Math.random().toString(16).slice(2),
            title,
            subtitle,
            content,
            createdAt: date,
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
