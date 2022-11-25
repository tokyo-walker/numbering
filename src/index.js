import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

export default function Numbering() {
  const [number, setNumber] = useState(0);
  return (
    <section className="box">
      <button className="button" onClick={() => setNumber(number+1)}>+</button>
      <span className="number">{number}</span>
      <button className="button" onClick={() => setNumber(number-1)}>-</button>

      <span>This is test</span>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Numbering/>);
