import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { TypeUser } from './type-user';

@Injectable()
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/userList';
  }

   public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
   }

   public getTypes(): Observable<TypeUser[]> {
    return this.http.get<TypeUser[]>(`${this.usersUrl}/typeUserList`);
   }

   public save(user: User) {
    return this.http.post<User>(this.usersUrl, user, { responseType: 'text' as 'json'});
   }

   public checkIfEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.usersUrl}/exists/${email}`);
  }

   public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
   }

   public deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.usersUrl}/${id}`);
   }

}
