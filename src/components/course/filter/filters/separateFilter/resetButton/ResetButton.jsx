import React from 'react'

const ResetButton= ({resetFilters}) => {

  return (
    <div>
        <button
      onClick={resetFilters}
      className="w-[105px] h-[48px] bg-slate-600 hover:bg-slate-500 text-white rounded-[16px] mt-4"
    >
      ریست فیلتر
    </button>

    </div>
  )
}

export  {ResetButton}
