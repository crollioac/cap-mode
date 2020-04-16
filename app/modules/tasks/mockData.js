export const TASKS_LIST = {
  preMatchStart: [{
    id: 1,
    name: "Declare Playing 11",
    active: true,
    activateBeforeTime: 30,
    type: "preMatchStart",
    key: "PLAY_11"
  }, {
    id: 2,
    name: "After Toss",
    active: false,
    activateBeforeTime: 30,
    type: "preMatchStart",
    key: "TOSS",
  }, {
    id: 3,
    name: "Opening Bowler",
    active: false,
    activateBeforeTime: 30,
    type: "preMatchStart",
    key: "OPENING_BOWLER"
  }, {
    id: 4,
    name: "Opening Batsmen",
    active: false,
    activateBeforeTime: 30,
    type: "preMatchStart",
    key: "OPENING_BATSMEN"
  }],
  postMatchStart: [{
    id: 5,
    name: "Next Bowler",
    active: false,
    activateBeforeTime: 30,
    type: "preMatchStart",
    key: "NEXT_BOWLER"
  }, {
    id: 6,
    name: "Next Batsman",
    active: false,
    activateBeforeTime: 30,
    type: "preMatchStart",
    key: "NEXT_BATSMAN"
  }]
};

export const PLAY_11 = 'PLAY_11';
export const TOSS ='TOSS';
export const OPENING_BATSMEN = 'OPENING_BATSMEN';
export const OPENING_BOWLER = 'OPENING_BOWLER';
export const NEXT_BATSMAN = 'NEXT_BATSMAN';
export const NEXT_BOWLER = 'NEXT_BOWLER';
export const LANDING_VIEW = 'LANDING_VIEW';