import {useState} from "react";

export default function Characters () {
    let [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value)
        });


return (
    <div>
        {characters.map((characters) => (<characters item={characters} key={characters.id}/>))}
    </div>
)

}