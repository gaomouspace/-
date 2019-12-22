import React, { Component } from 'react'
import  './style.css'

export default class view extends Component {
    render() {
        return (
            <header>
                {
                    this.props.children.map((v,i)=>{
                        return v
                    })
                }
            </header>
        )
    }
}
