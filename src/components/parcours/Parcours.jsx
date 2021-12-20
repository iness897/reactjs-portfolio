import React from 'react'
import "./parcours.scss"
import Academy from "../../assets/images/3w.png"
import Cnam from "../../assets/images/cnam.jpg"
import Cergy from "../../assets/images/cergy.jpeg"



export default function Parcours() {

    const data = [
    {
        id: 1,
        nom: "3W Academy",
        annee: "Septembre 2021 - Janvier 2022",
        img: Academy,
        desc: "Bac+2 Développeur Full Stack en alternance. Option Front-end: ReactJs. Option Back-end: NodeJs"
    },
    {
        id: 2,
        nom: "CNAM Paris",
        annee: "Septembre 2020 - Septembre 2021",
        img: Cnam,
        desc: "Bac+1 Dévellopement web et web mobile",
        featured : true
    },
    {
        id: 3,
        nom: "Université Cergy Pantoise",
        annee: "Septembre 2013 - Septembre 2015",
        img: Cergy,
        desc: "DUT Transport et Logistique"
    },
    ]


return (
  <div className="parcours" id="parcours">
    <h1>Parcours</h1>

    <div className='container'>

      {data.map((d) =>(

        <div className={d.featured ? "card featured" : "card"}>
          <div className='top'>
              <img src={d.img} alt="logo ecole"/>
          </div>
          <div className='center'>
              {d.desc}
          </div>
          <div className='bottom'>
              <h3>{d.nom}</h3>
              <h4>{d.annee}</h4>
          </div>
        </div>
        ))}
    </div>
            
  </div>
)
}
