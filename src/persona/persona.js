import {Characters} from "../personas/Personas";

export default function characters (props) {
    let item = props;
    // id,name,status,species,gender,image
    return (
        <div>
<h2>{characters.id}: {characters.name}</h2>
            <p>{characters.status} <br/> {characters.species}<br/> {characters.gender}</p>
            <img src="{characters.img}"/>
        </div>
    )
}
