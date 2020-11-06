import React from "react";

const Todos = (props) => {
	const todoList = props.todos.length ? (
		props.todos.map((todo) => {
			return (
				<div
					onClick={() => props.deleteTodo(todo.id)}
					className="collection-item"
					key={todo.id}
				>
					<span>{todo.content}</span>
				</div>
			);
		})
	) : (
		<p className="center red-text">No Todos</p>
	);

	return <div className="todos collection">{todoList}</div>;
};

export default Todos;
