import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>
          Inventory</h2>
        {/*map over prop.fishes and render a EditFishForm*/}
        {Object
          .keys(this.props.fishes)
          .map(key => <EditFishForm fish={this.props.fishes[key]} key={key} index = {key} updateFish = {this.props.updateFish}></EditFishForm>)}

        <AddFishForm addFish={this.props.addFish}/>

        <button onClick ={this.props.loadSampleFishes}>Load Sample Fishes</button>

      </div>
    )
  }
}

export default Inventory;