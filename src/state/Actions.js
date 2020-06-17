export const CHANGE_GAME_GENERATION = "CHANGE_GAME_GENERATION";

export function changeGameGeneration(gameGeneration) {
  return { type: CHANGE_GAME_GENERATION, payload: gameGeneration };
}
