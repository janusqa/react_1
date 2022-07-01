import React, { useState, useEffect } from 'react';
import produce from 'immer';
import './Meme.css';
// import memeData from '../../data/memeData';

const Meme = function Meme() {
    const [allMemes, setAllMemes] = useState([]);
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        memeImage: '',
        memeName: '',
    });

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://api.imgflip.com/get_memes');
                const jres = await res.json();
                if (jres.success) {
                    setAllMemes((prevState) => {
                        const nextState = produce(prevState, (draft) => {
                            draft = jres.data.memes;
                            return draft;
                        });
                        return nextState;
                    });
                } else throw jres.error_message;
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const random_meme =
            allMemes[Math.floor(Math.random() * allMemes.length)];
        setMeme((prevState) => {
            const nextState = produce(prevState, (draft) => {
                draft.memeImage = random_meme.url;
                draft.memeName = random_meme.name;
            });
            return nextState;
        });
    };

    const handleOnChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setMeme((prevState) => {
            const nextState = produce(prevState, (draft) => {
                draft[name] = value;
            });
            return nextState;
        });
    };

    const jsx = (
        <main className="main">
            <form className="meme--form" onSubmit={handleOnSubmit}>
                <input
                    className="meme--form-input"
                    name="topText"
                    value={meme.topText}
                    type="text"
                    placeholder="Top text"
                    onChange={handleOnChange}
                />
                <input
                    className="meme--form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    type="text"
                    placeholder="Bottom text"
                    onChange={handleOnChange}
                />
                <button className="meme--form-button">
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="meme--image">
                <div className="meme--text">
                    <div className="meme--toptext">{meme.topText}</div>
                    <div className="meme--bottomtext">{meme.bottomText}</div>
                </div>
                {meme.memeImage && (
                    <img src={meme.memeImage} alt={meme.memeName} />
                )}
            </div>
        </main>
    );
    return jsx;
};

export default Meme;
