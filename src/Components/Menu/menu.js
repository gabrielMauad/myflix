import React from 'react';
import Logo from '../../Assets/img/Logo.png';
import './menu.css';
import ButtonLink from '../ButtonLink/buttonLink';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="MyFlix logo" />
            </Link>
            <ButtonLink className="ButtonLink" href="/cadastro/video">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;