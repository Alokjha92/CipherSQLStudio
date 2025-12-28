import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

export default function AssignmentAttempt({ assignment }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const executeQuery = async () => {
    try {
      const res = await axios.post("http://localhost:5000/execute", { query });
      setResult(res.data);
    } catch (err) {
      alert(err.response?.data?.error || "Error executing query");
      setResult([]);
    }
  };

  return (
    <div>
      <h2>{assignment.title}</h2>
      <p>{assignment.description}</p>

      <Editor
        height="200px"
        defaultLanguage="sql"
        value={query}
        onChange={(value) => setQuery(value)}
      />

      <button onClick={executeQuery}>Execute Query</button>

      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
