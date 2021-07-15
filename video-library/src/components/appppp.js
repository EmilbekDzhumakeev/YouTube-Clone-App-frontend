import React, {Component} from "react";
import axios from "axios";

class AppEmilKevin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
        };
    }
    componentDidMount(){
        this.getData();
    }

    async getData() {
        try{
            let response = await axios.get(
                "https://www.googleapis.com/youtube/v3/search?q=starwars&key=AIzaSyAACIBMXcV3cB9S7VnBOvCuLSDZU2nV0Tk"
            );
            this.setState({
                data: response.data,
            });
        } catch (err) {
            console.log(err);
        }
    }
     
    render(){
        console.log(this.state.data);
        return <h1>Hello World!</h1>;
     }
    }

export default AppEmilKevin;