async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const comment = document.querySelector("#comment").value;

  console.log(comment, title);
  // Send fetch request to add a new post
  const response = await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      comment,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the post is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to add post");
  }
}

document.querySelector(".add-post").addEventListener("submit", newFormHandler);
