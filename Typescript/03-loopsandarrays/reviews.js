var review = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < review.length; i++) {
    console.log(review[i]);
    total += review[i];
}
var average = total / review.length;
console.log("review average: " + average);
