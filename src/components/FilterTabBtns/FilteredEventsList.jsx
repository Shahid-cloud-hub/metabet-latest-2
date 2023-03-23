import React, { useState } from "react";
import axios from "axios";

const FilteredEventsList = () => {
  const [formData, setFormData] = useState({
    dropVal: "",
  });

  console.log(formData, "test");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get("/api/cms", {
      params: formData,
    });
    console.log(response.data);
  };

  const handleDropdownChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "5px",
        justifyContent: "flex-end",
        padding: "20px 40px 0px",
      }}
    >
      <div>
        <select
          id="dropVal"
          name="dropVal"
          value={formData.dropVal}
          onChange={handleDropdownChange}
        > 
          <option value="all" class="select-hr">All <hr/> </option>
          <option value="size">Size</option>
          <option value="live">Live</option>
          <option value="ended">Ended</option>
          <option value="number_bets">Number Bets</option>
          <option value="ending_soon">Ending Soon</option>
        </select>
      </div>
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilteredEventsList;
