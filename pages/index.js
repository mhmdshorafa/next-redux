import React from 'react'
import {connect} from 'react-redux'
import Head from 'next/head';
import {startClock, serverRenderClock} from '../actions/index'
import Clock from '../containers/clockPage'
import { DatePicker, Col, Row, Menu, Layout, Icon} from 'antd';
const {Header, Footer, Sider, Content} = Layout;
const { SubMenu } = Menu;

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
      <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='../static/style.css' />
     </Head>
    <Layout>
     <Header>
       <Menu
       theme="dark"
       mode="horizontal"
       defaultSelectedKeys={['2']}
       style={{ lineHeight: '64px' }}
       >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
       </Menu>
     </Header>
     <Layout>
     <Sider  width={200} style={{ background: '#fff' }} >
     <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
     </Sider>
     <Content className='Content'>
      <Row type='flex' justify='space-around'>
        <Col className='Col' span={9} >
          <DatePicker/>
        </Col>
        <Col className='Col' span={9}>
          <Clock/>
        </Col>
      </Row>
     </Content>
    </Layout>
      <Footer className='footer'>hello from footer</Footer>
    </Layout>
  </div>
    )
  }
}

export default connect()(Index)
