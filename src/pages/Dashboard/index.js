import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import { Row, Col } from 'antd';

export default class Index extends Component {
	constructor() {
		super();
		this.state = {
			data: [
				{ genre: 'Sports', sold: 275, income: 2300 },
				{ genre: 'Strategy', sold: 115, income: 667 },
				{ genre: 'Action', sold: 120, income: 982 },
				{ genre: 'Shooter', sold: 350, income: 5271 },
				{ genre: 'Other', sold: 150, income: 3710 }
			],
			cols: {
				sold: { alias: '销售量' },
				genre: { alias: '游戏种类' }
			}
		};
	}

	componentDidMount() {
		window.dispatchEvent(new Event('resize'));
	}

	render() {
		const { data, cols } = this.state;

		return (
			<Row>
				<Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
					<Chart forceFit={true} data={data} scale={cols} height={300}>
						<Axis name="genre" title />
						<Axis name="sold" title />
						<Legend position="top" dy={-20} />
						<Tooltip />
						<Geom type="interval" position="genre*sold" color="genre" />
					</Chart>
				</Col>
				<Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
					<Chart forceFit={true} data={data} scale={cols} height={300}>
						<Axis name="genre" title />
						<Axis name="sold" title />
						<Legend position="top" dy={-20} />
						<Tooltip />
						<Geom type="interval" position="genre*sold" color="genre" />
					</Chart>
				</Col>
			</Row>
		);
	}
}
