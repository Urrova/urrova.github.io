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

function parseRSS(rssText) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssText, 'text/xml');
    return xmlDoc;
}

function extractFeedItems(xmlDoc) {
    const items = xmlDoc.getElementsByTagName('item');
    const feedItems = [];

    for (let i = 0; i < items.length; i++) {
        const title = items[i].getElementsByTagName('title')[0].textContent;
        const link = items[i].getElementsByTagName('link')[0].textContent;
        const description = items[i].getElementsByTagName('description')[0].textContent;
        const content = items[i].getElementsByTagName('content')[0]?.textContent;
        const pubDate = items[i].getElementsByTagName('pubDate')[0]?.textContent;
        feedItems.push({ title, link, description, content, pubDate });
    }

    return feedItems;
}

// Example RSS feed URL
const rssUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent("https://myanimelist.net/rss.php?type=rwe&u=Urrova")}`;
var rssFeed = fetchRSSFeed(rssUrl).then((rssText) => {
    const xmlDoc = parseRSS(rssText)
    console.log(xmlDoc)
    const feedItems = extractFeedItems(xmlDoc);
    console.log(feedItems);

    const contentP = document.getElementById("last-anime-watched");
    const lastAnimeLink = feedItems[0].link
    const lastAnimeTitle = feedItems[0].title
    const lastAnimeEpisode = feedItems[0].description
    const lastAnimeDateObj = new Date(feedItems[0].pubDate)
    const lastAnimeDate = `${lastAnimeDateObj.getDate()}/${lastAnimeDateObj.getMonth()+1}/${lastAnimeDateObj.getFullYear()}`

    contentP.innerHTML = `<a href='${lastAnimeLink}'> ${lastAnimeTitle} </a> - ${lastAnimeEpisode} - ${lastAnimeDate}`
})

