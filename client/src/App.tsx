import { useState } from 'react'
import Prompt from './components/Prompt'
import CodeBlock from './components/CodeBlock';
import Navbar from './components/Navbar';

function App() {
  const [code, setCode] = useState<string>();
  return (
    <div className='v-border'>
    <header>
      <Navbar />
    </header>
      <main>
        <Prompt onSubmit={setCode} />
        {code && <CodeBlock code={code} />}
      </main>
    </div>
  )
}

export default App
