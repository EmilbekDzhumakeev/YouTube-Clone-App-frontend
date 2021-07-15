import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import VideoPlayer from './VideoPlayer/videoPlayer';
import SearchBar from "../components/SearchBar/searchBar";
import axios from "axios"; 
import youtube from '../apis/youtube';

class App extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            data:[], 
           // term: '',
            videos: [],
            selectedVideo: null,
        };
    }

    componentDidMount(){
        this.getData();
    }
//////////////////////////
    //state={ 
     //   term: '',
    //    videos: [],
       // selectedVideo: null
   // } 
/////////////////////////////////////////////////////////////////////
 /* handleChange(event){
        console.log(event);
        this.setState({
            term: event.target.value, 
    
        });
} */
/////////////////////////////////////////////////////////////////////
   /* handleSubmit = async () => {
       
try{
       let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.term}&key=AIzaSyAACIBMXcV3cB9S7VnBOvCuLSDZU2nV0Tk`);

        this.setState({
            videos: response.data.items
        });
        console.log("term inside handle submit!!!!!!!!!!!!!!!!!!!!!!!");
    } catch (err) {
        console.log(err);
    }
    }
    */

/////////////////////////////////////////////////////////////////////
handleSubmit = async (termFromSearchBar) => {
    console.log("this handleSubmit before get request !!!!!!!!!!!!!: " ); 
    const response = await youtube.get('/search', {
        params: {
            q: termFromSearchBar
        }
    })
    this.setState({
        videos: response.data.items
    })
    console.log("this handleSubmit after axios call: "+ this.state.videos );
};  
/////////////////////////////////////////// 

   
/////////////////////////////////////////////////////////////////////

    async getData() {
        try{
            let response = await axios.get(
                "https://www.googleapis.com/youtube/v3/search?q=starwars&key=AIzaSyAACIBMXcV3cB9S7VnBOvCuLSDZU2nV0Tk"
            );
            //let otherResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.term}`)
            this.setState({
                data: response.data,
            });
        } catch (err) {
            console.log(err);
        }
    }
/////////////////////////////////////////////////////////////////////  
    render() {  
        console.log("this is this.state.videos: " + this.state.videos); 
     //   console.log("this is data: " + this.state.data);
       
        
        return (
            <div className="container-fluid"> 
            <TitleBar /> 
           
           <SearchBar handleFormSubmit={this.handleSubmit}/>
            <VideoPlayer/>
            </div>
        );
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////
 

 }

export default App;