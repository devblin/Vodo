import React, { Component } from "react";
import Todos from "./todo";
import AddTodo from "./addtodo";

class App extends Component {
	state = {
		todos: []
	};

	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});

		this.setState({
			todos //if key and value both have same length
		});
	};

	addTodo = todo => {
		todo.id = Date.now();
		let todos = [...this.state.todos, todo];
		this.setState({
			todos
		});
	};

	render() {
		return (
			<div className="todo-app container" style={{ maxWidth: "700px" }}>
				<h1 className="center blue-text">Vodo</h1>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
