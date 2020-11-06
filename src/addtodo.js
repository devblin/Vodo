import React, { Component } from "react";

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
			alert("To-Do can't be empty");
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
						<label for="icon_prefix">New Todo</label>
					</div>
					<button class="btn-floating btn-large waves-effect waves-light red">
						<i class="material-icons">add</i>
					</button>
				</form>
			</div>
		);
	}
}

export default AddTodo;
