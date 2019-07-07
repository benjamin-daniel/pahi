import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
function Header(props) {

    return <h1>Header</h1>
    
    // return <Menu>
    //     <Menu.Item as="Home"><Link to="/">Home</Link></Menu.Item>
    //     <Menu.Item as="about"><Link to="/about">About</Link></Menu.Item>
    //     <Menu.Item as="users"><Link to="/users">users</Link></Menu.Item>
    // </Menu>
}

export default Header;