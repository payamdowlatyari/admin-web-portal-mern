import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'Cost',
		'Environment',
		'Society'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
			'#FF6384',
			'#4BC0C0',
			'#FFCE56'
		],
		hoverBackgroundColor: [
			'#FF6384',
			'#4BC0C0',
			'#FFCE56'
		]
	}]
};

class DoughnutExample extends Component {

	render() {
		return (
			<div>
				<h2>Optimization Preference</h2>
				<hr></hr>
				<Doughnut data={data} />

			</div>
		);
	}
}
export default DoughnutExample;