import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { displayPartsToString } from "typescript";

export default function ScientificCalculator({ isOpen, onClose }) {
  const [input, setInput] = useState("0");


  const handleClick = (value) => {
    if (input === "0") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const clearInput = () => setInput("0");

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const functions = {
    sin: () => setInput(Math.sin(parseFloat(input)).toString()),
    cos: () => setInput(Math.cos(parseFloat(input)).toString()),
    tan: () => setInput(Math.tan(parseFloat(input)).toString()),
    log: () => setInput(Math.log10(parseFloat(input)).toString()),
    ln: () => setInput(Math.log(parseFloat(input)).toString()),
    "√x": () => setInput(Math.sqrt(parseFloat(input)).toString()),
    "x²": () => setInput(Math.pow(parseFloat(input), 2).toString()),
    pi: () => setInput(Math.PI.toString()),
  };

  const buttonStyle = {
    padding: "10px",
    margin: "5px",
    width: "60px",
    height: "50px",
    fontSize: "18px",
    backgroundColor: "#444",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const containerStyle = {
    position: 'absolute',
    right: 3,
    bottom: 5,
    top: 5,
    display: isOpen ? "block" : 'none',
    maxWidth: "300px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#222",
    borderRadius: "10px",
    textAlign: "center",
  };

  const displayStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: "right",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#333",
    borderRadius: "5px",
    fontSize: "20px",
    minHeight: "50px",
    color: "white",
    marginTop: '6px'
  };

  return (
    <div style={containerStyle}>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '10px', cursor: 'pointer', color: '#fff', fontSize: '25px'}} onClick={onClose}>
            <IoMdClose />
        </div>
      <div style={displayStyle}>{input}</div>
      <div style={{marginTop: '20px'}}>
        {["sin", "cos", "tan", "log", "ln", "√x", "x²", "pi"].map((func) => (
          <button
            key={func}
            style={buttonStyle}
            onClick={() => functions[func]()}
          >
            {func}
          </button>
        ))}
      </div>
      <div style={{marginTop: '10px'}}>
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <button
            key={char}
            style={buttonStyle}
            onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
          >
            {char}
          </button>
        ))}
        <button style={{...buttonStyle, width: '90%'}} onClick={clearInput}>CLEAR</button>
      </div>
    </div>
  );
}
