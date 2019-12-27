import React, { Component } from 'react'
import  './style.css'
export default class view extends Component {
    state = {
        bool1:false,
        bool2:false,
        bool3:false,
    }
    ding = ()=>{
        this.props.wei()
    }
    componentWillReceiveProps(){
        let {bg , list} = this.refs
        if(this.props.len >= bg.clientHeight){
            this.setState({
                bool1:true
            })
            if(this.props.len >= (bg.clientHeight+list.clientHeight-45)){
                this.setState({
                    bool2:true
                })
            } else {
                this.setState({
                    bool2:false
                })
            }
        } else {
            this.setState({
                bool1:false,
                bool2:false

            })
        }
        if(this.props.len > 200){
            this.setState({
                bool3:true
            })
        } else {
            this.setState({
                bool3:false
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <header ref='head' className='FoodsHeader' style={{background: this.state.bool1 ? "white" : "none"}}>
                    <i className='fa fa-angle-left' onClick={()=>{this.props.history.push("/")}} style={{color: this.state.bool1 ? "#06c1ae" : "white"}}></i>
                    <div style={{background: this.state.bool1 ? "#ebeced" : "white"}}>
                        <i className='fa fa-search'></i>
                        <input type="text" placeholder='请输入商家名、品类或商圈'/>
                    </div>
                    <i className='fa fa-user' style={{color: this.state.bool1 ? "#06c1ae" : "white"}}></i>
                </header>
                <div className='bg' ref='bg'>
                    <img src="http://s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@5b5269e" alt=""/>
                </div>
                <section className='FoodsSection'>
                    <div className='Lists' ref='list'>
                        <dl>
                            <dt><img src="/4.jpg" alt=""/></dt>
                            <dd>火锅</dd>
                        </dl>
                        <dl>
                            <dt><img src="/5.jpg" alt=""/></dt>
                            <dd>甜点饮品</dd>
                        </dl>
                        <dl>
                            <dt><img src="/6.jpg" alt=""/></dt>
                            <dd>自助餐</dd>
                        </dl>
                        <dl>
                            <dt><img src="/7.jpg" alt=""/></dt>
                            <dd>小吃快餐</dd>
                        </dl>
                        <dl>
                            <dt><img src="/8.jpg" alt=""/></dt>
                            <dd>西餐</dd>
                        </dl>
                        <dl>
                            <dt><img src="/9.jpg" alt=""/></dt>
                            <dd>烧烤烤肉</dd>
                        </dl>
                        <dl>
                            <dt><img src="/10.jpg" alt=""/></dt>
                            <dd>香锅烤鱼</dd>
                        </dl>
                        <dl>
                            <dt><img src="/11.jpg" alt=""/></dt>
                            <dd>海鲜</dd>
                        </dl>
                    </div>
                    <nav ref='nav' className={this.state.bool2 ? 'on' : ''}>
                        <li>全部类目</li>
                        <li>附近商家</li>
                        <li>智能排序</li>
                        <li>筛选</li>
                    </nav>
                    <div className='Goods'>
                        <div className='Many'>
                            <dl>
                                <dt><img src="/15.jpg" alt=""/></dt>
                                <dd>
                                    <p>吉野家(上地三街店)</p>
                                    <div>
                                        <div className='xing'><img src="/16.jpg" alt=""/></div>
                                        <p>￥29/人</p>
                                        <span>上地152m</span>
                                    </div>
                                    <p>日式快餐<span>上地日韩料理第5名</span><span>回头客多</span></p>
                                    <p>支持外卖</p>
                                </dd>
                            </dl>
                            <div><p>新客减17.99</p><div className='tuan'><img src="/17.jpg" alt=""/></div>单人餐3.5元起,13元鱼香肉丝套餐,21元B12</div>
                        </div>
                        <div className='Many'>
                            <dl>
                                <dt><img src="/15.jpg" alt=""/></dt>
                                <dd>
                                    <p>吉野家(上地三街店)</p>
                                    <div>
                                        <div className='xing'><img src="/16.jpg" alt=""/></div>
                                        <p>￥29/人</p>
                                        <span>上地152m</span>
                                    </div>
                                    <p>日式快餐<span>上地日韩料理第5名</span><span>回头客多</span></p>
                                    <p>支持外卖</p>
                                </dd>
                            </dl>
                            <div><p>新客减17.99</p><div className='tuan'><img src="/17.jpg" alt=""/></div>单人餐3.5元起,13元鱼香肉丝套餐,21元B12</div>
                        </div>
                        <div className='Many'>
                            <dl>
                                <dt><img src="/15.jpg" alt=""/></dt>
                                <dd>
                                    <p>吉野家(上地三街店)</p>
                                    <div>
                                        <div className='xing'><img src="/16.jpg" alt=""/></div>
                                        <p>￥29/人</p>
                                        <span>上地152m</span>
                                    </div>
                                    <p>日式快餐<span>上地日韩料理第5名</span><span>回头客多</span></p>
                                    <p>支持外卖</p>
                                </dd>
                            </dl>
                            <div><p>新客减17.99</p><div className='tuan'><img src="/17.jpg" alt=""/></div>单人餐3.5元起,13元鱼香肉丝套餐,21元B12</div>
                        </div>
                        <div className='Many'>
                            <dl>
                                <dt><img src="/15.jpg" alt=""/></dt>
                                <dd>
                                    <p>吉野家(上地三街店)</p>
                                    <div>
                                        <div className='xing'><img src="/16.jpg" alt=""/></div>
                                        <p>￥29/人</p>
                                        <span>上地152m</span>
                                    </div>
                                    <p>日式快餐<span>上地日韩料理第5名</span><span>回头客多</span></p>
                                    <p>支持外卖</p>
                                </dd>
                            </dl>
                            <div><p>新客减17.99</p><div className='tuan'><img src="/17.jpg" alt=""/></div>单人餐3.5元起,13元鱼香肉丝套餐,21元B12</div>
                        </div>
                        <div className='Many'>
                            <dl>
                                <dt><img src="/15.jpg" alt=""/></dt>
                                <dd>
                                    <p>吉野家(上地三街店)</p>
                                    <div>
                                        <div className='xing'><img src="/16.jpg" alt=""/></div>
                                        <p>￥29/人</p>
                                        <span>上地152m</span>
                                    </div>
                                    <p>日式快餐<span>上地日韩料理第5名</span><span>回头客多</span></p>
                                    <p>支持外卖</p>
                                </dd>
                            </dl>
                            <div><p>新客减17.99</p><div className='tuan'><img src="/17.jpg" alt=""/></div>单人餐3.5元起,13元鱼香肉丝套餐,21元B12</div>
                        </div>
                    </div>
                </section>
                <div className='ding' style={{'display': this.state.bool3 ? 'block' : 'none'}} onClick={this.ding}>置顶</div>
            </React.Fragment>
        )
    }
}
