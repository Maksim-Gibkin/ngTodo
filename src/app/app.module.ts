import { NgModule } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
