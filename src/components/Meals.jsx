"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const Meals = () => {

    const [search, setSearch] = useState("a")
    const [error, setError] = useState("")
    const [meals, setMeals] = useState([])


    const loadData = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json()
            console.log(data.meals)
            setMeals(data.meals);
            setError("")
        }
        catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

    useEffect(() => {
        loadData()
    }, [search])

    const handler = (e) => {
        const value = e.target.value;
        console.log(value)
        setSearch(value)
    }
    return (
        <div>
            <input onChange={handler} type="text" placeholder="Search your meal" name="search" className="border-2 p-2" />
            <button className="border-2 p-2">Search</button>


            <div className="grid grid-cols-4">
          {
            meals?.map(meal => {
                return <div key={meal?.idMeal} className="w-[300px] border-2 p-7">
                    <Image width="300" height='300' src={meal?.strMealThumb} alt="" />
                    <h1>This is a meal id: {meal?.idMeal}</h1>
                    <h1>This is a meal description: {meal?.strInstructions}</h1>
                </div> 
            })
          }
            </div>
        </div>
    );
};

export default Meals;