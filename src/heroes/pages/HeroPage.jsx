import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import './HeroPage.css';

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="container mt-5">
      <div className="hero-page">
        <div className="hero-image">
          <img
            src={`../../../assets/${id}.jpg`}
            alt={hero.superhero}
            className="img-fluid"
          />
        </div>

        <div className="hero-details">
          <h3 className="hero-title">{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Alter ego:</strong> {hero.alter_ego}</li>
            <li className="list-group-item"><strong>Publisher:</strong> {hero.publisher}</li>
            <li className="list-group-item"><strong>First appearance:</strong> {hero.first_appearance}</li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>

          <button
            className="btn btn-outline-primary btn-lg mt-4"
            onClick={onNavigateBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
