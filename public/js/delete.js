const deletePost = async (event) => {
  event.preventDefault();

  const id = document.querySelector("#deleteBtn").getAttribute("data-post-id");
  console.log(id);

  try {
    const response = await fetch(`/api/post/${postId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Post deleted.");
      setTimeout(() => {
        document.location.replace("/dashboard");
      }, 500);
    } else {
      alert("Failed to delete post.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to delete post.");
  }
};

document.querySelector("#deleteBtn").addEventListener("click", commentFormHandler);
