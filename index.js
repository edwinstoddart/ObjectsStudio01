// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let entry = arr[Math.floor(Math.random() * arr.length)];
  return entry;
}

// Code your buildCrewArray function here:
function buildCrew(idArr, animalArr) {
  let crew = [];

  for (let i = 0; i < animalArr.length; i++) {
    if (idArr.indexOf(animalArr[i].astronautID) > -1) {
      crew.push(animalArr[i]);
    }
  }
  return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];
let crewID = [];
let cadet;
let crew;
// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
while (crewID.length < 3) {
  cadet = selectRandomEntry(idNumbers)
  if (crewID.indexOf(cadet) === -1) {
    crewID.push(cadet);
  }
}
crew = buildCrew(crewID, animals);
console.log(`${crew[0]['name']}, ${crew[1]['name']}, and ${crew[2]['name']} are going to space`)