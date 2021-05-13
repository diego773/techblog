async function deleteFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const comment = document.querySelector("#comment").value;

  // Send fetch request to delete
  const response = await fetch(`/api/`, {
    method: "DELETE",
    body: JSON.stringify({
      title,
      comment,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the comments is deleted, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete");
  }
}

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);
