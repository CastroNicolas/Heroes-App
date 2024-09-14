import { Link } from 'react-router-dom';
import './HeroCard.css';

const CharactersByHero = ({ alter_ego, characters }) => {
    return alter_ego === characters ? null : <p className="card-text">{characters}</p>;
};

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    const heroImageUrl = `./assets/${id}.jpg`;
    console.log(heroImageUrl)
    return (
        <div className="col">
            <div className="card shadow-sm border-light h-100">
                <img src={heroImageUrl} className="card-img-top" alt={superhero} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                    <CharactersByHero characters={characters} alter_ego={alter_ego} />
                    <p className="card-text mt-auto">
                        <small className="text-muted">{first_appearance}</small>
                    </p>
                    <Link to={`/hero/${id}`} className="btn btn-primary mt-3">
                        More...
                    </Link>
                </div>
            </div>
        </div>
    );
};
