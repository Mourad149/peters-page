import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navBarContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: 'black',
  },
  navBarItemsPositionning: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  navBarItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
  navBarItem2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '10px',
    width: '35%',
  },
  textStyling: {
    fontSize: '0.7em',
    fontWeight: 500,
    padding: '5px',
    color: 'white',
  },
  titleStyling: {
    fontSize: '1.8em',
    fontWeight: 600,
    padding: '5px',
    marginBottom: '10px',
    color: 'white',
  },
  dividerContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyling: {
    borderRadius: '20px',
    backgroundColor: 'white',
  },
  textStyling2: {
    fontSize: '0.8em',
    fontWeight: 500,
    color: 'white',
  },
  iconStyling: {
    color: 'white',
  },
}));
export default useStyles;
