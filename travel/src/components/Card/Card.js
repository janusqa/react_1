import React from 'react';
import './Card.css';
import article_icon from './article_icon.png';

const Card = function Card(props) {
    const jsx = (
        <article className="article">
            <figure>
                <img src={props.imageUrl} alt="" />
            </figure>
            <summary>
                <p className="card--location">
                    <img src={article_icon} alt="" />
                    <span className="card--location-country">
                        {props.location}
                    </span>
                    <span className="card--location-googlemaps">
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </span>
                </p>
                <h1>{props.title}</h1>
                <h4>
                    {props.startDate} - {props.endDate}
                </h4>
                <p>{props.description}</p>
            </summary>
        </article>
    );
    return jsx;
};

export default Card;
