import { connect } from "react-redux";
import Card from "../Card/Card";

const Favorites = (props) => {
    const { myFavorites } = props;
    return (
        <div>
            {myFavorites.map((character) => {
                return (
                    <Card
                        key={character.id}
                        id = {character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin.name}
                        image={character.image}
                    />
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {myFavorites: state.myFavorites}
}
export default connect(mapStateToProps, null)(Favorites);