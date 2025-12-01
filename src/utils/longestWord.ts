const longestWord = (text: string = "") => {
  if (!text) return 0;

  let longestWord = '';

  const words = text.split(/\s+/)
  
  for(let word of words) {
    const regex = /[.?!,']/
    const replacedWord = word.replace(regex, '')

    if(replacedWord.length > longestWord.length) {
        longestWord = replacedWord
    }
  }
  return longestWord
};

export default longestWord;