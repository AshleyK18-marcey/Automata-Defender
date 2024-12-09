import { GridDotProps } from "./Components/Definitions";

export const generateNumbers = (count = 100) => {
  return Array(count)
    .fill(0)
    .map(() => Math.floor(Math.random() * 10))
    .join('');
};

export const generateLanguage = (difficulty: string): string => {
  const easyLang = ['{w \u2208 {0,1}| every odd position of w is a 1}', '{w \u2208 {0,1} | w does not contain consective 0s}']
  switch(difficulty){
    case 'easy' :
      const index = Math.floor(Math.random() * 2)
      return easyLang[index];
      break;
  }
  return 'none';
}

export const generateGrid = (): GridDotProps[] => {
  const startX = 710;
  const startY = 348;
  const gridSpacing = 126;
  const grid: GridDotProps[] = [];
  for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 5; col++) {
          grid.push({
              id: `${row}-${col}`, // Unique ID for each dot
              x: startX + col * gridSpacing, // Calculate X position
              y: startY + row * gridSpacing, // Calculate Y position
              state: undefined,
              edge: []
          });
      }
  }
  return grid;
};

export const generateUUID = (): string => {
  // Generate a random UUID (v4-compliant)
  return 'xxx4-xxxy-edge'.replace(/[xy]/g, function (char) {
      const random = Math.random() * 16 | 0; // Random number between 0 and 15
      const value = char === 'x' ? random : (random & 0x3 | 0x8); // Use specific bitmask for 'y'
      return value.toString(16); // Convert to hexadecimal
  });
}