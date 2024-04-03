import { Character } from "@/dragon-ball";
import { Metadata } from "next";
import Image from "next/image";
import { cache } from "react";
import { Transformation } from '../../../../dragon-ball/interfaces/character';

interface Props {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const { id, name } = await getCharacter(params.id)


    return {
        title: ` #${id} ${name}`,
        description: `Pagina del personaje ${name}`
    }

}

const getCharacter = async (id: string): Promise<Character> => {
    const character = await fetch(`https://dragonball-api.com/api/characters/${id}`, {
        //cache: 'force-cache',
        next: {
            revalidate: 60 * 60 * 30
        }
    }).then(resp => resp.json());

    //console.log('Se cargo: ' + character.name)

    return character;
}

const page = async ({ params }: Props) => {
    const character = await getCharacter(params.id);
    //console.log(params);
    return (
        <div className="flex flex-col justify-center items-center text-slate-700">
            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 p-3">
                <div className="mt-2 mb-8 w-full">
                    <h1 className="px-2 text-xl font-bold text-navy-700 capitalize">
                        #{character.id} {character.name}
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src={character.image ?? ''}
                            width={150}
                            height={150}
                            alt={`Imagen del personaje ${character.name}`}
                            className="mb-5 w-1/4 h-1/4"
                        />
                    </div>

                    {character.transformations.length != 0 ? <h2 className="font-semibold">Transformaciones</h2> : ''}

                    <div className="flex flex-wrap">
                        {
                            character.transformations.map(Transformation => (
                                <p key={Transformation.name} className="mr-2 capitalize">{Transformation.name}</p>
                            ))
                        }
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-4 px-2 w-full">
                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">KI</p>
                        <div className="text-base font-medium text-slate-700 flex">
                            {
                                <p className="mr-2 capitalize">{character.ki}</p>
                            }
                        </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">KI Maximo</p>
                        <div className="text-base font-medium text-slate-700 flex">
                            {
                                <p className="mr-2 capitalize">{character.maxKi}</p>
                            }
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Genero</p>
                        <div className="text-base font-medium text-slate-700 flex">
                            {
                                <p className="mr-2 capitalize">{character.gender}</p>
                            }
                        </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Raza</p>
                        <div className="text-base font-medium text-slate-700 flex">
                            {
                                <p className="mr-2 capitalize">{character.race}</p>
                            }
                        </div>
                    </div>


                </div>
                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <h2 className="text-sm text-gray-600">Lore del personaje</h2>
                    <p className="text-base font-medium text-slate-700 flex">
                        {
                            <p className="mr-2 capitalize">{character.description}</p>
                        }
                    </p>
                </div>
            </div>
            <p className="font-normal text-navy-700 mt-20 mx-auto w-max">Profile Card component from <a href="https://horizon-ui.com?ref=tailwindcomponents.com" target="_blank" className="text-brand-500 font-bold">Horizon UI Tailwind React</a></p>
        </div>
    )
}

export default page
