
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/components/prism-jsx";
import prism from "prismjs";
import { useState } from 'react';
import Editor from "react-simple-code-editor";


function App() {
  useEffect(() => {
    prism.highlightAll()
  })


 async function reviewCode(){
  const response = await axios.post('http://localhost:5000/get-review', { code });
  console.log(response.data);
  }

  const [code, setCode] = useState(`function sum(){
  return 1+1}`)

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 18,
                // border: "0.1px dotted #ccc",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />

          </div>
          <div className="btn" onClick={reviewCode}>
            Review the Code
          </div>
        </div>
        <div className="right">

        </div>
      </main>
    </>
  )
}



export default App
