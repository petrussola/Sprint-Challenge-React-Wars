import React from "react";
import Individual from "./Individual";

function Data({ data }) {
  return (
    <div>
      {
        data.map((item, indx) => (
            <Individual key={item.name} data={item} />
        ))
      }
    </div>
  );
}

export default Data;
