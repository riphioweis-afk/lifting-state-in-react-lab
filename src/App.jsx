import { useState } from 'react';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';


const availableIngredients = [
{ name: 'Kaiser Bun', color: 'saddlebrown' },
{ name: 'Sesame Bun', color: 'tan' },
{ name: 'Gluten Free Bun', color: 'peru' },
{ name: 'Lettuce Wrap', color: 'olivedrab' },
{ name: 'Beef Patty', color: '#3F250B' },
{ name: 'Soy Patty', color: '#3F250B' },
{ name: 'Black Bean Patty', color: '#3F250B' },
{ name: 'Chicken Patty', color: 'burlywood' },
{ name: 'Lettuce', color: 'lawngreen' },
{ name: 'Tomato', color: 'tomato' },
{ name: 'Bacon', color: 'maroon' },
{ name: 'Onion', color: 'lightyellow' },
];


const App = () => {
// 🧱 Burger stack state
const [stack, setStack] = useState([]);


// ➕ Add ingredient to burger
const addToBurger = (ingredient) => {
setStack([...stack, ingredient]);
};


// ❌ Remove ingredient from burger
const removeFromBurger = (index) => {
const newStack = [...stack];
newStack.splice(index, 1);
setStack(newStack);
};


return (
<main>
<h1>Burger Stacker</h1>
<section>
<IngredientList
ingredients={availableIngredients}
addToBurger={addToBurger}
/>
<BurgerStack
stack={stack}
removeFromBurger={removeFromBurger}
/>
</section>
</main>
);
};

export default App