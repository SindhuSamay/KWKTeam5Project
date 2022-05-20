var cardContainer = $('.card-container');
// the class for the "hello name"
// var lessonIntro = $('.lesson-intro');
var submit = $('.submit-btn');

submit.on("click", appendName);

function appendName() {
  event.preventDefault(); // Prevents default action
  var name = $('.name').val(); // Stores user input value

  cardContainer.append(`
    <h6 class="name-card"> Hi, ${name}! welcome to artology! </p>
    <p class="name-card">we hope you enjoy this tour!! start by checking out our home page and take your time to navigate through our 5 other tabs :)</p>
  `);

  // lessonIntro.append(`<p> Hi, ${name}!</p>`);

   $('.name').val(""); //clears user input
   event.target.parentNode.remove();
}

// Donate page
var containerCard=$('.cardContainer');

var submition = $('.submition-btn');

submition.on("click", appendSupply);

function appendSupply() {
  event.preventDefault();
  var stuff = $('.stuff').val(); //Stores user input value

  containerCard.append(`
    <p class="supply-card">• ${stuff}</p>
  `);
  $('.stuff').val(""); //clears user input

}