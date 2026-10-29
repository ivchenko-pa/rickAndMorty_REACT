type CharacterProps = {
    name: string
    gender: string
    status: string
    species: string
    image: string
    query:string
}

export default function Character(props: Readonly<CharacterProps>) {
    console.log(props.name, props.image);
    return (
        <div className="character">
            <h2>{props.name}</h2>
            <CharacterDetails
                gender={props.gender}
                status={props.status}
                species={props.species}
                image={props.image}
                name={props.name}
            />
        </div>
    )

}


function CharacterDetails(props: Readonly<CharacterProps>) {

    return (
        <div className="character-details">
            <CharacterPicture image={props.image} name={props.name}/>
            <CharacterInfo gender={props.gender} status={props.status} species={props.species}/>

        </div>
    )

}

function CharacterInfo(props: Readonly<CharacterProps>) {
    return (
        <div className="character-info">
            <p>Species: {props.species}</p>
            <p>Gender: {props.gender}</p>
            <p>Status: {props.status}</p>
        </div>
    )
}

function CharacterPicture(props: Readonly<CharacterProps>) {
    return (
        <>
            <img src={props.image} alt={props.name}/>
        </>
    )
}