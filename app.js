  var config = {
    apiKey: "AIzaSyA7CDAZih4J1K_K2O0KZWMMqkL03iWCn7Q",
    authDomain: "train-schedule-293bf.firebaseapp.com",
    databaseURL: "https://train-schedule-293bf.firebaseio.com",
    projectId: "train-schedule-293bf",
    storageBucket: "",
    messagingSenderId: "414100308610"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
 


$("#form-submit").on("click", function(e) {
  console.log("hi");
  e.preventDefault();
  var name = $("#name").val().trim();
  var trainDest = $("#destination").val().trim();
  var trainTime = $("#train-time").val().trim();
  var trainFreq = $("#frequency").val().trim();

  database.ref().push({
  name:name,
  trainDest :trainDest,
  trainTime: trainTime,
  trainFreq: trainFreq,
});

      $("#name").val("");
      $("#destination").val("");
      $("#train-time").val("");
      $("#frequency").val("");
});

database.ref().on("child_added",function(snapshot){
 var trainTime=snapshot.val().trainTime;
 var trainFreq=snapshot.val().trainFreq;

  var firstTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");
 
  //Difference between the times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

  // Time apart (remainder)
  var tRemainder = diffTime % trainFreq;

  // Minute Until Train
  var tMinutesTillTrain = trainFreq - tRemainder;

  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  nextTrain=moment(nextTrain).format("hh:mm A");

  nextTrain = nextTrain.toString();
  tMinutesTillTrain = tMinutesTillTrain.toString();

  $("table tbody").append("<tr><td>"+snapshot.val().name+"</td><td>"+snapshot.val().trainDest+"</td><td>"+snapshot.val().trainFreq+"</td><td>"+nextTrain+"</td><td>"+tMinutesTillTrain+"</td></tr>");
});


