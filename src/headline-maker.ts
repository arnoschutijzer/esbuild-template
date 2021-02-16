export default function makeHeadLine(text: String): String {
  return text
    .split(' ')
    .map((word) => {
      return capitalizeFirstLetter(word);
    })
    .join(' ');
}

export function capitalizeFirstLetter(word: String): String {
  return `${word[0].toUpperCase()}${word.substr(1, word.length)}`;
}