// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if((prop != records[id].tracks)&&(value != "")){
    records[id].prop = value;
      console.log("if1\n");
  }
  else if((prop == records[id].tracks)&&(records[id].hasOwnProperty(tracks))== false){
    tracks = [];
    records[id].tracks.push(value);
      console.log("if2\n");
  }
  else if((prop == records[id].tracks)&&(value != "")){
    records.tracks.push(value);
      console.log("if3\n");
  }
  else if(value == ""){
    delete records[id].prop;
      console.log("if4\n");
  }
    console.log(records)
  return records;
}


updateRecords(recordCollection, 5439, 'artist', 'ABBA');
