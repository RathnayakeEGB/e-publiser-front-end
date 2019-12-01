import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../components/model/user';
import { Path_url } from 'src/environments/path';



@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(Path_url+`/users`);
    }

    register(user: User) {
        return this.http.post(Path_url+`/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(Path_url+`/users/${id}`);
    }
}
