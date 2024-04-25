const courseList = [
    {
        "subject": "Economics",
        "level": "Undergraduate",
        "courses": [
            {
                "title": "Principles Of Microeconomics",
                "courseCode": "14.01",
                "heldIn": "Fall 2018"
            },
            {
                "title": "Principles Of Macroeconomics",
                "courseCode": "14.02",
                "heldIn": "Spring 2014"
            },
            {
                "title": "Intermediate Microeconomics Theory",
                "courseCode": "14.04",
                "heldIn": "Fall 2020"
            },
            {
                "title": "Intermediate Macroeconomics",
                "courseCode": "14.05",
                "heldIn": "Spring 2013"
            },
            {
                "title": "Introduction to Statistical Method in Economics",
                "courseCode": "14.30",
                "heldIn": "Spring 2009"
            },
            {
                "title": "Econometrics",
                "courseCode": "14.32",
                "heldIn": "Spring 2007"
            }
        ]
    }
];

var html = "";
for (const category in courseList) {
    html += `<div class='flexCol'><h1>${courseList[category].subject} (${courseList[category].level})</h1>`;
    html += courseList[category].courses.map(function (item) {
        return `
        <a href="${item.courseCode}-${item.heldIn.toLowerCase().replace(' ', '-')}">${item.courseCode}: ${item.title} (${item.heldIn})</a>
        `
    }).join('<br />');
    html += "</div>";
};

document.querySelector("#courseList").innerHTML = html;