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
    this.bindEvent();
  }

  lockStarPoint() {
    this.lockStarPoint = true;
  }

  unlockStarPoint() {
    this.lockStarPoint = false;
  }

  isLockedStarPoint() {
    return this.lockStarPoint;
  }

  bindEvent() {
    console.log("hello starpoint");
  }
}

export default StarPoint;
