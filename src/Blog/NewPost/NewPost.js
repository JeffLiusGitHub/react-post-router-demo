import React, { Component } from 'react'
import axios from 'axios'
class NewPost extends Component {
    state={
        title:'',
        content:'',
        author:'Max',
    }

postDataHandler=()=>{
    const data ={
        title: this.state.title,
        body: this.state.content,
        author: this.state.author
    }
    axios.post('https://jsonplaceholder.typicode.com/posts',data)
    .then(response=>{
        console.log(response);
    });
}
// editTitleHandler=(newTitle)=>{
//     this.setState(
//         {
//         state.title = newTitle
//         }
//     )
// }

// handleChange(event) {
//     this.setState({value: event.target.value});
//   }
// handleSubmit(event){
//     alert('Form submitted.');
// }

    render() {
        return (
            <div className = "NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                {/* <input type ="text" value={this.state.title} onChange={(event)=>this.setState({title:title})}/>
                 */}
                <label>Content</label>
                {/* <textarea rows="4" value={this.state.content} onChange={(event)=>this.setState({content:content})}/> */}
                <label>Author</label>
                <select value={this.state.author} onChange={this.handleChange}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler} onSubmit={this.handleSubmit}>Add Post</button>
            </div>
        )
    }
    
//167//46
}
export default NewPost;