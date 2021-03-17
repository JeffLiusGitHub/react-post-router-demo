import React ,{Component} from 'react';
import axios from 'axios';
import './FullPost.css'

class FullPost extends Component{
    state = {
        loadedPost : null
    }
    componentDidMount(){
        console.log(this.props);
        // follow by the json format
        if(this.props.match.params.id){//check this is a valid id
            if(!this.state.loadedPost||(this.state.loadedPost.id !== this.props.id)){//no loadedpost or id is not the past id
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
                        .then(response=>{
                            // console.log(response);
                            this.setState({loadedPost: response.data});
                        });
            }
       
        }
    }

    deletePostHandler = () =>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
        .then(response =>{
            console.log(response);
        });
    }


    render(){
        let post = <p style={{textAlign:'center'}}>Please select a post!</p>
        if(this.props.id){
            post = <p style={{textAlign:'center'}}>Loading...!</p>
        }
        if (this.state.loadedPost){//if do not select post the default id is null so, we do not do the statement inside if
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button onClick = {this.deletePostHandler} className="Delete">Delete</button>
                </div>
            </div>
                );
        }
        return post;
    }
  
};

export default FullPost;