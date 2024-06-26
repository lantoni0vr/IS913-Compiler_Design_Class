
import { CharactersResponse, SimpleCharacter } from "@/dragon-ball"
import { CharacterGrid } from "@/dragon-ball/components/CharacterGrid"
import Image from "next/image"

const getDragonBallCharacters = async (page = 1, limit = 10): Promise<SimpleCharacter[]> => {

    const data: CharactersResponse = await fetch(
        `https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`)
        .then(res => res.json())

    const characters = data.items.map(character => ({
        id: character.id,
        name: character.name,
        image: character.image
    }))


    return characters

}

const DragonBallPage = async () => {

    const dbCharacters = await getDragonBallCharacters(1, 100)

    //throw new Error 

    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap gap-10 items-center justify-center">
                <CharacterGrid characters={dbCharacters}/>
            </div>
        </div>
    )
}

export default DragonBallPage

