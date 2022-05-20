import React, { useState } from 'react'
import { decrypt } from './caesar'
import './css/App.css'

type ResultTextAreaProps = {
  text: string
}

const ResultTextArea: React.FC<ResultTextAreaProps> = props => {
  return (
    <>
    </>
  )
}

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  function test() {
    const dec = decrypt(input, 1)
    setResult(dec)
  }

  return (
    <div className="container sf-site-all">
      <section className='section sf-site-content'>
        <div className='columns'>
          <div className='column'>
            <p>Input</p>
            <textarea
              className='code-text'
              placeholder='Input code you want to decrypt.'
              value={input}
              onChange={(e) => setInput(e.target.value)} />
            <button
              className='button is-info'
              onClick={() => test()}>
              Brute Force
            </button>
          </div>
          <div className='column'>
            <p>Result</p>
            <textarea
              className='code-text'
              value={result}
              onChange={(e) => setResult(e.target.value)} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
