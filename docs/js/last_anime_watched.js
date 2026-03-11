async function fetchRSSFeed(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rssText = await response.text();
        console.log("Loaded RSS content: ")
        console.log(rssText); // Output raw XML text
        return rssText
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
    }
}

// Example RSS feed URL
const apiUrl = `https://api.jikan.moe/v4/users/Urrova/history`;
var apiHistory = fetchRSSFeed(apiUrl).then((apiJson) => {
    const data = JSON.parse(apiJson)

    console.log(data["data"][0])

    const lastFullDate = new Date(data["data"][0]["date"])
    const lastDate = lastFullDate.toDateString();
    const lastTitle = data["data"][0]["entry"]["name"]
    const lastUrl = data["data"][0]["entry"]["url"]
    const lastEpisode = data["data"][0]["increment"]

    const contentP = document.getElementById("last-anime-watched");
    contentP.innerHTML = `<a href="${lastUrl}">${lastTitle}</a> - Episode ${lastEpisode} - ${lastDate}`
})

