import React, { Component } from "react";

class ContentPanel extends Component {
  render() {
    return <article className="content-panel">{this.renderData()}</article>;
  }

  //
  renderData() {
    const dataGroupByDate = this.groupBy(this.props.data.foodItems, "date");
    console.log(dataGroupByDate);
    return Object.keys(dataGroupByDate).map(dateKey => {
      const dataGroupByMeal = this.groupBy(dataGroupByDate[dateKey], "meal");
      return (
        <div key={dateKey}>
          <h3>{dateKey}</h3>
          <div>
            {Object.keys(dataGroupByMeal).map(mealKey => {
              let totalCalories = 0
              return (
              <div key={mealKey}>
                <h4>{mealKey}</h4>
                <div>
                  {dataGroupByMeal[mealKey].map(meal => {
                    totalCalories += meal.calories
                    return <li key={meal.foodName + Math.random()}>{meal.foodName} - {meal.calories}</li>}
                  )}
                </div>
                <p>Total calories: {totalCalories}</p>
              </div>
            )})}
          </div>
        </div>
      );
    });
  }

  //group foodItems by key(date or meal)
  groupBy(items, key) {
    return items.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
}

export default ContentPanel;
