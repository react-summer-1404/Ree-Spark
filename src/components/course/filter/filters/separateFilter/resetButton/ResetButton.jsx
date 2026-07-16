import React from 'react'

const ResetButton= ({resetFilters}) => {

  return (
    <div>
        <button
      onClick={resetFilters}
      className="w-[105px] h-[48px] border-2 bg-slate-100 text-black hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-white rounded-[16px] mt-4"
    >
      ریست فیلتر
    </button>

    </div>
  )
}

export  {ResetButton}
