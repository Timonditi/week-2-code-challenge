// write your code here
function addComment(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get the input field and its value
    var commentInput = document.getElementById("comment");
    var newComment = commentInput.value;
  
    // Create a new list item with the comment text
    var newListItem = document.createElement("li");
    newListItem.textContent = newComment;
  
    // Add the new list item to the comments list
    var commentsList = document.getElementById("comments-list");
    commentsList.appendChild(newListItem);
  
    // Clear the input field
    commentInput.value = "";
}
