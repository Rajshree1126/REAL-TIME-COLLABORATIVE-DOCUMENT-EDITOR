import React from 'react';
import Editor from './components/Editor';

function App() {
  // For demo: use fixed document ID
  const DOCUMENT_ID = "example-doc-1";

  return (
    <div style={{ maxWidth: 800, margin: '20px auto', padding: 20 }}>
      <h1>Collaborative Document Editor</h1>
      <Editor documentId={DOCUMENT_ID} />
    </div>
  );
}

export default App;
