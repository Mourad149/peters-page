import React from 'react';
import useStyles from './navBar.style';
import { Typography, Divider, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function NavBarComponent() {
  const classes = useStyles();
  return (
    <div className={classes.navBarContainer}>
      <div className={classes.navBarItemsPositionning}>
        <div className={classes.navBarItem}>
          <Typography className={classes.textStyling}>
            Info@something.com
          </Typography>
          <Typography className={classes.textStyling}>0606060606</Typography>
        </div>

        <div className={classes.navBarItem}>
          <AccountCircleIcon className={classes.iconStyling} />
          <ExpandMoreIcon className={classes.iconStyling} />
          <AddShoppingCartIcon className={classes.iconStyling} />
        </div>
      </div>
      <div className={classes.dividerContainer}>
        <Divider
          orientation="horizontal"
          style={{
            width: '90%',
            backgroundColor: 'white',
          }}
        />
      </div>
      <div className={classes.navBarItemsPositionning}>
        <div className={classes.navBarItem}>
          <Typography className={classes.titleStyling}>Valfortjant</Typography>
        </div>

        <div className={classes.navBarItem2}>
          <Typography className={classes.textStyling2}>Something</Typography>
          <Typography className={classes.textStyling2}>
            Another Something
          </Typography>
          <Typography className={classes.textStyling2}>Some</Typography>
          <Button className={classes.buttonStyling}>
            Button for Something
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBarComponent;
