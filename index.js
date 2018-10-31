// Array med postnummer vi skal gå gjennom
var potentialPostalCodes = ["231", "0186", "35012", "7011", "01304"];

// For løkke for gjennomgang av Array.
for (i = 0; i<potentialPostalCodes.length; i++){
    
// If/else setning for å sjekke etter gyldige postnummer, i dette tilfelle om lengden er 4 siffer.    
    if(potentialPostalCodes[i].length === 4){
        console.log("Følgende nummer kvalifiserer som postnummer: " + potentialPostalCodes[i])
    } else {
        console.log("Følgende nummer kvalifiserer ikke som postnummer: " + potentialPostalCodes[i])
    }
    
    
};