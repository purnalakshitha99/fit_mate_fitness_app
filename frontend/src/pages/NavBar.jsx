import React from "react";

const NavBar = ({ mealPlan }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4">title</h2>
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-gray-600">Prep Time:</p>
          <p>pep time</p>
        </div>
        <div>
          <p className="text-gray-600">Cook Time:</p>
          <p>cook time</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <p className="text-xl font-semibold mb-2">Ingredients:</p>
        <ul className="list-disc list-inside ">
          {/* {mealPlan.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))} */}
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ul className="list-disc list-inside ">
          {/* {mealPlan.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))} */}
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="text-xl font-semibold mb-2">Instructions:</p>
        <ol className="list-decimal list-inside">
          {/* {mealPlan.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))} */}
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ol>
      </div>
    </div>
  );
};

export default NavBar;
