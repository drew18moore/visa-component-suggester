import { getComponentAliases, getPropertyAliases } from "../lib/aliases";

const parse = (prompt: string): { componentType: string, properties: string[] } => {
  const normalizedPrompt = prompt.trim().toLowerCase();

  const componentType = extractComponentType(normalizedPrompt, getComponentAliases());
  const properties = extractProperties(prompt, getPropertyAliases())
  return { componentType: componentType || "NOT_FOUND" , properties }
};

const extractComponentType = (prompt: string, aliases: Record<string, string>): string | null => {
  const sortedAliases = Object.keys(aliases).sort(
    (a, b) => b.length - a.length
  );

  for (const alias of sortedAliases) {
    if (prompt.includes(alias)) {
      return aliases[alias];
    }
  }

  return null;
}

const extractProperties = (prompt: string, aliases: Record<string, string>): string[] => {
  const matchedProperties = new Set<string>();

  const sortedAliases = Object.keys(aliases).sort((a, b) => b.length - a.length);
  console.log(sortedAliases);
  for (const alias of sortedAliases) {
    const pattern = new RegExp(`\\b${alias}\\b`, "i");
    if (pattern.test(prompt)) {
      matchedProperties.add(aliases[alias]);
    }
  }

  return Array.from(matchedProperties);
}

export default parse;
