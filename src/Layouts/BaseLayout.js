import React from 'react';
import { Route, Link, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon, LocaleProvider, Table, Tabs, Collapse, Row, Col, Avatar, Affix, Spin } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import HomePage from '../Pages/HomePage';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    } 
    render() {
        return (
            <LocaleProvider locale={enUS}>
                <Layout style={{ minHeight: "100vh" }}>
                    <Header style={{ height: "48px" }}>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '48px' }}>
                            <Menu.Item key="1">
                                <Link to="/">
                                    <Icon type="home" />
                                    <span>Dashboard</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div style={{ background: '#fff', padding: 24 }}>
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: "86vh" }}>
                                <Spin tip="Loading..." size="large" delay={200} spinning={this.props.currentAjaxCalls > 0}>
                                    <Switch>
                                        <Route exact path='/' component={HomePage} />
                                    </Switch>
                                </Spin>
                            </Content>
                        </div>
                    </Content>
                </Layout>
            </LocaleProvider>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        currentAjaxCalls: state.ajaxCallsInProgress
    }
}

export default withRouter(connect(mapStateToProps)(BaseLayout));