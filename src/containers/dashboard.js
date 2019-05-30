import React, { Component } from 'react';
import { Layout } from 'antd';
import Sider from '../components/Sider';
import DashboardPage from '../pages/Dashboard';

const { Header, Content, Footer } = Layout;

export default class Dashboard extends Component {
	render() {
		return (
			<Layout>
				<Sider />
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }} />
					<Content style={{ margin: '24px 16px 0px 16px', padding: 16, background: '#fff', minHeight: 560 }}>
						<DashboardPage />
					</Content>
					<Footer style={{ textAlign: 'center' }} />
				</Layout>
			</Layout>
		);
	}
}
