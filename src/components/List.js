import React, { Component } from "react";
import axios from "axios";

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
		axios({
			method: 'post',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Expose-Headers': 'action-descriptor-id,notification-mode',
				'action-descriptor-id1': '5b6a81431088ec7732cb8b7'
			},
			url: 'https://api2.squadintouch.com/i/login',
			data: {
				email: "reference@squadintouch.com",
				password: "reference"
			}
		})
		.then(res => {
			console.log(res)
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