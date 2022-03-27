import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../components/empoloyees-table/empoloyees-table.component';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  endpoint = 'https://localhost:5001';
  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint + "/employees/getall")
  }
}
