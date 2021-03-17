import React, { Component } from 'react'
import axios from 'axios';
import Post from '../Post/Post.js'
import post from '../Post/Post.js';
import './Blog.css';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch } from 'react-router-dom';
class Blog extends Component {






    render() {//get from state and map them to the post. when you use post you need give post a title from state


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                //  activeClassName='my-active'
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Home</NavLink></li>
                            {/* prevent render prevent refresh state */}
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                            {/* do not refresh */}
                            {/* navLink can implement styling */}


                            <li><a href="/new-post">New Post</a></li>
                            <li><a href="/">Home</a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=><h1>Home</h1>}/> */}
                {/* path with prefix  */}
                {/* <Route path="/"  render={()=><h1>Home 2</h1>}/> */}
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>

                {/* <Posts/> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                       
                </section>
                <section>
                    <NewPost/>
                </section> */}
            </div>
        )
    }

}
export default Blog;
