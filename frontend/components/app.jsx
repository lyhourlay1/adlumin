import React from 'react'
import {Route, Switch} from 'react-router-dom'
import SplashContainer from './splash_container'
import EventShowContainer from './event_show_container'


export default ()=> (
    <div>
        <Switch>
            <Route exact path="/event_logs/:eventId" component= {EventShowContainer}/>
            <Route path="/"  component={SplashContainer} />
        </Switch>
    </div>
)