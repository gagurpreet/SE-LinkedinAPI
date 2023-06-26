function renderPostList() {
	document.querySelector('#page').innerHTML = `
	  <section class="post-list">
		${renderPosts()}
	  </section>
	`
}
  
function renderPosts() {
	return state.posts.map(post => `
	<section class="post" data-id='${post.id}'>
	  <header>
		<h2>${post.name}</h2>
		<span class="material-symbols-outlined delete" onClick="deletePost(event)">delete</span>
	  </header>
	  <p>${post.message}</p>
	  <p>${post.skills}</p>
	</section>
  `).join('')
}
  
function deletePost(event) {
	const deleteBtn = event.target
	const postDOM = deleteBtn.closest('.post')
	const postId = postDOM.dataset.id
	fetch(`/api/posts/${postId}`, {
	  method: 'DELETE'
	})
	  .then(() => {
		state.posts = state.posts.filter(t => t.id != postId)
		renderPostList()
	  })
}