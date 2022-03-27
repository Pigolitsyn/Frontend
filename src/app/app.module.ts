import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { EmpoloyeesTableComponent } from './components/empoloyees-table/empoloyees-table.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

import { ModalComponent } from './components/modal/modal.component';
import { AComponent } from './components/a/a.component';

const routes: Routes = [
  { path: "employees", component: EmpoloyeesTableComponent },
  { path: "home", component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpoloyeesTableComponent,
    HomeComponent,
    ModalComponent,
    AComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AComponent]
})

export class AppModule { }
