export default function makeHeadLine(text) {
  return text
    .split(' ')
    .map((word) => {
      return capitalizeFirstLetter(word);
    })
    .join(' ');
}

export function capitalizeFirstLetter(word) {
  if (word === undefined || word === null) {
    throw new Error('empty word');
  }

  return `${word[0].toUpperCase()}${word.substr(1, word.length)}`;
}