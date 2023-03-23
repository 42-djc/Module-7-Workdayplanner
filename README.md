# Work Day Planner

## Project Description

The planner is created using JQuery and meets the following criteria:

* Display the current day at the top of the calender when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page

## Table of Contents

* [Project Description](#project-description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

Use either the deployed hyperlink: https://42-djc.github.io/Module-7-Workdayplanner/

or 

the link to the GitHub Repo: https://github.com/42-djc/Module-7-Workdayplanner

## Usage

The tool allows the user to view standard working hours for their day, and input tasks associated with that hour timeblock.  The code uses Moment.js to obtain the actual time, compares to the timeblock and styles it based on whether it is in the past, the current hour or in the future by adding CSS classes.  Users can enter text into the discriptions of each our and save, the save function stored in local storage which can then be accessed even when the page is refreshed.  Please see GIF demo of this functionality:

 See demo [GIF](./assets/Planner%20demo.gif)

 ![GIF](./assets/Planner%20demo.gif) 

## License

n/a

## Contributing

n/a

## Tests

n/a

## Questions

https://github.com/42-djc

For further questions, please email: daniel.j.colman@googlemail.com

