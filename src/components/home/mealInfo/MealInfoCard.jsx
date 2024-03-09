import React from 'react';
import { useNavigate } from 'react-router-dom';

const MealInfoCard = ({ mel }) => {
    const { strMeal,
        strCategory,
        strInstructions,
        strMealThumb,
        strTags
    } = mel

    const navigate = useNavigate()

    const handdleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
                    <div className="card-body">
                        <figure><img src={strMealThumb} alt="Shoes" /></figure>
                    </div>
                </div>
                <div className=" lg:text-left text-justify">
                    <h1 className="text-5xl font-bold">{strMeal}</h1>
                    <p className="py-6">{strInstructions}</p>
                    <button onClick={handdleGoBack} className="btn btn-primary">Back</button>
                </div>
            </div>
        </div>
    );
};

export default MealInfoCard;