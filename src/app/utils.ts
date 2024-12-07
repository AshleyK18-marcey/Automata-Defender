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