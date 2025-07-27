import { Button, Input, InputContainer, Utility } from "@visa/nova-react";
import { useRef } from "react";

const ID = "prompt-input";
const Prompt = ({
  code,
  onSubmit,
}: {
  code: string;
  onSubmit: (code: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get(ID) as string;
    const queryTrimmed = query.trim();
    if (queryTrimmed.length === 0) {
      onSubmit("");
      return;
    }

    const res = await fetch(
      `http://localhost:3000/api/v1/generate?prompt=${queryTrimmed}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    onSubmit(data.code || "");

    if (data.code) {
      const store = localStorage.getItem("prompts")
      if (!store) {
        localStorage.setItem("prompts", JSON.stringify([{ prompt: queryTrimmed, code: data.code }]))
        return;
      };

      const parsedStore = JSON.parse(store) as Prompt[];
      if (parsedStore.some(item => item.prompt === queryTrimmed)) return;

      localStorage.setItem("prompts", JSON.stringify([...parsedStore, { prompt: queryTrimmed, code: data.code }]))
    }
  };

  const suggestedPrompts: string[] = [
    "login form with remember me",
    "top navigation bar with logo and profile avatar",
    "confirmation dialog",
  ];

  return (
    <Utility
      vFlex
      vFlexCol
      vGap={10}
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        margin: "0 auto",
        padding: "var(--size-scalable-16) var(--size-scalable-16)",
        zIndex: "10",
      }}
    >
      {code.length === 0 && (
        <Utility vFlex vJustifyContent="center" vGap={10}>
          {suggestedPrompts.map((p, i) => (
            <Button
              onClick={() => {
                if (inputRef.current && formRef.current) {
                  inputRef.current.value = p;
                  formRef.current.dispatchEvent(
                    new Event("submit", { cancelable: true, bubbles: true })
                  );
                }
              }}
              colorScheme="secondary"
              style={{
                padding: "1.5rem",
              }}
              key={`suggested-${i}`}
            >
              {p}
            </Button>
          ))}
        </Utility>
      )}
      <form ref={formRef} onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            placeholder="Ask to build..."
            id={ID}
            name={ID}
            ref={inputRef}
            style={{
              fontSize: "1.25rem",
              padding: "var(--size-scalable-16)",
              width: "100%",
            }}
          />
        </InputContainer>
      </form>
    </Utility>
  );
};

export default Prompt;
