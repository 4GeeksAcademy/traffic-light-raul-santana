import React, { useState } from "react";

const Semaforo = () => {

    const [encender, setEncender] = useState("Rojo");

    const cambioColor = (color) => {
        setEncender(color);
    };

    const alternarColor = () => {
        if (encender === "Rojo") {
            setEncender("Amarillo");
        } else if (encender === "Amarillo") {
            setEncender("Verde");
        } else if (encender === "Verde") {
            setEncender("Rojo");
        }
    };

    return (
        <div className="Contenedor">
            <div className="base-semaforo"></div>
            <div className="base-luces">
                <div 
                    className={`Rojo ${encender === "Rojo" ? "luz-encendida" : ""}`}
                    onClick={() => cambioColor("Rojo")}
                ></div>
                <div 
                    className={`Amarillo ${encender === "Amarillo" ? "luz-encendida" : ""}`}
                    onClick={() => cambioColor("Amarillo")}
                ></div>
                <div 
                    className={`Verde ${encender === "Verde" ? "luz-encendida" : ""}`}
                    onClick={() => cambioColor("Verde")}
                ></div>
            </div>
            <button onClick={alternarColor}>Cambiar de color</button>
        </div>
    );
};

export default Semaforo;
