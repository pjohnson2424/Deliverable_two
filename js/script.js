var vacationType = prompt("What kind of trip would you like to go on? (Choose from Musical, Tropical, or Adventurous)");
   var travelSuggestion = "";

   if( vacationType == "Musical" ){
      travelSuggestion ="New Orleans";
   }

   else if( vacationType == "Tropical" ){
      travelSuggestion ="Beach Vacation in Mexico";
   }

   else if ( vacationType == "Adventurous" ) {
      travelSuggestion ="Whitewater Rafting the Grand Canyon";
   }

   var groupSize = prompt("How many are in your group?");
      travelSuggestion +="";

      if( groupSize >= 1 && groupSize <=2 ){
          travelSuggestion += "First Class flight";
      }

      else if( groupSize >= 3 && groupSize <= 5 ){
         travelSuggestion +="Helicopter";
      }

      else if ( groupSize >= 6 ) {
         travelSuggestion +="Charter Flight";
      }


      var result = "Since you're a group of " + groupSize + " going on a "
      + vacationType + " vacation, you should take a " + travelSuggestion ;

