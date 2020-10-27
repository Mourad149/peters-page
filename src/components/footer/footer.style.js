import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    height: '100%',
    width: '80%',
    backgroundColor: 'black',
  },
  footerTitle: {
    fontSize: '1.2em',
    fontWeight: 600,
    color: 'white',
    padding: '30px',
  },
  footerText: {
    fontSize: '0.7em',
    fontWeight: 500,
    color: 'white',
  },
}));
export default useStyles;
