import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./searchBar.css"



class SearchBar extends React.Component {
    state = {
        term: 'Default text'
    };
/////////////////////////////////////////////////////////////////////
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
/////////////////////////////////////////////////////////////////////
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
/////////////////////////////////////////////////////////////////////
    render() {
        return (
            <div>
             <form  onSubmit={this.handleSubmit}  className="d-flex">
                 <input className="form-control me-sm-2" type="text" placeholder="Search" onChange={this.handleChange} value={this.state.term}/>
                <button onSubmit={this.handleSubmit} className="btn btn-secondary my-2 my-sm-0" type="text">Search</button>
             </form>
            
        </div>
        )
    }
}



/* function SearchBar(props){

/////////////////////////////////////////////////////////////////////


    return(
        <div>
             <form className="d-flex">
                 <input className="form-control me-sm-2" type="text" placeholder="Search" onChange={props.handleChange}/>
                <button onSubmit={props.handleSubmit} className="btn btn-secondary my-2 my-sm-0" type="text">Search</button>
             </form>
            
        </div>
    )
} 
*/
export default SearchBar;