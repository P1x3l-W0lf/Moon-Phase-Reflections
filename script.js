const moonData = SunCalc.getMoonIllumination(new Date());
const meanings = {
    "New_Moon":"new beginnings and rebirth.<br>It is a time for intention setting and self-care.",
    "Waxing_Crescent":"goal setting and planning.",
    "First_Quarter":"taking action and working to bring goals to fruition.",
    "Waxing_Gibbous":"reflecting and meditation.",
    "Full_Moon":"manifestation and divination.<br>It is a time of intense energy and a culmination of efforts, the peak of the lunar cycle.",
    "Waning_Gibbous":"creative pursuits and hobbies.",
    "Last_Quarter":"releasing, letting go, and energy clearing.",
    "Waning_Crescent":"quiet contemplation and planning next steps."
};
const prompts = {
    "New_Moon":["Which relationship in your life needs tending?<br>Name several ways you could improve this relationship.",
        "What dreams or goals have you been holding back?<br>What would it look like to bring them to reality?<br>Choose one step you can take this moon cycle.",
        "What gentle shift can you implement in your life that would alleviate stress in your day to day?",
        "What aspect of your creative life have you been neglecting?<br>What act of creativity is calling you?",
        "Make a list of things you are passionate about.<br>How do these things fit in your life currently?<br>How can you include them in your life more?"
    ],
    "Waxing_Crescent":["How can you shift your routines and responsibilities in order to make more room for your intentions?",
        "What habit could you add to your day that would carve out time for your goals?",
        "What area of your life is distracting you from your goals and intentions?"
    ],
    "First_Quarter":["What area of your life feels most balanced right now?<br>How could this balance begin to expand into other areas of your life?",
        "What aspect of your life needs more balance?<br>What stresses are keeping you from a balanced, full life?",
    ],
    "Waxing_Gibbous":["What progress have you made, no matter how small?<br>Make a gratitude list for the things going right.",
        "Where do you need to trust the process more and loosen control so that your new intention can thrive?",
        "How can you refine your intentions and focus on one specific aspect?<br>What key action needs completed?",
        "What opportunities have you noticed that align with your goals?<br>Where can you say yes in life?"
    ],
    "Full_Moon":["Think about all the things you accomplished the past few weeks, big or small.<br>Which accomplishment are you most proud of?",
        "What is one habit or routine in your life that you are grateful for?"
    ],
    "Waning_Gibbous":["What is something you have you learned this cycle?<br>How can you apply this lesson in your day to day life?",
        "What progress have you made towards your goals or intentions the past few weeks?"
    ],
    "Last_Quarter":["Are there any aspects in your life that have become more balanced this cycle?",
        "What is one habit or activity that is no longer serving you and your journey?<br>What is a small way you can shift your life away from it?"
    ],
    "Waning_Crescent":["How can you improve your self-care?<br>What will you do for yourself?",
        "What activities make you feel nourished and fulfilled?<br>What is a small step you could take to turn it into a habit or routine?"
    ],
}
const phaseValue = moonData.phase;
let phaseName;

if (phaseValue === 0) phaseName = "New_Moon";
else if (phaseValue < 0.25) phaseName = "Waxing_Crescent";
else if (phaseValue === 0.25) phaseName = "First_Quarter";
else if (phaseValue < 0.5) phaseName = "Waxing_Gibbous";
else if (phaseValue === 0.5) phaseName = "Full_Moon";
else if (phaseValue < 0.75) phaseName = "Waning_Gibbous";
else if (phaseValue === 0.75) phaseName = "Last_Quarter";
else phaseName = "Waning_Crescent";

document.getElementById("moon-phase-txt").innerHTML = phaseName.replace("_", " ");
document.getElementById("moonImage").src = `images/MoonPhases/${phaseName}.png`;
document.getElementById("mindful").innerHTML = `The ${phaseName.replace("_", " ").toLowerCase()} can represent ${meanings[phaseName]}`
document.getElementById("prompt").innerHTML = `${prompts[phaseName][Math.floor(Math.random() * prompts[phaseName].length)]}`;