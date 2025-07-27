import { CopyBlock, dracula } from "react-code-blocks";
import formatCode from "../utils/formatCode";
import { useEffect, useState } from "react";
import { Typography, Utility } from "@visa/nova-react";

const CodeBlock = ({ currentPrompt }: { currentPrompt: Prompt }) => {
  const [formattedCode, setFormattedCode] = useState(currentPrompt.code);

  useEffect(() => {
    (async () => {
      const res = await formatCode(currentPrompt.code);
      setFormattedCode(res);
    })();
  }, [currentPrompt.code]);

  return (
    <Utility vFlex vFlexCol vGap={5}>
      <Typography variant="headline-2">React Code</Typography>
      <CopyBlock
        text={formattedCode}
        language="jsx"
        showLineNumbers
        theme={dracula}
      />
    </Utility>
  );
};

export default CodeBlock;
