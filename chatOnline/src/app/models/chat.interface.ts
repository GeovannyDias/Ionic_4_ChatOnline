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


export interface DataI {
    id?: string;
    name: string;
    lastname: string;
    phone: string;
    mail: string;
    pass: string;
    cpass: string;
}