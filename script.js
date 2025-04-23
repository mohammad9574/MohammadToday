document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor (only for non-touch devices)
    if (!window.matchMedia('(pointer: coarse)').matches) {
        const cursor = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursorOutline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });

        // Button hover effects
        const buttons = document.querySelectorAll('.social-btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                cursor.classList.add('cursor-hover');
                cursorOutline.classList.add('cursor-hover');
            });
            
            btn.addEventListener('mouseleave', function() {
                cursor.classList.remove('cursor-hover');
                cursorOutline.classList.remove('cursor-hover');
            });
        });
    }

    // Set current date in vintage format
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateText = document.querySelector('.typewriter-line span:last-child');
    if (dateText) {
        dateText.textContent = today.toLocaleDateString('en-US', options);
    }

    // Protect email from spam
    const emailElement = document.querySelector('.email-address');
    if (emailElement) {
        emailElement.textContent = 'business' + '@' + 'mohammad.today';
    }

    // Typing effect for footer
    const typingText = document.querySelector('.typing-effect');
    if (typingText) {
        const originalText = typingText.textContent;
        typingText.textContent = '';
        
        let charIndex = 0;
        function typeText() {
            if (charIndex < originalText.length) {
                typingText.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, Math.random() * 80 + 40);
            }
        }
        
        // Start typing effect after a delay
        setTimeout(typeText, 1000);
    }
});
