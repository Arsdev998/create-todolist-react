import React from 'react'

const Stats = ({todoList}) => {
    let countList = todoList.length;
  return (
    <div className='bg-slate-800 w-[360px] mx-auto py-[30px] '>
      <p className='text-center text-gray-500 font-day'>
        {countList ===0 
        ? 'Kamu siap untuk 🏃‍♀️' 
        : `kamu memiliki ${countList} tugas`}
      </p>
    </div>
  )
}

export default Stats
