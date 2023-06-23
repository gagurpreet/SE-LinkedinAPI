const state = {
	posts: []
  }
  
  fetch('/api/posts')
	.then(res => res.json())
	.then(posts => {
	  state.posts = posts
	  renderPostList()
	})
  
  fetch('/api/sessions')
	.then(res => res.json())
	.then(data => {
	  if (data.result === 'successful') {
		state.loggedInUser = data.email
	  }
	})