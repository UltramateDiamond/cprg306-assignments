"use client"

import { useState, useEffect } from "react"

export default function Meals(ingredients) {

    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        if (ingredients) {
          const fetchedMeals = await fetchMealIdeas(ingredients);
          setMeals(fetchedMeals);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredients]);

    return(
        <main>

        </main>
    );
}

const fetchMealIdeas = async (ingredients) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch meal ideas');
      }
  
      const data = await response.json();

      if (data.meals) {
        return data.meals.map(meal => ({
          idMeal: meal.idMeal,
          strMeal: meal.strMeal,
          strMealThumb: meal.strMealThumb
        }));
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
      return []; 
    }
};