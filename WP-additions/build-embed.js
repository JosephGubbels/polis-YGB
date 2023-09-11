// this JS is from https://github.com/compdemocracy/polis-embed-examples/
function buildEmbedDiv(xid) {
  return "<div class='polis' data-ucst='false' data-ucsd='false' data-ucsf='false' data-conversation_id='6eucdhrkre' data-xid='" + xid + "'></div>"
}

if (localStorage.polisUserXID) {
  console.log("Existing polisUserXID found:", localStorage.polisUserXID)
} else {
  var userXID = uuidv4()
  console.log("Assigning new polisUserXID:", userXID)
  localStorage.polisUserXID = userXID
}

var embedScript = document.createElement("script");
embedScript.setAttribute("src", "https://yourgreenbelt.ca/embed-green.js")

var polisContainer = document.getElementById("polis-container")
polisContainer.innerHTML = buildEmbedDiv(localStorage.polisUserXID)
polisContainer.appendChild(embedScript)
