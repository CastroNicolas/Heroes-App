import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <div className="container my-4">
      <h1 className="display-4 mb-4">Marvel Comics</h1>
      <hr />
      <HeroList publisher='Marvel Comics' />
    </div>
  );
};
