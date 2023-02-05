import { useState } from "react";

// write code to render 2 dependent dropdown,
// value of one should get filter from another
// E.g. 1st dropdown- States- Maharashtra, Andharpradesh, karnataka
// other drop down filter cities for selected state

const statesData = [
  {
    id: 1,
    state: "Maharashtra",
    cities: ["Sangli", "Pune"],
  },
  {
    id: 2,
    state: "Andharpradesh",
    cities: ["Hyderabad", "Ibrahimpattnam"],
  },
  {
    id: 3,
    state: "karnataka",
    cities: ["Banglore", "Hubli"],
  },
];

export default function DependentDropdown() {
  const [crState, setCrState] = useState(statesData[1].state);
  const [crCity, setCrCity] = useState(statesData[1].cities[1]);
  const [selectedState, setSelectedState] = useState(statesData[1]);

  const handleChangeState = (e) => {
    const newData = statesData.filter((item) => item.state === e.target.value);
    setCrState(e.target.value);
    setCrCity();
    setSelectedState(...newData);
  };

  const handleChangeCity = (e) => {
    setCrCity(e.target.value);
  };

  return (
    <div>
      <select value={crState} onChange={handleChangeState}>
        {statesData.map((item) => (
          <option key={item.id} value={item.state}>
            {item.state}
          </option>
        ))}
      </select>
      
      <select value={crCity} onChange={handleChangeCity}>
        {selectedState?.cities?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
