import React from 'react'
import './nav.css'

import Click from './click'

function navbar() {
    return (
        <div className={`main`}>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Sign In</a>
                    </li>
                </ul>
            </nav>
            <div className={'box'}>
                <form action="none">
                    <h3>Login</h3> <br/>
                    <input type="text" placeholder='First Name' required='error'/> <br />
                    <input type="text" placeholder='Last Name' required/><br />
                    <input type="text" placeholder='Email' required/><br />
                    <input type="text" placeholder='Phone' required/><br />
                    <textarea name="text" id={'text'} cols="30" rows="8" required></textarea>
                </form>
            </div>
                <div className="btn">
                    <Click/>
                </div>
        </div>
    )
}

export default navbar
