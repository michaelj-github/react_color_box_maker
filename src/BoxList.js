import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const INITIAL_STATE = []
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
  }
  const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  };
  return (
    <div>
      <h3>Add a Box</h3>      
      <div>
      <NewBoxForm addBox={addBox} />
        {boxes.map(({ id, width, height, backgroundColor }) => 
        <Box 
          id={id} 
          width={width} 
          height={height} 
          handleRemove={remove}
          backgroundColor={backgroundColor} 
          key={id} 
        />)}
      </div>

    </div>
  )
}

export default BoxList;