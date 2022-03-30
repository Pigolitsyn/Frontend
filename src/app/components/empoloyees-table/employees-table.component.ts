import {Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/employees/crud.service';
import { Employee } from "../../interfaces/Employee";


@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
})
export class EmployeesTableComponent implements OnInit {
  constructor(public crudService: CrudService) {}
  Employees: Employee[] = [];

  ngOnInit(): void {
      this.updateEmpolyees();
  }

  updateEmpolyees() {
    return this.crudService.getEmployees().subscribe((res) => {
      console.log(res)
      this.Employees = res;
    })
  }

  employees = this.Employees

  
}
