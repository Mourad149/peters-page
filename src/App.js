import logo from './logo.svg';
import useStyles from './App.style';
import NavBarComponent from './components/navBar/navBar.component';
import CardContentComponent from './components/content/cardContent.component';
import ContentComponent from './components/content/content.component';
import FooterComponent from './components/footer/footer.component';
function App() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <NavBarComponent />
      <ContentComponent />
      <div className={classes.footerWrapper}>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
