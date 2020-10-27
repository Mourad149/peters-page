import React from 'react';
import useStyles from './footer.style';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Typography } from '@material-ui/core';
function FooterComponent() {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <Typography align="center" className={classes.footerTitle}>
        ValfortJant
      </Typography>
      <Typography align="center" className={classes.footerText}>
        Info@something.com
      </Typography>
      <Typography align="center" className={classes.footerText}>
        06060606
      </Typography>
    </div>
  );
}

export default FooterComponent;
