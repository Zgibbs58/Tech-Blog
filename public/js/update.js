// client side update script
const updatePost = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#update-title").value.trim();
  console.log(title);
  const content = document.querySelector("#update-content").value.trim();
  console.log(content);
  const id = document.querySelector("#update-form").getAttribute("data-post-id");
  console.log(id);

  if (title && content) {
    const response = await fetch(`/api/post/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Post updated.");
      setTimeout(() => {
        document.location.replace("/dashboard");
      }, 500);
    } else {
      alert("Failed to update post.");
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#update-form").addEventListener("submit", updatePost);
});
