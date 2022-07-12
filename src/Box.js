import React from "react";

const Box = ({ id, handleRemove, width, height, backgroundColor }) => {
  const remove = () => handleRemove(id);
  return (
<>
<div data-testid="box-testid"
style={{
  height: `${height}px`,
  width: `${width}%`,
  backgroundColor,
  boxShadow: `5px 5px 5px #888888`,
  margin: `auto auto 20px`
}}
>
<button style={{float: `right`}} onClick={remove}><b>X</b></button>
</div>
</>
)
}

export default Box;