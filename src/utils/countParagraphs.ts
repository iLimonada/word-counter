const countParagraphs = (text: string = "") => {
  if (!text.trim()) return 0;

  const result = text
    .split('\n')
    .filter(paragraph => 
        paragraph.trim() !== '' 
        && /[a-zA-Z0-9]/.test(paragraph));

  return result.length;
};

export default countParagraphs;