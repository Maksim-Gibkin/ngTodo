import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() todo: any
  @Input() index: any

  isEdit: boolean = false
  constructor(private dataService: TodoService){}
  
  removeTask(i: number):void {
    this.dataService.remove(i)
  }
}
