import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const add = () => setcount((prev) => prev + 1);
  const subtract = () => setcount((prev) => prev - 1);

  return (
    // <div className="Boot-Button">
    //   <h1 className="">Counter Component</h1>
    //   <h2 className="">{count}</h2>
    //   <div className="">
    //     <button className="" onClick={add}>
    //       Add
    //     </button>
    //     <button className="" onClick={subtract}>
    //       Remove
    //     </button>
    //   </div>
    // </div>

    /*USning Bootstrap classes to style the component, 
Style with Bootstrap classes.
Your counter component is now functional, but it currently looks a bit bland. 
This is where you can use Bootstrap classes to add some form to this function.

Bootstrap offers several style classes to help you quickly style your website or web-based application. 
These include:

1.Layout classes to control the layout and position of elements in the viewport
2.Component classes to help you style standalone components like navbars, progress bars, and buttons
3.Utility classes to write CSS styles for individual properties like margins, borders, and colors
For this project, you’ll use all three classes to change the size, font, and placement of the text,
 as well as add some style to the buttons.

To begin, open the ./Counter.js file and replace the HTML in its return statement with the following code:
    */
    <div className="mt-5 px-3 py-4">
      <h1 className="h1 display-1">Counter Component</h1>
      <h2 className="h1 display-1 mt-5 mb-3">{count}</h2>
      <div className="mt-5">
        <button
          className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2"
          onClick={add}
        >
          Add
        </button>
        <button
          className="btn btn-dark btn-lg mx-3 px-5 py-3 mt-2"
          onClick={subtract}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Counter;
