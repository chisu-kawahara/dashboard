fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature", {method: "GET"})
	.then (res => res.json())
	.then (data => {
        console.log(data.urls.regular)
		document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch (error => {
        console.error("Something went wrong")
        document.body.style.backgroundImage = `url("https://live.staticflickr.com/2021/1524780802_1cc8e11f3a.jpg")`
    })
