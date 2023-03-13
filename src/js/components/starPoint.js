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

      this.renderStarPointImages({
        drawbleLimitIndex: StarPointIndex,
        isOverHalf,
      });
    });
    this.starBackgroundElement.addEventListener("click", () =>
      this.lockStarPoint()
    );
    this.starPointResetButton.addEventListener("click", () => {
      this.unlockStarPoint();
      this.renderStarPointImages();
    });

    this.starBackgroundElement.addEventListener("mouseout", () => {
      !this.isLockedStarPoint() && this.resetStarPointImages();
    });
  }

  renderStarPointImages(payload = {}) {
    const { drawbleLimitIndex = -1, isOverHalf = false } = payload;
    Array.prototype.forEach.call(this.starimages, (starimage, index) => {
      let imageSource =
        index < drawbleLimitIndex
          ? starImageSourceMap.full
          : starImageSourceMap.empty;

      if (drawbleLimitIndex === index) {
        imageSource = isOverHalf
          ? starImageSourceMap.full
          : starImageSourceMap.half;
      }

      starimage.src = imageSource;
    });
  }

  resetStarPointImages() {
    this.renderStarPointImages();
  }
}

export default StarPoint;
