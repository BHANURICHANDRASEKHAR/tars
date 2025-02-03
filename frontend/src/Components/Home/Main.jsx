import { Layout, theme } from 'antd';
import { useState } from 'react';
import LeftBar from './LeftBar';
import RightBar from '../RightComponent/Main'
const { Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={300}
        style={{
          background: colorBgContainer,
          padding: '10px',
        }}
      >
        <LeftBar collapsed={collapsed} /> 
      </Sider>
      <Layout>
        <Content
          style={{
            padding: 0,
            margin: 0,
            minHeight: 100,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        <RightBar/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
