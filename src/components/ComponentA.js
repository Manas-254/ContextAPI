import React, { useContext } from 'react'
import LoginContext from '../context/Context';

function ComponentA() {
    const context = useContext(LoginContext)
    console.log('context',context);

    let logout=()=>{
        context.logoutUser()
    }
    let sendData=()=>{
        context.getDataFormD('i m sending data from component D')
    }
    return (
        <div>
             {context.login?<p>{context.username} is Logged in</p>:<p>Please log in..!</p>}
            <button onClick={logout}>Logout</button>
            <button onClick={sendData}>send Data to App Component</button>
        </div>
    )
}

export default ComponentA
