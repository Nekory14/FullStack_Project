import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeUser } from './type-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeUserService {

  private typeUsersUrl: string;

  constructor(private http: HttpClient) {
    this.typeUsersUrl = 'http://localhost:8080/typeUserList';
   }

   public findAll(): Observable<TypeUser[]> {
    return this.http.get<TypeUser[]>(this.typeUsersUrl);
   }

   public save(typeUser: TypeUser) {
    return this.http.post<TypeUser>(this.typeUsersUrl, typeUser, { responseType: 'text' as 'json'});
   }

   public checkIfTypeUserExists(type: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.typeUsersUrl}/exists/${type}`);
  }
   
   public getTypeUserById(id: number): Observable<TypeUser> {
    return this.http.get<TypeUser>(`${this.typeUsersUrl}/${id}`);
   }

   public deleteTypeUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.typeUsersUrl}/${id}`);
   }

}
