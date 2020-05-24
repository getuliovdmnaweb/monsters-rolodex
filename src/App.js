import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { MonsterCardList } from "./components/MonsterCardList";
const App = () => {
  const classes = useStyles(window.innerHeight);
  const [monsterList, setMonsterList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const searchMonster = ({ target: { value } }) => {
    let newFilteredList = monsterList.filter((monster) =>
      monster.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(newFilteredList);
  };

  useEffect(() => {
    async function getData() {
      let url = "https://jsonplaceholder.typicode.com/users";
      let response = await fetch(url);
      let data = await response.json();
      setMonsterList(data);
      setFilteredList(data);
    }
    getData();
  }, []);
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Monsters Rolodex</h1>
      <input
        className={classes.searchBox}
        type="search"
        onChange={searchMonster}
        placeholder="Filtre Seus Monstros"
      />
      <MonsterCardList monsterList={filteredList} />
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flex: 1,
    minHeight: (innerHeight) => innerHeight,
    flexDirection: "column",
    backgroundColor: "#0D3A61",
    alignItems: "center",
    padding: "0px 10% 0px 10%",
  },
  header: {
    color: "#45CAC4",
    fontFamily: "Bigelow Rules",
    fontSize: 72,
  },
  searchBox: {
    display: 'flex',
    padding: 10,
    borderRadius: 2,
    marginBottom: 30
  },
});

export default App;
