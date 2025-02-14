"use client";
import { Fireworks } from "fireworks-js";
import { useEffect, useRef } from "react";

export default function FireworksComponent() {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            const fireworks = new Fireworks(ref.current, {
                rocketsPoint: 50, // Punto de inicio
                intensity: 5, // Intensidad
                trace: 3, // Rastro
                explosion: 7, // Explosión
                particles: 50, // Cantidad de partículas
                flickering: 50, // Efecto de brillo
            });

            fireworks.start();

            setTimeout(() => {
                fireworks.stop(); // Detener después de 5 segundos
            }, 5000);
        }
    }, []);

    return <div ref={ref} className="w-full h-screen fixed top-0 left-0" />;
}
