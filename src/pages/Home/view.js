import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ListRequest} from '../../api/List'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper'
export default class view extends Component {
    state = {
        arr:[]
    }
    componentDidMount(){
        ListRequest().then(({data})=>{
            this.setState({
                arr:data
            })
        })
       new Swiper('.swiper-container', {
            autoplay: true,
            direction:'horizontal'
        })
    }
    render() {
        return (
            <React.Fragment>
                <header className='homeHeader'>
                    <p>北京</p>
                    <div>
                        <i className='fa fa-search'></i>
                        <input type="text" placeholder='请输入商家名、品类或者商圈'/>
                    </div>
                    <i className='fa fa-user'></i>
                </header>
                <div className='img'>
                    <img src="/13.jpg" alt=""/>
                </div>
                <section className='emmmm'>
                    <div className='Banner'>
                    <div className="swiper-container">
                    
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                {
                                    this.state.arr.length > 0 && this.state.arr.map((v,i)=>{
                                        return(
                                            <Link key={i} to={v.path} replace>
                                                <dl>
                                                    <dt><img src={v.img} alt=""/></dt>
                                                    <dd>{v.name}</dd>
                                                </dl>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            <div className="swiper-slide">
                                {
                                    this.state.arr.length > 0 && this.state.arr.map((v,i)=>{
                                        return(
                                            <Link key={i} to={v.path} replace>
                                                <dl>
                                                    <dt><img src={v.img} alt=""/></dt>
                                                    <dd>{v.name}</dd>
                                                </dl>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                         </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <p>猜你喜欢</p>
                        <dl>
                            <dt><img src="/14.jpg" alt=""/></dt>
                            <dd>
                                <p>好利来</p>
                                <p>[北京等]【人气】蛋挞1份</p>
                                <div><p><span><b>3</b>元</span>门市价6元</p><span>已售122651</span></div>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src="/14.jpg" alt=""/></dt>
                            <dd>
                                <p>好利来</p>
                                <p>[北京等]【人气】蛋挞1份</p>
                                <div><p><span><b>3</b>元</span>门市价6元</p><span>已售122651</span></div>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src="/14.jpg" alt=""/></dt>
                            <dd>
                                <p>好利来</p>
                                <p>[北京等]【人气】蛋挞1份</p>
                                <div><p><span><b>3</b>元</span>门市价6元</p><span>已售122651</span></div>
                            </dd>
                        </dl>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
