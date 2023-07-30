const commentFormHandler = async (event) => {
  event.preventDefault();

  const commentContent = document.querySelector("#comment").value.trim();

  if (commentContent) {
    const postId = document.querySelector("#comment-form").getAttribute("data-post-id");
    console.log("postId:", postId);

    const userId = document.querySelector("#comment-form").getAttribute("data-user-id");
    console.log("userId:", userId);

    const response = await fetch(`/api/post/${postId}`, {
      method: "POST",
      body: JSON.stringify({ content: commentContent, user_id: userId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const newComment = await response.json(); // Parse the JSON response

      // Create a new HTML element for the comment and insert it below the post
      const commentContainer = document.createElement("div");
      commentContainer.innerHTML = `
          <h6>New Comment:</h6>
          <p>${newComment.content}</p>
        `;

      // Append the new comment container to the document
      document.querySelector(".post-card").appendChild(commentContainer);

      // Clear the comment input field
      document.querySelector("#comment").value = "";
    } else {
      alert("Failed to add comment.");
    }
  }
};

document.querySelector(".comment-form").addEventListener("submit", commentFormHandler);
