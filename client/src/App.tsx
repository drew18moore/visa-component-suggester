import { useState } from "react";
import Prompt from "./components/Prompt";
import CodeBlock from "./components/CodeBlock";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";

function App() {
  const [currentPrompt, setCurrentPrompt] = useState<Prompt | null>(null);
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "fixed",
          left: "0",
          right: "0",
          zIndex: 10,
        }}
      >
        <Navbar setCurrentPrompt={setCurrentPrompt} />
      </header>
      <main>
        {!currentPrompt && <Greeting />}
        <Prompt
          currentPrompt={currentPrompt}
          setCurrentPrompt={setCurrentPrompt}
        />
        {currentPrompt && <CodeBlock currentPrompt={currentPrompt} />}
      </main>
    </div>
  );
}

export default App;
