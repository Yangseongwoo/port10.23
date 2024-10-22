document.getElementById('toggle-nav').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = this;

    navLinks.classList.toggle('active'); // nav-links의 active 클래스를 토글하여 보이기/숨기기

    // 버튼 텍스트 변경
    if (navLinks.classList.contains('active')) {
        toggleButton.textContent = 'Menu -'; // 열렸을 때 텍스트 변경
    } else {
        toggleButton.textContent = 'Menu +'; // 닫혔을 때 텍스트 변경
    }
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

