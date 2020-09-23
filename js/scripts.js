var timeSignatures = [
  "3/4",
  "4/4",
  "6/8"
];

var keys = [
  "A",
  "B flat",
  "B",
  "C",
  "C sharp",
  "D",
  "E flat",
  "E",
  "F",
  "F sharp",
  "G",
  "G sharp"
];

var tonalities = [
  "Major",
  "Minor"
];

var modes = [
  "Ionian",
  "Dorian",
  "Phrygian",
  "Lydian",
  "Mixolydian",
  "Aeolian",
  "Locrian"
];

var strategies = [
  "Shift up a semitone",
  "Use one note",
  "Reverse it",
  "Automate something",
  "Arpeggiate it"
]

var time = timeSignatures[Math.floor(Math.random()*timeSignatures.length)];
var key = keys[Math.floor(Math.random()*keys.length)];
var tonality = tonalities[Math.floor(Math.random()*tonalities.length)];
var mode = modes[Math.floor(Math.random()*modes.length)];
var strategy = strategies[Math.floor(Math.random()*strategies.length)];

var constraints = [
  time,
  key,
  tonality,
  mode,
  strategy
];

let random = _.sample([1, 2, 3, 4, 5, 6], _.random(1, constraints.length))

for (var c in random) {
    var newElement = document.createElement('p');
    newElement.id = constraints[c]; newElement.className = "card";
    newElement.innerHTML = constraints[c];
    document.body.appendChild(newElement);
}
