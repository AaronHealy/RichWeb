//fetches posts and converts the response to json, data filter applied to post to limit title length to 6 and outputs to console
fetch("http://jsonplaceholder.typicode.com/posts")
        .then((response) => {return response.json();})
        .then((data) => {postTitle = data.filter((post) => {return post.title.split(" ").length > 6 && console.log(post.title)})})

          


    