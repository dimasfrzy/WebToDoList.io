// script.js
$(document).ready(function(){
  $("#todo-form").submit(function(event){
    event.preventDefault();
    var task = $("#task-input").val().trim();
    if(task !== "") {
      $("#task-list").append("<li class='list-group-item'>" + task + "<button class='btn btn-danger btn-sm float-right delete'>Hapus</button><button class='btn btn-success btn-sm float-right mr-2 complete'>Selesai</button></li>");
      $("#task-input").val("");
    }
  });

  $(document).on("click", ".delete", function(){
    $(this).parent().remove();
  });

  $(document).on("click", ".complete", function(){
    $(this).parent().toggleClass("completed");
  });
});
