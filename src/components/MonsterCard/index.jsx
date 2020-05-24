import React from "react";
import { createUseStyles } from "react-jss";

export const MonsterCard = ({id, name, email}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img alt='monster' src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h2> {name}</h2>
      <p>{email}</p>
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#95DADA",
    width: 330,
    height: 350,
    margin: '10px 10px 10px 10px',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  image: {},
  name: {},
  email: {},
});
