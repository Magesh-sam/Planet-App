import React from "react";
import { usePlanetStore } from "../stores/PlanetStore";
import { useNavigate} from 'react-router-dom'
import '../styles/planetDetails.css'

export default function PlanetDetails() {
  const Planet = usePlanetStore((state) => state.planet);

  const nav = useNavigate();

  if (Planet.length <= 0) {
    return <div className="loader">
      <h1>Loading Planet...</h1>
    </div>
  }

  console.log(Planet)
  return (
    <div className="details">
      <div className="container">
        <h1 id="planetname" className="planet-heading">{Planet.name}</h1>
        <img className="planet-img" src={Planet.imgSrc[0].img} alt={Planet.imgSrc[0].imgDescription} />
        <div className="planet-weight">
              <h3>Mass: {Planet.basicDetails[0].mass}</h3>
              <h3>Volume: {Planet.basicDetails[0].volume}</h3>
        </div>
        <p className="desc" >
          <span className="desc-title">Description:</span> {Planet.description}
        </p>
        <h3 className="order">
          Planet order in the Sun family: {Planet.planetOrder}
        </h3>
        <button onClick={()=>{ nav('/');window.location.reload() }} className="goback" >Go Back!</button>
      </div>
    </div>
  );
}
