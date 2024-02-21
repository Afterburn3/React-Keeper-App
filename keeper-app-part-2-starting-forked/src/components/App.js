import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((array) => {
        return (
          <Note title={array.title} content={array.content} key={array.key} />
        );
      })}

      <Footer />
    </>
  );
}

export default App;
