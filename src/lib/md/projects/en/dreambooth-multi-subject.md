# Graduate Level Computer Vision Final Team Project

We improved on the DreamBooth fine-tuning approach on text-to-image Diffusion Models. 
The DreamBooth process takes a pretrained Diffusion Model and a user-provided source of images (typically around 5 images) and fine-tunes the Diffusion Model to generate the provided images in custom contexts with an associated 3 character identifier.
We found that this process fails when training multiple custom subjects, and we developed a novel method to allow for training multiple custom subjects on the same diffusion model following the DreamBooth approach. 
We found the main issue with the original approach was that it could not separate the trained unique 3 character identifiers, therefore we implemented a custom loss function to prevent this.
The model trains on all the provided subjects simultaneously to save on time. 

# My Role
I worked together with the team to brainstorm and develop the custom loss function. 
I also implemented an individual stopping method to stop training after a given number of training steps as to prevent overfitting on one subject while the others are still training.