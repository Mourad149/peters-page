import React from 'react';
import useStyles from './content.style';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Typography } from '@material-ui/core';
function CardContentComponent() {
  const classes = useStyles();
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.cardContent}>
        <AccountBalanceIcon className={classes.IconeStyling} />
      </div>
      <div className={classes.cardLegendContainer}>
        <Typography className={classes.cardLegend}>Something</Typography>
        <Typography className={classes.cardLegend}>Something</Typography>
      </div>
    </div>
  );
}

export default CardContentComponent;
