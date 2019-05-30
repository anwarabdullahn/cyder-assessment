import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './_sider.scss';
const { Sider } = Layout;

export default function index() {
	return (
		<Sider breakpoint="lg" collapsedWidth="0" style={{ background: '#fff' }}>
			<div className="logo" />
			<Menu theme="light" mode="inline" defaultSelectedKeys={[ '1' ]}>
				<Menu.Item key="1">
					<Icon type="dashboard" />
					<span className="nav-text">Dashboard</span>
				</Menu.Item>
			</Menu>
		</Sider>
	);
}
