$(function() {
    $(".change-type").on("click", function(event) {
      let id = $(this).data("id");
      let newType = $(this).data("newtype");
  
      let newTypeBurger = {
        devoured: newType
      };
  console.log(newTypeBurger);
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newTypeBurger
      }).then(
        function() {
          console.log("changed type to", newType);
          location.reload();
        }
      );
    });
  
    $("#submit-button").on("click", function(event) {
      event.preventDefault();
      console.log("--------------i'm the js----------------")
      let newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[name=type]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      let id = $(this).data("id");

      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });