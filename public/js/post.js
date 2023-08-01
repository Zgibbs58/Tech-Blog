const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  console.log(title);
  const content = document.querySelector("#post-content").value.trim();
  console.log(content);

  if (title && content) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Post created.");
      setTimeout(() => {
        document.location.replace("/dashboard");
      }, 500);
    } else {
      alert("Failed to create post.");
    }
  }
};

document.querySelector(".post-form")?.addEventListener("submit", postFormHandler);
