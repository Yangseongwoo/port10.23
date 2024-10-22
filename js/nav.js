document.addEventListener('DOMContentLoaded', function() {
    const firstNavItem = document.querySelector('.nav-item:first-child');
    const navItems = document.querySelectorAll('.nav-item:not(:first-child)');

    firstNavItem.addEventListener('click', function() {
        // 'nav-links'를 보이도록 토글
        navItems.forEach(item => {
            item.classList.toggle('active');
            item.style.display = item.classList.contains('active') ? 'block' : 'none';
        });
    });
});




/* 부드러운 스크롤 */
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 클릭 이벤트 방지

        const targetId = this.getAttribute('href'); // href 속성에서 ID 가져오기
        const targetElement = document.querySelector(targetId); // 해당 ID의 요소 선택

        // 스크롤 애니메이션
        targetElement.scrollIntoView({
            behavior: 'smooth' // 부드러운 스크롤
        });
    });
})


document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 클릭 동작 방지
        const targetId = this.getAttribute('href'); // 클릭한 링크의 href 속성 값 가져오기
        const targetElement = document.querySelector(targetId); // 타겟 요소 선택

        if (targetElement) {
            // 부드러운 스크롤 애니메이션
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // 부드럽게 스크롤
            });
        }
    });
});


