export class AddNoteDto {
    title;
    description;
    constructor(title: String, description: String) {
        this.title = title;
        this.description = description;
    }
} 