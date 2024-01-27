import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    function toggleEditing() {
        setIsEditing((_) => !isEditing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">Player 1
                <span className="player-symbol">{symbol}</span>
                {isEditing ? <span className="player-name">{playerName}</span> : <input required value={playerName} onChange={handleChange} />}
            </span>
            <button onClick={toggleEditing}> {isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}