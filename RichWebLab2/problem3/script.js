var form = document.getElementById("form")

// adds listener to submit to prevent blank entries
form.addEventListener('submit',function(e){
    e.preventDefault()

    //sets the value of Searchbar to be form entry username
    var Searchbar = document.getElementById("Searchbar").value

    // searchbar with altered spaces is now USerName
    var UserName = Searchbar.split(' ').join('')

    //fetches github api with our username searched, converts to json and logs data.
    fetch("https://api.github.com/users/"+UserName)
    .then((result) => result.json())
    .then((data) => { console.log(data)

        //populating div with appropriate data taken from searched username profile
        document.getElementById("result").innerHTML = ` <img src="${data.avatar_url}" style="width: 300px"/>`
        document.getElementById("name").innerHTML = data.name
        document.getElementById("login").innerHTML = data.login
        document.getElementById("email").innerHTML = data.email
        document.getElementById("location").innerHTML = data.location
        document.getElementById("public_gists").innerHTML = data.public_gists
    })  

    //fetch github user repos, convert to json and loop through each repo, log them
    fetch("https://api.github.com/users/"+UserName+"/repos")
    .then((result) => result.json())
    .then((data2) => data2.forEach((repo) => { console.log(repo)

        //populate div with appropriate repo info
        document.getElementById("reponame").innerHTML =  repo.name;
        document.getElementById("description").innerHTML = repo.description;
        
    }))
})