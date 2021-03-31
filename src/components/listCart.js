import React,{Component} from 'react'
import Cart from './cart';
import Context from '../contexts/AppContext';
export default class extends Component{
    render(){

        return(
            <Context.Consumer>
                {({products})=>
                    products.map(item=><Cart product={item}></Cart>)}     
               
            </Context.Consumer>
             )
    }
}