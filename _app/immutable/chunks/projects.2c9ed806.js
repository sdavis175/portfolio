import{A as e}from"./index.7b1d2fc8.js";import{g as t}from"./skills.b637b917.js";import{s}from"./language.32bc721a.js";import{w as i}from"./paths.d2c4f57e.js";const n=`# Undergraduate Senior Design Team Project

Built for a CS Professor at University of Central Florida (UCF) as a final Senior Design project. 
The intended goal was to create a web application that students can submit their program and associated test cases for an assignment and the web application would process the test cases on the students programs and verify it produced the correct output by comparing to the professor's provided code. 
If the student was able to create a test case that broke other student's programs, they would receive a point on a leaderboard associated with the assignment. 
This is intended to gamify test case creation and submissions as students would compete to create extreme test cases so that they can get more points. 
The result of this is to push students to create more robust programs so that their programs will not crash on the test cases.
Our sponsor of the project was happy with the final product.

# My Role
I was the project manager and lead backend developer, with some small help in assisting the front-end development as well. I lead a group of 4 other programmers to develop this project, using project management tools such as Gantt charts to help with organization.
For backend development, I created the majority of APIs used with Django for the front-end to request and send data to our database. I also developed the robust system for running the student's programs, which was done in a multithreaded solution using Docker containers to safely encapsulate the student's code so that no malicious code could affect the web application or other student's code.

`,r="テスト",l=""+new URL("../assets/login-page.e781b100.png",import.meta.url).href,p=""+new URL("../assets/home-page.79772dd4.png",import.meta.url).href,c=""+new URL("../assets/assignments-page.4a1c2b40.png",import.meta.url).href,d=""+new URL("../assets/test-case-modal.38696d3c.png",import.meta.url).href,m=""+new URL("../assets/leaderboard-page.039d51b2.png",import.meta.url).href,h=""+new URL("../assets/grading-page.a3bfa4ce.png",import.meta.url).href,u=`# Graduate Level Natural Language Processing Class Final Project

JaVaCE is a 2-part program I designed to help me with learning Japanese, one half is a Vocabulary Recognizer that highlights my known vocabulary in text, and the other half is a Comprehension Estimator that tries to predict my comprehension level of a sentence on a scale of Easy, Medium, and Hard.
The input is a clipboard hook and the output is in the console that highlights the known words and will display the predicted comprehension level using an AI that I designed and trained. 
More detailed explanations can be found in the associated [paper](https://github.com/sdavis175/JaVaCE/blob/main/JaVaCe%20Report.pdf).
`,g=""+new URL("../assets/output.72880418.png",import.meta.url).href,f=""+new URL("../assets/training-stats.39687704.png",import.meta.url).href,b=""+new URL("../assets/confusion-matrix.9bd2e9d2.png",import.meta.url).href,w=`# Graduate Level Computer Vision Final Team Project

We improved on the DreamBooth fine-tuning approach on text-to-image Diffusion Models. 
The DreamBooth process takes a pretrained Diffusion Model and a user-provided source of images (typically around 5 images) and fine-tunes the Diffusion Model to generate the provided images in custom contexts with an associated 3 character identifier.
We found that this process fails when training multiple custom subjects, and we developed a novel method to allow for training multiple custom subjects on the same diffusion model following the DreamBooth approach. 
We found the main issue with the original approach was that it could not separate the trained unique 3 character identifiers, therefore we implemented a custom loss function to prevent this.
The model trains on all the provided subjects simultaneously to save on time. 

# My Role
I worked together with the team to brainstorm and develop the custom loss function. 
I also implemented an individual stopping method to stop training after a given number of training steps as to prevent overfitting on one subject while the others are still training.`,y=""+new URL("../assets/example.7bb27ef4.png",import.meta.url).href,v=""+new URL("../assets/example2.81e65db5.png",import.meta.url).href,x=""+new URL("../assets/example3.2381ecf8.png",import.meta.url).href,D=""+new URL("../assets/original-method-failure.f5b0a512.png",import.meta.url).href,j=""+new URL("../assets/model-diagram.f9c8f45a.png",import.meta.url).href,k=""+new URL("../assets/custom-loss.28056499.png",import.meta.url).href,M=`# Graduate Level Computer Vision Class Final Project

I developed a real-time tool for use in the video game League of Legends to display to the player when they should attack a monster.
It uses an Object Recognition AI model (yolov5) which was trained on a synthetically generated dataset to recognize the in game monsters. 
It then searches for the health bar of the detected monster's bounding box and performs a calculation to see if the monster's health is low enough. 
There are three different types of monsters, all with varying levels of thresholds therefore the AI model needs to accurately recognize the type of monster as well. 
If the health bar is below the threshold, a box is drawn around the monster indicating the player should attack it.

Example video showing the performance of the object recognition in game can be found [here](https://youtu.be/1C-G5RKF2Ls?si=leT9R2qaoO1uwhj4).

Example video calculating the health bar threshold (how it is intended to be used) can be found [here](https://youtu.be/7tiFq17zWGw?si=XzXxXYCc5AZFNc0I).

Further detailed explanations can be found in the associated [paper](https://github.com/sdavis175/League_CS_Helper/blob/master/Course%20Project%20Report.pdf).`,L=""+new URL("../assets/threshold-off.39c3fe96.png",import.meta.url).href,H=""+new URL("../assets/threshold-on.664e44d9.png",import.meta.url).href,T=`# Graduate Level 3D Computer Vision Class Project
This is a program that I developed in Matlab that uses Projective Geometry and SIFT feature extractor to take a series of images of a scene and convert them to a panoramic mosaic image.
The general algorithm uses the SIFT feature extractor to find feature points on the middle image and the rest of the images in the sequence and applies projective geometry to warp the other images' feature points to the middle image's feature points. 
There are detailed explanations in the associated [report](https://github.com/sdavis175/Mosaic_Generator/blob/main/Report.pdf).`,C=""+new URL("../assets/office.da190a1c.png",import.meta.url).href,R=""+new URL("../assets/hec-building.cbd90ada.png",import.meta.url).href,U=""+new URL("../assets/kitchen.3c2937b9.png",import.meta.url).href,G="My personal website portfolio, modified from an existing Svelte template to add support for additional languages which required refactoring all data loading and displaying code.",P=[{slug:"senior-design-project",color:"gold",description:n,shortDescription:"Gamifying program and test case submissions for students in Computer Science",links:[],logo:e.UCF,name:"UCF CS Testing App",period:{from:new Date("2021-08-04"),to:new Date("2022-05-01")},skills:t("en",["python","js","docker","django","dynamodb","reactjs"]),type:"Web Application",screenshots:[{label:"Login Page",src:l},{label:"Home Page",src:p},{label:"Assignments Page",src:c},{label:"Test Case Modal",src:d},{label:"Leaderboard Page",src:m},{label:"Grading Page",src:h}]},{slug:"javace",color:"red",description:u,shortDescription:"Japanese Vocabulary and Comprehension Estimator",links:[{to:"https://github.com/sdavis175/JaVaCE/",label:"GitHub"}],logo:e.Nihongo,name:"JaVaCE",period:{from:new Date("2023-02-01"),to:new Date("2023-05-02")},skills:t("en",["python","pytorch","sklearn","numpy","keras"]),type:"Language Learning Assistant Program",screenshots:[{label:"Output",src:g},{label:"Training Statistics",src:f},{label:"Confusion Matrix",src:b}]},{slug:"dreambooth-multi-subject",color:"blue",description:w,shortDescription:"Fine tunes a text-to-image diffusion model on multiple subjects based on the existing Dreambooth fine-tuning method",links:[{to:"https://github.com/sdavis175/diffusers_dreambooth_multi_subject/",label:"GitHub"}],logo:e.Unknown,name:"DreamBooth Multi-Subject Diffusion Model",period:{from:new Date("2023-03-02"),to:new Date("2023-05-01")},skills:t("en",["python","pytorch","numpy"]),type:"Fine-Tuning Text-to-Image Diffusion Model",screenshots:[{label:"Example Output 1",src:y},{label:"Example Output 2",src:v},{label:"Example Output 3",src:x},{label:"Original DreamBooth method failure point",src:D},{label:"Model Diagram",src:j},{label:"Custom Loss Function",src:k}]},{slug:"league-cs-helper",color:"red",description:M,shortDescription:"Object recognition and analysis for the video game League of Legends",links:[{to:"https://github.com/sdavis175/League_CS_Helper/",label:"GitHub"}],logo:e.Unknown,name:"League CS Helper",period:{from:new Date("2021-10-29"),to:new Date("2021-12-05")},skills:t("en",["python","pytorch","sklearn","numpy","keras"]),type:"Object Recognition",screenshots:[{label:"Health Threshold Off - all monsters are detected",src:L},{label:"Health Threshold On - only monsters with low enough health are displayed",src:H}]},{slug:"mosaic",color:"green",description:T,shortDescription:"Generates a panoramic mosaic image from a collection of images using Projective Geometry",links:[{to:"https://github.com/sdavis175/Mosaic_Generator/",label:"GitHub"}],logo:e.Unknown,name:"Mosaic Generator",period:{from:new Date("2022-10-24"),to:new Date("2022-11-07")},skills:t("en",["matlab"]),type:"Projective Geometry & SIFT Feature Extractor Visual Application",screenshots:[{label:"Example: Office",src:C},{label:"Example: HEC Building",src:R},{label:"Example: Kitchen",src:U}]},{slug:"portfolio",color:"orange",description:G,shortDescription:"My personal website portfolio",links:[{to:"https://github.com/sdavis175/portfolio/",label:"GitHub"}],logo:e.Svelte,name:"Portfolio",period:{from:new Date("2024-09-08"),to:new Date("2024-10-08")},skills:t("en",["svelte","ts"]),type:"Website"}],A=[{slug:"senior-design-project",color:"gold",description:r,shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:e.Unknown,name:"あいうえお",period:{from:new Date},skills:t("en",["angular","ts","tailwind"]),type:"Website Template"},{slug:"slick-portfolio-angular",color:"#5e95e3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:e.Unknown,name:"あいうえお",period:{from:new Date},skills:t("ja",["angular","ts","tailwind"]),type:"Website Template"},{slug:"slick-portfolio-svelte",color:"#ff3e00",description:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",shortDescription:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:e.Svelte,name:"あいうえお",period:{from:new Date},skills:t("ja",["svelte","ts","tailwind","sass"]),type:"Website Template",screenshots:[{label:"screen 1",src:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"2",src:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"3",src:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"4",src:"https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"5",src:"https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"6",src:"https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}]}],o=i({title:"N/A",items:[]});s.subscribe(a=>{switch(a){case"en":o.set({title:"Projects",items:P});break;case"ja":o.set({title:"プロジェクト",items:A});break;default:console.error("Loading Projects - Unknown language selected."),o.set({title:"N/A",items:[]});break}});export{o as p};
