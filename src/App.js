import React, { useState } from "react";
import Editor from "./components/Editor";
import Html from "./components/Html";
import "./App.css";

function App() {
  const defaultMarkdown = `
# This is a h1 element
## This is a h2 element 

[Click here for my random quote machine](https://novaarcc.github.io/fCC-project-1/)

This is inline code: \`<div></div>\`

\`\`\`javascript
// This is a code block
function helloWorld() {
  console.log("Hello, World!");
}
\`\`\`

- List item 1
- List item 2
  - Nested list item

> Blockquotes are used for quoting text.

### This is a smaller image of Lisa Simpson
![Lisa Simpson](https://example.com/path-to-lisa.png)

**Bold Text Example**
`;

  const [input, setInput] = useState(defaultMarkdown);

  return (
    <div className="App">
      <Editor input={input} setInput={setInput} />
      <Html input={input} />
    </div>
  );
}

export default App;




