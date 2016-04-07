(function() {
  // onReady
  $(function() {

    function quoteDisplay(quoteObj) {
      if (quoteObj && !quoteObj.quote) {
        // Sometimes we don't actually get a quote - try again.
        WikiquoteApi.getCompletelyRandomQuote(quoteDisplay, quoteError);
      } else {
        $('#quoteText').text(quoteObj.quote);
        $('#realAuthor').text(quoteObj.titles);
        $('#goatAuthor').text(goat.getRandomName());
        $('#goatPic').attr('src', goat.getRandomImg());
      }
    }

    function quoteError(errorObj) {
      console.log(errorObj);
      $('#quoteText').text('Baaaa!  I mean, Error!  Try again!');

    }

    $('#tweetQuote').on('click', function(e){
      e.preventDefault();
      window.open('https://twitter.com/intent/tweet?hashtags=QuotesMcGoats' +
                  '&text=' + encodeURIComponent($('#quoteText').text()) +
                  ' -' + encodeURIComponent($('#goatAuthor').text()), '_blank');
    });

    $('#newQuote').on('click', function(e) {
      e.preventDefault();
      WikiquoteApi.getCompletelyRandomQuote(quoteDisplay, quoteError);
    });

    // Get our first quote on page load.
    $('#newQuote').click();
  });

  var goat = {
    goatImgNum: 19,
    goatImgPrefix: "./img/goat_",
    names: [
      "Goaty McGoatface",     "Little Bo Peep's Lost Sheep", "Mary's Lamb",
      "Goat John Paul II",    "Lao Ewe",                     "Billy The Kid",
      "Ewe Boll",             "Billy Idol",                  "Billy Gates",
      "Sun Ewe",              "J. K. Ramling",               "Rami",
      "Vincent Van Goat",     "Muhammad Dolly",              "Wooly Allen",
      "Ali Baaaaba",          "Ramstein",                    "Abralamb Lincoln",
      "Alexander the Goat",   "Tupac Markhor",               "Ram Rather",
      "Daniel Ramcliffe",     "Ram Weasley",                 "Ewegene Levy",
      "Ewegene Mirman",       "Ewegene Porter",              "Billy Joel",
      "BILLY MAYS",           "Billy Crystal",               "Billy Zane",
      "Ram Swanson",          "Ram Burgundy",                "Aries Spears",
      "Kid Meier",            "Kid Vicious",                 "Kid Wilson",
      "Kid Barrett",          "River Ram",                   "Simon Ram",
      "Reuben Ram"
    ],
    getRandomName: function() {
      return this.names[Math.floor(Math.random() * this.names.length)];
    },
    getRandomImg: function() {
      return this.goatImgPrefix + (Math.floor(Math.random() * this.goatImgNum + 1)) + ".jpg";
    }
  };

}());
