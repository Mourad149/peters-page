import React from 'react';
import CardContentComponent from './cardContent.component';
import useStyles from './content.style';
function ContentComponent() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <CardContentComponent />
      <CardContentComponent />
      <CardContentComponent />
    </div>
  );
}

export default ContentComponent;
