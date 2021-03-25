# Pre-work - *Memory Game*

**Pitch Trainer** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Henry Mu**

Time spent: **8** hours spent in total

Link to project: (https://shimmering-continuous-abrosaurus.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [Added a number of remaining tries at the top ] 

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![Video Demonstration Here](http://g.recordit.co/l8IYHpE2zT.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[w3schools.com, support.glitch.com, MDN Web Docs, uicookies]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[I had a difficult time trying to figure out how to get the images to show. I uploaded the images to the assets folder and read the HTML information about how to use the img tag but it still wouldn't show the image. I spent a lot of time checking other websites to see if it was something I was doing incorrectly because I thought I misunderstood where the assets folder was. It wasn't until I added "glitch" to the search parameters that I realized other people had this issue and that the images are loaded into a CDN and not an assets directory. As a result, I decided to use the link from the CDN as the img source and learned about CDN's and was able to successfully apply images.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Some questions I have about web development are about the frameworks. I wonder if with frameworks would I be able to access JavaScript variables the way I can access Python variables in the Django framework. Another question I have is if there's an easier way to center items and to arrange items in a certain direction or order.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours then I would spend that time looking into how to come up with a sequence for playing other audio files. I originally wanted to make this a barn animal game where there would be animals behind a barn door. When you clicked on a barn door or if the barn door was selected, then there would be that specific animal's sound (ie. a horse neighing). However, after realizing that it would take too long to finish before the deadline I opted instead to make a pitch trainer. For this specific project, however, I would also work on changing the lights so that if the player makes an incorrect guess, then the light glows red instead of gold. I would also spend more time on changing the look of the buttons.]



## License

    Copyright [Henry Mu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
