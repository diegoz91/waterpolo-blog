import React from 'react';
import { useRouter } from 'next/router';
import { getTeams } from '../../services';
import TeamSlide from '../../sections/TeamSlide';



const TeamsDetails = ({ teams }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    const femaleITA = teams.filter(team => {
        return team.node.gender === 'Female' && team.node.nation === 'Italy' && team.node.series === 'A1';
    });
    console.log(femaleITA, 'maledetto devi funzionare')

    const maleITA = teams.filter(team => {
        return team.node.gender === 'Male' && team.node.nation === 'Italy' && team.node.series === 'A1';
    });

    const maleITA2 = teams.filter(team => {
        return team.node.gender === 'Male' && team.node.nation === 'Italy' && team.node.series === 'A2';
    });

    const femaleITA2 = teams.filter(team => {
        return team.node.gender === 'Female' && team.node.nation === 'Italy' && team.node.series === 'A2';
    });
    console.log(femaleITA2, 'maledetto devi funzionare A2')

    return (
        <>
            <div className='container mx-auto px-10 mb-8'>
                
                <div className='border-b w-300 inline border-blue-400 py-8'>
                    <h2 className="md:float-center align-middle text-2xl text-white ml-10 mb-20 font-semibold">
                        Serie A1 Maschile
                    </h2>
                    <TeamSlide teams={maleITA} />

                </div>
                <div className='border-b w-300 inline border-blue-400 py-8'>
                    <h2 className="md:float-center align-middle text-2xl text-white mt-20 ml-10 mb-20 font-semibold">
                        Serie A1 Femminile
                    </h2>
                    <TeamSlide teams={femaleITA} />
                </div>
                <div className='border-b w-300 inline border-blue-400 py-8'>
                    <h2 className="md:float-center align-middle text-2xl text-white mt-20 ml-10 mb-20 font-semibold">
                        Serie A2 Maschile
                    </h2>
                    <TeamSlide teams={maleITA2} />
                </div>
                <div className='border-b w-300 inline border-blue-400 py-8'>
                    <h2 className="md:float-center align-middle text-2xl text-white mt-20 ml-10 mb-20 font-semibold">
                        Serie A2 Femminile
                    </h2>
                    <TeamSlide teams={femaleITA2} />
                </div>

            </div>
        </>
    )
}

export default TeamsDetails;

export async function getStaticProps({ params }) {
    const teams = (await getTeams()) || [];

    return {
        props: { teams }
    };
}

