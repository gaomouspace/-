import React, { Component } from 'react'
import  './style.css'
export default class view extends Component {
    render() {
        return (
            <footer>
                {
                    this.props.children.map((v,i)=>{
                        return v
                    })
                }
            </footer>
        )
    }
}
