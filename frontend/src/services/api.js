export const fetchGameData = async () => {
  try {
    const response = await fetch('/api/game-data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching game data:', error);
    throw error;
  }
};