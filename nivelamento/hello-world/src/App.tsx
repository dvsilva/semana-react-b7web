import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const App = () => {
  // let name = "Danyllo";
  // let age = 90;

  const [name, setName] = useState("Danyllo");
  const [age, setAge] = useState(90);
  const [bg, setBg] = useState("#FF0000");

  const [list, setList] = useState([
    "o rato roeu a roupa do rei de roma",
    "aqui vai uma fase poética",
    "a inspiração desse programador é pouca"
  ])

  const handleClick = () => {
    setBg("#0000FF");
    // alert("clicou na função.");
  }

  const handle20 = () => {
    setAge(20);
    setBg("#00FF00");
  }

  const handle90 = () => {
    setAge(90);
    setBg("#FF0000");
  }

  return (
    <div style={{ backgroundColor: bg }}>
      <Header name={name} age={age} />

      {age === 90 &&
        <button onClick={handle20}>Tenho 20 anos</button>}
      {age === 20 &&
        <button onClick={handle90}>Tenho 90 anos</button>}

      {age > 30 && "Eu sou maior que 30 anos"}

      <button onClick={handleClick}>Clique aqui</button>

      <hr />

      <ul>
        {list.map((frase, index) => (
          <li key={index}>{frase}</li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
