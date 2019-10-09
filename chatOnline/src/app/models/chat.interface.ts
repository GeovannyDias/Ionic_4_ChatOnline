export interface ChatI {
    description: string;
    name: string;
    id: string;
    img: string;
}

export interface MessageI {
    content: string;
    type: string;
    date: Date;
}