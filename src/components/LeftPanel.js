import React, { Component } from 'react' 

class LeftPanel extends Component {
  generateOptions() {
    var options = this.props.data
    return (
      options.map((op)=>(<option key= {op.id} value={op.id}>{op.name}</option>))
    )
  }

  onSelectChange(e) {
    console.log("Calories is " + e.target.value)
  }

  render() {
    return (
        <aside className = "left-panel">
          <div className="form-item">
            <label>Enter a date: </label>
            <input type="text" className="input-box" placeholder="mm/dd/yyyy" id="logDate" />
          </div>    
          <div className="form-item">
            <label>Select a meal: </label>
            <select id="logMealType">
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>
          <div className="form-item">
            <label>Select a food: </label>
            <select onChange={this.onSelectChange} id="logFood">
              {this.generateOptions()}  
            </select>
          </div>   
          <div className="form-item">
            <label>How much: </label>
            <input type="text" className="input-box" id="logQty" />
          </div>     
          <div className="form-item">
            <button onClick={this.props.onAdd} id="logAddBtn">Add</button>
          </div>
        </aside>
    )
  }
}

export default LeftPanel;
