import * as prettier from "prettier/standalone"
import * as parserBabel from "prettier/parser-babel";
import prettierPluginEstree from "prettier/plugins/estree";

const formatCode = async (code: string): Promise<string> => {
  try {
    const formatted = await prettier.format(code, {
      parser: "babel",
      semi: true,
      plugins: [parserBabel, prettierPluginEstree],
      singleQuote: true,
      jsxSingleQuote: false,
      tabWidth: 4
    });
    return formatted
  } catch (err) {
    console.warn("Prettier failed to format code:", err);
    return code;
  }
}

export default formatCode;
