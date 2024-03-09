import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {

    const { strMealThumb, strMeal, idMeal } = meal

    return (
        <div className="card w-70 bg-base-100 shadow-xl">
            <figure><img src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {strMeal}
                </h2>
                <p> { }</p>
                <div className="card-actions justify-end">
                    <Link to={`/mealinfo/${idMeal}`}>
                        <div className="badge badge-outline">See Details</div>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Meal;