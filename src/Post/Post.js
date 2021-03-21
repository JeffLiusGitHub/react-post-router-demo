import React from 'react';
import {withRouter} from 'react-router-dom';
import './Post.css'
const post =(props)=>(
    <article className="Post" onClick={props.clicked}> 
        <p>{props.number}</p>
        <h1>{props.city}</h1>
        <h1>{props.name}</h1>
        {/* <h1>{props.author}</h1> */}
        

        <div className="Info">
            <div className ="Author">{props.author}</div>
        </div>
    </article>
);
export default withRouter(post);
// withRouter save history