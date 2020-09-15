import React from 'react'
import { Header,Menu } from 'semantic-ui-react'
import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export const AddHeader = () => {
    

    return (
        <>
      <Menu  className="menu-head" pointing secondary>
        <Menu.Item>
           <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item className="menuItem-1">
          
            <h3 className="m-h3" style={{}}>
              User Github Repositories

            </h3>
          
        </Menu.Item>
        
        <Menu.Item>
               <SearchBar/>             
        </Menu.Item>

        <Menu.Item>
           <Link to="/favouriteUsers">Favourite Users</Link>
        </Menu.Item>
        <Menu.Item>
           <Link to="/favouriteRepos">Favourite Repos</Link>
        </Menu.Item>
      </Menu>
            
        </>
    )
}
