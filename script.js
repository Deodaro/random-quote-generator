// ()

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quote From API
async function getQuote() {
  const proxyUrl = 'http://cors-anywhere.herokuapp.com/'
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    // If Author is blank, add 'Unknown'
    if (data.quoteAuthor === '') {
      authorText.innerText = 'Unknown';
    } else {
      authorText.innerText = data.quoteAuthor;
    }
    // // Reduce font size for long quotes
    if (data.quoteText.length > 50) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
  } catch (error) {
    getQuote();
  }
}

// On Load
getQuote();

