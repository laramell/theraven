import React, {useEffect} from "react";
import styles from "./FrameCard.module.css";



interface FrameCardProps {
    frame: {id: number; src: string};
    index: number;
    handleDragStart: (id: number) => void;
    handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
    handleDrop: (id: number) => void;
    deleteFrame: (id: number) => void;
    duplicateFrame: (id: number) => void;
}

const FrameCard: React.FC<FrameCardProps> = ({
    frame,
    index,
    handleDragStart,
    handleDragOver,
    handleDrop,
    deleteFrame,
    duplicateFrame,
}) => {

    useEffect(() => {
        const ravenContainer = document.getElementById("raven-container");

        if (ravenContainer) {
            ravenContainer.classList.add('none');
        }
    }, []);

    return (
        <div key={frame.id}
             draggable
             onDragStart={() => handleDragStart(frame.id)}
             onDragOver={handleDragOver}
             onDrop={() => handleDrop(frame.id)}
             className={styles.card}
        >
            <img
                src={frame.src}
                alt={`Frame ${index}`}
                className={styles["card-img"]}
            />
            <div className={styles["card-body"]}>
                <span>{index + 1}</span>
                <div className={styles["grup-button"]}>
                    <button
                        onClick={() => duplicateFrame(frame.id)}
                        title="Duplicar"
                        id={styles["button-duplicate"]}
                    >
                        <i className="fi fi-rr-window-restore"></i>
                    </button>
                    <button
                        onClick={() => deleteFrame(frame.id)}
                        title="Deletar"
                        id={styles["button-delete"]}
                    >
                        <i className="fi fi-rr-folder-xmark-circle"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FrameCard;