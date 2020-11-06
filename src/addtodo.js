import React, { Component } from "react";
import M from "materialize-css";

class AddTodo extends Component {
	state = {
		content: "",
	};

	handleChange = (e) => {
		this.setState({
			content: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);

		if (this.state.content !== "") {
			this.props.addTodo(this.state);
			this.setState({
				content: "",
			});
		} else {
			M.toast({
				html: "<span>To-Do can't be empty</span>",
				classes: "rounded",
				displayLength: 1000,
			});
		}
	};

	render() {
		return (
			<div>
				<br></br>
				<form
					onSubmit={this.handleSubmit}
					style={{ display: "flex", justifyContent: "center" }}
				>
					<div className="input-field" style={{ width: "80%" }}>
						<i className="material-icons prefix">mode_edit</i>
						<input
							id="icon_prefix"
							type="text"
							onChange={this.handleChange}
							value={this.state.content}
						/>
						<label htmlFor="icon_prefix">New Todo</label>
					</div>
					<button className="btn-floating btn-large waves-light red">
						<i className="material-icons">add</i>
					</button>
				</form>
			</div>
		);
	}
}

export default AddTodo;
