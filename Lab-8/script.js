(function(){
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (let i=0; i < names.length; i++) {
        if (names[i].toLowerCase().charAt(0)==='j') {
            SpeakGoodBye.speak(names[i]);
        } else {
            SpeakHello.speak(names[i]);
        }
    }
    console.log("Names ending with 'n':");
    for (let i=0; i < names.length; i++) {
        if (names[i].toLowerCase().charAt(names[i].length - 1)==='n') {
            SpeakHello.speak(names[i]);
          } else {
            SpeakGoodBye.speak(names[i]);
          }
        }
})()





