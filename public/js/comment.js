async function commentFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const comment = document.querySelector("#comment").value;

  // Send fetch request to add a new post
  const response = await fetch(`/api/comments`, {
    method: "POST",
    body: JSON.stringify({
      title,
      comment,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the comments is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to add comment");
  }
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
