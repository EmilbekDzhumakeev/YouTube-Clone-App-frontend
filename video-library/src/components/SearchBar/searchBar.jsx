import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./searchBar.css"

function SearchBar(props){
    return(
        <div>
             <form className="d-flex">
                 <input className="form-control me-sm-2" type="text" placeholder="Search" onChange={props.handleChange}/>
                <button className="btn btn-secondary my-2 my-sm-0" type="">Search</button>
             </form>
            
        </div>
    )
}
export default SearchBar;