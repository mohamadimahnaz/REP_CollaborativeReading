import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'
import App from './App'
import Home from './Home'
import Users from './users'
import Notfound from './notfound'


const routing = ( <
    Router >
    <
    div >
    <
    ul className = "menu" >
    <
    li >
    <
    NavLink exact activeClassName = "active"
    to = "/" >
    ورود به سایت <
    /NavLink> < /
    li > <
    li >
    <
    NavLink exact activeClassName = "active"
    to = "/ Home" >
    صفحه اصلی <
    /NavLink> < /
    li >
    <
    li >
    <
    NavLink activeClassName = "active"
    to = "/users" >
    کاربران <
    /NavLink> < /
    li > <
    /ul> <
    hr / >
    <
    Switch >
    <
    Route exact path = "/"
    component = { App }
    /> <
    Route exact path = "/ Home"
    component = { Home }
    /> <
    Route path = "/users"
    component = { Users }
    />  <
    Route component = { Notfound }
    /> < /
    Switch > <
    /div> < /
    Router >
)
ReactDOM.render(routing, document.getElementById('root'))