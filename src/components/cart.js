import React,{Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import Context from '../contexts/AppContext';
export default class extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {product} = this.props;
       
       
        return(
            <div>
                {product &&  
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.decriber}
                        </Card.Text>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                        <Context.Consumer>
                            {({addToCart})=> <Button onClick={()=>addToCart(product)} variant="primary">Buy</Button>}
                       
                        </Context.Consumer>
                        
                    </Card.Body>
                 </Card>
                 }
            </div>
           
        )
}
}