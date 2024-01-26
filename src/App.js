import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState(`# Heading 1
  ## Heading 2
  [Link](https://www.example.com)
  \`Inline Code\`
  \`\`\`
  // Code Block
  const example = 'Hello World!';
  \`\`\`
  - List Item 1
  - List Item 2
  > Blockquote
  ![Image](https://www.example.com/image.jpg)
  **Bold Text**`);


  return (
    <div>
      <textarea id="editor" value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
        <div id='preview'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    </div>
  );
}

export default App;
