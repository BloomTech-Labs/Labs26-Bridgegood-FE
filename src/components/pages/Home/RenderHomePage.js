import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Header from '../../common/Header/index';
import Footer from '../../common/Footer/Footer';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <Header />
      <p>
        <Button type="secondary">
          <Link to="/make-res-amount">Make a reservation</Link>
        </Button>
      </p>
      <p>
        <Button type="primary" onClick={() => authService.logout()}>
          Logout
        </Button>
      </p>
      <Footer />
    </div>
  );
}
export default RenderHomePage;
