import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getTeamPlayerDetails, getTeams } from '../../services'
import { Loader, TeamCard } from '../../components';
import Link from 'next/link'

const TeamPlayer = (props) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }


    const [players, setPlayers] = useState([])

    useEffect(() => {
        getTeamPlayerDetails(props.slug).then((response) => {
            console.log(response, 'response');
            setPlayers(response[0].node)
        })
    }, []);

    console.log(props)

    return (
        <div>
            <div className='container mx-auto px-10 mb-8'>
                <div className='border-b w-full inline-block border-blue-400 py-8'>
                    <div className='hidden md:float-left md:contents font-bold text-2xl text-white'>
                        <h3 className='mb-5'>Rosa del {players.name}</h3>
                        <h3 className='mb-5'>Nazionalità : {players.nation}</h3>
                        <h3 className='mb-5'>Campionato : {players.series}</h3>
                        <h3 className='mb-5'>Pagina Youtube : <Link href={`${players.link}`}>
                            <a className="mb-5 cursor-pointer" target='_blank'>
                                {players.name}
                            </a>
                        </Link></h3>
                        <h3 className='mb-5'>Biografia :</h3>
                        <p className='font-normal text-sm md:text-base italic'>{players.biography}</p>
                    </div>
                </div>
                <div>
                    {players ? <TeamCard players={ players } /> : <Loader />}
                </div>
            </div>
        </div>
    )
}

export default TeamPlayer;


export async function getStaticProps({ params }) {

    return {
        props: { slug: params.slug }
    }
}

export async function getStaticPaths() {
    const teams = await getTeams();

    return {
        paths: teams.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    }
}

