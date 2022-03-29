import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/employees/crud.service';

@Component({
  selector: 'app-employee-delete-confirm-form',
  templateUrl: './employee-delete-confirm-form.component.html',
})
export class EmployeeDeleteConfirmFormComponent implements OnInit {
  @Input() employeeId!: number;

  onSubmit() {
    
  }
  

  constructor(crudService: CrudService) { }

  
  ngOnInit(): void {
  }

}
