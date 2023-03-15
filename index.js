// Declarations //

const textBoxList = document.querySelectorAll("p.textbox");
const buttonList = document.querySelectorAll(".button")
let moreinfo1 = "As a history nerd, I took this chance to create a webpage on one of the oldest 'codes' of all - Ancient Egyptian hieroglyphs. I learned basic DOM manipulation and how to use html and css to make responsive webpages.";
let moreinfo2 = "As my second project, I designed this gallery. I learned to use Flexbox with the help of online games (and the big css-tricks poster!), and used Javascript to create buttons that show or hide a passage of text.";
let moreinfo3 = "In this project I used arrays and event handlers to populate a page with data from a JavaScript object and allow users to customise the display. (I also realised that I like Wes Anderson films much less than the IMDb reviewers do.)";
let moreinfo4 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae qui et maiores consectetur nemo! Vel ullam in molestiae vitae? Asperiores dolorem vero dolorum odit ad quisquam delectus repudiandae odio cupiditate.";
let moreinfo5 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae qui et maiores consectetur nemo! Vel ullam in molestiae vitae? Asperiores dolorem vero dolorum odit ad quisquam delectus repudiandae odio cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur cum accusamus, dolorem quaerat iure maiores illum, optio, repellat omnis magni. Suscipit soluta praesentium, dolore quia cumque deleniti libero fugiat.";

// Functions //


document.getElementById("button1").addEventListener("click", function() {
  if (textBoxList[0].innerHTML === "") {
        {textBoxList[0].innerHTML = moreinfo1;}
        {buttonList[0].innerHTML = "Hide details";}
        } else {
        {textBoxList[0].innerHTML = "";}
        {buttonList[0].innerHTML = "Show details"}  
      };
    });

document.getElementById("button2").addEventListener("click", function() {
    if (textBoxList[1].innerHTML === "") {
            {textBoxList[1].innerHTML = moreinfo2;}
            {buttonList[1].innerHTML = "Hide details";}
            } else {
            {textBoxList[1].innerHTML = "";}
            {buttonList[1].innerHTML = "Show details"}  
        };
        });

document.getElementById("button3").addEventListener("click", function() {
    if (textBoxList[2].innerHTML === "") {
            {textBoxList[2].innerHTML = moreinfo3;}
            {buttonList[2].innerHTML = "Hide details";}
            } else {
            {textBoxList[2].innerHTML = "";}
            {buttonList[2].innerHTML = "Show details"}  
        };
        });

document.getElementById("button4").addEventListener("click", function() {
    if (textBoxList[3].innerHTML === "") {
            {textBoxList[3].innerHTML = moreinfo4;}
            {buttonList[3].innerHTML = "Hide details";}
            } else {
            {textBoxList[3].innerHTML = "";}
            {buttonList[3].innerHTML = "Show details"}  
        };
        });

document.getElementById("button5").addEventListener("click", function() {
    if (textBoxList[4].innerHTML === "") {
            {textBoxList[4].innerHTML = moreinfo5;}
            {buttonList[4].innerHTML = "Hide details";}
            } else {
            {textBoxList[4].innerHTML = "";}
            {buttonList[4].innerHTML = "Show details"}  
        };
        });
    