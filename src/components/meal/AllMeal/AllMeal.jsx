import React, { useEffect, useState } from 'react';
import Meal from '../Meal';
import MealSideBar from '../mealSideBar/MealSideBar';
import SearchMeal from '../searchMeal/SearchMeal';

const AllMeal = () => {
    const [mealss, setMeals] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const [searchMeals, setSearchMeals] = useState([])

    console.log(searchValue)


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])




    const handdleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        setSearchValue(form.search.value);
        form.search.value = ''
    };


    useEffect(() => {
        if (searchValue) {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`)
                .then(res => res.json())
                .then(data => setSearchMeals(data.meals))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [searchValue]);




    return (
        <div className='mt-16 mb-16'>
            <h2 className='text-3xl text-center font-bold my-9'> All Meals Food {`${!!mealss && `${mealss.length}`}`}</h2>

             

            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        <div className='grid md:grid-cols-3 gap-4 mx-6'>

                            {
                                searchMeals && searchValue ?


                                    searchMeals.map(searchMeal =>
                                        <SearchMeal
                                            key={searchMeal.idMeal}
                                            searchMeal={searchMeal}
                                        ></SearchMeal>
                                    )

                                    :
                                    mealss.map(meal =>
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
                            <MealSideBar
                                searchValue={searchValue}
                                handdleSearch={handdleSearch}
                            ></MealSideBar>

                        </ul>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default AllMeal;