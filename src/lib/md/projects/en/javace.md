# Graduate Level Natural Language Processing Class Final Project

JaVaCE is a 2-part program I designed to help me with learning Japanese, one half is a Vocabulary Recognizer that highlights my known vocabulary in text, and the other half is a Comprehension Estimator that tries to predict my comprehension level of a sentence on a scale of Easy, Medium, and Hard.
The input is a clipboard hook and the output is in the console that highlights the known words and will display the predicted comprehension level using an AI that created. 
More detailed explanations along with the ablation results can be found in the associated [paper](https://github.com/sdavis175/JaVaCE/blob/main/JaVaCe%20Report.pdf).

## Known Vocabulary Source
For both tools, a known word database is required for the tools to be customized to the user. 
The database can be generated from two sources, an import from Anki (which is a SRS Flashcard tool that many Japanese learners use to memorize vocabulary) and a manual word input. 
The data is then loaded into their dictionary form (inflections removed) using the SudachiPy library to perform the tokenization and conversion.

## Vocabulary Recognizer
The design uses a simple maximization algorithm to match the longest sequence of known vocabulary tokens to the longest sequence in the input sentence. 
The input sentence is first tokenized using the SudachiPy tokenizer to split the sentence into tokens and convert them into dictionary form, so that each token can directly match with the original stored known vocabulary version of it. 
There are various additional parameters such as automatically recognizing all Katakana loan words, English words, and grammar particles; adding the Kanji readings; and generating an array of known vs unknown tokens (which will be used in the Comprehension Estimator).

## Comprehension Estimator
The comprehension model is trained using a pre-trained BERT language model (specifically, [bert-base-japanese-v2](https://huggingface.co/tohoku-nlp/bert-base-japanese-v2)) via the transfer-learning method for tokenizing the input along with a custom embedding to mark if each token is a known word using the previous Vocabulary Recognizer component.
A classification network is then attached to that output as a classifier to determine the level of comprehension a user will have in a sentence.
The model is trained on a dataset of hand-labeled sentences that is classified as Easy, Medium, and Hard comprehension levels based on the user's understanding. Also, I developed an additional side program to help users with generating this dataset by displaying a sentence and asking for the comprehension grading, and if that sentence has an associated English translation than the user can verify their comprehension levels.