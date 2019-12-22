import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {NavLink} from 'react-router-dom'
export default class view extends Component {
    render() {
        return (
            <React.Fragment>
                <Header>
                    <i className = 'fa fa-chevron-left'></i>
                    <p>我的当当</p>
                    <i className=' fa fa-ellipsis-h'></i>
                </Header>
                <section>
                    我的
                </section>
                <Footer>
                    <NavLink to='/Home' replace>
                    <dl>
                        <dt><i className='fa fa-home'></i></dt>
                        <dd>首页</dd>
                    </dl>
                    </NavLink>
                    <NavLink to='/Classify' replace>
                        <dl>
                            <dt><i className='fa fa-list'></i></dt>
                            <dd>分类</dd>
                        </dl>
                    </NavLink>
                    <NavLink to='/Deserve' replace>
                        <dl>
                            <dt><i className='fa fa-fire'></i></dt>
                            <dd>值得买</dd>
                        </dl>
                    </NavLink>
                    <NavLink to='/ShoppingCart' replace>
                        <dl>
                            <dt><i className='fa fa-shopping-cart'></i></dt>
                            <dd>购物车</dd>
                        </dl>
                    </NavLink>
                    <NavLink to='/User' replace>
                        <dl>
                            <dt><i className='fa fa-user'></i></dt>
                            <dd>我的当当</dd>
                        </dl>
                    </NavLink>
                </Footer>
            </React.Fragment>
        )
    }
}
