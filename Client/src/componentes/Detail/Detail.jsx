import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

const Detail = () => {
    const [character, setCharacter] = useState({})
    // console.log('soy el character detail', character);
    const { id } = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <>
        <h1>Detail</h1>
        {
            character ? (
                <div>
                    <h2 style={{"color": "white"}}>Name: {character.name}</h2>
                    <h2 style={{"color": "white"}}>Status: {character.status}</h2>
                    <h2 style={{"color": "white"}}>Species: {character.species}</h2>
                    <h2 style={{"color": "white"}}>Gender: {character.gender}</h2>
                    <h2 style={{"color": "white"}}>Origin: {character.origin?.name}</h2>
                    <img src={character.image} alt={character.name} />
                </div>
            )
             :  (
                ""
             )
        }
        </>
    )
}

export default Detail;