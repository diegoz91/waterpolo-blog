import React from 'react'

const StreamPage = () => {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-blue-400 py-8'>
                <div className='hidden md:float-left md:contents font-bold text-2xl text-white'>
                    <h3 className='mb-20'>Partita Uno</h3>
                    <iframe 
                frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8e1r54?autoplay=1"
                width="1500" height="750" allowfullscreen allow="autoplay"> </iframe>
                </div>
            </div>
        </div>
    )
}

export default StreamPage