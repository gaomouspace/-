import React, { Component } from 'react'
import Header from '../../components/Header'
import {Redirect} from 'react-router-dom'
export default class view extends Component {
    sub = (e)=>{
        e.preventDefault();
        let obj = new FormData(e.target)
        this.props.Login(obj)
    }
    render() {
        return (
            <div>
                <Header>
                    <i className = 'fa fa-chevron-left'></i>
                    <p>登录</p>
                    <i className=' fa fa-ellipsis-h'></i>
                </Header>
                <section>
                    <form onSubmit={this.sub}>
                        <input type="text" placeholder='账号' name='username'/>
                        <input type="text" placeholder='密码' name='pwd'/>
                        <button>登录</button>
                    </form>
                </section>
                {
                    this.props.status === 'success' ? <Redirect to='/'/> : ""
                }
            </div>
        )
    }
}
