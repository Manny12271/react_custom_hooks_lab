import React from "react";
import Form from "./Form";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // horizontal center
        alignItems: "center",     // vertical center
        height: "100vh",          // full viewport height
        width: "100vw",           // full viewport width
        backgroundColor: "#e0e0e0", // light gray background
        margin: 0,
      }}
    >
      <Form />
    </div>
  );
}