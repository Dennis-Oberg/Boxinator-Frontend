import React from 'react';
import '../Style/master.css'

export const Navbar = () => {
    return (
        <div className="navbar" id="centered_nav">
            <a href="/" title="Add">Add Box</a>
            <a href="/view" title="View">View Boxes</a>
        </div>
    )
}