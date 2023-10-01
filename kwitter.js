function add_user()
{
    name1 = document.getElementById("username").value;

    localStorage.setItem("name1", name1);

    window.location = "project_kwitter_room.html";
    
}