# MATCH
## **Primary Target Audience**
Our primary target audience are students that are typically aged above 10+ in order to provide a fun gaming experience,
alongside being educational and a way to keep the brain active. Our website aims to be simple to use with a clean
intuitive UI design as well as being accessible to players of all abilities.


## **User Requirements** 
### Functional Requirements
1. The game can be played as a single-player game.
2. The interface must allow users to start a game without extra hassle.
3. Users must be able to play directly on their server (no downloads required).
4. Users should have instructions/rules before starting.
5. The game should be responsive and usable on desktop, tablet and mobile devices.
6. When a player asks for a clue, the game displays hints.
7. The system responds when a match is made.
8. End messsage displayed when user finishes the game successfully.
9. Play again message when user finishes.

### Non-Functional Requirements
1. The website is clean and intuitive with minimal clutter and no intrusive pop-ups.
2. The design must be accessible to users with varying abilities (e.g. high contrast, screen reader compatibility).
3. The game should load within 3 seconds with a standard internet connection.
4. The UI must avoid excessive animations or distracting graphics, focusing on clarity.
5. The website has a consistent look-and-feel across all pages.
6. Information and instructions is concise and easy to skim but detailed enough for thorough readers.
   

## **System Requirements**
### Functional System Requirements
1. The system must support accessibility standards (WCAG 2.1 compliance).
2. The system implements a game engine that handles matching logic and providing hints. 
   
### Non-Functional Requirements
1. The page should load within 3 seconds under average conditions.
2. The website must be compatible with all modern browsers (Chrome, Edge, Firefox, Safari).
3. The website should be reliable with a target uptime of 99.5% or higher.
4. The system should be modular to allow easy updates and bug fixes.
5. Code must follow best practices and be documented.
6. The interface must be designed with both novice and expert users in mind.
7. The interface must support both detailed content and skim-friendly navigation.


## **User Profiles**

### **User Profile 1**
#### Michelle Whitworth
A 28 year-old PhD student, an experienced player who plays to keep her brain sharp and active. She is a researcher user
who makes decisions rather slowly. She has a keen eye for details and often reads every single word on a web page. She is
not too fussed around fancy colours and graphics. Michelle is quite a novice user who isn't too experienced with
using interfaces. She prefers a website that is rather informative and can be quite critical of them so expects a clean,
professional experience with no pop-ups. ​
 
### **User Profile 2**
#### Muqtadir Siraj
An 18 year-old male who is a business student and likes to relax, playing in-between university classes and study sessions for his personal satisfaction. He would like the game to let users compete with each other. He is a typical browser user, that skims through content quickly in order to get a sense of the big picture. He prefers a website that gets to the point and locks in on interesting and eye-catching website features as well as being an expert user and knows how to navigate his way around.


## **Functional Specifications** 

### **Hardware Requirements** 
The development of this game prioritises smooth workflow and the ability to handle basic game logic. To be able to achieve this a simple machine is needed. For example to handle basic game logic a CPU is needed. 
- An integrated CPU as 2d rendering is light
  -Saves power and cost while providing plenty of performance for 2D rendering. 
- Standard 256GB SSD storage
   -Faster workflow and builds with a reliable capacity for small projects
- 8GB - 16GB RAM
  - 16GB prevents slowdowns when multi tasking
A laptop with these specs would be preferable as this game doesn't require heavy processing power such as AI or 3D rendering. 

### **Operating System Environment**
The game will be developed as a web-based application, eliminating the need for downloads and installations. Therefore, the game is platform-independent and can run on any device with a modern web browser. JavaScript must be enabled and HTML5 and CSS3 support is required. The game should function consistently across responsive breakpoints (desktop, tablet, mobile), should load within 3 seconds on a standard broadband connection and have minimal CPU/GPU usage to ensure smooth performance.

### **Application Functions** 
The core application functions of MATCH are designed to provide an engaging, educational and accessible experience for students aged 10 and over. The system prioritises ease of use, responsive and consistent feedback, catering to both novice and expert users.

Game Start/Navigation

Purpose: Allow users to start a game promptly without extra steps.

Functionality:
- One click/tap from the homepage to start a new game.
- Clear navigation to read rules and instructions before gameplay begins.
- Minimal steps to ensure a smooth and intuitive user experience.
  
Matching Logic

Purpose: Allow players to pair matching words together.

Functionality:
- Checks player selections and determines if a match is correct.
- Updates the game automatically after each selection.
- Saves scores and tracks progress throughout the game
- Provides visual/audio feedback when matches are made.

Game End/Feedback

Purpose: End the game and provide players with performance feedback.

Functionality:
- Displays the final score and accuracy.
- Highlights unmatched pairs for learning purposes.
- Offers options to restart or return to the main page.

