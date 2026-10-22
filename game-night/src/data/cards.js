import anagrams from './anagrams.json';
import movies from './movies.json';
import questions from './questions.json';

// Each JSON file has its own shape. The game screen wants one simple
// shape for every game, a "card":
//   { hint, prompt, answer }
//   hint   = small text above (e.g. the category), can be empty
//   prompt = the question or word the players see
//   answer = what ΑΠΑΝΤΗΣΗ reveals
const converters = {
  questions: () =>
    questions.map((q) => ({
      hint: q.closestWins ? 'Κερδίζει όποιος πλησιάσει περισσότερο' : '',
      prompt: q.question,
      answer: q.answer,
    })),
  anagrams: () =>
    anagrams.map((a) => ({
      hint: a.category,
      prompt: a.scrambled,
      answer: a.answer,
    })),
  movies: () =>
    movies.map((m) => ({
      hint: '',
      prompt: spaceOut(m.hidden),
      answer: m.answer,
    })),
};

// "Τ_Τ_Ν_Κ_Σ" -> "Τ _ Τ _ Ν _ Κ _ Σ", so every missing vowel is easy
// to count. Inside a word we use a "no-break space" (\u00A0), so a word
// never splits across two lines. Between words we use a wide space (\u2003).
function spaceOut(text) {
  return text
    .split(' ')
    .map((word) => word.split('').join('\u00A0'))
    .join('\u2003');
}

// Mix the cards in a random order (Fisher–Yates shuffle)
function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Returns the cards of one game, in random order
export function getCards(dataFile) {
  const convert = converters[dataFile];
  return convert ? shuffle(convert()) : [];
}
