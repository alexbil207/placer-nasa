import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { SearchAutoComplite } from "./SearchAutoComplite";
import "./style.css";
import { useFilter } from "../../hooks/useFilter";
import { getOptions } from "../../utils";

export const SearchBar = () => {
  const [isOpen, setOpen] = useState(false);
  const { handleChange } = useForm();
  const { meteors, filterBy } = useFilter();

  return (
    <form onSubmit={(ev) => ev.preventDefault()}>
      <div className="input-wrapper">
        <label htmlFor="year">Year</label>
        <input
          type="text"
          name="year"
          id="year"
          value={filterBy.year}
          onChange={handleChange}
          onBlur={() => setTimeout(() => setOpen(false), 100)}
          onFocus={() => setOpen(true)}
        />
        <SearchAutoComplite isOpen={isOpen} meteors={getOptions(meteors)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="mass">Mass</label>
        <input
          type="number"
          name="mass"
          id="mass"
          value={filterBy.mass}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
