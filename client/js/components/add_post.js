function renderAddPost() {
	document.querySelector('#page').innerHTML = `
	  <section class='create-post'>
		<form action="" onSubmit="createPostt(event)">
		  <h2>Add Post</h2>
		  <fieldset>
			<label for="">Name: </label>
			<input type="text" name="name">
		  </fieldset>
		  <fieldset>
			<label for="">Message: </label>
			<textarea name="message" id="" cols="30" rows="10"></textarea>
		  </fieldset>
		  <fieldset>
			<label for="">Skills: </label>
			<input type="text" name="skills">
		  </fieldset>
		  <button>Add Post</button>
		</form>
	  </section>
	`
}

function createPost(event) {
	event.preventDefault()
	const form = event.target
  
	// converts form data into an object
	const data = Object.fromEntries(new FormData(form))
  
	fetch('/api/posts', {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify(data)
	})
	  .then(res => res.json())
	  .then(post => {
		state.posts.push(post)
		renderPostList()
	  })
}