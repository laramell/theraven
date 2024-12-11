// @ts-nocheck

import React, { useEffect, useState } from "react";
import FrameCard from "../FrameCard/FrameCard";
import "./Animation.css";
import { useLocation, useNavigate } from "react-router-dom";

const framesOriginals = [
    { id: 1, src: "/assets/frames/Frame 1.jpg" },
    { id: 2, src: "/assets/frames/Frame 2.jpg" },
    { id: 3, src: "/assets/frames/Frame 3.jpg" },
    { id: 4, src: "/assets/frames/Frame 4.jpg" },
    { id: 5, src: "/assets/frames/Frame 5.png" },
    { id: 6, src: "/assets/frames/Frame 6.png" },
    { id: 7, src: "/assets/frames/Frame 7.png" },
    { id: 8, src: "/assets/frames/Frame 8.png" },
    { id: 9, src: "/assets/frames/Frame 9.png" },
    { id: 10, src: "/assets/frames/Frame 10.png" },
    { id: 11, src: "/assets/frames/Frame 11.png" },
    { id: 12, src: "/assets/frames/Frame 12.png" },
    { id: 13, src: "/assets/frames/Frame 13.png" },
    { id: 14, src: "/assets/frames/Frame 14.png" },
    { id: 15, src: "/assets/frames/Frame 15.png" },
    { id: 16, src: "/assets/frames/Frame 16.png" },
    { id: 17, src: "/assets/frames/Frame 17.png" },
    { id: 18, src: "/assets/frames/Frame 18.png" },
    { id: 19, src: "/assets/frames/Frame 19.png" },
    { id: 20, src: "/assets/frames/Frame 20.png" },
    { id: 21, src: "/assets/frames/Frame 21.png" },
    { id: 22, src: "/assets/frames/Frame 22.png" },
    { id: 23, src: "/assets/frames/Frame 23.png" },
    { id: 24, src: "/assets/frames/Frame 24.png" },
    { id: 25, src: "/assets/frames/Frame 25.png" },
    { id: 26, src: "/assets/frames/Frame 26.png" },
    { id: 27, src: "/assets/frames/Frame 27.png" },
    { id: 28, src: "/assets/frames/Frame 28.png" },
    { id: 29, src: "/assets/frames/Frame 29.png" },
    { id: 30, src: "/assets/frames/Frame 30.png" },
    { id: 31, src: "/assets/frames/Frame 31.png" },
    { id: 32, src: "/assets/frames/Frame 32.png" },
    { id: 33, src: "/assets/frames/Frame 33.png" },
    { id: 34, src: "/assets/frames/Frame 34.png" },
    { id: 35, src: "/assets/frames/Frame 35.png" },
    { id: 36, src: "/assets/frames/Frame 36.png" },
    { id: 37, src: "/assets/frames/Frame 37.png" },
    { id: 38, src: "/assets/frames/Frame 38.png" },
    { id: 39, src: "/assets/frames/Frame 39.png" },
    { id: 40, src: "/assets/frames/Frame 40.png" },
    { id: 41, src: "/assets/frames/Frame 41.jpg" },
    { id: 42, src: "/assets/frames/Frame 42.jpg" },
    { id: 43, src: "/assets/frames/Frame 43.jpg" },
    { id: 44, src: "/assets/frames/Frame 44.jpg" },
    { id: 45, src: "/assets/frames/Frame 45.jpg" },
    { id: 46, src: "/assets/frames/Frame 46.jpg" },
    { id: 47, src: "/assets/frames/Frame 47.jpg" },
    { id: 48, src: "/assets/frames/Frame 48.jpg" },
    { id: 49, src: "/assets/frames/Frame 49.jpg" },
    { id: 50, src: "/assets/frames/Frame 50.png" },
    { id: 51, src: "/assets/frames/Frame 51.jpg" },
    { id: 52, src: "/assets/frames/Frame 52.jpg" },
    { id: 53, src: "/assets/frames/Frame 53.jpg" },
    { id: 54, src: "/assets/frames/Frame 54.jpg" },
    { id: 55, src: "/assets/frames/Frame 55.jpg" },
    { id: 56, src: "/assets/frames/Frame 56.jpg" },
    { id: 57, src: "/assets/frames/Frame 57.png" },
    { id: 58, src: "/assets/frames/Frame 58.png" },
    { id: 59, src: "/assets/frames/Frame 59.png" },
    { id: 60, src: "/assets/frames/Frame 60.png" },
    { id: 61, src: "/assets/frames/Frame 61.png" },
    { id: 62, src: "/assets/frames/Frame 62.png" },
    { id: 63, src: "/assets/frames/Frame 63.png" },
    { id: 64, src: "/assets/frames/Frame 64.png" },
    { id: 65, src: "/assets/frames/Frame 65.png" },
    { id: 66, src: "/assets/frames/Frame 66.png" },
    { id: 67, src: "/assets/frames/Frame 67.png" },
    { id: 68, src: "/assets/frames/Frame 68.png" },
    { id: 69, src: "/assets/frames/Frame 69.png" },
    { id: 70, src: "/assets/frames/Frame 70.png" },
    { id: 71, src: "/assets/frames/Frame 71.png" },
    { id: 72, src: "/assets/frames/Frame 72.png" },
    { id: 73, src: "/assets/frames/Frame 73.png" },
    { id: 74, src: "/assets/frames/Frame 74.png" },
    { id: 75, src: "/assets/frames/Frame 75.png" },
    { id: 76, src: "/assets/frames/Frame 76.png" },
    { id: 77, src: "/assets/frames/Frame 77.png" },
    { id: 78, src: "/assets/frames/Frame 78.png" },
    { id: 79, src: "/assets/frames/Frame 79.png" },
    { id: 80, src: "/assets/frames/Frame 80.png" },
    { id: 81, src: "/assets/frames/Frame 81.png" },
    { id: 82, src: "/assets/frames/Frame 82.png" },
    { id: 83, src: "/assets/frames/Frame 83.png" },
    { id: 84, src: "/assets/frames/Frame 84.png" },
    { id: 85, src: "/assets/frames/Frame 85.png" },
    { id: 86, src: "/assets/frames/Frame 86.png" },
    { id: 87, src: "/assets/frames/Frame 87.png" },
    { id: 88, src: "/assets/frames/Frame 88.png" },
    { id: 89, src: "/assets/frames/Frame 89.png" },
    { id: 90, src: "/assets/frames/Frame 90.png" },
    { id: 91, src: "/assets/frames/Frame 91.png" },
    { id: 92, src: "/assets/frames/Frame 92.png" },
    { id: 93, src: "/assets/frames/Frame 93.png" },
    { id: 94, src: "/assets/frames/Frame 94.png" },
    { id: 95, src: "/assets/frames/Frame 95.png" },
    { id: 96, src: "/assets/frames/Frame 96.png" },
    { id: 97, src: "/assets/frames/Frame 97.png" },
    { id: 98, src: "/assets/frames/Frame 98.png" },
    { id: 99, src: "/assets/frames/Frame 99.png" },
    { id: 100, src: "/assets/frames/Frame 100.png" },
    { id: 101, src: "/assets/frames/Frame 101.png" },
    { id: 102, src: "/assets/frames/Frame 102.png" },
    { id: 103, src: "/assets/frames/Frame 103.png" },
    { id: 104, src: "/assets/frames/Frame 104.png" },
    { id: 105, src: "/assets/frames/Frame 105.png" },
    { id: 106, src: "/assets/frames/Frame 106.png" },
    { id: 107, src: "/assets/frames/Frame 107.png" },
    { id: 108, src: "/assets/frames/Frame 108.png" },
    { id: 109, src: "/assets/frames/Frame 109.png" },
    { id: 110, src: "/assets/frames/Frame 110.png" },
    { id: 111, src: "/assets/frames/Frame 111.png" },
    { id: 112, src: "/assets/frames/Frame 112.png" },
    { id: 113, src: "/assets/frames/Frame 113.png" },
    { id: 114, src: "/assets/frames/Frame 114.png" },
    { id: 115, src: "/assets/frames/Frame 115.png" },
    { "id": 116, "src": "/assets/frames/Frame 116.png" },
    { "id": 117, "src": "/assets/frames/Frame 117.png" },
    { "id": 118, "src": "/assets/frames/Frame 118.png" },
    { "id": 119, "src": "/assets/frames/Frame 119.png" },
    { "id": 120, "src": "/assets/frames/Frame 120.png" },
    { "id": 121, "src": "/assets/frames/Frame 121.png" },
    { "id": 122, "src": "/assets/frames/Frame 122.png" },
    { "id": 123, "src": "/assets/frames/Frame 123.png" },
    { "id": 124, "src": "/assets/frames/Frame 124.png" },
    { "id": 125, "src": "/assets/frames/Frame 125.png" },
    { "id": 126, "src": "/assets/frames/Frame 126.png" },
    { "id": 127, "src": "/assets/frames/Frame 127.png" },
    { "id": 128, "src": "/assets/frames/Frame 128.png" },
    { "id": 129, "src": "/assets/frames/Frame 129.png" },
    { "id": 130, "src": "/assets/frames/Frame 130.png" },
    { "id": 131, "src": "/assets/frames/Frame 131.png" },
    { "id": 132, "src": "/assets/frames/Frame 132.png" },
    { "id": 134, "src": "/assets/frames/Frame 134.png" },
    { "id": 135, "src": "/assets/frames/Frame 135.png" },
    { "id": 136, "src": "/assets/frames/Frame 136.png" },
    { "id": 137, "src": "/assets/frames/Frame 137.png" },
    { "id": 138, "src": "/assets/frames/Frame 138.png" },
    { "id": 139, "src": "/assets/frames/Frame 139.png" },
    { "id": 140, "src": "/assets/frames/Frame 140.png" },
    { "id": 141, "src": "/assets/frames/Frame 141.png" },
    { "id": 142, "src": "/assets/frames/Frame 142.png" },
    { "id": 143, "src": "/assets/frames/Frame 143.png" },
    { "id": 144, "src": "/assets/frames/Frame 144.jpg" },
    { "id": 145, "src": "/assets/frames/Frame 145.jpg" },
    { "id": 146, "src": "/assets/frames/Frame 146.jpg" },
    { "id": 147, "src": "/assets/frames/Frame 147.jpg" },
    { "id": 148, "src": "/assets/frames/Frame 148.jpg" }
];

