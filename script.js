const color = [
  "#6F61C0",
  "#1fd224",
  "#F875AA",
  "#ffaa01",
  "aqua",
  "#ff00aa",
  "#aa00ff",
  "#00aaff",
  "#f00",
  "#ffea00",
  "#ffa500",
  "#711DB0",
  "#F4CE14",
];
let count = 0;

const setColor = (element, color) => {
  element.setAttribute(
    "style",
    `text-shadow: 0 0 25px ${color}, 0 0 50px ${color}, 0 0 100px ${color}`
  );
};

const addSnowflake = () => {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  const inner = document.createElement("div");
  inner.classList.add("inner");
  inner.appendChild(document.createTextNode("❅"));

  snowflake.appendChild(inner);
  document.querySelector(".snowflakes").appendChild(snowflake);
};

window.onload = () => {
  for (let i = 1; i <= 70; i++) addSnowflake();
};

document.querySelector("button").addEventListener("click", (e) => {
  if (count === color.length) count = 0;
  else {
    e.target.innerText = "Click Again";
    const newyear = document.querySelector("#newyear");
    setColor(newyear, color[count]);

    const year = document.querySelector("#year");
    setColor(year, color[count]);

    setColor(e.target, color[count]);
    e.target.setAttribute(
      "style",
      `color:${color[count]}; outline: 4px solid ${color[count]};box-shadow: 0 0 25px ${color[count]}, 0 0 50px ${color[count]}, 0 0 100px ${color[count]};`
    );
    count++;
  }
});
