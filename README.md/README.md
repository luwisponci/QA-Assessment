QA Automation Assessment – Playwright
About This Project

This is my submission for a QA Engineer assessment. Honestyl,I don't have a professional background in automation testing, but I've been genuinely interested in QA for a while now, and this project was my hands-on way of learning by actually doing it.
The goal was to test a web application end-to-end: understand how it's supposed to behave, find where it breaks, document everything properly, and automate the key scenarios using Playwright. It made me analyze like a QA engineer, not just a user.

What I Was Trying to Achieve

-Understand and validate how the core features of the app actually behave
-Find bugs and inconsistencies by testing both the happy path and edge cases
-Write automated test scripts in Playwright to cover the most critical scenarios
-Document everything — test cases, bug reports, and screenshots — clearly enough that a developer could act on them

Tools I Used

Playwright — for writing and running the automated tests
JavaScript — the scripting language for the test code
Node.js — runtime environment to execute everything
Git & GitHub — version control and project management
Google Sheets — for organizing test cases and bug reports
VS Code — where all the code was written


What I Tested
I focused on the areas that matter most from a user's perspective:

-Core UI functionality and navigation flows
-Form validation — both valid inputs and intentionally bad ones
-Input handling and error messages
-End-to-end user journeys
-What happens when users do unexpected things

How I Approached It
I didn't just jump straight into automation. I tried to follow a process that made sense:
1. Write the test cases first
Before touching any code, I mapped out what the app should do based on what I could observe and infer from the UI. This gave me a checklist to work from.

2. Test manually
I went through the scenarios myself to understand the actual behavior. i found somebugs from this step, I did notice things when I was clicking through something Myself.

3. Automate with Playwright
Once I understood the flows, I automated the repeatable and critical ones. This was the steepest learning curve for me, but also the most rewarding part. Playwright's documentation was genuinely helpful and of course a lot of research and differenc documentation about it.

4. Document the bugs
Every issue I found got written up with reproduction steps, expected vs. actual behavior, severity, and a screenshot. I wanted the reports to be useful, not just a list of complaints.

Bug Reports
All defects I found are logged in the bug report files with:

Step-by-step reproduction instructions
Clear expected vs. actual results
Severity and priority ratings based on how much impact the issue had
Screenshots to make reproduction faster for developers


Test Evidence
Screenshots from test runs are saved in the /screenshots folders. I captured these both during manual testing and automation runs to back up the bug reports and show what the tests actually verified.

Assumptions I Made
Since I was working without a formal requirements document, I made a few reasonable assumptions:

-The app should follow standard web UI/UX conventions
-Fields should have basic validation (required fields, correct formats, etc.)
-UI-level validation was the focus since I had no access to backend or API behavior
-The test environment stayed consistent throughout my testing


What I Took Away From This
Honestly, this project taught me a lot. A few things that stood out:

-Thinking through test cases before automating saves a huge amount of time
-Writing clear bug reports would defenitely help the development of a specific project or application
-Playwright is surprisingly approachable once you get past the initial setup
-Manual and automated testing genuinely complement each other 

I'm still learning, but I feel like this project gave me a solid foundation and showed me how QA actually works in practice.