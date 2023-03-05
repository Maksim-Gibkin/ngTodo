import { Component, DoCheck } from '@angular/core';
import { dataType, TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [TodoService],
})
export class ListComponent implements DoCheck {
  ngDoCheck() {
    this.todos = this.dataService.getData();
    console.log(this.todos, '29229')
  }

  todos: dataType[];
  text: string;

  constructor(private dataService: TodoService){
    this.todos = []
    this.text = ""
  }

  addTask(): void {
    this.dataService.add(this.text.trim())
    this.text = ""
  }

  ngOnInit(){
    this.dataService.getTodoss()
  }
}
