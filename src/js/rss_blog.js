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
const rssUrl = '/rss.xml';
var rssFeed = fetchRSSFeed(rssUrl).then((rssText) => {
    const xmlDoc = parseRSS(rssText)
    console.log(xmlDoc)
    const feedItems = extractFeedItems(xmlDoc);
    console.log(feedItems);

    const contentDiv = document.getElementById("content");

    feedItems.forEach(function(item) {
        console.log("=================================")
        console.log(item.title)
        console.log(item.link)
        console.log(item.description)

        //Agrega el articulo
        const articleDiv = document.createElement("article")
        contentDiv.appendChild(articleDiv)

        //Luego le agrega el titulo al article creado
        const articleTitle = document.createElement("h3")
        articleTitle.innerText = item.title
        articleDiv.appendChild(articleTitle)

        //Agrega la fecha
        const articleDate = document.createElement("p")
        articleDate.className = "SmallP"
        if (item.pubDate == undefined) 
            articleDate.innerText = "- ??/??/???? -"
        else {
            //Gracias gringos por poner la fecha de RSS en formato gringo.
            //Toma la fecha del item, y luego desgringa la fecha.

            //Que printeo de la fecha? Dia (nombre), Dia (numero), Mes, Año
            var options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            var dateObj = new Date(item.pubDate)
            articleDate.innerText = ("- " + dateObj.toLocaleDateString(undefined, options) + " -")
        }
        articleDiv.appendChild(articleDate)

        //Agrega el contenido
        const articleContent = document.createElement("p")
        articleContent.innerHTML = item.description 
        articleDiv.appendChild(articleContent)

        //Agrega el link abajo de todo:
        if (item.link != "") {
            const articleLinkLabel = document.createElement("p")
            articleLinkLabel.innerText = "Link: "
            articleDiv.appendChild(articleLinkLabel)

            const articleLinkA = document.createElement("a")
            articleLinkA.innerText = item.link
            articleLinkA.href = item.link
            articleLinkLabel.appendChild(articleLinkA)
        }
    })
})

