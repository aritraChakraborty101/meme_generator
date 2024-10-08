import React from "react";
import '../App.css';
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */





export default function Meme() {
    return (
        <main>
            <div className="form">
                <div className="top-wrapper">
                    <label htmlFor="top-text">Top Text</label>
                    <input
                        id="top-text"
                        type="text"
                        placeholder="Shut up"
                        className="form--input"
                    />
                </div>
                <div className="bottom-wrapper">
                    <label htmlFor="bottom-text">Bottom Text </label>                    
                    <input
                            id="bottom-text"
                            type="text"
                            placeholder="and take my money"
                            className="form--input"
                        />
                    
                </div>
                <button
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}