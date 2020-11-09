import React from 'react';
import { render } from 'react-dom';

export default function Header( { projeto }){
    return (
        <header>
            <h1> `${projeto.title} do ${projeto.owner}` </h1>
        </header>
    );
}
