//your JS code here. If required.
// your JS code here. If required.
document.getElementById("enterBtn").addEventListener("click", function () {
  const statusPara = document.getElementById("status");

  const h1 = document.createElement("h1");
  h1.textContent = "Entered Metaverse";

  statusPara.replaceWith(h1);
});
