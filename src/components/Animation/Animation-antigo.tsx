import React, { useState } from "react";
// import "./Animation.css"; // Importando o arquivo CSS específico para este componente

const framePath = "/assets/frames/";
const framesOriginals = [
    { id: 1, src: "1.png" },
    { id: 2, src: "2.png" },
    { id: 3, src: "3.png" },
    { id: 4, src: "4.png" },
];

const Animation = () => {
    const [frames, setFrames] = useState(framesOriginals);
    const [draggedFrameId, setDraggedFrameId] = useState<number | null>(null);

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
        setAnimationRunning(true);
        setCurrentFrameIndex(0);
        let frameIndex = 0;
        const id = setInterval(() => {
            setCurrentFrameIndex(frameIndex);
            frameIndex++;

            if (frameIndex > frames.length) {
                clearInterval(id);
                setAnimationRunning(false);
            }
        }, 1000 / frameRate);

        setIntervalId(id);

        console.log(frames.length); // Isso ajudará a verificar a quantidade correta de frames durante a animação.
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
            <h1>Stop Motion - The Raven</h1>
            <div style={{textAlign: "center", padding: "20px"}}>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px"}}>
                    {frames.map((frame, index) => (
                        <div
                            key={frame.id}
                            draggable
                            onDragStart={() => handleDragStart(frame.id)}
                            onDragOver={handleDragOver}
                            onDrop={() => handleDrop(frame.id)}
                            style={{
                                border: "1px solid black",
                                padding: "10px",
                                borderRadius: "8px",
                                textAlign: "center",
                                width: "150px",
                            }}
                        >
                            <img
                                src={`${framePath}${frame.src}`}
                                alt={`Image ${frame.id}`}
                                style={{width: "100%", height: "auto", marginBottom: "10px"}}
                            />
                            <b>Posição {index + 1} - Frame {frame.id}</b> {/* Posição baseada no índice */}
                            <button onClick={() => deleteFrame(frame.id)} style={{marginRight: "5px"}}>
                                Delete
                            </button>
                            <button onClick={() => duplicateFrame(frame.id)}>Duplicate</button>
                        </div>
                    ))}
                </div>

                <input
                    type="number"
                    value={frameRate}
                    onChange={(e) => setFrameRate(Number(e.target.value))}
                    min="1"
                    max="30"
                />
                {/* Botão de animação */}
                <button onClick={startAnimation} disabled={animationRunning}>
                    Start Animation
                </button>
                <button onClick={stopAnimation} disabled={!animationRunning}>
                    Stop Animation
                </button>

                {/* Botão de Reset */}
                <button
                    onClick={resetFrames}
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Reset
                </button>

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
                            src={`${framePath}${frames[currentFrameIndex].src}`}
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