import React from 'react';
import Logo from '../../Assets/img/Logo.png';
import './menu.css';
import ButtonLink from '../ButtonLink/buttonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="MyFlix logo" />
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;