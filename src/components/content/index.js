import React, { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";
import { CharacterLayout } from "../sw-character-layout";
import { CharacterList } from "../sw-character-list";

import { Select } from "../sw-select";

export const Content = () => {
  const [tab, setTab] = useState("Characters");

  const handleChangeTab = (e) => {
    setTab(e.target.value);
  };

    return (
    <div className="content-layout">
      <Select tab={tab} handleChangeTab={handleChangeTab} />

      {tab === "Players" &&
        swCharacters.map((character) => (
          <CharacterLayout key={character.name} item={character}>
            <CharacterList label="name" item={character.name} />
            <CharacterList label="National" item={character.gender} />
            <CharacterList label="birth year" item={character.birth_year} />
          </CharacterLayout>
        ))}

      {tab === "Coach" &&
        swPlanets.map((planet) => (
          <CharacterLayout key={planet.name} item={planet}>
            <CharacterList label="name" item={planet.name} />
            <CharacterList label="National: " item={planet.terrain} />
            <CharacterList label="Birthday: " item={planet.climate} />
          </CharacterLayout>
        ))}
      {tab === "Clubs" &&
        swStarships.map((starships) => (
          <CharacterLayout key={starships.name} item={starships}>
            <CharacterList label="name: " item={starships.name} />
            <CharacterList label="National: " item={starships.crew} />
          </CharacterLayout>
        ))}  
    </div>
  );
};
