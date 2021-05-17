import React from "react";

const Todos = props => {
	const todoList = props.todos.length ? (
		props.todos.map(todo => {
			return (
				<div
					onClick={() => props.deleteTodo(todo.id)}
					className="collection-item"
					key={todo.id}
				>
					<h6>{todo.content}</h6>
				</div>
			);
		})
	) : (
		<p className="center red-text">
			<h5>No Todos</h5>
		</p>
	);

	return <div className="todos collection">{todoList}</div>;
};

export default Todos;
