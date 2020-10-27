import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardContent: {
    height: '20rem',
    width: '15rem',
    backgroundColor: '#ECECEC',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    height: '60%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconeStyling: {
    fontSize: '50px',
  },
  cardLegendContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLegend: {
    fontSize: '0.8em',
    fontWeight: 600,
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
export default useStyles;
