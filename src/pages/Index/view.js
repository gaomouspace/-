import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {NavLink , Link} from 'react-router-dom'
import Swiper from 'swiper'
import  'swiper/css/swiper.min.css'
import  'swiper/js/swiper'
export default class view extends Component {
    componentDidMount(){
        new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
          })
    }
    render() {
        return (
            <React.Fragment>
                <Header>
                    <i className='fa fa-file'></i>
                    <div>
                    <input type="text" placeholder='请输入'/>
                    </div>
                    <i className='fa fa-list'></i>
                </Header>
                <section>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">Slide 1</div>
                            <div className="swiper-slide">Slide 2</div>
                            <div className="swiper-slide">Slide 3</div>
                        </div>
                    </div>
                    <div className='Dls'>
                        <Link to='/Index/Hot' replace>
                            <dl>
                                <dt><i className='fa fa-book'></i></dt>
                                <dd>畅销榜</dd>
                            </dl>
                        </Link>
                        <Link to='/Index/Hot' replace>
                            <dl>
                                <dt><i className='fa fa-book'></i></dt>
                                <dd>畅销榜</dd>
                            </dl>
                        </Link>
                        <Link to='/Index/Hot' replace>
                            <dl>
                                <dt><i className='fa fa-book'></i></dt>
                                <dd>畅销榜</dd>
                            </dl>
                        </Link>
                        <Link to='/Index/Hot' replace>
                            <dl>
                                <dt><i className='fa fa-book'></i></dt>
                                <dd>畅销榜</dd>
                            </dl>
                        </Link>
                        <Link to='/Index/Hot' replace>
                            <dl>
                                <dt><i className='fa fa-book'></i></dt>
                                <dd>畅销榜</dd>
                            </dl>
                        </Link>
                        <Link to='/Index/Hot' replace>
                            <dl>
                                <dt><i className='fa fa-book'></i></dt>
                                <dd>畅销榜</dd>
                            </dl>
                        </Link>
                        <Link to='/Index/Hot' replace>
                            <dl>
                                <dt><i className='fa fa-book'></i></dt>
                                <dd>畅销榜</dd>
                            </dl>
                        </Link>
                        <Link to='/Index/Hot' replace>
                            <dl>
                                <dt><i className='fa fa-book'></i></dt>
                                <dd>畅销榜</dd>
                            </dl>
                        </Link>
                        <Link to='/Index/Hot' replace>
                            <dl>
                                <dt><i className='fa fa-book'></i></dt>
                                <dd>畅销榜</dd>
                            </dl>
                        </Link>
                        <Link to='/Index/Hot' replace>
                            <dl>
                                <dt><i className='fa fa-book'></i></dt>
                                <dd>畅销榜</dd>
                            </dl>
                        </Link>
                    </div>
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
