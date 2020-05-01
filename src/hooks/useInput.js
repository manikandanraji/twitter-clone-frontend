import { useState } from "react";

export default (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, setValue, onChange };
};
