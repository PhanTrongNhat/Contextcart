import React, { Component } from 'react';
import AppContext from '../contexts/AppContext'
import axios from 'axios';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            Cart:[]
        }
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        const fetchData = async () => {
            const request = await axios.get("https://ws9qm.sse.codesandbox.io/products").then(res => res.data);
            this.setState({
                products: request
            })
           
        }
        fetchData();
       
    }
    componentDidUpdate(){
        console.log('update');
    }
    componentWillUnmount(){
        console.log('unmount');
    }
    addToCart(product) {
        console.log('add',product,this.state.products.length,this.state.Cart);
        this.setState = {
            products : this.state.products.concat(product)
        }
       
    }
    render() {
        return (
            <AppContext.Provider value={{
                products: this.state.products,
                addToCart: this.addToCart,
                Cart: this.state.Cart

            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}