import React, { useEffect, useState } from 'react';
import Meal from '../Meal';

const AllMeal = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])


 
    return (
        <div className='mt-16 mb-16'>
            <h2>All Meals Food</h2>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        <div className='grid md:grid-cols-3 gap-4 mx-6'>
                            {
                                meals.map(meal =>
                                    <Meal
                                        key={meal.idMeal}
                                        meal={meal}
                                    ></Meal>
                                )
                            }
                        </div>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <p>kkkk</p>
                        </ul>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default AllMeal;