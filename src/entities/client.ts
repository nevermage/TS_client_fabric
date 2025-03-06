export class Client {
    id: number;
    username: string;
    age: number;
    email: string;

    constructor(id: number, username: string, age: number, email: string) {
        this.id = id;
        this.username = username;
        this.age = age;
        this.email = email;
    }
}