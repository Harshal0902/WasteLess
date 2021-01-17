import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Food from '../Food/Food'
import WasteDashboard from '../Waste/WasteDashboard'
import HomePage from '../Home/HomePage'
import './Home.css'

export default class Home extends Component {
    render() {
        const { logOut } = this.props
        return (
            <div className='home-container'>
                <Router>
                    <div>
                        <NavBar logOut={logOut}/>
                        <div className='component-container'>
                        <Route exact path='/' render={(props) => <HomePage {...this.props} />} />
                        <Route exact path='/food' render={(props) => <Food {...this.props} />} />
                        <Route exact path='/dashboard' render={(props) => <WasteDashboard {...this.props} />} />
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}
