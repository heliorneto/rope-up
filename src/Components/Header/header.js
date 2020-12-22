import React, { useState, useEffect } from 'react';
import { Nav, Navbar, FormControl, InputGroup, Button, Dropdown}from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/logo.js';
import "./header.css";

function Header(){
    return(
        <Navbar id="navbar" expand="lg">
            <Nav id="Logo" href="/home">
                <Logo/>
            </Nav>
            <Nav id="Opcoes">
                <div id="ComoFunciona">
                    <h3>Como Funciona</h3>
                </div>
                <div id="Sobre">
                    <h3>Sobre</h3>
                </div>
                <div id="Blog">
                    <h3>Blog</h3>
                </div>
                <div id="Ajuda">
                    <h3>Ajuda</h3>
                </div>
                <div id="Login">
                    <h3><b>Login</b></h3>
                </div>
            </Nav>
        </Navbar>
    );
}

export default Header;