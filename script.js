let name       = document.getElementById("name");
let position   = document.getElementById("position");
let about      = document.getElementById("about");
let image      = document.getElementById("img");
let fbHref     = document.getElementById('fbHref');
let instaHref  = document.getElementById('instaHref');
let linkedHref = document.getElementById('linkedHref');

fetch("https://level-up-it-center.herokuapp.com/team-members?fbclid=IwAR0R7tHZIPfcPQImxdX2oPmUKJlvmMpUu8jufPWWZrj852mUT2dnnAt_2Lc")
    .then(res => res.json())
    .then((data) => {
        let result = data.data;
        let avatar = image.src = result[1].imageUrl;
        name.append(result[1].name);
        position.append(result[1].position);
        about.append(result[1].aboutWork);
        fbHref.href    = result[1].facebook;
        instaHref.href = result[1].instagram;
        inkedHref.href = result[1].linkedin;
    });

