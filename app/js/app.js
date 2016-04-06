$(function() {
  $('#tweetQuote').on('click', function(e){
    e.preventDefault();
    // Full attribution
    // window.open('https://twitter.com/intent/tweet?hashtags=QuotesMcGoats' +
    //             '&text=' + encodeURIComponent($('#quoteText').text()) +
    //             ' -' + encodeURIComponent($('#goatAuthor').text()) +
    //             ' (commonly misattributed to ' +
    //             encodeURIComponent($('#realAuthor').text()) + ')', '_blank');

    // Just fake author
    window.open('https://twitter.com/intent/tweet?hashtags=QuotesMcGoats' +
                '&text=' + encodeURIComponent($('#quoteText').text()) +
                ' -' + encodeURIComponent($('#goatAuthor').text()), '_blank');
  });
});
