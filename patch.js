const featuredList = document.getElementsByClassName("slick-track")[0];
let temp = "";

function CreateTile(projectid, author, title) {
    temp += `
    <div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none;">
      <div>
        <div class="thumbnail project">
          <a class="thumbnail-image" href="/projects/${projectid}/">
            <img alt="" src="//uploads.scratch.mit.edu/projects/thumbnails/${projectid}.png">
          </a>
          <div class="thumbnail-info">
            <div class="thumbnail-title">
              <a href="/projects/${projectid}/" title="${title}">${title}</a>
              <div class="thumbnail-creator">
                <a href="/users/${author}/">${author}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
}

async function getStuff() {
    const res = await fetch("http://127.0.0.1:5500/featured");
    const jsonres = await res.json();

    temp = "";

    for (let i = 0; i < jsonres.length; i++) {
        const item = jsonres[i];
        CreateTile(item.id, item.author, item.title);
    }

    featuredList.innerHTML = temp;
}

getStuff();