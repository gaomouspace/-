import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
export default class view extends Component {
    Change = (item)=>{
        this.props.Change(item)
    }
    checkAll = false
    Sum = 0
    Price = 0

    componentWillReceiveProps(){
        this.Sum=0
        this.Price=0
        let shu = 0
        this.props.data.map((v,i)=>{
            if(v.bool){
                shu=shu+1
                this.Sum+= v.num
                this.Price+= v.num*v.price
            }
        })
        if(shu === this.props.data.length){
            this.checkAll=true
        } else {
            this.checkAll=false
        }
    }
    gai = (e)=>{
        this.props.CheckAll(e.target.checked)
    }
    render() {
        return (
            <React.Fragment>
                <Header>
                    <i className = 'fa fa-chevron-left'></i>
                    <p>购物车</p>
                    <i className=' fa fa-ellipsis-h'></i>
                </Header>
               <section>
                    {
                        this.props.data.map((v,i)=>{
                            return (
                                <dl key = {v.id}>
                                    <dd><input type="checkbox" checked={v.bool} onChange={()=>{this.Change(v)}}/></dd>
                                    <dt>{v.name}</dt>
                                    <dd>{v.num}</dd>
                                </dl>
                            )
                        })
                    }
               </section>
               <Footer>
                    <label style={{display:"flex",alignItems:"center"}}><input type="checkbox" checked={this.checkAll} onChange={(e)=>{this.gai(e)}} />全选</label>
                    <p>合计{this.Price}</p>
                    <button>结算{this.Sum}</button>
               </Footer>
            </React.Fragment>
        )
    }
}
