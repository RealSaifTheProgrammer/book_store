fetch("http://localhost:3000/book")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("title").textContent = data.title;
    document.querySelectorAll(".price").forEach((priceSpan) => {
      priceSpan.textContent = data.price;
    });
    document.getElementById("image").src = data.image;
    document.getElementById("desc1").textContent =
      data.descriptionToAnimate.first;
    document.getElementById("desc2").textContent =
      data.descriptionToAnimate.second;
    document.getElementById("desc3").textContent =
      data.descriptionToAnimate.third;
  })
  .catch((err) => console.log(err));
