import { Input, InputContainer, Typography } from "@visa/nova-react";

const ID = "prompt-input";
const Prompt = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get(ID) as string;
    console.log(query);
    const res = await fetch(`http://localhost:3000/api/v1/generate?prompt=${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="prompt-container">
      <Typography variant="display-1">What can I create for you?</Typography>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Input type="text" placeholder="Ask to build..." id={ID} name={ID} />
        </InputContainer>
      </form>
    </div>
  );
};

export default Prompt;
