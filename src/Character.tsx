type CharacterProps = {
    name: string
    gender: string
    status: string
    species: string
    image: string
    query:string
}

type CharacterPictureProps = {
    name: string
    image: string
}

type CharacterInfoProps = {
    gender: string
    status: string
    species: string
}

export default function Character(props: Readonly<CharacterProps>) {
    console.log(props.name, props.image);
    return (
        <div className="Character">
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
        <div className="CharacterDetails">
            <CharacterPicture image={props.image} name={props.name}/>
            <CharacterInfo gender={props.gender} status={props.status} species={props.species}/>

        </div>
    )

}

function CharacterInfo(props: Readonly<CharacterInfoProps>) {
    return (
        <div className="CharacterInfo">
            <p>Species: {props.species}</p>
            <p>Gender: {props.gender}</p>
            <p>Status: {props.status}</p>
        </div>
    )
}

function CharacterPicture(props: Readonly<CharacterPictureProps>) {
    return (
        <>
            <img src={props.image} alt={props.name}/>
        </>
    )
}