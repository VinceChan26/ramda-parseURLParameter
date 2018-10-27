import {
  pipe,
  split,
  tail,
  head,
  fromPairs,
  map,
} from 'ramda';

const decodeURLParams = (search) => {
  const prefixes = search => pipe(tail, split('?'), head)(search);
  const suffixes = search => pipe(tail, split('?'), tail, head)(search);
  const parameters = suffixes => pipe(split('&'), map(split('=')), fromPairs)(suffixes);

  console.log({ prefix: prefixes(search), query: parameters(suffixes(search)) });
  return { prefix: prefixes(search), query: parameters(suffixes(search)) };
};

window.onload = () => {
  document.querySelector('.submit').addEventListener('click', () => {
    const url = document.querySelector('.url').value;
    decodeURLParams(url);
  });
};
