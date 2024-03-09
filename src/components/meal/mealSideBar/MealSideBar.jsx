import React from 'react';

const MealSideBar = ({ handdleSearch, searchValue }) => {


    return (

        <div>
            <form className='flex justify-between mx-1' onSubmit={handdleSearch} >
                <input name='search' type="text" placeholder="write first letter" className="input input-bordered input-warning w-full max-w-xs" />
                <button className="btn btn-outline btn-warning ml-2">Search</button>
            </form>
        </div>

    );

}
export default MealSideBar;