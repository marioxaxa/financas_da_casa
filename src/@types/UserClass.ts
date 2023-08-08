import { Group } from "./GroupClass";

export class User {
    id: number;
    username: string;
    password: string;
    image?: string;
    friends: User[];
    balance: number;
    groups: Group[];

    constructor(id: number, username: string, password: string, image?: string, balance = 0) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.image = image;
        this.friends = [];
        this.balance = balance;
        this.groups = [];
    }

    addFriend(friend: User) {
        if(this.friends.includes(friend)) return
        this.friends.push(friend);
    }

    deleteFriend(friend: User) {
        if(!this.friends.includes(friend)) return
        this.friends = this.friends.filter(f => f.id !== friend.id);
    }

    changeBalance(amount: number) {
        this.balance += amount;
    }


}