# Undergraduate Senior Design Team Project

Built for a CS Professor at University of Central Florida (UCF) as a final Senior Design project. 
The intended goal was to create a web application that students can submit their program and associated test cases for an assignment and the web application would process the test cases on the students programs and verify it produced the correct output by comparing to the professor's provided code. 
If the student was able to create a test case that broke other student's programs, they would receive a point on a leaderboard associated with the assignment. 
This is intended to gamify test case creation and submissions as students would compete to create extreme test cases so that they can get more points. 
The result of this is to push students to create more robust programs so that their programs will not crash on the test cases.
Our sponsor of the project was happy with the final product.

# My Role
I was the project manager and lead backend developer, with some small help in assisting the front-end development as well. I lead a group of 4 other programmers to develop this project, using project management tools such as Gantt charts to help with organization.
For backend development, I created the majority of APIs used with Django for the front-end to request and send data to our database. I also developed the robust system for running the student's programs, which was done in a multithreaded solution using Docker containers to safely encapsulate the student's code so that no malicious code could affect the web application or other student's code.

