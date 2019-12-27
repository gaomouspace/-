import React, { Component } from 'react'
import {Switch , Route} from 'react-router-dom'
import Home from './pages/Home'
import Foods from './pages/Foods'
export default class App extends Component {
  state = {
    len:0
  }
  scroll = (e)=>{
    this.setState({
      len:e.target.scrollTop
    })
  }
  wei = ()=>{
    this.refs.wrap.scrollTop = 0
    this.setState({
      len:0
    })
  }
  render() {
    return (
      <div className='wrap' ref="wrap" onScroll={(e)=>{this.scroll(e)}}>
        <Switch>
            <Route path='/Home' component={Home}></Route>
            <Route path='/Food' render={()=>{
              return <Foods len = {this.state.len} wei ={this.wei}/>
            }}></Route>
            <Route path='/' component={Home}></Route>
        </Switch>
      </div>
    )
  }
}
