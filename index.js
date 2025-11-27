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
        document.getElementById("author").textContent = `By: Dodi Achmad`
    })


fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok){
            throw Error("Something went wrong!")
        }
        return res.json()
    })
    .then(data => { 
        console.log(data)
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small}>
            <span>${data.name}</span>
            `    
        document.getElementById("crypto").innerHTML += `
            <p>🎯: ${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `

    })
    .catch(err => console.error(err))

const getCurrentTime = ()=>{
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}
setInterval(getCurrentTime,1000)

