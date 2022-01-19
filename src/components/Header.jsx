import React from 'react'

const Header = () => {
    
    let navStyle = {
        background: "#c2c2c2",
        textAlign: "center",
        padding: "10px",
        width: "100&"
    }

    return (
        <nav style={navStyle}>
            <h1 className='navbar-brand'>
                Agenda React + Reducer
            </h1>
        </nav>
    )
}

export default Header
