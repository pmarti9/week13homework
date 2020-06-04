$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured,
    };

    // Send the PUT request.
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("changed devoured to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let $burgerName = $("#ca").val().trim()
    if($burgerName === "") {
      return
    }
    var newBurger = {
    
      burger_name:$("#ca").val().trim(),

      // devoured: false
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created a new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE",
    }).then(function () {
      // console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
