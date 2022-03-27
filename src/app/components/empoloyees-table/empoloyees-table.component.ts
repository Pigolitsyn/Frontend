import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal/modal.service';
import { CrudService } from '../../services/employees/crud.service';

export interface User {
  id: number,
  department: string,
  fullName: string,
  birthDate: string,
  hireTime: string,
  salary: number,
}

@Component({
  selector: 'app-empoloyees-table',
  templateUrl: './empoloyees-table.component.html',
  styleUrls: ['./empoloyees-table.component.scss']
})
export class EmpoloyeesTableComponent implements OnInit {
  constructor(public crudService: CrudService, public modalService: ModalService) {}
  Users: User[] = [];

  entry!: ViewContainerRef;
  sub!: Subscription;

  ngOnInit(): void {
      this.getUsers();
  }
  getUsers() {
    return this.crudService.getEmployees().subscribe((res) => {
      console.log(res)
      this.Users = res;
    })
  }
  deleteUser(event: any) {
    this.createModal()
  }

  createModal() {
    this.sub = this.modalService
      .openModal(this.entry, 'Are you sure ?', 'click confirm or close')
      .subscribe((v) => {
        console.log("Hello")
      });
  }
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

}


