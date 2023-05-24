(function(window){
    var speakWord = "Hello";
    let SpeakHello={};
    SpeakHello.speak = function (name) {
      console.log(speakWord + " " + name);
    }

    window.SpeakHello = SpeakHello;
  
  })(window);