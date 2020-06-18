import { CHANGE_GAME_GENERATION } from "./Actions";

export const reducer = (state, action) => {
  switch (action.type) {

    case CHANGE_GAME_GENERATION:
      return {
        ...state,
        gameGenerationDetails: { 
          name: action.payload.name,
          mainRegion: action.payload.main_region.name,
          versionGroups: action.payload.version_groups,
          pokemonTypes: action.payload.types,
          pokemonSpecies: action.payload.pokemon_species
        }
      };

    default:
      return state;
      
  }
};
