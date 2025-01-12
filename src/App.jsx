import { Button } from "../components/button/Button";
import "./App.css";
import "../components/colors.css";
import { Header } from "../components/header/Header";
import { useState } from "react";

function App() {
  const [visibleColor, setVisibleColor] = useState(null);

  const bodyBg = document.getElementById("root-div");

  function showTextToggler(colorName) {
    setVisibleColor(visibleColor === colorName ? null : colorName);

    bodyBg.style.backgroundColor = colorName;
  }

  return (
    <>
      <Header></Header>
      <div id="root-div">
        <Button
          onClickHandler={() => showTextToggler("red")}
          btnLabel="Pick me"
          style={{ backgroundColor: "var(--red)" }}
          colorName="red"
          isVisible={visibleColor === "red"}
        />
        <Button
          onClickHandler={() => showTextToggler("green")}
          btnLabel="Pick me"
          style={{ backgroundColor: "var(--green)" }}
          colorName="green"
          isVisible={visibleColor === "green"}
        />
        <Button
          onClickHandler={() => showTextToggler("blue")}
          btnLabel="Pick me"
          style={{ backgroundColor: "var(--blue)" }}
          colorName="blue"
          isVisible={visibleColor === "blue"}
        />
        <Button
          onClickHandler={() => showTextToggler("yellow")}
          btnLabel="Pick me"
          style={{ backgroundColor: "var(--yellow)" }}
          colorName="yellow"
          isVisible={visibleColor === "yellow"}
        />
        <Button
          onClickHandler={() => showTextToggler("purple")}
          btnLabel="Pick me"
          style={{ backgroundColor: "var(--purple)" }}
          colorName="purple"
          isVisible={visibleColor === "purple"}
        />
        <Button
          onClickHandler={() => showTextToggler("orange")}
          btnLabel="Pick me"
          style={{ backgroundColor: "var(--orange)" }}
          colorName="orange"
          isVisible={visibleColor === "orange"}
        />
        <Button
          onClickHandler={() => showTextToggler("cyan")}
          btnLabel="Pick me"
          style={{ backgroundColor: "var(--cyan)" }}
          colorName="cyan"
          isVisible={visibleColor === "cyan"}
        />
        <Button
          onClickHandler={() => showTextToggler("pink")}
          btnLabel="Pick me"
          style={{ backgroundColor: "var(--pink)" }}
          colorName="pink"
          isVisible={visibleColor === "pink"}
        />
        <Button
          onClickHandler={() => showTextToggler("brown")}
          btnLabel="Pick me"
          style={{ backgroundColor: "var(--brown)" }}
          colorName="brown"
          isVisible={visibleColor === "brown"}
        />
        <Button
          onClickHandler={() => showTextToggler("gray")}
          btnLabel="Pick me"
          style={{ backgroundColor: "var(--gray)" }}
          colorName="gray"
          isVisible={visibleColor === "gray"}
        />
      </div>
      <Button
        onClickHandler={() => {
          setVisibleColor(null);
          const bodyBg = document.getElementById("root-div");

          if (bodyBg) {
            bodyBg.style.backgroundColor = "var(--white)";
          }
        }}
        btnLabel="Reset"
        style={{
          backgroundColor: "var(--resetBtn)",
          width: "80%",
          height: "60px",
        }}
      />
    </>
  );
}

export default App;
