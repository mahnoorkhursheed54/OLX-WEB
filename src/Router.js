import React from 'react'
import {BrowserRouter as Router, Route,} from 'react-router-dom'
import MobilePhones from '../src/Components/MobilePhone'
import Cars from '../src/Components/Cars'
import Motorcycles from '../src/Components/Motorcycles'
import Houses from '../src/Components/Houses'
import Tablets from '../src/Components/Tablets'
import LandsAndPlots from '../src/Components/LandsAndPlots'
import TV from '../src/Components/TV'

function AppRouter(){
    return(
        <Router>
            <Route path='/' component={Home}/>
            <Route path='/mobilePhones' component={MobilePhones}/>
            <Route path='/cars' component={Cars}/>
            <Route path='/motorcycles' component={Motorcycles}/>
            <Route path='/houses' component={Houses}/>
            <Route path='/tablets' component={Tablets}/>
            <Route path='/landsandplots' component={LandsAndPlots}/>
            <Route path='/tv-video-audio' component={TV}/>
        </Router>
    )
}

export default AppRouter;