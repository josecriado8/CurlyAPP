import React from "react";
import { Product } from "../types/Product";

interface SuggestionsListProps {
  suggestions: Product[];
  onSelect: (product: Product) => void;
}

const SuggestionsList: React.FC<SuggestionsListProps> = ({ suggestions, onSelect }) => (
  <ul className="suggestions-list">
    {suggestions.map(s => (
      <li key={s.id} onClick={() => onSelect(s)}>
        {s.name}
      </li>
    ))}
  </ul>
);

export default SuggestionsList;