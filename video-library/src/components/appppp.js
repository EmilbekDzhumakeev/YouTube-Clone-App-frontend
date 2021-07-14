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
                "https://www.googleapis.com/youtube/v3/search?q=starwars&key=AIzaSyB01g48z-Nq63zN9W3fy_1UClauXjjPU6w"
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