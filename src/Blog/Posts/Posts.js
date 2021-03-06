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

    // componentDidMount(){
    //     console.log(this.props);
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
    //         const posts = response.data.slice(0,4);
    //         const updatedPosts = posts.map(post=>{
    //            return{//js object
    //             ...post,
    //             author:'Max'
    //            }
                
    //         })
    //         this.setState({posts: updatedPosts});//should in the then because if write outside the then, js will not wait for it
    //         console.log(response);//the data on the top is from the json title
    //     })
    //     .catch(error=>{
    //         //this.setState({error:true});
    //         console.log(error);
    //     });//async need time js directly run next line, so cannot directly store the data by using equal
    //     //using Then() can wait the first method to be excuted using response object as import
    // }

    componentDidMount(){
        console.log(this.props);
        axios.get('https://ablink-backend.azurewebsites.net/Licences/AsfLicence/State/NT').then(response=>{
            const posts = response.data.data;
            this.setState({posts:response.data.data});
            // console.log(posts)//post json to console
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
            // .split('')
            posts = this.state.posts;




            // posts.forEach(function(item){
            //     for (var i=0; i< item.data.length; i++){
            //         var myArr = [];
            //         myArr.push(item.data[i].number);
            //         myArr.push(item.data[i].name);
            //         myArr.push(item.data[i].city);
            //         item.data[i] = myArr;
            //     }
            // })


        // posts = [{name:'kjk',city:'sds'},{name:'esdfs',city:'sdsdasds'}]
        console.log(posts)
        
        posts = posts.map(post =>{
         
        // const posts = this.state.posts.map(post =>{
            return (<Link to = {'/' + post.number} id={post.number}>
            <Post
            name={post.name}
            city ={post.city}
            postcode = {post.postcode}
            clicked = {()=>this.postSelectedHandler(post.number)}/>
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