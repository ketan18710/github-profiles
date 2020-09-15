import React,{ useState } from 'react'
import {Input, Button} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import * as actionCreater from '../../store/actions/action'
const SearchBar = (props) => {
   
  const [inputText,setInputText] = useState('');
      
        
  const handleUserName =(e)=> {
    setInputText(e.target.value)
    
    
  };
  const handleSubmit = (e) => {
    
    
    props.personalUserData(inputText)
   
}
    
    return (
        <div>
            
              <Input icon='search' placeholder='Search...' onChange={handleUserName}  class="search-input"/>
              <Link to="/search">
                <Button disabled={!inputText} onClick={handleSubmit} primary class="search button">Search</Button>
              </Link>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
  return{
      //changeUsername: e => dispatch(actionCreater.changeUsername(e)), 

      personalUserData:(login) => dispatch(actionCreater.personalUserData(login)) 
  }  
  
}

export default connect(null,mapDispatchToProps)(SearchBar)
