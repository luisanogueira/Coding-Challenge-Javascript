# Coding-Challenge-Javascript

# Technologies used and time allotted
For this project I used HTML, CSS, JavaScript and Bootstrap. 

I needed aproximatelly 7-8 hours to finish everything, using part of this time to plan how I wanted the application to look and what it should do. I also did a lot of research.

# How to run the application
This application has two input fields, one to select a specific starting date to book a Hotel, and another one to select how many days the user would like to reserve it. When she/he clicks on the down arrow of the first input, it is possible to select the date in a calendar.

There are also up and down arrows in the first and second input, to increase or decrease the numbers.

Finally, when the user clicks the button "check", the application should display cards showing all the days with correct dates as well as which of the days are available and which are not, according to the data retrieved from the URL endpoint using JavaScript.

There is also information retrieved from the mentioned URL regarding the timezone, languages available, currency, mostly for testing purposes.

# Challenges
One of the biggest challenges I faced was to decide if I should use AJAX, or simple JavaScript to retrieve the data, and how much code I needed to write in order to display this data according to the starting date that the user would select.

Other big challenge I had was to figure how to change the date format according to the language selected by the user (English or Deutsch), which I figured worked well by including the values "en" and "de" on the options (HTML file), a variable language and a toLocaleDateString() function (JavaScript file). I also took some time to figure how I could display the first day selected followed by the next days after the user clicks to check the availability. This worked well by creating a variable nextDay, which starts by the date selected (variable calendar), and including a setDate function, which increases this date by one at each new loop in the for loop.

I also noticed that even though the availabilies array inside of data array could display either 1 or 0 as characters inside of the string, it only displayed 0, no matter what starting date I included with the GET parameter. Because of that I believe the intention of this challenge was to check if I could write good and clean code to display the availability of rooms in hotels.

I liked to create this application, and wish I had more time to include even more functionalities.
