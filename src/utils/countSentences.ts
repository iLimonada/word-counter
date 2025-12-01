const countSentences = (text: string = "") => {
  if (!text) return 0;

  const result = text
    .split(/[.?!]+/)
    .filter(sentence => sentence.trim() !== '');

  return result.length;
};

export default countSentences;