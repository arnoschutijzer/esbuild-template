import makeHeadLine, { capitalizeFirstLetter } from './headline-maker';

describe('capitalizeLetter', () => {
  it('capitalizes first letter of "word"', () => {
    expect(capitalizeFirstLetter('word')).toEqual('Word')
  });

  it('capitalizes first letter of "w"', () => {
    expect(capitalizeFirstLetter('w')).toEqual('W')
  });

  it('capitalizes first letter of ""', () => {
    expect(() => capitalizeFirstLetter()).toThrow()
  });
});

describe('makeHeadLine', () => {
  it('capitalizes first letter of each word of "this is a headline"', () => {
    expect(makeHeadLine('this is a headline')).toEqual('This Is A Headline');
  });

  it('capitalizes first letter of each word of "this IS a HEADLINE"', () => {
    expect(makeHeadLine('this IS a HEADLINE')).toEqual('This IS A HEADLINE');
  });
});