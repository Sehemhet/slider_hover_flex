function videoClickLoop() {
  const reels = document.querySelectorAll('.reels__wrap');

  reels.forEach((reel) => {
    const clickLoopVideo = reel.querySelectorAll('.clickLoopVideo');
    const reelsCross = reel.querySelector('.cross');

    function handleVideoClick() {
      this.classList.add('clickLoopVideo__active');
      reelsCross.classList.add('cross__active');
    }

    function handleCrossClick() {
      clickLoopVideo.forEach((video) => {
        video.classList.remove('clickLoopVideo__active');
      });
      reelsCross.classList.remove('cross__active');
    }

    function checkScreenWidth() {
      if (window.innerWidth < 768) {
        clickLoopVideo.forEach((video) => {
          video.addEventListener('click', handleVideoClick);
        });

        reelsCross.addEventListener('click', handleCrossClick);
      } else {
        clickLoopVideo.forEach((video) => {
          video.removeEventListener('click', handleVideoClick);
          video.classList.remove('clickLoopVideo__active');
        });

        reelsCross.removeEventListener('click', handleCrossClick);
        reelsCross.classList.remove('cross__active');
      }
    }

    window.addEventListener('DOMContentLoaded', checkScreenWidth);

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkScreenWidth, 200);
    });
  });
}

videoClickLoop();
