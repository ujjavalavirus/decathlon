import React from "react";
import {Header} from './header';
import {Footer} from './footer';
import {Homepage} from './homepage';
import {Delete} from './delete';
import {Update} from './update';
import {Edit} from './edit';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export class Loader extends React.Component {
    render(){
        return (
            <div className="wrapper">
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Homepage} /> 
                        <Route path="/edit/:postid" component={Edit} /> 
                        <Route path="/update" component={Update} /> 
                        <Route path="/delete" component={Delete} /> 
                    </Switch>
                </BrowserRouter>   
                <Footer/>
            </div>    
        );
    }
}