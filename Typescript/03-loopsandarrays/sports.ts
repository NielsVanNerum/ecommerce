let sportsOne: string[] = ["Golf", "Criket", "Tennis", "Swimming"];

/*
for (let i=0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
*/

for (let tempSport of sportsOne) { 
    if(tempSport == "Criket") {
        console.log(tempSport + " <- my favorite sport");
    } else {
        console.log(tempSport);
    }
}