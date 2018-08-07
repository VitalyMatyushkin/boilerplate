import React, { Component } from "react";

import '../styles/List.scss';

export class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			data: []
		};
	}

	componentDidMount() {
		fetch('https://facebook.github.io/react-native/movies.json')
		.then(respons => respons.json())
		.then(result => {
			this.state({isLoading: false});
			console.log(result);
		});
	}

	render() {
		const { isLoading } = this.state;
		return (
			<div>
				{
					isLoading ?
					<div className="b-loading">Loading</div>
					:
					<div>OK</div>
				}
			</div>
		);
	}
}