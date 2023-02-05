import { useState } from "react";

export default function Checkbox() {
  const [isChecked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      isGoing?
    </div>
  );
}
