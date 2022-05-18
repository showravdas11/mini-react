import { Grid, makeStyles } from "@material-ui/core";
import Add from "./components/Add/Add";
import FeedItem from "./components/Feed/FeedItem";
import LeftBar from "./components/Header/Navbar/LeftBar";
import Navbar from "./components/Header/Navbar/Navbar";
import RightBar from "./components/Header/Navbar/RightBar";


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <FeedItem/>
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar/>
        </Grid>
      </Grid>
      <Add/>
    </div>
  );
};
export default App;
