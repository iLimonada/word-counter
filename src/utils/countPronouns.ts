const PRONOUNS = [
  "eu",
  "nós",
  "você",
  "ele",
  "ela",
  "eles",
  "mim",
  "nos",
  "ela",
  "ele",
  "eles",
  "meu",
  "nosso",
  "seu",
  "dela",
  "dele",
  "deles"
];

const countPronouns = (text: string = "") => {
  if (!text) return 0;

  let count = 0;

  const words = text.split(/\s+/)

  for(let word of words) {
    const regex = /[.?!,']/
    const replacedWord = word.replace(regex, '')

    if(PRONOUNS.includes(replacedWord.toLowerCase())) {
      count++;
    }
  }
  return count;
}

export default countPronouns;
