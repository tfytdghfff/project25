var firebaseConfig = {
    apiKey: "AIzaSyDdh5aszLi3t9MaMUc_hfEYnAXogsrFNh0",
    authDomain: "kwitter-project-66b91.firebaseapp.com",
    databaseURL: "https://kwitter-project-66b91-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-66b91",
    storageBucket: "kwitter-project-66b91.appspot.com",
    messagingSenderId: "600622307377",
    appId: "1:600622307377:web:bea768b6cb2a143544dd10" 
};
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
   });});}
getData();
function addRoom(name)
{
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });
   localStorage.setItem("room_name",room_name);

   window.location = "project_kwitter_room.html";
}
function redirectToRoomName(name1)
{
   console.log(name1);
   localStorage.setItem("room_name", name1);
   window.location = "project_kwitter_page.html";
}