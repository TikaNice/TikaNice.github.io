const particleContainer = document.querySelector('.particle-background');

// 动态生成粒子
for (let i = 0; i < 100; i++) {
    const particle = document.createElement('span');
    const size = Math.random() * 5 + 2; // 粒子大小 2-7px
    const positionX = Math.random() * 100; // 横向随机位置
    const delay = Math.random() * 8; // 随机延迟
    const duration = Math.random() * 8 + 4; // 随机持续时间

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${positionX}vw`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    particleContainer.appendChild(particle);
}
