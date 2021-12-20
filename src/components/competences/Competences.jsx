import React from 'react'
import "./competences.scss"
import CompetencesList from '../competencesList/CompetencesList';
import { useState, useEffect } from 'react';
import { FrontCompetences, BackCompetences, CmsCompetences } from "../../data.js"

export default function Competences() {

    const [selected, setSelected] = useState("front");
    const [data, setData] = useState([])

    const list = [
        {
            id: "front",
            title: "Front-End",
        },
        {
            id: "back",
            title: "Back-End",
        },
        {
          id: "cms",
          title: "CMS / Logiciels"
        }

    ]

    useEffect(()=>{

        switch(selected){
            case "front":
            setData(FrontCompetences); 
            break; 
            case "back":
            setData(BackCompetences); 
            break;
            case "cms":
              setData(CmsCompetences); 
              break;  
            default:
                setData(FrontCompetences);
        }

    }, [selected])




    return (

    <div className='competences' id="competences">
      <h1>Compétences</h1>
      <ul>
        {list.map((item) =>(
            <CompetencesList
             title={item.title} 
             active={selected === item.id} 
             setSelected={setSelected}
             id={item.id}
            />
        ))}
      </ul>

      <div className='container'>
          {data.map((d) => (
            <div className='item'>
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))}

      </div>

    </div>       

    )
}
