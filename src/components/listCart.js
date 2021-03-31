import React, { Component } from 'react'
import Cart from './cart';
import Context from '../contexts/AppContext';
export default function listCart() {


    return (
        <Context.Consumer>

            {({ products }) =>
                products.map((item, index) => <Cart key={index} product={item}></Cart>)}



        </Context.Consumer>
    )

}