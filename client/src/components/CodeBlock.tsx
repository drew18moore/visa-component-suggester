import { Utility } from "@visa/nova-react";
import { CopyBlock, dracula } from "react-code-blocks";
import formatCode from "../utils/formatCode";
import { useEffect, useState } from "react";

const CodeBlock = ({ currentPrompt }: { currentPrompt: Prompt }) => {
  const [formattedCode, setFormattedCode] = useState(currentPrompt.code);

  useEffect(() => {
    (async () => {
      const res = await formatCode(currentPrompt.code);
      setFormattedCode(res);
    })();
  }, [currentPrompt.code]);

  return (
    <Utility
      vPadding={16}
      style={{
        paddingTop: "5.5rem",
        paddingBottom: "6rem"
      }}
    >
      <CopyBlock
        text={formattedCode}
        language="jsx"
        showLineNumbers
        customStyle={{ textAlign: "left" }}
        theme={dracula}
      />
    </Utility>
  );
};

export default CodeBlock;
