import React, { Component } from 'react';
import TopBar from './components/TopBar'
import LeftPanel from './components/LeftPanel'
import ContentPanel from './components/ContentPanel'
import './styles/App.css';

class App extends Component {  
  constructor(props) {
    super(props)
    this.data = /*[
      {id: "101", name: "Egg", calories: 121, portion: 50},    
      {id: "102", name: "Apple", calories: 33, portion: 100}
    ]*/
    [
      {"id": 0, "brand": "Journal Communications", "name": "BBQ Chicken Pizza", "calories": 119, "portion": 231}, 
      {"id": 17, "brand": "Journal Communications", "name": "Alice Springs Chicken", "calories": 134, "portion": 264}, 
      {"id": 41, "brand": "Starbucks", "name": "Chicken Alfredo", "calories": 873, "portion": 414}, 
      {"id": 72, "brand": "Magna Gases", "name": "Chicken Divan", "calories": 36, "portion": 216}, 
      {"id": 74, "brand": "Magna Gases", "name": "Chicken bog", "calories": 549, "portion": 279}, 
      {"id": 83, "brand": "Magna Gases", "name": "Alice Springs Chicken", "calories": 937, "portion": 476}, 
      {"id": 132, "brand": "Walt Disney Company", "name": "Chicken French", "calories": 698, "portion": 247}, 
      {"id": 146, "brand": "ABX Air", "name": "Chicken fried steak", "calories": 268, "portion": 132}, 
      {"id": 149, "brand": "ABX Air", "name": "Kung Pao Chicken", "calories": 248, "portion": 193}, 
      {"id": 170, "brand": "ABX Air", "name": "Alice Springs Chicken", "calories": 80, "portion": 23}, 
      {"id": 177, "brand": "ABX Air", "name": "Chicken and waffles", "calories": 310, "portion": 264}, 
      {"id": 179, "brand": "ABX Air", "name": "Chicken Manchurian", "calories": 658, "portion": 97}, 
      {"id": 190, "brand": "ABX Air", "name": "Chicken bog", "calories": 264, "portion": 47}, 
      {"id": 228, "brand": "CIGNA", "name": "Chicken Divan", "calories": 31, "portion": 260}, 
      {"id": 259, "brand": "Maxi-Tech", "name": "Chicken fried bacon", "calories": 274, "portion": 272}, 
      {"id": 273, "brand": "Maxi-Tech", "name": "Chicken French", "calories": 380, "portion": 303}, 
      {"id": 287, "brand": "Maxi-Tech", "name": "Chicken Tikka Masala", "calories": 811, "portion": 38}, 
      {"id": 298, "brand": "Maxi-Tech", "name": "Chicken bog", "calories": 934, "portion": 343}, 
      {"id": 299, "brand": "Maxi-Tech", "name": "Alice Springs Chicken", "calories": 479, "portion": 230}, 
      {"id": 300, "brand": "Maxi-Tech", "name": "Chicken herby pasta bake", "calories": 836, "portion": 9}, 
      {"id": 317, "brand": "Casco Bay Lines", "name": "Chicken and waffles", "calories": 946, "portion": 155}, 
      {"id": 318, "brand": "Casco Bay Lines", "name": "Fried chicken", "calories": 235, "portion": 198}, 
      {"id": 321, "brand": "Casco Bay Lines", "name": "Chicken sandwich", "calories": 409, "portion": 23}, 
      {"id": 332, "brand": "Casco Bay Lines", "name": "Hot Chicken sandwich", "calories": 414, "portion": 81}, 
      {"id": 341, "brand": "facebook", "name": "Chicken herby pasta bake", "calories": 595, "portion": 297}, 
      {"id": 343, "brand": "facebook", "name": "Chicken French", "calories": 692, "portion": 167}, 
      {"id": 357, "brand": "facebook", "name": "Chicken Divan", "calories": 889, "portion": 384}, 
      {"id": 391, "brand": "WellPoint", "name": "BBQ Chicken Pizza", "calories": 382, "portion": 423}, 
      {"id": 392, "brand": "WellPoint", "name": "Alice Springs Chicken", "calories": 1000, "portion": 372}, 
      {"id": 432, "brand": "Afforda Merchant Services", "name": "Chicken Biryani", "calories": 400, "portion": 380}, 
      {"id": 456, "brand": "Benesome", "name": "Hot Chicken sandwich", "calories": 351, "portion": 176}, 
      {"id": 476, "brand": "Benesome", "name": "Hot chicken", "calories": 610, "portion": 364}, 
      {"id": 479, "brand": "Benesome", "name": "Fried chicken", "calories": 280, "portion": 237}, 
      {"id": 482, "brand": "Benesome", "name": "Chicken herby pasta bake", "calories": 478, "portion": 69}, 
      {"id": 491, "brand": "Benesome", "name": "Chicken Tikka Masala", "calories": 736, "portion": 385}, 
      {"id": 509, "brand": "Est\u00e9e Lauder Companies", "name": "Chicken fried bacon", "calories": 860, "portion": 187}, 
      {"id": 532, "brand": "Est\u00e9e Lauder Companies", "name": "Drunken chicken", "calories": 524, "portion": 260}, 
      {"id": 553, "brand": "Est\u00e9e Lauder Companies", "name": "Chicken nugget", "calories": 981, "portion": 408}, 
      {"id": 556, "brand": "Est\u00e9e Lauder Companies", "name": "Kung Pao Chicken", "calories": 125, "portion": 178}, 
      {"id": 592, "brand": "Matrix Architectural Service", "name": "Chicken fingers", "calories": 647, "portion": 21}, 
      {"id": 610, "brand": "Matrix Architectural Service", "name": "Chicken and waffles", "calories": 424, "portion": 192}, 
      {"id": 623, "brand": "Matrix Architectural Service", "name": "BBQ Chicken Pizza", "calories": 10, "portion": 333}, 
      {"id": 651, "brand": "Matrix Architectural Service", "name": "Chicken fried steak", "calories": 30, "portion": 72}, 
      {"id": 653, "brand": "Matrix Architectural Service", "name": "Chicken Manchurian", "calories": 265, "portion": 210}, 
      {"id": 655, "brand": "Matrix Architectural Service", "name": "Fried chicken", "calories": 815, "portion": 429}, 
      {"id": 663, "brand": "Conseco", "name": "Fried chicken", "calories": 536, "portion": 38}, 
      {"id": 664, "brand": "Conseco", "name": "Kung Pao Chicken", "calories": 435, "portion": 143}, 
      {"id": 689, "brand": "Conseco", "name": "Hot Chicken sandwich", "calories": 278, "portion": 212}, 
      {"id": 698, "brand": "Conseco", "name": "Chicken fingers", "calories": 781, "portion": 376}, 
      {"id": 705, "brand": "Conseco", "name": "Drunken chicken", "calories": 429, "portion": 460}]
    this.state = {
      foodItems: []
      /*
        foodItems: [
          {date: "12/12/2018", meal: "breakfast", calories: 121, foodName: "Egg"},
          {date: "12/12/2018", meal: "breakfast", calories: 66, foodName: "Apple"}
        ]
      */
    }
  }  

  render() {
    return (
      <div className="App">
        <TopBar />
        <div className="main-body">
          <LeftPanel data={this.data} onAdd={this.addFood.bind(this)} />
          <ContentPanel data={this.state}/>
        </div>
      </div>
    );
  }

  //on click add button
  addFood() {
    this.setState((prevState)=>prevState.foodItems.push(this.getFormValues()))
    console.log("btn add is clicked.")
  }

  //get form values
  getFormValues() {
    let foodSelector = document.querySelector("#logFood"),
        foodId = parseInt(foodSelector.value),
        qty = document.querySelector("#logQty").value,
        foodItem = this.data.filter((item)=>(item.id === foodId))[0]
    
    return {
      date: document.querySelector("#logDate").value,
      meal: document.querySelector("#logMealType").value,
      calories: parseInt(foodItem.portion * qty / 100 * foodItem.calories),
      foodName: foodSelector[foodSelector.selectedIndex].text
    }
  }

}//class App

export default App;
