
var firebaseConfig = {
      apiKey: "AIzaSyDrvBZamg9fVo83PYE69NumTIgrSXmIZ6M",
      authDomain: "kwitter-c1eb8.firebaseapp.com",
      projectId: "kwitter-c1eb8",
      storageBucket: "kwitter-c1eb8.appspot.com",
      messagingSenderId: "473613579998",
      appId: "1:473613579998:web:8511f39058d4c3e994744f"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome"+user_name+"!"
     function addRoom()
     {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
      
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
     }
     
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
