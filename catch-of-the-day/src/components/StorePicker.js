import React from "react";
//import { format } from "path";
class StorePicker extends React.Component {
  render() {
    return (

      <form className="store-selector">
              {/*Form component*/}
<h2>Please enter a store</h2>
        <input type="text" placeholder="Store name" required />
        <button type="submit">Visit Store </button>
      </form>
    );
  }
}
export default StorePicker;
