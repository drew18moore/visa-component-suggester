import { Input, InputContainer, Utility } from "@visa/nova-react";

const ID = "prompt-input";
const Prompt = ({ onSubmit }: { onSubmit: (code: string) => void }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get(ID) as string;
    console.log(query);
    const res = await fetch(
      `http://localhost:3000/api/v1/generate?prompt=${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    onSubmit(data.code);
  };

  return (
    <Utility style={{ 
      position: "fixed",
      bottom: "0",
      width: '100%', 
      margin: '0 auto',
      padding: 'var(--size-scalable-16) var(--size-scalable-16)',
      gap: "1rem"
    }}>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Input type="text" placeholder="Ask to build..." id={ID} name={ID} style={{
            fontSize: "1.25rem",
            padding: ".5rem",
            width: "100%"
          }} />
        </InputContainer>
      </form>
    </Utility>
  );
};

export default Prompt;
