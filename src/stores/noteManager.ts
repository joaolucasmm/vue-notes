type Note = {
  id: string
  title: string
  subtitle: string
  content: string
  date: number
}

export default class NoteController {
  objects: Note[] = []

  create(title: string, subtitle: string, content: string) {
    const date = Date.now()
    this.objects.push({ id: 'id' + date, title, subtitle, content, date: date })
  }

  view() {
    return this.objects
  }
}
