import React from "react";
import { Link } from "react-router-dom";
import './../styles/Header.css'

function Header() {

    return (
        <React.Fragment>
            <header className="header">
                <Link to='/message-board' className="homepage">Messages</Link>
                <Link to='/message-board/new' className="new-message">New</Link>
            </header>
        </React.Fragment>
    )
}

export default Header;