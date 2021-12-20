import React from 'react'
import "./portfolio.scss"
import Fleche from "../../assets/svg/chevron-down-solid.svg"
import restaurant from "../../assets/images/restaurant.png"
import maison from "../../assets/images/maison_hote.png"
import advance from "../../assets/images/advance.png"
import bijoux from "../../assets/images/bijoux.png"
import { useState } from "react"


export default function Portfolio() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      title: "Indian Palace",
      img: restaurant,
      desc: "Donec cursus aliquet dolor, vitae fermentum lorem fermentum eget."
    },
    {
      id: 2,
      title: "Dar Antonia",
      img: maison,
      desc: "Donec cursus aliquet dolor, vitae fermentum lorem fermentum eget."
    },
    {
      id: 3,
      title: "Advance Acoustic",
      img: advance,
      desc: "Donec cursus aliquet dolor, vitae fermentum lorem fermentum eget."
    },
    {
      id: 4,
      title: "Céline Accessoire",
      img: bijoux,
      desc: "Donec cursus aliquet dolor, vitae fermentum lorem fermentum eget."
    }
  ]

  const handleClick = (way) =>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3) : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
  };

return (
 <div className='portfolio' id="portfolio">
     <h1>Réalisations</h1>

   <div className='slider' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>

      {data.map((d) =>(

      <div className='container'>
        <div className='item'>

           <div className='left'>
              <div className='leftContainer'>
                  <h2>{d.title}</h2>
              </div>
           </div>

           <div className='right'>
               <img src={d.img} alt="site"/>
           </div>
        </div>
      </div>
      ))}

   </div>

   <img src={Fleche} className='arrow left' alt="fleche" onClick={()=>handleClick("left")} />
   <img src={Fleche} className='arrow right' alt="fleche" onClick={()=>handleClick()} />
 </div>
)
}
