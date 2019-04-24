import React, { Component } from 'react';
import TopBar from './components/TopBar'
import LeftPanel from './components/LeftPanel'
import ContentPanel from './components/ContentPanel'
import './styles/App.css';

class App extends Component {  
  constructor(props) {
    super(props)
    this.data = [
      {id: "101", name: "Egg", calories: 121, portion: 50},    
      {id: "102", name: "Apple", calories: 33, portion: 100}
    ]
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
        foodId = foodSelector.value,
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
