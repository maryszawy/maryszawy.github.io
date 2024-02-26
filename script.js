function losujLink() {
    var linki = [
      "https://best-torrents.org/",
      "https://ex-torrenty.org/"
    ];
  
    var losowyIndex = Math.floor(Math.random() * linki.length);

    var linkElement = document.createElement("a");
    linkElement.href = linki[losowyIndex];
    linkElement.textContent = "Twój link";
    linkElement.target = "_blank";
  
    var container = document.getElementById("wylosowanyLink");
    container.appendChild(linkElement);
  }
  