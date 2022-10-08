import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import 'tw-elements';

function App() {
  const [recipes, setPosts] = useState([]);

  // GET with fetch API
  useEffect(() => {
     const fetchPost = async () => {
        const response = await fetch(
           'https://mdwbbsbx2v.eu-west-1.awsapprunner.com/images'
        );
        const data = await response.json();
        console.log(data);

        const recipes = [
          {key:"pizza", name:"Pizza", tags:['Italian', 'Prep Day'], portions:3 , source:"https://www.youtube.com/watch?v=7cqYiUmutGI", ingredients:[
            {name:"Flour", amount:"500g"},
            {name:"Salt", amount:"8g"},
            {name:"Yeast", amount:"1g"},
            {name:"Water", amount:"350ml"}
          ], image:"https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
          {key: "burrito", name:"Burrito", tags:['Mexican', 'Pain'], portions:4, source:"", ingredients:[
            {name:"Wraps", amount:"4"},
            {name:"Chili Con Carne", amount:"400g"},
            {name:"Guacamole", amount:"1 tin"},
            {name:"Salsa", amount:"Feeling"}
          ], image:"https://upload.wikimedia.org/wikipedia/commons/6/60/Burrito.JPG"},
          {key:"guacamole", name:"Guacamole", tags:['Mexican', 'Easy', 'Side-dish'], portions:1, source:"", ingredients:[
            {name:"Avocado", amount:"1"},
            {name:"Cherry Tomatoes", amount:"10"},
            {name:"Onions", amount:"1"},
            {name:"Salt", amount:"Feeling"},
            {name:"Pepper", amount:"Feeling"},
          ], image:"https://upload.wikimedia.org/wikipedia/commons/5/50/Bowl_of_chili.jpg"},
          {key:"salsa", name:"Salsa", tags:['Mexican', 'Easy', 'Side-dish'], portions:1, source:"", ingredients:[
            {name:"Cherry Tomatoes", amount:"10"},
            {name:"Onions", amount:"1"},
            {name:"Coriander", amount:"Feeling"},
            {name:"Salt", amount:"Feeling"},
            {name:"Pepper", amount:"Feeling"},
            {name:"Lime Juice", amount:"Feeling"}
          ], image:"https://upload.wikimedia.org/wikipedia/commons/5/50/Bowl_of_chili.jpg"},
          {key:"chili-con-carne", name:"Chili Con Carne", tags:['Mexican', 'Easy'], portions:4, source:"", ingredients:[
            {name:"Mince", amount:"400g"},
            {name:"Kidney Beans", amount:"1 tin"},
            {name:"Tomatoes", amount:"1 tin"},
            {name:"Onions", amount:"1"},
            {name:"Tumeric", amount:"Feeling"},
            {name:"Smoked Paprika", amount:"Feeling"},
            {name:"Parsley", amount:"Feeling"},
            {name:"Cayenne Pepper", amount:"Feeling"},
            {name:"Coriander", amount:"Feeling"},
            {name:"Lime Juice", amount:"Feeling"}
          ], image:"https://upload.wikimedia.org/wikipedia/commons/5/50/Bowl_of_chili.jpg"},
          {key:"chickpea-burgers", name:"Chickpea Burgers", tags:['Vegi', 'Prep Day'], portions:4, source:"https://www.rte.ie/lifestyle/recipes/2013/0508/745022-moroccan-chickpea-burgers/", ingredients:[
            {name:"Chickpeas", amount:"1 tin"},
            {name:"Breadcrumbs", amount:"60g"},
            {name:"Tahini paste", amount:"2 tblsp"},
            {name:"Egg", amount:"1"},
            {name:"Coriander", amount:"1 tsp"},
            {name:"Cumin", amount:"1 tsp"},
            {name:"Spring Onions", amount:"6"},
            {name:"Rapeseed Oil", amount:"2 tblsp"},
            {name:"Pitta breads", amount:""},
            {name:"Salad leaves", amount:""},
            {name:"Grated Carrot", amount:"1"}
          ], image:"https://img.rasset.ie/0005dd0b-800.jpg"},
          {key:"taziti", name:"Taziti", tags:['Persian', 'Easy', 'Side-dish'], portions:1, source:"", ingredients:[
            {name:"Yogurt", amount:"100gm"},
            {name:"Cucumber", amount:"1/2"},
            {name:"Garlic", amount:"1 Glove"},
            {name:"Salt", amount:"Feeling"},
            {name:"Lemon Juice", amount:"Feeling"}
          ], image:"https://upload.wikimedia.org/wikipedia/commons/5/50/Bowl_of_chili.jpg"},
          {key:"spicy-yogurt", name:"Spicy Yogurt", tags:['Persian', 'Easy', 'Side-dish'], portions:1, source:"", ingredients:[
            {name:"Yogurt", amount:"100gm"},
            {name:"Garam Masala", amount:"1 tsp"}
          ], image:"https://upload.wikimedia.org/wikipedia/commons/5/50/Bowl_of_chili.jpg"},
        ];

        recipes.map((recipe) => {
          recipe.classes = ""
          recipe.tags.forEach((tag) => recipe.classes += tag + " ")
        })

        setPosts(recipes);
     };
     fetchPost();
  }, []);

  return (
    <div className="pt-12 fixed flex w-full h-full gap-4">
      <div className="w-64 h-full shadow-md bg-white px-1">
        <ul className="relative">
          <li key="Italian" className="relative">
            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Italian</a>
          </li>
          <li key="Mexican" className="relative">
            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Mexican</a>
          </li>
          <li key="EasyDinner" className="relative">
            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Easy Dinner</a>
          </li>
        </ul>
      </div>

      <div className="flex-1 overflow-auto">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       {recipes.map((recipe) => (
          <div className={`rounded-lg shadow-lg bg-white ${recipe.classes}`}>
            <a href="#!">
              <img className="rounded-t-lg border rounded" src={`${recipe.image}`} alt=""></img>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">{recipe.name}</h5>
              <p>Portions: {`${recipe.portions}`}</p>
              <p>Recipe: <a href={`${recipe.source}`} className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4">link</a></p>

              {/* {post.tags.map((tag) => (
                <span
                  className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  {tag}
                </span>
                
              ))} */}
              <div className="accordion mt-4" id={`accordion${recipe.key}`}>
                <div className="accordion-item bg-white border border-gray-200">
                  <h2 className="accordion-header mb-0" id={`heading${recipe.key}`}>
                    <button className="
                      accordion-button
                      relative
                      flex
                      items-center
                      w-full
                      py-4
                      px-5
                      text-base text-gray-800 text-left
                      bg-white
                      border-0
                      rounded-none
                      transition
                      focus:outline-none
                    " type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${recipe.key}`} aria-expanded="true"
                      aria-controls={`collapse${recipe.key}`}>
                      Ingredients
                    </button>
                  </h2>
                  <div id={`collapse${recipe.key}`} className="accordion-collapse collapse" aria-labelledby={`${recipe.key}`}
                    data-bs-parent={`#accordion${recipe.key}`}>
                    <div className="accordion-body py-4 px-5">

                      <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full text-center">
                                <tbody>
                                  {recipe.ingredients.map((ingredient) => (
                                    <tr className="bg-white border-b">
                                      <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {ingredient.name}
                                      </td>
                                      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                      {ingredient.amount}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              {/* <p className="text-gray-700 text-base mb-4">
              {post.color}
              </p> */}
              {/* <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
            </div>
          </div>
       ))}
       </div>
       </div>
    </div>
    );
}

export default App;
