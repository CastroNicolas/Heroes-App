import { HeroList } from '../components';

export const DcPage = () => {
  return (
    <div className="container my-4">
      <h1 className="display-4 mb-4">DC Comics</h1>
      <hr />
      <HeroList publisher='DC Comics' />
    </div>
  );
};
