import {Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import { CrudService } from '../../services/employees/crud.service';
import { Employee } from "../../interfaces/Employee";

export type SortColumn = keyof Employee | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}



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

  deleteEmployee($event: any) {
    this.crudService.deleteEmployee($event.target.value).subscribe(() => this.updateEmpolyees(), (error) => {
      console.log(error)
      this.updateEmpolyees() })
}}
