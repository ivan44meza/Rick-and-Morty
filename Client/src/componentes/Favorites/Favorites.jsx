import { connect } from "react-redux";
import Card from "../Card/Card";
import {  filterCards, orderCards } from '../../redux/actions'
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({myFavorites})=> {
    const [aux, setAux ] = useState(false)
    const dispatch = useDispatch()

    const handleOrder = (e)=> {
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter =(e)=> {
        dispatch(filterCards(e.target.value))
    }

    return (
        <>
            <h1>My Favorites</h1>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            {
                myFavorites?.map(character => {
                    return (
                        <Card 
                            key={character.id}
                            id= {character.id}
                            name={character.name}
                            species={character.species}
                            gender={character.gender}
                            origin = {character.origin}
                            status ={character.status}
                            image={character.image}
                            
                        />
                    )
                })
            }
        </>
        )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps, 
    null)
    (Favorites);