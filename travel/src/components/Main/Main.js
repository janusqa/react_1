import React from 'react';
import Card from '../Card/Card';
import './Main.css';
import travels from '../../assets/data';

const Main = function Main() {
    let key = 0;
    const destinations = travels.map((travel) => (
        <Card key={++key} {...travel} />
    ));
    const jsx = <main className="main container">{destinations}</main>;
    return jsx;
};

export default Main;
