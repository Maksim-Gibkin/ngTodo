import { Injectable } from '@angular/core';


export type dataType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private data: dataType[] = [];
      
  getData(): dataType[] {
    return this.data;
  }
  add(s: string): void{
    let i = 5
      this.data.push({
        userId: i++,
        id: i++,
        title: s,
        completed: false,
      });
  }
  remove(index: number): void{
    this.data.splice(index,1)
  }
  constructor() { }

  getTodoss():void {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.data = json.slice(0, 5))
  }
}
