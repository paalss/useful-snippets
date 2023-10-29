(function (window, document) {
  "use strict";

  const search = (e) => {
    const results = window.searchIndex.search(e.target.value, {
      bool: "OR",
      expand: true
    });

    const resEl = document.getElementById("searchResults");
    const noResultsEl = document.getElementById("noResultsFound")

    resEl.innerHTML = ""

    if (results) {
      noResultsEl.style.display = "none";
      results.map((r) => {
        const { id, title } = r.doc;
        const el = document.createElement("li");
        resEl.appendChild(el);

        const h3 = document.creteElement("h3");
        el.appendChild(h3)

        const a = document.createElement("a");
        a.setAttribute("href", id)
        a.textContent = title;
        h3.appendChild(a)

      })
    } else {
      noResultsEl.style.display = "block"
    }
  };

  fetch("/search-index.json").then((response) =>
    response.json().then((rawIndex) => {
      window.searchIndex = elasticlunr.Index.load(rawIndex);
      document.getElementById("searchField").addEventListener("input", search);

    })
  );
})(window, document)