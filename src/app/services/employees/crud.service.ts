import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee, EmployeeDto} from "../../interfaces/Employee";


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  headersJson = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

  endpoint = 'https://localhost:5001';
  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.endpoint + "/employees/getall")
  }

  createEmployee(employee: EmployeeDto): Observable<Employee> {
    return this.httpClient.post<Employee>(this.endpoint + "/employees/create",
    {
      BirthDate: employee.birthDate.toString(),
      HireTime: employee.hireTime.toString(),
      FullName: employee.fullName,
      Department: employee.department,
      Salary: employee.salary
    }, { 'headers': this.headersJson })
  }


  deleteEmployee(id: number) {
    console.log(id)
    return this.httpClient.post(this.endpoint + "/employees/delete?id=" + id, null, {
      responseType: "text",
    });
  }
}
