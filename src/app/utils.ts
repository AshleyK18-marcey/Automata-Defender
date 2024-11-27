export const generateNumbers = (count = 100) => {
    return Array(count)
      .fill(0)
      .map(() => Math.floor(Math.random() * 10))
      .join('');
  };
  