import React, { Component } from 'react'
import {GetRequest} from '../../api/HotApi'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { NavLink } from 'react-router-dom'
export default class view extends Component {
    state = {
        obj:{}
    }
    componentDidMount(){
        GetRequest().then(({data})=>{
            data.forEach(element => {
                if(element.id === Number(this.props.match.params.id)){
                    this.setState({
                        obj:element
                    })
                }
            })
        })
    }
    add = ()=>{
        this.props.Add(this.state.obj)
    }
    buy = () =>{
        this.props.history.push("/ShoppingCart")
    }
    render() {
        return (
            <React.Fragment>
                <Header>
                    <i className = 'fa fa-chevron-left'></i>
                    <p>商品</p>
                    <i className=' fa fa-ellipsis-h'></i>
                </Header>
                <section>
                    <dl>
                        <dt>{this.state.obj.id}</dt>
                        <dt>{this.state.obj.name}</dt>
                    </dl>
                </section>
                <Footer>
                    <NavLink to="/Dian">
                        <dl>
                            <dt><i className='fa fa-home'></i></dt>
                            <dd>商品</dd>
                        </dl>
                    </NavLink>
                    <NavLink to="/Collect">
                        <dl>
                            <dt><i className='fa fa-heart'></i></dt>
                            <dd>收藏</dd>
                        </dl>
                    </NavLink>
                    <NavLink to="/ShoppingCart">
                        <dl>
                            <dt><i className='fa fa-shopping-cart'></i></dt>
                            <dd>购物车</dd>
                        </dl>
                    </NavLink>
                    <button onClick={this.buy}>立即购买</button>
                    <button onClick={this.add}>加入购物车</button>
                </Footer>
            </React.Fragment>
        )
    }
}
