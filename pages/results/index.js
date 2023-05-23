import { useRouter } from 'next/router';
import React from 'react';
import { ResultChampionship } from '../../components';

const ResultChamp = () => {

    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }
  return (
    <div>
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='hidden md:float-left md:contents font-bold text-2xl text-white'>
                <h2 className="md:float-center align-middle text-2xl text-white ml-10 mb-20 font-semibold">
                    
                </h2>
                <ResultChampionship />
         
            </div>
        </div>
    </div>
</div>
  )
}

export default ResultChamp