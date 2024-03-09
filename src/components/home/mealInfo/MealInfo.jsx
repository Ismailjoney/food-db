import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealInfoCard from './MealInfoCard';
//import MealInfoCard from './MealInfoCard';

const MealInfo = () => {
    const mealDetails = useLoaderData()
    // console.log(mealDetails.meals)
    return (
        <div>
            <h2>Meal Info</h2>
            <div>
               {
                mealDetails.meals.map(mel =>  
                    <MealInfoCard
                    mel={mel}
                    key={mel.idMeal}
                    ></MealInfoCard>
                    
                    )
               }
            </div>
        </div>
    );
};

export default MealInfo;