import React, { useEffect, useState } from 'react';

// COMPONENTS
import './App.css';
import Quote from './components/Quote';

// LODASH
import { random } from 'lodash';

// MATERIAL UI - CORE
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    width: '100vw',
    height: '100vh'
  }
});

const App = () => {
  const classes = useStyles();
  const [quotes, setQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'
      );
      const quotes = await response.json();
      setQuotes(quotes);
      setSelectedQuoteIndex(random(0, quotes.length - 1));
    }
    fetchData();
  }, []);

  const getSelectedQuote = () => {
    if (!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
      return undefined;
    }
    return quotes[selectedQuoteIndex];
  };

  const generateNewQuoteIndex = () => {
    if (!quotes.length) {
      return undefined;
    }
    return random(0, quotes.length - 1);
  };

  const assignNewQuoteIndex = () => {
    setSelectedQuoteIndex(generateNewQuoteIndex());
  };

  return (
    <Grid
      container
      id='quote-box'
      justify='center'
      align='center'
      className={classes.wrapper}
    >
      <Grid item xs={12} sm={8} md={6}>
        {getSelectedQuote() ? (
          <Quote
            selectedQuote={getSelectedQuote()}
            assignNewQuoteIndex={assignNewQuoteIndex}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default App;
