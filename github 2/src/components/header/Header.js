import React from 'react'
import { Header,Menu } from 'semantic-ui-react'
import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export const AddHeader = () => {
    

    return (
        <>
      <Menu  className="menu-head" pointing secondary>
        <Menu.Item position='left'>
           <Link to="/"><h3 style={{paddingBottom:"5px",color:"lightgrey"}}>Home</h3></Link>
        </Menu.Item>
        <Menu.Item className="menuItem-1" position='left'>
            <h2 className="m-h3" >
              User Github Repositories
            </h2>
        </Menu.Item>
        
        <Menu.Item position='right'>
           <Link to="/favouriteUsers"><h3 >Favourite Users</h3></Link>
        </Menu.Item>
        <Menu.Item position='right'>
           <Link to="/favouriteRepos"><h3>Favourite Repos</h3></Link>
        </Menu.Item>
        <Menu.Item  position='right'>
               <SearchBar/>             
        </Menu.Item>
      </Menu>
            
        </>
    )
}
