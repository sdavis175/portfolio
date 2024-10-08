# Graduate Level Computer Vision Class Final Project

I developed a real-time tool for use in the video game League of Legends to display to the player when they should attack a monster.
It uses an Object Recognition AI model (yolov5) which was trained on a synthetically generated dataset to recognize the in game monsters. 
It then searches for the health bar of the detected monster's bounding box and performs a calculation to see if the monster's health is low enough. 
There are three different types of monsters, all with varying levels of thresholds therefore the AI model needs to accurately recognize the type of monster as well. 
If the health bar is below the threshold, a box is drawn around the monster indicating the player should attack it.

Example video showing the performance of the object recognition in game can be found [here](https://youtu.be/1C-G5RKF2Ls?si=leT9R2qaoO1uwhj4).

Example video calculating the health bar threshold (how it is intended to be used) can be found [here](https://youtu.be/7tiFq17zWGw?si=XzXxXYCc5AZFNc0I).

Further detailed explanations can be found in the associated [paper](https://github.com/sdavis175/League_CS_Helper/blob/master/Course%20Project%20Report.pdf).