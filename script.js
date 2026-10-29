let bar = document.querySelector(".bar");
let menu = document.querySelector(".inner-menu");

bar.addEventListener('click', () => {
menu.classList.toggle('active');
});



var options = {
    chart: {
        height: 220,
        type: "area"
    },
    dataLabels: {
        enabled: false
    },
    series: [
        {
            name: "Follower(Family)",
            
            data: [15, 25, 38, 55, 69, 83, 99]
        }
    ],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 4,
            opacityFrom: 0.5,
            opacityTo: 0.9,
            stops: [100, 90, 100]
        }
    },
    xaxis: {
        categories: [
            "01 Jan",
            "02 Feb",
            "03 March",
            "04 April",
            "05 May",
            "06 June",
            "07 July"
        ]
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();





let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let currentTheme = localStorage.getItem("theme");

btn1.addEventListener("click", () => {
     console.log("button_1 was clicked");
    setTheme();
});
btn2.addEventListener("click", () => {
     console.log("button_2 was clicked");
    setTheme();

});

setTheme = () => {
    let currentTheme = document.body.getAttribute("theme");
    if (currentTheme === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
}

setDarkMode = () => {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
    btn1.style.display = "none";
    btn2.style.display = "flex";
}

setLightMode = () => {
    document.body.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");
    btn1.style.display = "flex";
    btn2.style.display = "none";
}





// Animation

const element = document.querySelectorAll(".anime", ".ani");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    })

}, {

    threshold: 0.5
});

for (let i = 0; i < element.length; i++) {
    const el = element[i];
    observer.observe(el);
}