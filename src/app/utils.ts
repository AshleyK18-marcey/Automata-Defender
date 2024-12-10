import { GridDotProps } from "./Components/Definitions";

export const generateNumbers = (count = 100) => {
  return Array(count)
    .fill(0)
    .map(() => Math.floor(Math.random() * 10))
    .join('');
};

export const generateLanguage = (difficulty: string): string => {
  const easyLang = ['{w \u2208 {0,1}| each 1 in w is immediately preceded and immediately followed by a 0 }']
  /*
  switch(difficulty){
    case 'easy' :
      const index = Math.floor(Math.random() * 2)
      return easyLang[index];
      break;
  }
  return 'none';
  */
 return easyLang[0];
}

export const generateGrid = (boxLeft: number, boxTop: number): GridDotProps[] => {
  const gridSpacing = 126; // Spacing between grid dots
  const rows = 3;          // Number of rows
  const cols = 6;          // Number of columns

  const grid: GridDotProps[] = [];
  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          grid.push({
              id: `${row}-${col}`, // Unique ID for each dot
              x: boxLeft + col * gridSpacing, // X relative to the box
              y: boxTop + row * gridSpacing, // Y relative to the box
              state: undefined,
              edge: [],
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

export const isWithinThreshold = (x: number, y: number, threshold: number) =>{
  return Math.abs(x - y) === threshold;
}