(function(window){
    var speakWord = "Good Bye";
    let SpeakGoodBye={};
    SpeakGoodBye.speak = function (name) {
      console.log(speakWord + " " + name);
    }

    window.SpeakGoodBye = SpeakGoodBye;
  
  })(window);
