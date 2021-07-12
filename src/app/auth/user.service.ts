import { Injectable } from '@angular/core';

export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    fav: string;

}

@Injectable()

export class UserService {

    static dummyUserList: Array<User> = [{
        id: 1,
        name: "John",
        surname: "Smith",
        email: "john@test.com",
        password: "john123",
        address: "XX Street 1",
        phone: "12345",
        fav: "sushi"
    }]

    currentUser: User = UserService.dummyUserList[0];

    getUserName(user: User) : string {
        return user.email;
    }

    getUserById(id: number) : User {
        var foundUser: User;
        UserService.dummyUserList.forEach(user =>
        {
            if (user.id == id)
            {
                foundUser = user;
            }

        });

        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(userEmail: string) : User {
        return UserService.dummyUserList.find(userToFind => userToFind.email == userEmail);
        return this.currentUser;
    }

    isPasswordCorrect(userEmail: string, password: string) : boolean {
        return UserService.dummyUserList.find(userToFind =>
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    }

    registerUser(name: string, surname: string, email: string, password: string, address: string, phone: string, fav: string) : User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user =>
        {
            if (maxId < user.id)
            {
                maxId = user.id;
            }   
        });

        var id = ++maxId;
        var user: User = {id, name, surname, email, password, address, phone, fav};

        UserService.dummyUserList.push(user);

        this.currentUser = user;
        console.log(user);
        return user;
    }

}