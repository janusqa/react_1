import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = function Card(props) {
    const badgeText =
        props.location === 'Online'
            ? 'ONLINE'
            : props.openSpots === 0
            ? 'SOLD OUT'
            : '';
    const jsx = (
        <article className="card">
            {badgeText !== '' && <div className="card--badge">{badgeText}</div>}
            <figure>
                <img src={`./assets/${props.coverImg}`} alt="" />
                <figcaption>
                    <FontAwesomeIcon
                        className="card--rating-star"
                        icon={faStar}
                    />
                    <span>{props.stats.rating}</span>{' '}
                    <span className="grey">
                        ({props.stats.reviewCount}) •&nbsp;
                    </span>{' '}
                    <span className="grey">{props.location}</span>
                </figcaption>
            </figure>
            <p className="card--title">{props.title}</p>
            <p>
                <span className="card--price">From ${props.price}</span> /
                person
            </p>
        </article>
    );
    return jsx;
};

export default Card;
