
import { useState } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import { LoginProvider } from './context/Context';

function App() {
  let getDataFormD=(data)=>{
    console.log(data);
  }

  const logoutUser=()=>{
    setloginData({
      ...loginData,
      login:false
    })
  }

  const [loginData, setloginData] = useState({
    login:true,
    username:"Manaswini",
    logoutUser:logoutUser,
    getDataFormD:getDataFormD
})
  return (
    <div className="App">
      <LoginProvider value={loginData}>
        <ComponentA/>
      </LoginProvider>
    </div>
  );
}

export default App;
