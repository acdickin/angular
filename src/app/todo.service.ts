import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable()
export class TodoService extends Init{

  constructor() { 
  	super();
  		console.log('todoService initaliazed')
  		this.load();
  }
  //gets data from localStorage
  getTodos(){
  	var todos = JSON.parse(localStorage.getItem('todos'));
  	return todos;
  }
  //adds item to localStorage
  addTodo(newTodo){
  	var todos = JSON.parse(localStorage.getItem('todos'));
  	//add new todo
  	todos.push(newTodo);
  	//set new
  	localStorage.setItem('todos',JSON.stringify(todos));
  }
  //removes item from localStorage
  deleteTodo(todoText){
  	var todos = JSON.parse(localStorage.getItem('todos'));
  	for(var i = 0; i < todos.length; i++){
  		if(todos[i].text == todoText){
  			todos.splice(i,1);
  		}
  	}
  	localStorage.setItem('todos',JSON.stringify(todos));
	}

  updateTodo(oldText, newText) {
    var todos = JSON.parse(localStorage.getItem('todos'));

    for (var i = 0; i < todos.length; i++) {
      if (todos[i].text == oldText) {
          todos[i].text = newText;
      }
    }
    localStorage.setItem('todos',JSON.stringify(todos));
  }
}
