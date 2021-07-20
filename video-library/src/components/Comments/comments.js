import React from 'react'
import axios from "axios"; 
class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            comment : '',
            commentList: ''
          }
    }
  
/////////////////////////////////////////////////////////////////////
  handleChange = (event) => {
      console.log(event.target.value)
    this.setState({
        comment: event.target.value
    });
    console.log(this.state.comment)
};
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
handleSubmit = async (video) => {

    console.log("this handleSubmit before post request !!!!!!!!!!!!!: " ); 
    let postResponse = await axios.post(`http://localhost:5000/api/comments/`, {videoId:video.id.videoId, text:this.state.comment });
            
    this.setState({
      commentList: postResponse.data.items
    })
    console.log("this handleSubmit after axios call: "+ this.state.comments);
};  
///////////////////////////////////////////////////////////////////////////////////////
      // let postResponse = await axios.post('https;//localhost:8000.com/api/comments', {videoId: '1838fjfkd', text: 'this is a comment'})
    // how do we get this.state.comment in the data object that is passed into second argument of axios POST call




postComment = async (event) => {
    event.preventDefault()
    let data = {
        videoId: "fjkdafsdf18383",
        text: this.state.comment
    }
    console.log('postComment triggered!')
    try{
        let postResponse = await axios.post(`http://localhost:5000/api/comments/`, data);
        console.log("postComment try went through")
        console.log(postResponse)
        //let otherResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.term}`)
        // let postResponse = await axios.post('https;//localhost:8000.com/api/comments', {videoId: '1838fjfkd', text: 'this is a comment'})
        this.setState({
            commentList: postResponse.data.items
        });
    } catch (err) {
        console.log(err);
    }
}
/////////////////////////////////////////////////////////////////////
render() {
    return (
        <div>
         <form onSubmit={this.postComment}  className="d-flex">
             <input className="form-control me-sm-2" type="text" placeholder="Comment" onChange={this.handleChange} value={this.state.comment}/>
            <button className="btn btn-secondary my-2 my-sm-0" type="text">Post</button>
         </form>
        <p> {this.state.commentList}</p>
    </div>
    )
}
}

export default Comments;

