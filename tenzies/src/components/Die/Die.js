import { useContext } from 'react';
import { DiceContext } from '../../App';
import './Die.css';

const Die = (props) => {
    const { handleOnDieClick } = useContext(DiceContext);
    const jsx = (
        <div
            className={`die-face ${props.die.isHeld ? 'die-face--hold' : ''}`}
            onClick={(e) => handleOnDieClick(e, props.index)}
        >
            <h2 className="die-value">{props.die.face}</h2>
        </div>
    );
    return jsx;
};

export default Die;
