var vacationType = prompt("What kind of trip would you like to go on? (Choose from Musical, Tropical, or Adventurous)");
   var travelSuggestion = "";

   if( vacationType == "musical" ){
      travelSuggestion ="see a musical in New Orleans";
   }

   else if( vacationType == "tropical" ){
      travelSuggestion ="on a beach vacation in Mexico";
   }

   else if ( vacationType == "adventurous" ) {
      travelSuggestion ="whitewater rafting the Grand Canyon";
   }

travelSuggestion +=" by ";

var groupSize = prompt("How many are in your group?");

   if( groupSize >= 1 && groupSize <=2 ){
      travelSuggestion += "First Class flight";
   }

  else if( groupSize >= 3 && groupSize <= 5 ){
      travelSuggestion +="Helicopter";
   }

  else if ( groupSize >= 6 ) {
     travelSuggestion +="Charter Flight";
   }


var result = "Since you're a group of " + groupSize + " and want to go on a " + vacationType + " vacation, you should go " + travelSuggestion;
