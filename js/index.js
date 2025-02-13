const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection()
            for(let j=0; j<totalNavList; j++)
            {
                if (navList[j].querySelector("a").classList.contains("active")) 
                {
                    addBackSection(j)
                    
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if (window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }
    function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")

    }
    function removeBackSection(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num){
        allSection[num].classList.add("back-section");
    }
    function updateNav(element){
        for( let i=0; i<totalNavList; i++ ){
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);

    })
    document.querySelector(".hiremee").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);

    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>{
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.toggle("open")
            }
        }
        const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
        styleSwitcherToggler.addEventListener("click", () =>{
            document.querySelector(".style-switcher").classList.toggle("open");
        })
        
        window.addEventListener("scroll", () =>{
            if (document.querySelector("style-switcher").classList.contains("open")) {
                document.querySelector(".style-switcher").classList.remove("open");
            }
        })
        const alternateStyles = document.querySelectorAll(".alternate-style");
        function setActiveStyle(color)
        {
            alternateStyles.forEach((style) =>{
                if (color == style.getAttribute("title")) {
                    style.removeAttribute("disabled");
                }else{
                    style.setAttribute("Disabled", "true");
                }
            })
        };
        const dayNight = document.querySelector(".day-night");
        dayNight.addEventListener("click",() => {
            dayNight.querySelector("i").classList.toggle("fa-sun");
            dayNight.querySelector("i").classList.toggle("fa-moon");
            document.body.classList.toggle("dark");
        })
        window.addEventListener("load", () =>{
            if (document.body.classList.contains("dark")) {
                dayNight.querySelector("i").classList.add("fa-sun");
            }else{
                dayNight.querySelector("i").classList.add("fa-moon");
            }
        })
const keywords = ["Software Engineer Student", "Bot Developer", "Freelancer"];

        function changeKeyword() {
            const keywordElement = document.getElementById('typing');
            const currentKeyword = keywordElement.textContent;
            const currentIndex = keywords.indexOf(currentKeyword);
            const nextIndex = (currentIndex + 1) % keywords.length; 
            keywordElement.textContent = keywords[nextIndex];
        }
        
        
        setInterval(changeKeyword, 1500);

function showHideSkills(skillz) {
    let skill = document.getElementsByClassName(`skill-items-${skillz}`)[0];;
    let skilz = skill.querySelectorAll(`.skilz-${skillz}`);
    let skilz_text = skill.querySelectorAll(`.text-${skillz}`);
    let arrow_icon = document.getElementsByClassName(skillz)[0];

        skill.classList.toggle("hide-skilz");

    let c = 0;
    skilz.forEach(skilz => {
        skilz.classList.toggle(`show-skilz-${c+1}`);
        c++;
    });


        skilz_text.forEach(text => {
            text.classList.toggle("show-skilz-text");
        });


    arrow_icon.classList.toggle("fa-arrow-down");
    arrow_icon.classList.toggle("fa-arrow-up");
}