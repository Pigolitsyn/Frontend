import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";

import {CrudService} from '../../services/employees/crud.service';
import {EmployeeDto} from "../../interfaces/Employee";

@Component({
  selector: 'app-employee-create-form',
  templateUrl: './employee-create-form.component.html',
})
export class EmployeeCreateFormComponent {

  employeeForm = this.formBuilder.group({
    fullName: '',
    salary: '',
    birthDate: {
      day: '',
      month: '',
      year: '',
    },
    hireDate: {
      day: '',
      month: '',
      year: '',
    },
    department: '',
  })

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
  ) {
  }

  onSubmit() {
    let employee: EmployeeDto = {
      birthDate: `${this.employeeForm.value.birthDate.year}-${this.employeeForm.value.birthDate.month}-${this.employeeForm.value.birthDate.day}`,
      hireTime: `${this.employeeForm.value.hireDate.year}-${this.employeeForm.value.hireDate.month}-${this.employeeForm.value.hireDate.day}`,
      department: this.employeeForm.value.department,
      fullName: this.employeeForm.value.fullName,
      salary: this.employeeForm.value.salary,
    }
    this.crudService.createEmployee(employee).subscribe(employee => {
      console.log(employee);
    })
    this.employeeForm.reset();
  }
}
