import React from 'react';
import { render } from 'react-dom';
import "./style.css"

export default function Header( { projeto }){
    return (
        <header>
            <h1> { projeto.title } </h1>
            <i> {projeto.owner}  </i>
        </header>
    );
}