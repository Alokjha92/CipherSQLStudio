import { useState } from "react";
import AssignmentList from "./components/AssignmentList";
import AssignmentAttempt from "./components/AssignmentAttempt";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CipherSQL Studio</h1>

      {!selected && <AssignmentList onSelect={setSelected} />}

      {selected && <AssignmentAttempt assignment={selected} />}
    </div>
  );
}

export default App;