### **Moves per round**
For each round, the game tracks the number of moves the player makes to match images.

### **Misses**
The game tracks how many time players do not match images correctly while they play. 

## **Pause**
  Users can stop the game at any time and come back to finish the game without losing their progress. 
  
### **Replay function**
The replay function will be of use when the game has ended. This way the user will have a choice of whether or not they wish to continue the game and restart.
As the game ends there will be a reload button on the screen which the user can press which leads to the score and moves being reset. 
Then the player starts again straight after the game is reinitialised. 
The replay button will generate a new random layout so that users will stay engaged for longer periods of time. 

## **Non-functional specifications**
### **Aesthetic** 
The games aesthetic will consist of a minimal and calm aesthetic with sharp card designs. With soft flip noises as the cards turn over. The atmosphere is inspired by similar games with the aim to make users feel calm and relaxed. 
Things to note include:
- Colour palette and font choices
- Audio buttons
- Art inspo
This will help maintain consistency through development

### **Usability**
- Consistency: The interface must maintain a consistent layout and style across all pages and screens. Buttons and actions should behave predictably across devices.
- Responsiveness: The game must adapt to different screen sizes and layout should remain functional and readable.
- Accessibility: The system should comply with WCAG 2.1 AA accessibility standards.
- Error prevention: The interface should guide users to avoid errors such as highlighting invalid selections.

### **Ease of use** 
- Ease of learning: Users should be able to understand the game rules and gameplay within 1–2 minutes of first use. Instructions are automatically displayed before starting to support new users.
- Simple navigation: The interface should include as few steps as possible to load and start a game (e.g., one click/tap from the homepage or button).
- Essential functions (start, hints, exit) should be visible and accessible at all times.
- Low cognitive load: Instructions should be concise and written in simple language.
- Minimal setup: Requires no downloads and the game loads automatically from the homepage.
 
### **Feedback Style**
- Visuals: User should be presented with visual cues such as highlighting matched or incorrect pairs.
- Audio: Users receive audio feedback for correct matches, incorrect selections or key game events.
- Tracking: The game tracks scores and progress in real-time to keep players informed.
- End of game: The game should provide end-of-game performance feedback, including unmatched pairs for learning purposes to users. 

### **Basic needs**
- Core gameplay needs: Clear instructions before gameplay starts and immediate feedback should be given for user actions (correct/incorrect match)
- Security and privacy: The game shouldn't require any personal data to play
- Accessibility: All essential interactions (starting a game, selecting words, requesting hints) must be achievable without advanced technical skills.
- Reliability: Core features (matching, hints, scoring) must always function correctly as well as being consistently available with minimal downtime.


## Mock Ups 


### Storyboards


## Risk Management
Risk management involves identifying potential issues that could affect the success of the Match Game project and planning strategies that reduce or eliminate their impact. By assessing technical, design and collaboration risks early, the team can deliver on smooth development and timely completion.

| Risk | Likelihood | Impact | Mitigation Strategy |
-------|------------|--------|----------------------------|
| Limited experience with JavaScript, CSS or Flask increases coding errors or delay development. |Medium| High | Allow extra time for tutorials, share resources and delegate based on skill levels.| |
|Difficulty integrating different team members code in Github cause version controls or lost progress. | Medium | Medium | Use Git branches, commit regularly and communicate before merges.|
|Poor communication between team members contributes to inconsistent designs or missed tasks|Medium | High|Hold regular check-ins, use a shared document for updates and asking responsibilities clearly.|
|Game logic (matching functionality) may malfunction or process scores incorrectly.| High | High | Test matching system regularly, use pseudocode or flowcharts to verify logic before implementation.|
The interface may not be user-friendly or accessible for all users. | Medium | Medium | Follow WCAG 2.1 accessibility standards, conduct usability testing and simplify layout controls.|
|Bugs or performance issues late in development delays completion | Medium | High | Test iteratively at each development stage and record identified issues for troubleshooting.|
|Project scope is too complex, rendering difficult to complete within the given timeframe| Medium | High | Prioritise core Features first and add extra features after core functionality proves stable. |

## Software Development Strategy

## Test Plan 

| Test No. | Test Description | Action | Expected Outcome | Actual Outcome | Further Actions |
|----------|------------------|--------------|------------------|----------------|---------|
|1.1|Launch the game website|Open game URL in browser|Homepage loads successfully with visible 'Start Game' screen| | |
|1.2|Start a new game|Click on 'Start Game' button|Game board appears with all word tiles displayed| | |
|1.3|Select two matching words|Click on two matching word tiles|Both tiles remain revealed and colour change is made| | |
|1.4|Select two non-matching
