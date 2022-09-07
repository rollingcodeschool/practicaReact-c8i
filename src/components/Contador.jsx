import { useState } from "react";

const Contador = () => {
let numero =10;
//crear un state
let [numeritos, setNumeritos] = useState(10)

    return (
        <div>
            <h2>Contador</h2>
            <h3>{numeritos}</h3>
            <button onClick={()=>{numero++ }}>+1</button>
        </div>
    );
};

export default Contador;