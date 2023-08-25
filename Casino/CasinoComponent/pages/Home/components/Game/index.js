import React from 'react';
import { gameList } from '../../../../../../until/gameList';
import './styles.css'

const Game = ({ name, img, link }) => {
    return (
        <div className="game-box">
            <img src={img} alt={name} />
            <h2>{name}</h2>

            <div className="game-buttons">
                <button className={"baton-primary"} onClick={() => window.open(link.demo)}>
                    Demo
                </button>
                <button className={"baton-primary-field"} onClick={() => window.open(link.play)}>
                    Play
                </button>
            </div>
        </div>
    );
};

const GamesList = ({ type, categories }) => {
    const filteredGames = gameList.filter((game) => {
        const gameCategories = game.categories || [];
        const gameType = game.type || [];
        return (
            (categories === 'All' || gameCategories.includes(categories)) &&
            (type === 'All' || gameType.includes(type))
        );
    });

    return (
        <div className="game-list">
            {filteredGames.map((game, index) => (
                <Game key={index} {...game} />
            ))}
        </div>
    );
};

export default GamesList;
