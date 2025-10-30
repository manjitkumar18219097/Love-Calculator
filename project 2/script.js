function calculateLove() {
  const name1 = document.getElementById("name1").value.trim().toLowerCase();
  const name2 = document.getElementById("name2").value.trim().toLowerCase();

  if (name1 === "" || name2 === "") {
    alert("Please enter both names.");
    return;
  }

  const combinedNames = name1 + name2;
  let hash = 0;
  for (let i = 0; i < combinedNames.length; i++) {
    hash = combinedNames.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const loverPercentage = Math.abs(hash % 101);

  const result = document.getElementById("result");
  result.innerHTML = `${name1.toUpperCase()}  ${name2.toUpperCase()} = <span class="percentage">${loverPercentage}%</span>`;

  if (loverPercentage < 30) {
    result.innerHTML += "<br> Not a great match. Keep looking!";
  } else if (loverPercentage < 70) {
    result.innerHTML += "<br> There is potential. Give it a try!";
  } else {
    result.innerHTML += "<br> Great match! Love is in the air!";
  }
}
