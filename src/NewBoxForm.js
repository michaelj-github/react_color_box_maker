import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: '50',
    height: '400',
    backgroundColor: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="width">Box Width as % of screen width [{formData.width}%] </label>
      <input
        id="width"
        type="range"
        min="1"
        max="100"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      </div>
      <div>
      <label htmlFor="height">Box Height in pixels (20 - 800) [{formData.height}] </label>
      <input
        id="height"
        type="range"
        min="20"
        max="800"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      </div>
      <div>
      <label htmlFor="backgroundColor">Box Color </label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"        
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      </div>
      <button>Add Box</button>
    </form>
  )
}

export default NewBoxForm;