import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

export const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    cursor: 'auto'
  },
  chip: {
    marginTop: '10px',
    color: theme.palette.text.secondary,
  }
}));

export const MyChip = styled(Chip)({
  marginTop: '10px',
  color: '#fff',
  backgroundColor: '#000000ab'
});