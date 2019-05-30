import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label } from 'bizcharts';
import { Row, Col, Select, Input, Button } from 'antd';
import DataSet from '@antv/data-set';
const { Option } = Select;

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
				sold: { alias: 'sold' },
				genre: { alias: 'genre' }
			},
			selectedGenre: 'Sports',
			soldValue: ''
		};
	}

	componentDidMount() {
		window.dispatchEvent(new Event('resize'));
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { soldValue, selectedGenre } = this.state;
		const { data } = this.state;
		const index = data.findIndex((d) => d.genre === selectedGenre);
		console.log('nganu', data[index]);
		const newItems = [ ...this.state.data ];
		newItems[index].sold += parseInt(soldValue);
		this.setState({ data: newItems });
		console.log('index', data);
	};

	onChange = (e) => this.setState({ soldValue: e.target.value });
	onSelected = (e) => this.setState({ selectedGenre: e });

	render() {
		const { data, cols } = this.state;

		const ds = new DataSet();
		const dv = ds.createView().source(data);
		dv.source(data).transform({
			type: 'sort',
			callback(a, b) {
				return a.sold - b.sold > 0;
			}
		});

		return (
			<Row style={{ marginTop: 32 }}>
				<Col span={12} xs={24} sm={24} md={24} lg={24} xl={24}>
					<form onSubmit={this.handleSubmit}>
						<span>
							Add to {' '}
							<Select defaultValue="Sports" style={{ width: '10%' }} onChange={this.onSelected}>
								<Option value="Sports">Sports</Option>
								<Option value="Strategy">Strategy</Option>
								<Option value="Action">Action</Option>
								<Option value="Shooter">Shooter</Option>
								<Option value="Other">Other</Option>
							</Select>{' '}
							Sold Value <Input style={{ width: '10%' }} placeholder="300" onChange={this.onChange} /> {' '}
							<Button type="primary" htmlType="submit">
								Apply
							</Button>
						</span>
					</form>
				</Col>
				<Col span={12} xs={24} sm={24} md={24} lg={24} xl={24}>
					<Chart  height={500} data={dv} scale={cols} forceFit>
						<Coord type="theta" radius={0.75} />
						<Axis name="sold" />
						<Legend position="right" offsetY={-200 / 2 + 120} offsetX={-50} />
						<Tooltip
							showTitle={false}
							itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
						/>
						<Geom
							type="intervalStack"
							position="sold"
							color="genre"
							tooltip={[
								'genre*sold',
								(genre, sold) => {
									sold = sold * 100 + '%';
									return {
										name: genre,
										value: sold
									};
								}
							]}
							style={{
								lineWidth: 1,
								stroke: '#fff'
							}}
						>
							<Label
								content="sold"
								formatter={(val, genre) => {
									return genre.point.genre + ': ' + val;
								}}
							/>
						</Geom>
					</Chart>
				</Col>
				<Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
					<Chart  forceFit={true} data={data} scale={cols} height={300}>
						<Axis name="genre" title />
						<Axis name="sold" title />
						<Legend position="top" dy={-20} />
						<Tooltip />
						<Geom type="interval" position="genre*sold" color="genre" />
					</Chart>
				</Col>
				<Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
					<Chart  height={400} data={dv} forceFit>
						<Coord transpose />
						<Axis
							name="genre"
							label={{
								offset: 12
							}}
						/>
						<Axis name="sold" />
						<Tooltip />
						<Geom type="interval" position="genre*sold" color="genre" />
					</Chart>
				</Col>
			</Row>
		);
	}
}
