const starImageSourceMap = {
  empty: "src/assets/images/icon_empty_star.png",
  half: "src/assets/images/icon_half_star.png",
  full: "src/assets/images/icon_star.png",
};

class StarPoint {
  constructor() {
    this.starContentElement = document.querySelector(".content-star");
    this.starBackgroundElement =
      document.starContentElement.querySelector(".star-background");
    this.starimages = this.starBackgroundElement.querySelectorAll("img");
    this.starPointResetButton =
      this.starContentElement.querySelector(".icon-remove-star");
    this.lockedStarPoint = false;
  }

  setup() {
    this.bindEvents();
  }

  lockStarPoint() {
    this.lockedStarPoint = true;
  }

  unlockStarPoint() {
    this.lockedStarPoint = false;
  }

  isLockedStarPoint() {
    return this.lockedStarPoint;
  }

  bindEvents() {
    this.starBackgroundElement.addEventListener("mouseover", (event) => {
      if (this.isLockedStarPoint()) {
        return;
      }
      const { target, offsetX: currentUserPoint } = event;
      const { point } = target.dataset;
      const StarPointIndex = parseInt(point, 10) - 1;
      const [starimageClientRect] = target.getClientRects();
      const starImageWidth = starimageClientRect.width;
      const isOverHalf = starImageWidth / 2 < currentUserPoint;
    });
    console.log("hello starpoint");
  }
}

export default StarPoint;
