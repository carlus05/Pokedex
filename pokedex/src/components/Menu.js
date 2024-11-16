import React, { useState } from 'react';
import "../css/menu.css";
import imatge from "../imatges/bola_poke2.jpg";
import home from "../imatges/home.png";
import search from "../imatges/search3.jpg";
import { useNavigate } from 'react-router-dom';

function Menu({ busca, setBusca }) {
    const navigate = useNavigate();
    const [ensenyarInput, setEnsenyarInput] = useState(false);
    const [mostrarLlista, setMostrarLlista] = useState(false);

    function clickBoto() {
        setMostrarLlista(!mostrarLlista);
    }

    function clickBoto2() {
        navigate('/');
    }

    function clickBoto3() {
        setEnsenyarInput(!ensenyarInput);
    }

    const handleChange = (event) => {
        setBusca(event.target.value);
    }

    return (
        <div className="peu_pagina">
            <div className='botons'>
                <div className='boto1' onClick={clickBoto2}>
                    <img src={home} alt="Home" />
                </div>

                <div className='boto2' onClick={clickBoto}>
                    <img src={imatge} alt="Desplegar llista" />
                </div>

                <div className='boto3' onClick={clickBoto3}>
                    <img src={search} alt="Search" />
                </div>
            </div>
            {ensenyarInput ?
                <div className='contenidor-buscador'>
                    <input type='text' value={busca} onChange={handleChange}></input>
                </div> : null}

            {mostrarLlista ?
                <div className='llista-desplegable'>
                    <li>hola</li>
                </div> : null}
        </div>
    );
}

export default Menu;

