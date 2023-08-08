import { User } from "./UserClass";

export class Group {
    
    name: string
    description: string
    users: User[];
    image?: string;

    constructor(name : string, description : string, users? : Array<User>, image? : string | undefined) {
        this.name = name;
        this.description = description;
        this.users = users || [];
        this.image = image;
    }

    addUser(user: User) {
        if(this.users.includes(user)) return
        this.users.push(user);
        user.groups.push(this);
    }

    deleteUser(user: User) {
        if(!this.users.includes(user)) return
        this.users = this.users.filter(u => u !== user);
        user.groups = user.groups.filter(g => g !== this);
    }
}