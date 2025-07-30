import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button, { ButtonType } from "components/Button";

import styles from "./Search.module.scss";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(search)}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a meal"
        className={styles.input}
      />

      <Button type={ButtonType.submit}>Search</Button>
    </form>
  );
};

export default Search;
