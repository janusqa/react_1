import { createContext, useEffect, useState } from 'react';
import { produce } from 'immer';
import Confetti from 'react-confetti';
import './App.css';
import Die from './components/Die/Die';

export const DiceContext = createContext();

const getDieFace = () => Math.floor(Math.random() * (6 - 1 + 1) + 1);

const App = () => {
    const [gameOver, setGameOver] = useState(false);
    const [dice, setDice] = useState(() =>
        Array(10)
            .fill()
            .map((die) => ({ face: getDieFace(), isHeld: false }))
    );

    useEffect(() => {
        if (dice.every((die, i, arr) => die.face === arr[0].face && die.isHeld))
            setGameOver(true);
    }, [dice]);

    const handleOnRoll = (e) => {
        if (!gameOver) {
            setDice((prevState) => {
                const nextState = produce(prevState, (draft) => {
                    draft.forEach((_, index) => {
                        if (!draft[index].isHeld)
                            draft[index].face = getDieFace();
                    });
                });
                return nextState;
            });
        } else {
            setDice((prevState) => {
                const nextState = produce(prevState, (draft) => {
                    draft.forEach((_, index) => {
                        draft[index].face = getDieFace();
                        draft[index].isHeld = false;
                    });
                });
                return nextState;
            });
            setGameOver(false);
        }
    };

    const handleOnDieClick = (e, index) => {
        if (!gameOver) {
            setDice((prevState) => {
                const nextState = produce(prevState, (draft) => {
                    draft[index].isHeld = !draft[index].isHeld;
                });
                return nextState;
            });
        }
    };

    const jsx = (
        <DiceContext.Provider value={{ handleOnDieClick }}>
            <main className="main">
                {gameOver && <Confetti />}
                <section className="hero">
                    <h1>Tenzies</h1>
                    <p>
                        Roll until all Die are the same. Click each die to
                        freeze it at its current value between rolls.
                    </p>
                </section>
                <section className="dice-container">
                    {dice.map((die, index) => (
                        <Die key={index} index={index} die={die} />
                    ))}
                </section>
                <button className="roll-dice" onClick={handleOnRoll}>
                    {gameOver ? 'Reset Game' : 'Roll'}
                </button>
            </main>
        </DiceContext.Provider>
    );
    return jsx;
};

export default App;
