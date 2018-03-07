/* eslint-disable */

function eggDrop(floors){
  let magicFloor = Math.floor((Math.random() * floors));
  
  console.log('Our magic number is: ', magicFloor);
  let traversingDistance = findQuadratic(floors);
  console.log('traversing distance: ',  traversingDistance);

  // move up n-1, n-2, n-3, etc until it breaks
  let eggs = 2;
  let previousDrop = 0;
  let nextDrop;
  let totalDrops=0;

  for (i = 0; i < traversingDistance; i++){
    totalDrops++; 
    nextDrop = previousDrop + traversingDistance -i;
    console.log('We have our previous drop as ', previousDrop, ' and our next drop at ', nextDrop);
    if(nextDrop >= magicFloor){
      console.log('Oops! we broke an egg!');
      eggs--;
      break;
    } else {
      previousDrop = nextDrop;
    }
  }
  console.log('We have ', eggs, ' eggs left');

  for(let i = 0; i < traversingDistance; i++){
    totalDrops++;
    nextDrop = previousDrop+1;
    console.log('Now we are at ', nextDrop);
    if(nextDrop >= magicFloor){
      console.log('Opps! we broke another egg');
      eggs--;
      console.log('Our total drops were: ', totalDrops)
      return previousDrop;
    } else {
      previousDrop = nextDrop;
    }
  }
}

function findQuadratic(floors){
  let c = (-2*floors);
  /*
  let x = -b + sqrt(b^2-4ac)/2a
  let a = 1, b =1, c = -2*floors 
  find math.ceil of 
  */
 const a =1;
 const b =1;
  let x = (-b + Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
  return Math.ceil(x);
}

console.log(eggDrop(1000));