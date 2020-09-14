import React from 'react'
import {Input, Button} from 'semantic-ui-react';



const SearchBar = (props) => {
   
        
      
        
    
    
    return (
        <div>
            
              <Input icon='search' placeholder='Search...' onChange={props.handleName} />
              <Button onClick={props.handleSubmit} primary>Search</Button>
        </div>
    )
}

export default SearchBar
