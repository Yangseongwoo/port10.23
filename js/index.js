const eye = document.querySelector('.iris');
window.addEventListener('mousemove', (event) => {
const x = -(window.innerWidth / 2 - event.pageX) / 10;
const y = -(window.innerHeight / 2 - event.pageY) / 10;
eye.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;         
       }); 


       window.addEventListener('scroll', function() {
        const overlay = document.querySelector('.overlay');
        const scrollPosition = window.scrollY;
    
        // 스크롤 위치에 따라 불투명도 조정
        overlay.style.opacity = Math.min(scrollPosition / 300, 1); // 300px 스크롤 시 완전히 보이도록 설정
    });

    

    