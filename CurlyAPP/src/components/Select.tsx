import React from "react";

interface SelectProps {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ value, options, placeholder, onChange }) => (
  <select
    className="select-custom"
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    <option value="">{placeholder}</option>
    {options.map(option => (
      <option key={option} value={option}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </option>
    ))}
  </select>
);

export default Select;