import React from "react";
import { createUseStyles } from "react-jss";
import { MonsterCard } from "../MonsterCard";

export const MonsterCardList = ({ monsterList }) => {
  const classes = useStyles();
  return (
    <div className={classes.monsterCardList}>
      {monsterList.map((monster) => {
        return (
          <MonsterCard
            key={monster.id}
            id={monster.id}
            name={monster.name}
            email={monster.email}
          />
        );
      })}
    </div>
  );
};

const useStyles = createUseStyles({
  monsterCardList: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
});

