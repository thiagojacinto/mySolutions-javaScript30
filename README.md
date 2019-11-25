# My solutions to [#JavaScript30](https://javascript30.com)
![JS badge](https://img.shields.io/badge/Javascript-ES6-blue)
![HTML badge](https://img.shields.io/badge/HTML-5-green)
![CSS badge](https://img.shields.io/badge/CSS-3-orange)

My solutions to the proposed projects at [#30DaysOfJavascript](https://github.com/wesbos/JavaScript30). I decided to separate the project files into: HTML, CSS and JavaScript specifics. Commented files included for learning proposes.

## Select challenge

| Challenge | Notes |
| :-------- | :---- |
| 01 - [Javascript Drum](/Javascript-Drum) | Changed the background, some other CSS attributes | 
| 02 - [CSS+JS Clock](/CSS%2BJS%20Clock) | Changed CSS attributes, colors corresponding to a coolors[.]co/app project | 
| 03 - [CSS-Variables](/CSS-Variables) | Implemented another slider input, changing <img> 'margin' attribute | 
| 04 - [Array Cardio Day 1](/ArrayCardioDay1) | A review of important Array methods, like: filter, map, reduce and so on | 
| 05 - [Flex Panel Gallery](/FlexPanelGallery) | CSS editing, fresh on CSS 'flex' & 'transform' | 
| 06 - [Type Ahead](/TypeAhead) | modified cities source to Brazilian cities, showing ibge's code instead of population | 
| 07 - [Array Cardio Day 2](/ArrayCardioDay2) | JS review of some other Array methods: some, every, find and findIndex. | 
| 08 - [Fun with HTML5 'Canvas'](/FunWithHTML5Canvas) | HTML's Canvas and JS to create a live draw page. Plus: HSL color | 
| 09 - [Dev Tools Domination](/DevToolsDomination) | JS console tricks: log styled, warning, error, info, assert, clear, dir, group, count, time and table | 
| 10 - [Hold Shift to Check Checkboxes](/HoldShiftToCheck) | Implemented a 'clear selection' button with JS & CSS editing | 
| 11 - [Custom Video Player](/CustomVideoPlayer) | Implemented a 'fullscreen' toggle, as sugested by [Wesbos](https://github.com/wesbos) working on Chrome, Safari & Firefox | 
| 12 - [Key Sequence Detection](/KeySequenceDetection) | None |
| 13 - [Slide in on Scroll](/SlideInOnScroll) | Not much changed. Took the oportunity to make it a #BlackLivesMatter theme |
| 14 - [JavaScript: Reference VS Copy](/JSReferenceVSCopy) | None |
| 15 - [Local Storage](/LocalStorage) | Extra missing: a cleanAll button, uncheckAll and checkAll buttons |
| 16 - [Mouse Move Shadow](/MouseMoveShadow) | style.textShadow only accepts rgb(x,y,z) format of color description |
| 17 - [Sort Without Articles](/SortWithoutArticles) | Merged this w/ [Hold Shift to Check Checkboxes](/HoldShiftToCheck) JS to make it a list of checkboxes |
| 18 - [Adding Up Times With Reduce](/AddingUpTimesWithReduce) | Map & Reduce; Inserted a button to show on page the result |
| 19 - [Webcam Fun](/) | None |
| 20 - [Speech Detection](/SpeechDetection) | with 'Stop' button implemented |
| 21 - [Geolocation](/Geolocation) | Tested on Android, with external link provided by `npm start` |
| 22 - [Follow Along Link Highlighter](/FollowAlongLinkHighlighter) | Implemented a higher highlighter with math adjustments |
| 23 - [Speech Synthesis](/SpeechSynthesis) | None |
| 24 - [Sticky Nav](/StickyNavbar) | #black theme |
| 25 - [Event Capture](/EventCapture) | None |
| 26 - [Stripe's Follow Along Nav](/StripesNavFollowAlong) | Footer with similar nav floating following link clicks |
| 27 - [Click and Drag](/ClickAndDrag) | None |

## Using
It is usefull to install 'npm' inside the folder that contains all these files to test them simulating a server. So, you will have to create a file named '**package.json**' with the following information:

```json
{
  "name": "gum",
  "version": "1.0.0",
  "description": "",
  "main": "scripts.js",
  "scripts": {
    "start": "browser-sync start --directory --server --files \"*.css, *.html, *.js\" --https"
  },
  "author": "YOUR-NAME-HERE",
  "license": "ISC",
  "devDependencies": {
    "browser-sync": "^2.26.7"
  },
  "dependencies": {}
}
```

then, open Terminal on the desired folder and type:

```shell
npm install
```

After the correct installation, if it warns you about vulnerabilities, it's bettter use the auto 'audit' to fix them:

```shell
npm audit fix
```

an finally, start the server when you want:

```shell
npm start
```

## Contributing to 'My Solutions to #JavaScript30'

Comments and contributions are welcome here, feel free to get in touch. To contribute to 'My Solutions to #JavaScript30', follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`. 
3. Make your changes and commit them: `git commit -m '<commit_message>'
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
