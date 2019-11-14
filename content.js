var metaName = "videos";
var flag = false;
const title = document.getElementsByTagName('title'); // acessing the title of the page
const t = title[0].innerHTML;
const metas = document.getElementsByTagName('meta'); // accesing the meta tags of page


if (t === metaName) {
    flag = true; // checking if title tag contains string 'videos';
}

for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
        /*
                Checking all the name attributes of meta tags for videos if present then we will break the loop.
        */
        flag = true;
        break;
    }
}

if (flag === true) {
    // redirecting to google homw page
    window.location.href = "https://www.google.com/";
}