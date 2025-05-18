import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { io } from "socket.io-client";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["link", "image"],
  ["clean"],
];

const SAVE_INTERVAL_MS = 2000;

function Editor({ docId }) {
  const [value, setValue] = useState("");
  const socketRef = useRef();
  const quillRef = useRef(null);

  useEffect(() => {
    socketRef.current = io("http://localhost:5000");
    socketRef.current.emit("get-document", docId);

    socketRef.current.on("load-document", (document) => {
      setValue(document);
    });

    socketRef.current.on("receive-changes", (delta) => {
      setValue(delta);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [docId]);

  const handleChange = (content, delta, source, editor) => {
    setValue(content);
    if (source === "user") {
      socketRef.current.emit("send-changes", content);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      socketRef.current.emit("save-document", value);
    }, SAVE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [value]);

  // Save as plain text (.txt) by extracting plain text from editor
  function saveAsTxt() {
    const editor = quillRef.current.getEditor();
    const plainText = editor.getText(); // Gets only the plain text without formatting

    const blob = new Blob([plainText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "document.txt";
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <button
        onClick={saveAsTxt}
        style={{ marginBottom: "10px", padding: "8px 12px", cursor: "pointer" }}
      >
        Save as .txt
      </button>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={{ toolbar: TOOLBAR_OPTIONS }}
        placeholder="Start typing here..."
        style={{ height: "400px" }}
      />
    </div>
  );
}

export default Editor;
