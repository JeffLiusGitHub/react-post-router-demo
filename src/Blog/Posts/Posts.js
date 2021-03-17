import React,{Component} from 'react';
import axios from 'axios';
import './Posts.css';
import Post from '../../Post/Post';
import {Link} from 'react-router-dom';

class Posts extends Component{
    state = {
        posts:[],
        selectedPostId:null,
        error:false
    }

    postSelectedHandler = (id) =>{
        this.setState({selectedPostId:id});
    }

    componentDidMount(){
        console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post=>{
               return{//js object
                ...post,
                author:'Max'
               }
                
            })
            this.setState({posts: updatedPosts});//should in the then because if write outside the then, js will not wait for it
            console.log(response);//the data on the top is from the json title
        })
        .catch(error=>{
            //this.setState({error:true});
            console.log(error);
        });//async need time js directly run next line, so cannot directly store the data by using equal
        //using Then() can wait the first method to be excuted using response object as import
    }

    render(){

        let posts = <p style ={{textAlign:'center'}}>Something went wrong!</p>;
        if(!this.state.error){
        posts = this.state.posts.map(post =>{
            return (<Link to = {'/' + post.id} id={post.id}>
            <Post
             title ={post.title}
              
               author={post.author}
               clicked = {()=>this.postSelectedHandler(post.id)}/>
               </Link>)
            });
        }

        return(
            <section className="Posts">
                    {posts}
                </section>
        );
    }
}

export default Posts;