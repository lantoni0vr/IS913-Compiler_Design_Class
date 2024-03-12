
interface Props{
    params: {id: string}
}

const getCharacter = async (id: string) => {
    const character = await fetch(`https://dragonball-api.com/api/characters/${id}`, {
        cache: 'force-cache'
    }).then(resp => resp.json())

console.log('Se cargo: ' + character.name)
}

const page = async ({ params }: Props) => {

    const character = await getCharacter(params.id)
  //  console.log(params)

  return (
    <div>
        <h1>Character page {params.id}</h1>
      
    </div>
  )
}

export default page
