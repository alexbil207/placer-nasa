import { useForm } from "../../hooks/useForm";
import { Options } from "./Options";
import { v4 as uuidv4 } from "uuid";

interface ISearchAutoComplite {
  isOpen: boolean;
  meteors: string[] | null;
}
export const SearchAutoComplite = ({
  isOpen,
  meteors,
}: ISearchAutoComplite) => {
  const { handleClick } = useForm();
  if (!meteors) return null;
  return (
    <div className={`auto-complite ${isOpen ? "show" : ""}`}>
      {meteors.map((year: string) => (
        <Options handleClick={handleClick} value={year} key={uuidv4()} />
      ))}
    </div>
  );
};
