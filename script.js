
function create(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');
fetch("https://level-up-it-center.herokuapp.com/team-members?fbclid=IwAR0R7tHZIPfcPQImxdX2oPmUKJlvmMpUu8jufPWWZrj852mUT2dnnAt_2Lc")
    .then(res => res.json())
    .then((data) => {
        let result = data.data;
          result.forEach((item) => {
                  let li = create('li');
                  let span = create('span');
                  let img = create("img");
                  let span2 = create("span");
                  let a1 = create('a');
                  let a2 = create('a');
                  let a3 = create('a');
                  let iconFb = create("img");
                  let iconInsta = create("img");
                  let iconLink = create("img");
                  let div = create("div");
                  div.classList.add("box");
                  img.src = item.imageUrl;
                  img.classList.add("image");
                  span.innerHTML = item.name;
                  span2.innerHTML = item.position;
                  a1.href = item.facebook;
                  a2.href = item.instagram;
                  a3.href = item.linkedin;
                  iconFb.setAttribute("src", "img/f_logo_RGB-Hex-Blue_512.png");
                  iconFb.classList.add('icons');
                  iconInsta.setAttribute("src", "img/Instagram_AppIcon_Aug2017.png");
                  iconInsta.classList.add('icons');
                  iconLink.setAttribute("src", "img/linked+linkedin+logo+social+icon-1320191784782940875.png");
                  iconLink.classList.add('icons');
                  append(li, img);
                  append(li, span);
                  append(li, span2);
                  append(li, div);
                  append(li, div);
                  append(li, div);
                  append(div, a1);
                  append(div, a2);
                  append(div, a3);
                  append(a1, iconFb);
                  append(a2, iconInsta);
                  append(a3, iconLink);
                  append(ul, li);
          })
    });

