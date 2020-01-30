import React from 'react';

// MATERIAL UI - CORE
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// MATERIAL UI - ICONS
import ShareSharpIcon from '@material-ui/icons/ShareSharp';

const useStyles = makeStyles(theme => ({
  alignButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(0, 4, 0, 4)
  }
}));

const Quote = ({ assignNewQuoteIndex, selectedQuote }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography id='text'>
          {selectedQuote.quote} -{' '}
          <span id='author'>{selectedQuote.author}</span>
        </Typography>
      </CardContent>
      <CardActions className={classes.alignButtons}>
        <IconButton
          id='tweet-quote'
          href={encodeURI(
            `https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=quoteoftheday`
          )}
        >
          <ShareSharpIcon />
        </IconButton>
        <Button
          id='new-quote'
          onClick={assignNewQuoteIndex}
          variant='contained'
          color='secondary'
        >
          Next Quote
        </Button>
      </CardActions>
    </Card>
  );
};

export default Quote;
