import React from 'react';
import Logo from '../../Assets/img/Logo.png';
import './menu.css';
import Button from '../Button/button';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="MyFlix logo" />
            </Link>
            <Button as={Link} to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;