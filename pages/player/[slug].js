import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Loader, PlayerCard } from '../../components';
import { getPlayerDetails } from '../../services';
import { getPlayer } from '../../services';
const PlayerDetails = (props) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }
    const [players, setPlayers] = useState()

    useEffect(() => {
        getPlayer(props.slug).then((response) => {
            console.log(response, '123456789');
            setPlayers(response)
        })
    }, []);

    console.log(props);

    return (
        <div>
            <div className='container mx-auto px-10 mb-8'>
                <div className='border-b w-full inline-block border-blue-400 py-8'>
                    <div className='hidden md:float-left md:contents font-bold text-2xl text-white'>
                        <h2 className="md:float-center align-middle text-2xl text-white ml-10 mb-20 font-semibold">
                            
                        </h2>
                        {players ? <PlayerCard players={players} /> : <Loader />}
                 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerDetails;

export async function getStaticProps({ params }) {

    return {
        props: { slug: params.slug }
    }
}

export async function getStaticPaths() {
    const players = await getPlayerDetails();

    return {
        paths: players.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    }
}