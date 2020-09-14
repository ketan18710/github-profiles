import React from 'react'
import {Input, Button} from 'semantic-ui-react';
import {Link} from "react-router-dom";

const SearchBar = (props) => {
   
        
      
        
    
    
    return (
        <div>
            
              <Input icon='search' placeholder='Search...' onChange={props.handleName} />
              <Link to="/">
                <Button onClick={props.handleSubmit} primary>Search</Button>
              </Link>
        </div>
    )
}

export default SearchBar
