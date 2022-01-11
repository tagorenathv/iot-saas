import './custom_antd.css';
import './App.css';
import SideLayout from './custom_layout.js';
import * as Realm from "realm-web";
import LoginForm from './login_form';
import { Row, Col } from 'antd';
import { useState } from 'react';
import RegisterForm from './register_form';

export const app = new Realm.App({ id: "application-0-rgpfa" });

function App() {

  var pageName;
  if(sessionStorage.getItem('userData') !== undefined && sessionStorage.getItem('userData') !== null) {
    pageName = 'user';
  }else{
    pageName = 'login';
  }

  const [page, setPage] = useState(pageName);
  

  const togglePage = (value) => {
    setPage(value);
  }

  return (
    <>
      {
        page === 'login' && <LoginForm togglePage={togglePage} />
      }
      {
        page === 'register' && <RegisterForm togglePage={togglePage} />
      }
      {
        page === 'user' && <SideLayout />
      }

    </>
  );
}

export default App;
