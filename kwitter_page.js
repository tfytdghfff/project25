var firebaseConfig = {
      apiKey: "AIzaSyBtTP5dTNWFP4r2DQPEqiE1kiQU_AZvfYA",
      authDomain: "kwitter-4773f.firebaseapp.com",
      databaseURL: "https://kwitter-4773f-default-rtdb.firebaseio.com",
      projectId: "kwitter-4773f",
      storageBucket: "kwitter-4773f.appspot.com",
      messagingSenderId: "922769011387",
      appId: "1:922769011387:web:6a3222f496f455190d2f9e"
  };
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData
         console.log(firebase_message_id);
         console.log(message_data); 
         name1 = message_data['name1'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name1 +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4>" + message + "</h4>";
         like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>"+like+"<span><button><hr>";
         row = name_with_tag+message_with_tag+like_button+span_with_tag ;
         document.getElementById("output").innerHTML+= row;
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("mess").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("mess").value = "";
}    
function updateLike(message_id)
{
      console.log("when clicked like button - " + message_id)
      button_id=  message_id;
      likes = document.getElementById("button_id").value;
      update_Likes = Number(likes) + 1 ;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
      });
}
function logout()
{
      localStorage.removeItem(room_name);
      localStorage.removeItem(user_name);
      window.location.replace = ("index.html");
}