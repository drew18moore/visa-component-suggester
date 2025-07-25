import { useState } from 'react'
import './App.css'
import Prompt from './components/Prompt'
import CodeBlock from './components/CodeBlock';

function App() {
  const [code, setCode] = useState<string>();
  return (
    <>
      <main>
        <Prompt onSubmit={setCode} />
        {code && <CodeBlock code={code} />}
      </main>
    </>
  )
}

export default App
