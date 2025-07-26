import { Utility } from "@visa/nova-react";
import { CopyBlock, dracula } from 'react-code-blocks';
import formatCode from "../utils/formatCode";
import { useEffect, useState } from "react";

const CodeBlock = ({ code }: { code: string }) => {
  const [formattedCode, setFormattedCode] = useState(code);

  useEffect(() => {
    (async () => {
      const res = await formatCode(code)
      setFormattedCode(res);
    })()
  }, [code])
  
  return (
    <Utility vPadding={16}>
      <CopyBlock
        text={formattedCode}
        language="jsx"
        showLineNumbers
        customStyle={{ textAlign: "left" }}
        theme={dracula}
      />
    </Utility>
  )
}

export default CodeBlock;