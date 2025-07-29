import { useState } from "react";
import Prompt from "./components/Prompt";
import CustomCodeBlock from "./components/CodeBlock";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import { Utility } from "@visa/nova-react";
import ComponentsList from "./components/ComponentsList";
import WelcomeDialog from "./components/WelcomeDialog";

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
        <Navbar currentPrompt={currentPrompt} setCurrentPrompt={setCurrentPrompt} />
      </header>
      <main>
        {!currentPrompt && <Greeting />}
        <Prompt
          currentPrompt={currentPrompt}
          setCurrentPrompt={setCurrentPrompt}
        />
        {currentPrompt && (
          <Utility
            vFlex
            vFlexCol
            vGap={35}
            vPadding={16}
            style={{
              paddingTop: "5.5rem",
              paddingBottom: "6rem",
            }}
          >
            <CustomCodeBlock currentPrompt={currentPrompt} />
            <ComponentsList components={currentPrompt.components} />
          </Utility>
        )}
        <WelcomeDialog />
      </main>
    </div>
  );
}

export default App;
