import React from 'react';
import { Button } from 'react-bootstrap';
import Typical from 'react-typical'
import './Header.css';

export default function Header(){
    return(
        <nav class='navbar'>
            <div class="navbar-container">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../Profile.js">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Work Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Me Me Me!</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}