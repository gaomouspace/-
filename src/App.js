import React, { Component } from 'react'
import {Switch , Route , Redirect} from 'react-router-dom'
import Index from './pages/Index'
import Login from './pages/Login'
import Hot from './pages/Hot'
import Part from './pages/Part'
import ShoppingCart from './pages/ShoppingCart'
import User from './pages/User'
import Classify from './pages/Classify'
import Deserve from './pages/Deserve'

export default class App extends Component {
  render() {
    return (
      <div className='wrap'>
        <Switch>
          <Route path="/Index/Hot/Part:id" component={Part}></Route>
          <Route path="/Index/Hot" component={Hot}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Home" component={Index}></Route>
          <Route path="/Classify" component={Classify}></Route>
          <Route path="/Deserve" component={Deserve}></Route>
          <Route path="/User" render={()=>{
            return sessionStorage.getItem('code') === '200' ? <User/> : <Redirect to='/Login'/>
          }}></Route>
          <Route path="/ShoppingCart" component={ShoppingCart}></Route>
          <Route path="/" render={()=>{
            return sessionStorage.getItem('code') === '200' ? <User/> : <Index/>
          }}></Route>
        </Switch>
      </div>
    )
  }
}
// <i className = 'fa fa-chevron-left'></i>
// <p>{this.props.name}</p>
// <i className=' fa fa-ellipsis-h'></i>
