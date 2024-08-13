const card = document.getElementById("card");

card.addEventListener("mousemove", (e) => {
  const pointerX = e.clientX; // x-coordinate relative to the left edge of the browser;
  const pointerY = e.clientY; // y-coordinate relative to the top edge of the browser;

  const cardRect = card.getBoundingClientRect(); // it returns a DOMRect object representing the size of an element and its position relative to the viewport;

  const halfWidth = cardRect.width / 2;
  const halfHeight = cardRect.height / 2;

  const cardCenterX = cardRect.left + halfWidth;
  const cardCenterY = cardRect.top + halfHeight;

  const deltaX = pointerX - cardCenterX; // x value relative to the card center;
  const deltaY = pointerY - cardCenterY; // y value relative to the card center;

  const distanceToCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY); // from the point to the center of the card;

  const maxDistance = Math.max(halfWidth, halfHeight); // the maximum distance from the corner to the center of the card;

  // console.log("MAX Distance", maxDistance);
  // console.log("distance to center", distanceToCenter/maxDistance);

  const degree = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 10); //?????????
  const degree1 = (distanceToCenter * 10) / maxDistance;

  // console.log(degree, degree1);

  const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1); //?????????
  const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1); //?????????

  // console.log("rx", rx);
  // console.log("ry", ry);

  card.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;

  // gloss.style.transform = `translate(${-ry * 100}%, ${-rx * 100}%) scale(2.4)`;

  // gloss.style.opacity = `${mapNumberRange(
  //   distanceToCenter,
  //   0,
  //   maxDistance,
  //   0,
  //   0.6
  // )}`;
});

card.addEventListener("mouseleave", () => {
  card.style = null;
  // gloss.style.opacity = 0;
});

function mapNumberRange(n, a, b, c, d) {
  return ((n - a) * (d - c)) / (b - a) + c;
}
