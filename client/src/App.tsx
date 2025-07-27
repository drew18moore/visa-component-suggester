import { useState } from "react";
import Prompt from "./components/Prompt";
import CodeBlock from "./components/CodeBlock";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";

function App() {
  const [code, setCode] = useState<string>("");
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
        }}
      >
        <Navbar setCode={setCode} />
      </header>
      <main>
        {!code && <Greeting />}
        <Prompt code={code} setCode={setCode} />
        {code && <CodeBlock code={code} />}
      </main>
    </div>
  );
}

export default App;
