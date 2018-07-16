import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import Home from '../containers/homePage';
import { Col, Row, Menu, Layout } from 'antd';
const { Header, Footer, Content } = Layout;

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) { // eslint-disable-line
    //const isServer = !!req;

    return {};
  }

  componentDidMount () {
    const { dispatch } = this.props; // eslint-disable-line
  }

  componentWillUnmount () {

  }

  render () {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='../static/antd.css' />
          <link rel='stylesheet' href='../static/style.css' />
          <link rel='stylesheet' href='//cdn.quilljs.com/1.2.6/quill.snow.css'/>
        </Head>
        <Layout>
          <Header>
            <Menu
              theme='dark'
              mode='horizontal'
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key='1'>Home</Menu.Item>
              <Menu.Item key='2'>How it works</Menu.Item>
              <Menu.Item key='3'>About us</Menu.Item>
            </Menu>
          </Header>
          <div className='content'>
            <Content>
              <Row type='flex' justify='space-around'>
                <Col span={20}>
                  <Home/>
                </Col>
              </Row>
            </Content>
          </div>
          <div>
            <Footer className='footer'>hello from footer</Footer>
          </div>
        </Layout>
      </div>
    );
  }
}

export default connect()(Index);
