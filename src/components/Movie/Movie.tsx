// @ts-nocheck

import React, { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./Movie.css";

const Movie = () => {

    const colors = ["#18254F"]; // Substitua pelas cores
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const location = useLocation();
    const [frames, setFrames] = useState(location?.state?.frames || []);
    const [frameRate, setFrameRate] = useState(location?.state?.frameRate || 2);
    const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true); // Controla se a animação está rodando

    const navigate = useNavigate();
    const restartAnimation = () => {
        setCurrentFrameIndex(0); // Reinicia o índice do frame
        setIsAnimating(false); // Pausa a animação antes de reiniciar
        setTimeout(() => setIsAnimating(true), 0); // Reinicia a animação
    };

    useEffect(() => {
        const changeBackground = () => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Muda para a próxima cor
        };

        const intervalId = setInterval(changeBackground, 4000); // Muda a cada 400ms

        // Limpa o intervalo ao desmontar o componente
        return () => {
            clearInterval(intervalId);
        };
    }, [colors.length]);

    useEffect(() => {
        // Atualiza o background do body com a cor atual
        document.body.style.backgroundColor = colors[currentColorIndex];

        // Limpa o estilo ao desmontar o componente
        return () => {
            document.body.style.backgroundColor = "";
        };
    }, [currentColorIndex, colors]);

    useEffect(() => {

        document.body.classList.add('movie');

        if (!isAnimating) return; // Não faz nada se a animação estiver pausada

        let frameIndex = 0;
        const id = setInterval(() => {
            setCurrentFrameIndex((prevIndex) => {
                if (prevIndex + 1 >= frames.length) {
                    clearInterval(id); // Para a animação no último frame
                    return prevIndex;
                }
                return prevIndex + 1; // Avança para o próximo frame
            });
            frameIndex++;
        }, 1000 / frameRate);

        return () => {
            clearInterval(id);
            document.body.classList.remove('movie');
        }
    }, [frames, frameRate, isAnimating]);


    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                color: "white",
                flexDirection: "column",
            }}
        >
            <h2>Edgar Allan Poe</h2>
            <h1>The Raven</h1>
            <div
                style={{
                    width: "750px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}
            >
                <img
                    src={frames[currentFrameIndex]?.src}
                    alt={`Frame ${frames[currentFrameIndex]?.id}`}
                    style={{width: "100%", height: "auto"}}
                />

            </div>
            <div className="controls">
                <button
                    onClick={() =>
                        navigate("/play", {
                            state: {frames},
                        })
                    }
                >
                    Back to Editor
                </button>


                {/* Botão para reiniciar a animação */}
                <button
                    onClick={restartAnimation}
                >
                    Restart Animation
                </button>
            </div>
        </main>
    );
};

export default Movie;