import React from 'react'

const MealPlan = ({closeMealPlan})=> {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
    <div className='w-[600px]'>
        <button className='text-white text-xl place-self-end' onClick={closeMealPlan}>
            X
        </button>
        <div className='bg-white p-10 rounded '>MealPlaningmodal</div>
    </div>
</div>
  )
}

export default MealPlan
