import React from 'react';
import ReactDOM from 'react-dom';
import boxes from './boxes';
import './index6.css';

function Box(props) {
    const styles = {
        backgroundColor: props.on ? '#222222' : 'transparent',
    };

    return <div style={styles} className="box" onClick={props.toggle}></div>;
}

function App() {
    const [squares, setSquares] = React.useState(boxes);

    function toggle(id) {
        /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         *
         * Make sure not to directly modify state!
         *
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */
        console.log(id);
    }

    const squareElements = squares.map((square) => (
        <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
    ));

    return <main>{squareElements}</main>;
}

ReactDOM.render(<App />, document.getElementById('root'));
