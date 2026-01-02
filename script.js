
      /* Toggle Style Switcher */

      const styleSwitcherToggle = document.querySelector(
        ".style-switcher-toggler"
      );
      styleSwitcherToggle.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
      });

      window.addEventListener("scroll", () => {
        if (
          document.querySelector(".style-switcher").classList.contains("open")
        ) {
          document.querySelector(".style-switcher").classList.remove("open");
        }
      });

      const alternateStyles = document.querySelectorAll(".alternate-style");
      function setActiveStyle(color) {
        alternateStyles.forEach((style) => {
          if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
          } else {
            style.setAttribute("disabled", "true");
          }
        });
      }

      /* Dark/Light Mode */

      const dayNight = document.querySelector(".day-night");
      dayNight.addEventListener("click", () => {
        dayNight.querySelector("i").classList.toggle("fa-sun");
        dayNight.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
      });

      window.addEventListener("load", () => {
        if (document.body.classList.contains("dark")) {
          dayNight.querySelector("i").classList.add("fa-sun");
        } else {
          dayNight.querySelector("i").classList.add("fa-moon");
        }
      });

      /* Typing Animation */

      var typed = new Typed(".typing", {
        strings: [
          "Computer Scientist",
          "Software Engineer", 
          "Web Developer",
          "Tech Enthusiast",
          "",
        ],
        typeSpeed: 100,
        backSpeed: 60, // Fixed: was "Backspeed"
        loop: true,
      });
      

      /* Changing Aside Active Link */

      const nav = document.querySelector(".nav");
      const navList = nav.querySelectorAll("li");
      const totalNavList = navList.length;
      const allSection = document.querySelectorAll(".section");
      const totalSection = allSection.length;

      for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function () {
          removeBackSection();
          for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
              addBackSection(
                j
              ); /*allSection[j].classList.add('back-section');*/
            }
            navList[j].querySelector("a").classList.remove("active");
          }
          this.classList.add("active");
          showSection(this);

          if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
          }
        });
      }

      function addBackSection(num) {
        allSection[num].classList.add("back-section");
      }

      function removeBackSection() {
        for (let i = 0; i < totalSection; i++) {
          allSection[i].classList.remove("back-section");
        }
      }

      function showSection(element) {
        for (let i = 0; i < totalSection; i++) {
          allSection[i].classList.remove("active");
        }

        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
      }

      function updateNav(element) {
        for (let i = 0; i < totalNavList; i++) {
          navList[i].querySelector("a").classList.remove("active");
          const target = element.getAttribute("href").split("#")[1];
          if (
            target ===
            navList[i].querySelector("a").getAttribute("href").split("#")[1]
          ) {
            navList[i].querySelector("a").classList.add("active");
          }
        }
      }

      document.querySelector(".hire-me").addEventListener("click", function () {
        const sectionIndex = this.getAttribute("data-section-index");
        /*console.log(sectionIndex);*/
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
      });

      /* Activating Mobile Menu */

      const navTogglerBtn = document.querySelector(".nav-toggler");
      const aside = document.querySelector(".aside");

      navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
      });

      function asideSectionTogglerBtn() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i = 0; i < totalSection; i++) {
          allSection[i].classList.toggle("open");
        }
      }

      // Initialize EmailJS
      emailjs.init("lXkxvpgxsWZ_P8_A6"); // Replace with your EmailJS public key

      document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Send email using EmailJS
        emailjs.sendForm('YOUR_SERVICE_ID', 'service_l2auy7s', this)
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.backgroundColor = '#28a745';
            
            // Reset form
            document.getElementById("contactForm").reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
              submitBtn.style.backgroundColor = '';
            }, 3000);
            
          }, function(error) {
            console.log('FAILED...', error);
            
            // Show error message
            submitBtn.textContent = 'Failed to send';
            submitBtn.style.backgroundColor = '#dc3545';
            
            // Reset button after 3 seconds
            setTimeout(() => {
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
              submitBtn.style.backgroundColor = '';
            }, 3000);
          });
      });
   

      /*
      COMMENTED OUT - Add New Article Function
      Uncomment when ready to use the full articles section
      
      // Add New Article Function
      function addNewArticle() {
        const title = prompt("Enter article title:");
        if (!title) return;
        
        const category = prompt("Enter article category (e.g., Technology, Education, etc.):");
        if (!category) return;
        
        const excerpt = prompt("Enter a brief excerpt (2-3 sentences):");
        if (!excerpt) return;
        
        const tags = prompt("Enter tags separated by commas (e.g., HTML, CSS, JavaScript):");
        if (!tags) return;
        
        // Create new article element
        const articleHTML = `
          <div class="article-item padd-15">
            <div class="article-item-inner shadow-dark">
              <div class="article-header">
                <div class="article-date">
                  <i class="fa fa-calendar"></i> ${new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div class="article-category">${category}</div>
              </div>
              <h3 class="article-title">${title}</h3>
              <p class="article-excerpt">${excerpt}</p>
              <div class="article-footer">
                <a href="#" class="btn article-btn">Read More</a>
                <div class="article-tags">
                  ${tags.split(',').map(tag => `<span class="tag">${tag.trim()}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        `;
        
        // Insert before the "Add Article" button
        const addArticleItem = document.querySelector('.add-article-item').parentElement;
        addArticleItem.insertAdjacentHTML('beforebegin', articleHTML);
        
        alert('Article added successfully!');
      }
      */