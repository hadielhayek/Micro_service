import React, { useState } from "react";
import Loginform from "./components/Loginform";
import Dashboard from "./components/Dashboard";
import { useSelector } from "react-redux";




function App() {

    const user2 = useSelector((state) => state.user)
    return (

        <div>
            {user2 ? <Dashboard /> : <Loginform />}
        </div>
    );
}

export default App;
