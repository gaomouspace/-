import React, { Component } from 'react'
import Header from '../../components/Header'
export default class view extends Component {
    componentDidMount(){
        this.props.Get()
    }
    GoTo = (id)=>{
        this.props.history.push('/Index/Hot/Part'+id)
    }
    del = (e,item) => {
        e.stopPropagation();
        this.props.Del(item)
    }
    render() {
        return (
            <React.Fragment>
                <Header>
                    <i className='fa fa-file'></i>
                    <p>童书畅销榜</p>
                    <i className='fa fa-list'></i>
                </Header>
                <section>
                    {
                        this.props.data.map((v,i)=>{
                            return(
                                <dl key = {v.id} onClick={()=>{this.GoTo(v.id)}}>
                                    <dt><i className='fa fa-qq'></i></dt>
                                    <dd>{v.name}<button onClick={(e)=>{this.del(e,v)}}>删除</button></dd>
                                </dl>
                            )
                        })
                    }
                </section>
            </React.Fragment>
        )
    }
}
