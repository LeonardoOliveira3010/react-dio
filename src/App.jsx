import React from "react";
// import Card from "./components/Card/Card";
import Counter from "./components/Counter/Counter";
// import Form from "./components/Form/Form";
// import Item from "./components/Item/Item";
// import ListaItem from "./components/ListaItem/Lista";

const Welcome = (props) => <h1>{props.name}</h1>


function App() {
  return (
    <>
      <Welcome name="Leonardo" />
      <p>Seja bem vindo</p>
      {/* <Item/>
      <Card/>

      <ListaItem />

      <Form /> */}

      <Counter />
    </>
  )
}

export default App;
