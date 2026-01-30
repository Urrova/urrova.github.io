var OCs = new Array(
    "<a href=\"oc_evilution.html\"><img src=\"images/URROVA/URROVA tomando mate.png\" class=\"urrova2\"title=\"URROVA drinking mate -w- (mate emoji)\"></a>",
    "<a href=\"oc_evilution.html\"><img src=\"images/URROVA/URROVA 3pos.gif\" class=\"urrova1\" title=\"URROVA thinking . . .\"></a>",
    "<a href=\"oc_evilution.html\"><img src=\"images/URROVA/URROVA 3pos.gif\" class=\"urrova1\" title=\"URROVA thinking . . .\"></a>"
)

var oc_container = document.getElementById("oc_container");
if (oc_container) {
    oc_container.innerHTML = OCs[getRandomInt(0,OCs.length)];
}