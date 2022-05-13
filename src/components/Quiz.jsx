import React from 'react'

function Quiz() {
    return (
        <div className='flex flex-col w-full max-w-xl mx-auto'>
            <h1 className='text-center text-5xl'>wanna become hogkage</h1>
            <div className="flex justify-between mt-6 mb-6">
                <span>Question:1/10</span>
                <span>Score:0</span>
            </div>
            <h3 className='text-3xl'>How many hokage's are in naruto anime?</h3>
            <div className="mt-4 text-center">
                <li className="list-none bg-selected p-2 rounded mt-2 text-2xl">5</li>
                <li className="list-none bg-grey p-2 rounded mt-2 text-2xl">5</li>
                <li className="list-none bg-red p-2 rounded mt-2 text-2xl">4</li>
                <li className="list-none bg-green p-2 rounded mt-2 text-2xl">7</li>
            </div>
        </div>
    )
}

export default Quiz
