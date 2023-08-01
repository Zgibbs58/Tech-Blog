const deletePost = async (event) => {
  event.preventDefault();

  const postId = document.querySelector("#deleteBtn").getAttribute("data-post-id");
  console.log(postId);

  try {
    const response = await fetch(`/api/post/${postId}`, {
      method: "DELETE",
      body: JSON.stringify({ postId }),
      headers: { "Content-Type": "application/json" },
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

document.querySelector("#deleteBtn")?.addEventListener("click", deletePost);
