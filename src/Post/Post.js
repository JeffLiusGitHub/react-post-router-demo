import React from 'react';
import {withRouter} from 'react-router-dom';
import './Post.css'
import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';
const post =(props)=>(
 <article className="Post" onClick={props.clicked}> 
        <p>{props.number}</p>
        <h1>Company Name: {props.name}</h1>
        <p>Location: {props.city}</p>

    
        

        <div className="Info">
            <div className ="Author">Postcode: {props.postcode}</div>
        </div>
    </article>
/* <Card>
    <CardHeader>{props.name}</CardHeader>
    <CardBody>
        <CardTitle>{props.city}</CardTitle>
        <CardText>{props.number}</CardText>
        <Button href="/#" color="primary">Go somewhere</Button>
    </CardBody>
</Card> */

   
);
export default withRouter(post);
// withRouter save history