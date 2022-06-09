import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllMoveButtons from './Components/AllMoveButtons';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from './Components/Loading'
import AddMove from './Components/AddMove';



const App = () => {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (<Loading />)
  }

  return (
    <div>
      <Navbar />
      <div>
        <Profile />
        <AllMoveButtons />
      </div>
      <div><AddMove/></div>
      
    </div>

  );

}



export default App;
