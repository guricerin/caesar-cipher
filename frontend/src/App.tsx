import React, { useState } from 'react'
import { bruteforce, decrypt } from './caesar'
import './css/App.css'

type ResultTextAreaProps = {
  results: string[]
}

const ResultTextArea: React.FC<ResultTextAreaProps> = props => {
  return (
    <ul>
      {props.results.map((res, idx) => {
        return (
          <li>
            <p>{idx + 1} right shift</p>
            <textarea
              className='code-text'
              value={res} />
          </li>
        )
      })}
    </ul>
  )
}

function App() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState<string[]>([])

  function onBruteForce() {
    setResults(bruteforce(input))
  }

  function onClear() {
    setResults([])
  }

  return (
    <div className="container sf-site-all">
      <section className='section sf-site-content'>
        <div className='columns'>
          <div className='column'>
            <h1 className='title'>Input</h1>
            <textarea
              className='code-text'
              placeholder='Input code you want to decrypt.'
              value={input}
              onChange={(e) => setInput(e.target.value)} />
            <nav className='level'>
              <div className='level-left'>
                <div className='level-item'>
                  <button
                    className='button is-info'
                    disabled={input === ''}
                    onClick={() => onBruteForce()}>
                    Brute Force
                  </button>
                </div>
                <div className='level-item'>
                  <button
                    className='button is-info'
                    onClick={() => onClear()}>
                    Clear
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div className='column'>
            <h1 className='title'>Result</h1>
            <ResultTextArea results={results} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
