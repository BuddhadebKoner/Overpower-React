import React, { useState, useEffect } from "react";
import Buttons from "./components/Buttons";

function App() {
  const [color, setColor] = useState("");

  useEffect(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  }, []);

  return (
    <>
      <div
        className="Main-container w-full h-screen duration-500"
        style={{ backgroundColor: `#${color}` }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
            <Buttons Color="7ae582" setColor={setColor} />
            <Buttons Color="1a659e" setColor={setColor} />
            <Buttons Color="d62828" setColor={setColor} />
            <Buttons Color="540b0e" setColor={setColor} />
            <Buttons Color="00bbf9" setColor={setColor} />
            <Buttons Color="2a9d8f" setColor={setColor} />
            <Buttons Color="9b5de5" setColor={setColor} />
            <Buttons Color="fca311" setColor={setColor} />
            <Buttons Color="52796f" setColor={setColor} />
            <Buttons Color="353535" setColor={setColor} />
            <Buttons Color="1c7293" setColor={setColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
