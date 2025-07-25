import { Utility } from "@visa/nova-react";
import { CopyBlock, dracula } from 'react-code-blocks';

const CodeBlock = ({ code }: { code: string }) => {
  return (
    <Utility vPadding={16}>
      <CopyBlock
        text={code}
        language="jsx"
        showLineNumbers
        customStyle={{ textAlign: "left" }}
        theme={dracula}
      />
    </Utility>
  )
}

export default CodeBlock;