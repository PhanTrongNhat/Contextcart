import React,{Component} from 'react';
import AppContext from '../contexts/AppContext'
import axios from 'axios';

 export default class extends Component{
     constructor(props){
         super(props);
         this.state ={
             products:[]
         }
         
         this.addToCart = this.addToCart.bind(this);
         this.componentDidMount = this.componentDidMount.bind(this);     
     }
     componentDidMount(){     
        axios.get('https://ws9qm.sse.codesandbox.io/products').then(res=>{
            this.setState = {
                products : res.data
            }
           
           console.log(this.state.products);
           console.log(res.data);
        })
      
     }
     addToCart(product){
         this.setState = {
             products : this.state.products.concat(product)
         }
     }
     render(){
         return(             
            <AppContext.Provider  value={{products:this.state.products,
            addToCrat:this.addToCart}}>
                {this.props.children}
            </AppContext.Provider>             
         )
     }
 }