function losujLink() {
    var linki = [
      "https://docs.google.com/forms/d/e/1FAIpQLScV9lvi7QfKkHNQga_qKgCP9Gso3yaTaBMSlZFXIwSYBdZrzA/viewform",
      "https://docs.google.com/forms/d/e/1FAIpQLSffyD4wIYd-FsRBEBmYWLmqXfg4cfppqdRgLD40bEXctJUnCA/viewform"
    ];
  
    var losowyIndex = Math.floor(Math.random() * linki.length);

    var linkElement = document.createElement("a");
    linkElement.href = linki[losowyIndex];
    linkElement.textContent = "Naciśnij tutaj aby przejść do kwestionariusza";
    linkElement.target = "_blank";
  
    var container = document.getElementById("wylosowanyLink");
    var staryLink = document.querySelector("a");

    if(staryLink)
    {
      container.replaceChild(linkElement, staryLink);
    }
    else
    {
    container.appendChild(linkElement);
    }

  }
  
