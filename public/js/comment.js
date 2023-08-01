const commentFormHandler = async (event) => {
  event.preventDefault();

  const commentContent = document.querySelector("#comment").value.trim();

  if (commentContent) {
    const postId = document.querySelector("#comment-form").getAttribute("data-post-id");

    const response = await fetch(`/api/post/${postId}`, {
      method: "POST",
      body: JSON.stringify({ content: commentContent, post_id: postId }),
      headers: { "Content-Type": "application/json" },
    });

    location.reload();
  }
};

document.querySelector(".comment-form")?.addEventListener("submit", commentFormHandler);
