import React, { useEffect, useState } from "react";
import { useAllPlanetStore } from "../stores/PlanetStore";
import { usePlanetStore } from "../stores/PlanetStore";
import { useNavigate } from "react-router-dom";
import '../styles/planets.css'

export const Planets = () => {
  const planets = useAllPlanetStore((state) => state.planets);
  const fetchPlanets = useAllPlanetStore((state) => state.PlanetsFetch);
  const fetchSinglePlanet = usePlanetStore((state) => state.PlanetFetch);

  const nav = useNavigate();

  let planetOption = {
    method: "GET",
    url: "",
    headers: {
      "X-RapidAPI-Key": "92eae0a88bmsh685cf79f519bb47p1e4490jsna7cb10bbee3b",
      "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  if (planets.length <= 0) {
    return <div className="loader">
      <h1>Loading Planets...</h1>
    </div>
  }

  const handlePlanetURL = (e) => {
    planetOption.url = `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/${e.target.value}`;
    fetchSinglePlanet(planetOption);
  };

  const handlenav = () => {
    nav("/details");
  };

  return (
    <div className="planets">
      <h1 className="planets-heading">The Family of the Sun!</h1>
      {planets.map((planet, index) => (
        <div className="planet" key={index}>
          <h1>{planet.name}</h1>
          <img id={planet.name} className="planet-image" src={planet.imgSrc[0].img} alt={planet.imgSrc[0].imgDescription} />
          <button className="knowmore"
            value={planet.key}
            onClick={(e) => {
              handlePlanetURL(e);

              handlenav();
            }}
          >
            Know More!
          </button>
        </div>
      ))}
    </div>
  );
};
