// Wait for the DOM to be ready
$(document).ready(function () {
  // Add a click event listener to DIV#add_item
  $('#add_item').click(function () {
    // Create a new LI element
    const newItem = $('<li>Item</li>');
    // Add it to UL.my_list
    $('UL.my_list').append(newItem);
  });

  // Add a click event listener to DIV#remove_item
  $('#remove_item').click(function () {
    // Remove the last LI element from UL.my_list
    $('UL.my_list LI:last-child').remove();
  });

  // Add a click event listener to DIV#clear_list
  $('#clear_list').click(function () {
    // Remove all LI elements from UL.my_list
    $('UL.my_list LI').remove();
  });
});
