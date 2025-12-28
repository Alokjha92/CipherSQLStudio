import React from "react";

const assignments = [
  {
    id: 1,
    title: "Students above 80 marks",
    difficulty: "Easy",
    description: "Select students whose marks are more than 80",
  },
];

export default function AssignmentList({ onSelect }) {
  return (
    <div>
      <h2>Assignments</h2>
      {assignments.map((a) => (
        <div key={a.id}>
          <h3>{a.title}</h3>
          <p>{a.description}</p>
          <button onClick={() => onSelect(a)}>Attempt</button>
        </div>
      ))}
    </div>
  );
}
