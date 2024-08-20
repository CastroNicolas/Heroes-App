import { HeroList } from "../components";

export const HeroesPage = () => {
    return (
        <div className="container my-4">
            <h1 className="display-4 mb-4">Heroes</h1>
            <hr />

            <section className="mb-4">
                <h2 className="display-6">Marvel Comics</h2>
                <HeroList publisher='Marvel Comics' />
            </section>

            <section>
                <h2 className="display-6">DC Comics</h2>
                <HeroList publisher='DC Comics' />
            </section>
        </div>
    );
};
