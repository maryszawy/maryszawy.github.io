function losujLink() {
    var linki = [
      "https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLScV9lvi7QfKkHNQga_qKgCP9Gso3yaTaBMSlZFXIwSYBdZrzA%2Fviewform%3Fusp%3Dsf_link%26fbclid%3DIwAR2BrH4aSxpdxKBR2kDBxDxAleCmoWwjSq5fhdwGUEBr2KqK-fs0ItfHiE8&h=AT2mQDvEytL6UUBFulcpEW7SWV2kDFybMoRmHQLv12U0psC6oN8szYF-Rh3RUQsw6ONVrY5TPdVAtFyWi8PS3bXZjCtVwngyGQrsPEBaN4HqbsSXh7Ty6DbFV_p_WjbY611P9A",
      "https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSffyD4wIYd-FsRBEBmYWLmqXfg4cfppqdRgLD40bEXctJUnCA%2Fviewform%3Fusp%3Dsf_link%26fbclid%3DIwAR3N2bY4ZcLIw4w_B0YBeHpe38f8thFAXeehn013krwscTuiV1AfJ-spW1c&h=AT2mQDvEytL6UUBFulcpEW7SWV2kDFybMoRmHQLv12U0psC6oN8szYF-Rh3RUQsw6ONVrY5TPdVAtFyWi8PS3bXZjCtVwngyGQrsPEBaN4HqbsSXh7Ty6DbFV_p_WjbY611P9A"
    ];
  
    var losowyIndex = Math.floor(Math.random() * linki.length);

    var linkElement = document.createElement("a");
    linkElement.href = linki[losowyIndex];
    linkElement.textContent = "Naciśnij tutaj, aby przejść do kwestionariusza";
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
  
