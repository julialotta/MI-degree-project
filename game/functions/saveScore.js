export default async function saveScore(data = {}) {
  await fetch("http://localhost:8000/game/newscore", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log("Request complete! response:", res);
  });
}
