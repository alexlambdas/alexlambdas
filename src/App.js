import React, {useState} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";

import { ROUTES } from "./resources/Routes";
import "./App.css";

function App(){

    const [openNav, setOpenNav] = useState(false);

    const handleOpenNav = () => setOpenNav(!openNav);

    const handleOnClickSideNav = (event) => {
        if(openNav){
            if(parseInt(event.clientX, 10) >= 250) setOpenNav(false);
        }
    }

    return(
        <div onClick={handleOnClickSideNav}>
            <BrowserRouter>
                <Switch>
                    <Route 
                        path={ROUTES.ROUTE_WELCOME}
                        render={() => {
                            return(
                                <WelcomePage 
                                    openNav={openNav}
                                    handleOpenNav={handleOpenNav}/>
                            )
                        }}/>
                    <Route exact path="/alexlambdas">
                        <Redirect to={ROUTES.ROUTE_WELCOME}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;