import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';
import './SearchPage.css';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({ searchText: q });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="container my-4">
      <h1 className="display-4 mb-4">Search Heroes</h1>
      <hr />

      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <form onSubmit={onSearchSubmit} className="search-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search for a hero..."
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className={`alert alert-primary animate__animated animate__fadeIn ${showSearch ? '' : 'd-none'}`}>
            Search for a hero to see results.
          </div>

          <div className={`alert alert-danger animate__animated animate__fadeIn ${showError ? '' : 'd-none'}`}>
            No hero found with <b>{q}</b>
          </div>
        </div>
      </div>

      <div className="row">
        {heroes.map(hero => (
          <div key={hero.id} className="col-md-4 mb-4">
            <HeroCard {...hero} />
          </div>
        ))}
      </div>
    </div>
  );
};
