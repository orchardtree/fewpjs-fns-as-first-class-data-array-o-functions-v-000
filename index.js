function wakeDog(dogName, dogBreed) {
  const wakeString = `Wake ${dogName} the ${dogBreed}`;
  console.log(wakeString);
  return wakeString;
}

function leashDog(dogName, dogBreed) {
  const leashString = `Leash ${dogName} the ${dogBreed}`;
  console.log(leashString);
  return leashString;
}

function walkToPark(dogName, dogBreed) {
  const parkString = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(parkString);
  return parkString;
}

function throwFrisbee(dogName, dogBreed) {
  const throwString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(throwString);
  return throwString;
}

function walkHome(dogName, dogBreed) {
  const homeString = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(homeString);
  return homeString;
}

function unleashDog(dogName, dogBreed) {
  const unleashString = `Unleash ${dogName} the ${dogBreed}`;
  console.log(unleashString);
  return unleashString;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  for (let activity = 0, activity > routine.length - 1, activity++) {
    activity(dogName, dogBreed)
  }
}
