import React,{Component} from 'react';
import {Card,Button} from 'react-bootstrap';

export default class extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {product} = this.props;
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>bootstrap</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        )
}
}