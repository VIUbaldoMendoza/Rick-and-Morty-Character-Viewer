
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

function Card(props) {
   const {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
      onClose,
      addFav,
      removeFav,
      myFavorites,
   } = props;
   
   const[isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite =() => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav);
   };

   return (
      <div className={styles.cardContainer}>
      {isFav ? (
         <button onClick={handleFavorite}>❤️</button>
      ) : (
         <button onClick={handleFavorite}>🤍</button>
      )}
         <div className={styles.header}>
            <div className={styles.wrapperButton}>
               <button className={styles.btn}onClick={() => onClose(id)}>X</button>
            </div>
            <img src={image} alt="" />
         </div>
         
         <div className={styles.wrapperText}>
            <div className={name ? styles.name : styles.noname}>
            <Link to={`/detail/${id}`}
               style={{ textDecoration: "none", color: "inherit" }}>
            <h1>{name}</h1>
            </Link>
            </div>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            {/* {/* {/*<h2>{origin.name}</h2> */}
         </div>

      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav:(id) => {
         dispatch(removeFav(id));
      },
   };

};

const mapStateToProps = (state) => {
   return { myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

