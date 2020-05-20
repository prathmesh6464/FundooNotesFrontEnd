export class GetNotesDto {
    title;
    description;
    isTrash;
    isArchive;
    isPined;
    reminderDateTime;
    constructor(title: String, description: String, isTrash: boolean, isArchive: boolean, isPined: boolean, reminderDataTime: String) {
        this.title = title;
        this.description = description;
        this.isTrash = isTrash;
        this.isArchive = isArchive;
        this.isPined = isPined;
        this.reminderDateTime = reminderDataTime;
    }
} 