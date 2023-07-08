import "./App.css";
import { Cards } from "./components/cards/Cards";
import { Header } from "./components/header/Header";
import { SearchBar } from "./components/search-bar/SearchBar";
import { useHttp } from "./hooks/useHttp";

export const App = () => {
  useHttp();
  return (
    <>
      <Header />
      <SearchBar />
      <Cards />
    </>
  );
};
