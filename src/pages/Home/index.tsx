import { Button, Result } from 'antd';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { StoreHome } from 'src/store';
import { SwitchView } from 'src/router';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';

const Wrap: React.FC = () => {
  const history = useHistory();
  const [stateStoreHome, setStateStoreHome] = useRecoilState(StoreHome);
  return (
    <section className="ui-vw-100 ui-vh-100 flex-col ui-ov-h">
      <Header />
      <div className="flex just-center align-center">
        <Result
          icon={<SmileOutlined />}
          title="Hello Word！"
          extra={
            <React.Fragment>
              <Button
                type="primary"
                onClick={() => {
                  history.push('/');
                }}
              >
                首页
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  history.push('/home/menu');
                }}
              >
                菜单
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  history.push('/home/nav');
                }}
              >
                导航
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  history.push('/home/opts');
                }}
              >
                操作
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  setStateStoreHome({ ...stateStoreHome, age: stateStoreHome.age + 1, name: 'asd' });
                }}
              >
                加一 {stateStoreHome.age}
              </Button>
            </React.Fragment>
          }
        />
      </div>
      <div className="flex-1 flex just-center">
        <SwitchView name="Home" />
      </div>
      <Footer />
    </section>
  );
};

export default Wrap;
