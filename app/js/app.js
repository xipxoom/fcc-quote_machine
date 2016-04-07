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
        $('#goatPic').attr('src', goat.getRandomImg()).removeClass("quoteError");
      }
    }

    function quoteError(errorObj) {
      console.log(errorObj);
      $('#quoteText').text('Baaaa!  I mean, Error!  Try again!');
      $('#goatPic').addClass("quoteError");
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
    goatImgRemote: [  // codepen.io needs remote links
      "https://i.imgsafe.org/06598ba.jpg",
      "https://i.imgsafe.org/0b1b2a8.jpg",
      "https://i.imgsafe.org/0c1e3db.jpg",
      "https://i.imgsafe.org/0d0f841.jpg",
      "https://i.imgsafe.org/0dc779a.jpg",
      "https://i.imgsafe.org/0ea9359.jpg",
      "https://i.imgsafe.org/0f8eaa3.jpg",
      "https://i.imgsafe.org/1072c94.jpg",
      "https://i.imgsafe.org/1138427.jpg",
      "https://i.imgsafe.org/11e3f24.jpg",
      "https://i.imgsafe.org/129ec39.jpg",
      "https://i.imgsafe.org/1397c68.jpg",
      "https://i.imgsafe.org/15a6c66.jpg",
      "https://i.imgsafe.org/1667fcd.jpg",
      "https://i.imgsafe.org/1712303.jpg",
      "https://i.imgsafe.org/1809307.jpg",
      "https://i.imgsafe.org/1894ba8.jpg",
      "https://i.imgsafe.org/194930f.jpg",
      "https://i.imgsafe.org/1a99737.jpg"
    ],
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
      //return this.goatImgRemote[Math.floor(Math.random() * this.goatImgRemote.length)];
    }
  };

}());
