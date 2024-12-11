import React, {useEffect, useState} from "react";
import FrameCard from "../FrameCard/FrameCard";
import "./Animation.css";
import {useLocation, useNavigate} from "react-router-dom";

const framesOriginals = [
    { id: 1, src: "/assets/frames/1.png" },
    { id: 2, src: "/assets/frames/2.png" },
    { id: 3, src: "/assets/frames/3.png" },
    { id: 4, src: "/assets/frames/4.png" },
    { id: 5, src: "/assets/frames/4.png" },
    { id: 6, src: "/assets/frames/4.png" },
    { id: 7, src: "/assets/frames/4.png" },
    { id: 8, src: "/assets/frames/4.png" }
];


const Animation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [frames, setFrames] = useState(framesOriginals);
    const [draggedFrameId, setDraggedFrameId] = useState<number | null>(null);

    useEffect(() => {
        // Adiciona a classe "animation" ao body quando o componente é montado

        const ravenContainer = document.getElementById("raven-container");

        document.body.classList.add('animation');
        if (ravenContainer) {
            ravenContainer.classList.add('animation');
        }

        if (location.state?.frames) {
            setFrames(location.state.frames);
        }
        // Remove a classe "animation" do body quando o componente é desmontado
        return () => {
            document.body.classList.remove('animation');

            if (ravenContainer) {
                ravenContainer.classList.remove('animation');
            }
        };
    }, [location.state]);


    const [animationRunning, setAnimationRunning] = useState<boolean>(false);
    const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [frameRate, setFrameRate] = useState(2); // Frames por segundo

    // Função para apagar um frame
    const deleteFrame = (id: number) => {
        setFrames(frames.filter((frame) => frame.id !== id));
    }

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

    // Inicia o drag com o ID do frame
    const handleDragStart = (id: number) => {
        setDraggedFrameId(id);
    };

    // Permite o drop
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    // Finaliza o drop, movendo o frame
    const handleDrop = (id: number) => {
        if (draggedFrameId === null || draggedFrameId === id) return;

        const draggedIndex = frames.findIndex((frame) => frame.id === draggedFrameId);
        const targetIndex = frames.findIndex((frame) => frame.id === id);

        // Reordena os frames no array
        const updatedFrames = [...frames];
        const [draggedFrame] = updatedFrames.splice(draggedIndex, 1); // Remove o arrastado
        updatedFrames.splice(targetIndex, 0, draggedFrame); // Adiciona no alvo

        setFrames(updatedFrames);
        setDraggedFrameId(null); // Reseta o estado
    };

    // Função para iniciar a animação

    const startAnimation = () => {
        navigate("/movie", {
            state: {
                frames,
                frameRate,
            },
        });
    }

    // Função para parar a animacao
    const stopAnimation = () => {
        setAnimationRunning(false);
        if (intervalId) {
            clearInterval(intervalId);
        }
    }


    return (
        <main id="animation" className="">
            <div className="head">
                <div className="title">
                    <h2>Edgar Allan Poe</h2>
                    <h1>The Raven</h1>
                </div>
                <span></span>
                <h3>Editor de<br/>KeyFrames</h3>
            </div>
            <div style={{textAlign: "center"}}>
                <div className="frame-group" style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px"}}>
                    {frames.map((frame, index) => (
                        <FrameCard
                            frame={frame} // Passando o frame inteiro
                            index={index} // Passando o índice
                            handleDragStart={handleDragStart} // Passando as funções
                            handleDragOver={handleDragOver}
                            handleDrop={handleDrop}
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
                       <button
                           onClick={resetFrames}
                           id="reset"
                       >
                           Reset
                       </button>
                       {/*
                    <button onClick={stopAnimation} disabled={!animationRunning}>
                        Stop Animation
                    </button>*/}


                       {/* Botão de animação */}
                       <button id="play-now" onClick={startAnimation} disabled={animationRunning}>
                           Play now
                       </button>
                   </div>
                </div>
                {/* Exibindo a animação */}
                {animationRunning && (
                    <div style={{
                        marginTop: "20px",
                        padding: "20px",
                        border: "1px solid black",
                        borderRadius: "10px",
                        backgroundColor: "#f5f5f5",
                        width: "400px",
                        height: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <img
                            src={frames[currentFrameIndex]?.src}
                            alt={`Frame ${frames[currentFrameIndex].id}`}
                            style={{width: "100%", height: "auto"}}
                        />
                    </div>
                )}
            </div>
        </main>
    )
};

export default Animation;