const Animation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [frames, setFrames] = useState(framesOriginals);
    const [draggedFrameId, setDraggedFrameId] = useState<number | null>(null);

    useEffect(() => {
        // Adiciona a classe "animation" ao body quando o componente é montado

        const ravenContainer = document.getElementById("raven-container");

        document.body.classList.add("animation");
        if (ravenContainer) {
            ravenContainer.classList.add("animation");
        }

        if (location.state?.frames) {
            setFrames(location.state.frames);
        }
        // Remove a classe "animation" do body quando o componente é desmontado
        return () => {
            document.body.classList.remove("animation");

            if (ravenContainer) {
                ravenContainer.classList.remove("animation");
            }
        };
    }, [location.state]);

    const [frameRate, setFrameRate] = useState(2); // Frames por segundo

    // Função para apagar um frame
    const deleteFrame = (id: number) => {
        setFrames(frames.filter((frame) => frame.id !== id));
    };

    // Função para duplicar frame
    const duplicateFrame = (id: number) => {
        const frameIndex = frames.findIndex((frame) => frame.id === id); // Encontra o índice do frame original
        if (frameIndex !== -1) {
            const frameToDuplicate = frames[frameIndex]; // Encontra o frame a ser duplicado
            const newFrame = { ...frameToDuplicate, id: Date.now() }; // Cria o novo frame com um ID único
            const updatedFrames = [
                ...frames.slice(0, frameIndex + 1), // Frames antes do duplicado + o original
                newFrame, // Insere o novo frame
                ...frames.slice(frameIndex + 1), // Frames restantes
            ];
            setFrames(updatedFrames); // Atualiza o estado
        }
    };

    // Função para resetar os frames para o valor original
    const resetFrames = () => {
        setFrames(framesOriginals); // Restaura para o estado original
    };

    // Inicia a animação
    const startAnimation = () => {
        navigate("/movie", {
            state: {
                frames,
                frameRate,
            },
        });
    };

    return (
        <main id="animation">
            <div className="head">
                <div className="title">
                    <h2>Edgar Allan Poe</h2>
                    <h1>The Raven</h1>
                </div>
                <span></span>
                <h3>Editor de<br />KeyFrames</h3>
            </div>
            <div style={{ textAlign: "center" }}>
                <div
                    className="frame-group"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "10px",
                    }}
                >
                    {frames.map((frame, index) => (
                        <FrameCard
                            frame={frame} // Passando o frame inteiro
                            index={index} // Passando o índice
                            handleDragStart={(id) => setDraggedFrameId(id)} // Passando a função
                            handleDragOver={(e) => e.preventDefault()} // Passando a função
                            handleDrop={(id) => handleDrop(id)} // Passando a função
                            deleteFrame={deleteFrame}
                            duplicateFrame={duplicateFrame}
                        />
                    ))}
                </div>

                <div className="controls">
                    <div className="frames-label">
                        <label htmlFor="frames-s">Frames rate</label>
                        <div className="custom-number-input">
                            <button
                                className="decrement"
                                onClick={() => setFrameRate((prev) => Math.max(prev - 1, 1))}
                            >
                                -
                            </button>
                            <input
                                id="frame-rate"
                                type="number"
                                value={frameRate}
                                onChange={(e) => setFrameRate(Number(e.target.value))}
                                min="1"
                                max="30"
                            />
                            <button
                                className="increment"
                                onClick={() => setFrameRate((prev) => Math.min(prev + 1, 30))}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="dupla-btn">
                        {/* Botão de Reset */}
                        <button onClick={resetFrames} id="reset">
                            Reset
                        </button>

                        {/* Botão de animação */}
                        <button id="play-now" onClick={startAnimation}>
                            Play now
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Animation;