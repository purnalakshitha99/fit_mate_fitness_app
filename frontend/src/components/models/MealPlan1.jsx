import React from 'react'

function MealPlan1() {
  return (
    <div
      className="bg-cover bg-center h-screen"
     
    >
      <div className="flex  ">
        

        <div className="border shadow-xl p-8 m-auto  w-[800px] rounded-3xl  mt-24 mr-[400px] bg-gray-300">
          <h2 className="text-center text-2xl font-bold mb-4">
            Create Meal Plan
          </h2>
          <form  className=" ">
            <div>
              <label htmlFor="mealtime">Meal Plan:</label>
              <ul>
                <li>
                  <select
                    id="mealtime"
                    name="mealtime"
                   
                    className="w-full px-3 mt-2 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-opacity-10"
                  >
                    <option value="">Select mealtime</option>
                    <option value="Eggs and Toast">Breakfast</option>
                    <option value="Cereal">Lunch </option>
                    <option value="Pancakes">Dinner</option>
                  </select>
                </li>
              </ul>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="isVegan"
                  
                />
                Vegetarian
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="isVegan"
                  
                />
                Keto
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="isMeat"
                 
                />
                Vegan
              </label>
            </div>
            <div>
              <label htmlFor="ingredients">Ingredients:</label>
              <textarea
                id="ingredients"
                name="ingredients"
                
                className="w-full px-3 mt-2 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500  bg-opacity-10"
              />
            </div>
            <div>
              <label htmlFor="cookingInstructions">Cooking Instructions:</label>
              <textarea
                id="cookingInstructions"
                name="cookingInstructions"
                
                className="w-full px-3 mt-2 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500  bg-opacity-10"
              />
            </div>
            <div>
              <label htmlFor="portionSize">Portion Size:</label>
              <input
                type="text"
                id="portionSize"
                name="portionSize"
              
                className="w-full px-3 mt-2 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500  bg-opacity-10"
              />
            </div>
            <div>
              <label htmlFor="media">Upload video:</label>
              <input
                type="file"
                id="media"
                accept="video/*" // Accept video files
             
                className="w-full px-3 mt-2 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-opacity-10"
              />
            </div>
            <div className=" flex flex-col gap-y-4 text-white text-lg font-semibold">
            <button type="submit" className="bg-blue-600 p-3 rounded-xl text-white">
  Create
</button>
<button
  type="button"
  className="bg-red-600 p-3 rounded-xl text-white"
>
  Cancel
</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );

};

export default MealPlan1