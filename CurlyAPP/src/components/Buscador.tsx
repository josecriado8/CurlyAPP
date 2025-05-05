import React from "react";

interface BuscadorProps {
  value: string;
  onChange: (value: string) => void;
}

const Buscador: React.FC<BuscadorProps> = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="¿Qué producto buscas?"
    value={value}
    onChange={e => onChange(e.target.value)}
    className="buscador-input"
  />
);

export default Buscador;