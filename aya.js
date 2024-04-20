const ages=[25, 18, 12, 16, 40];
function processAges(ages) {
  
  let doubledAges=[];
 for(i of ages){
  doubledAges.push(i*2);
 } 
  console.log(doubledAges);

 ages.forEach(function(i) {
    console.log(i);
  });

 let adults = ages.filter(function(i){
  return i>=18
 })
 console.log(adults);
  
let ageStrings = ages.map (function(age){
  return JSON.stringify(age)
})
console.log(ageStrings);

  return { doubledAges, adults, ageStrings };
}
processAges(ages)

