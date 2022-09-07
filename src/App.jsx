import TituloPrincipal from "./components/TituloPrincipal";
import HolaMundo from "./components/HolaMundo";
import Contador from "./components/Contador";

function App() {
  // aqui va toda la logica
  let comision='c8i';

  return (
    // aqui va todo el maquetado y un poquito de js
    <>
      {/*Existen dos formas de escribir un componente, como etiqueta simple o doble */}
      <TituloPrincipal comisionActual={comision} />
      <HolaMundo></HolaMundo>
      {/* <TituloPrincipal></TituloPrincipal> */}
      <hr />
      <Contador></Contador>
    </>
  );
}

export default App;
