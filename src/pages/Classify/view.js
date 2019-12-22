import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Footer from '../../components/Footer'
export default class view extends Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    分类
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
