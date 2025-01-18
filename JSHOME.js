 // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Enhanced navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mouse trail effect
        function createTrail(e) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = e.pageX - 10 + 'px';
            trail.style.top = e.pageY - 10 + 'px';
            document.body.appendChild(trail);

            trail.style.opacity = '0.5';
            
            setTimeout(() => {
                trail.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(trail);
                }, 300);
            }, 100);
        }

        document.addEventListener('mousemove', createTrail);

        // Parallax effect for hero section
        document.addEventListener('mousemove', (e) => {
            const heroImage = document.querySelector('.hero-image');
            const heroContent = document.querySelector('.hero-content');
            
            const moveX = (e.pageX - window.innerWidth/2) * 0.01;
            const moveY = (e.pageY - window.innerHeight/2) * 0.01;
            
            heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
            heroContent.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        });