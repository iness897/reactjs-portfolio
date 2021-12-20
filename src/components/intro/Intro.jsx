import React from 'react';
import "./intro.scss";
import { init } from 'ityped';
import Photo from "../../assets/images/photoprofil.jpg";
import Down from "../../assets/svg/chevron-down-solid.svg";
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();

    useEffect(() =>{
        init(textRef.current, {
            showCursor : true, 
            backDelay: 1500,
            backSpeed: 60,
            strings:[" Développeuse Web Junior", " Intégratrice", " Designer"],

        });

    }, []);

    return (
        <div className='intro' id="intro">

            <div className='left'>
              <div className='imgContainer'>
                <img src={Photo} alt="photo_profil"/>
              </div>
            </div>

            <div className='right'>
                <div className='wrapper'>
                    <h2>Bonjour, je m'appelle</h2>
                    <h1>GAZZAH INES</h1>
                    <h3>
                        Je suis <span ref={textRef}></span>
                    </h3>
                </div>
            <a href="#portfolio">
                <img src={Down} alt="fleche_bas"/>
            </a>
            </div>

        </div>
    )
}
