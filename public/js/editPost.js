async function editFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const comment = document.querySelector("#comment").value;

  // Send fetch request to add a new comments
  const response = await fetch(`/api/`, {
    method: "PUT",
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
    alert("Failed to edit");
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
