import { makeStyles } from "@material-ui/core";
import img from '../../static/footer.jpg';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap', 
    textAlign: 'center',
    minHeight: 400,
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#fff',
    bottom: '0px'
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  footerCopy: {
    color: '#00d474',
    marginTop:'20px'
  },
  footerBody: {
    marginTop:'20px'
  }
}));