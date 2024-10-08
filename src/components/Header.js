import React from "react"
import trollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} alt="Troll Face" className="troll-face"/>
            <h2 className="Header-text">Header component</h2>
        </header>
    )
}

