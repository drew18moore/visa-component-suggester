import {
  STOP_WORDS,
  MULTI_WORD_PHRASES,
  CONTRACTIONS,
  PRESERVE_WORDS,
  SYNONYMS,
} from "./tokens";

const tokenize = (input: string): string[] => {
  let text = input.trim();

  text = expandContractions(text);
  text = normalizeText(text);
  text = detectMultiWordPhrases(text);

  let tokens = splitIntoTokens(text);
  tokens = cleanTokens(tokens);
  tokens = removeStopWords(tokens);
  tokens = applySynonyms(tokens);
  tokens = removeDuplicates(tokens);

  return tokens;
};

const expandContractions = (text: string): string => {
  let expanded = text.toLowerCase();
  for (const [contraction, expansion] of CONTRACTIONS) {
    const regex = new RegExp(contraction.replace("'", "\\'"), "gi");
    expanded = expanded.replace(regex, expansion);
  }
  return expanded;
};

const normalizeText = (text: string): string => {
  return (
    text
      // Remove extra whitespace
      .replace(/\s+/g, " ")
      // Handle punctuation (keep hyphens in compound words)
      .replace(/[^\w\s\-']/g, " ")
      .toLowerCase()
      // Clean up spaces around hyphens
      .replace(/\s*-\s*/g, "-")
      .trim()
  );
};

const detectMultiWordPhrases = (text: string): string => {
  let result = text;

  const sortedPhrases = Array.from(MULTI_WORD_PHRASES.entries()).sort(
    (a, b) => b[0].length - a[0].length
  );

  for (const [phrase, replacement] of sortedPhrases) {
    const regex = new RegExp(`\\b${phrase}\\b`, "gi");
    result = result.replace(regex, replacement);
  }

  return result;
};

const splitIntoTokens = (text: string): string[] => {
  return text.split(/\s+/).filter((token) => token.length > 0);
};

const cleanTokens = (tokens: string[]): string[] => {
  return tokens
    .map((token) => {
      // Remove leading/trailing special characters
      token = token.replace(/^[^\w]+|[^\w]+$/g, "");

      if (token.includes("-") && token.length > 1) {
        const parts = token.split("-");
        if (parts.every((part) => part.length > 1)) {
          return token;
        }
      }

      return token;
    })
    .filter((token) => token.length > 0);
};

const removeStopWords = (tokens: string[]): string[] => {
  return tokens.filter((token) => {
    if (PRESERVE_WORDS.has(token)) {
      return true;
    }

    if (STOP_WORDS.has(token)) {
      return false;
    }

    if (token.length === 1 && !/[0-9]/.test(token)) {
      return false;
    }

    return true;
  });
};

const applySynonyms = (tokens: string[]): string[] => {
  return tokens.map((token) => {
    return SYNONYMS.get(token) || token;
  });
};

const removeDuplicates = (tokens: string[]): string[] => {
  const seen = new Set();
  return tokens.filter((token) => {
    if (seen.has(token)) {
      return false;
    }
    seen.add(token);
    return true;
  });
};

export default tokenize;
