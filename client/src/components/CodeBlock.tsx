import formatCode from "../utils/formatCode";
import { useEffect, useState } from "react";
import { Button, Typography, Utility } from "@visa/nova-react";
import { CodeBlock } from "react-code-block";
import { VisaCopyLow } from "@visa/nova-icons-react";

const CustomCodeBlock = ({ currentPrompt }: { currentPrompt: Prompt }) => {
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
      <CodeBlock code={formattedCode} language="jsx">
        <Utility
          style={{
            position: "relative",
          }}
        >
          <CodeBlock.Code
            style={{
              backgroundColor: "oklch(0.21 0.034 264.665)",
              overflowX: "auto",
              padding: "1rem",
            }}
          >
            <Utility
              style={{
                display: "table-row",
              }}
            >
              <CodeBlock.LineNumber
                style={{
                  display: "table-cell",
                }}
              />
              <CodeBlock.LineContent
                style={{
                  display: "table-cell",
                }}
              >
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </Utility>
          </CodeBlock.Code>
          <Button
            colorScheme="tertiary"
            onClick={() => {
              navigator.clipboard.writeText(currentPrompt.code);
            }}
            style={{
              position: "absolute",
              top: "0.25rem",
              right: "0.25rem",
            }}
          >
            <VisaCopyLow />
          </Button>
        </Utility>
      </CodeBlock>
    </Utility>
  );
};

export default CustomCodeBlock;
