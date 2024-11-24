import{A as e}from"./index.c1acf76c.js";import{g as t}from"./skills.f0eead27.js";import{s as C}from"./language.b6256ed3.js";import{w as P}from"./paths.f2019bf4.js";const I=`# Undergraduate Senior Design Team Project

Built for a CS Professor at University of Central Florida (UCF) as a final Senior Design project. 
The intended goal was to create a web application that students can submit their program and associated test cases for an assignment and the web application would process the test cases on the students programs and verify it produced the correct output by comparing to the professor's provided code. 
If the student was able to create a test case that broke other student's programs, they would receive a point on a leaderboard associated with the assignment. 
This is intended to gamify test case creation and submissions as students would compete to create extreme test cases so that they can get more points. 
The result of this is to push students to create more robust programs so that their programs will not crash on the test cases.
Our sponsor of the project was happy with the final product.

# My Role
I was the project manager and lead backend developer, with some small help in assisting the front-end development as well. I lead a group of 4 other programmers to develop this project, using project management tools such as Gantt charts to help with organization.
For backend development, I created the majority of APIs used with Django for the front-end to request and send data to our database. I also developed the robust system for running the student's programs, which was done in a multithreaded solution using Docker containers to safely encapsulate the student's code so that no malicious code could affect the web application or other student's code.

`,L=`# 学部最終チームプロジェクト

最終学年のデザインプロジェクトとして、フロリダ中央大学（UCF）のCS教授のために開発されたウェブアプリケーションです。
学生がプログラムとテストケースを提出できるウェブアプリケーションを作成し、そのプログラムを教授提供のコードと比較して正しい出力を生成するかを検証する仕組みです。
学生が他の学生のプログラムを破壊するテストケースを作成できた場合、その学生は課題に関連付けられたリーダーボードでポイントを獲得します。
この仕組みは、テストケースの作成と提出をゲーム化し、学生同士が競争することで、より堅牢なプログラムを作成するよう促すことを目的としています。`,s=""+new URL("../assets/login-page.e781b100.png",import.meta.url).href,a=""+new URL("../assets/home-page.79772dd4.png",import.meta.url).href,n=""+new URL("../assets/assignments-page.4a1c2b40.png",import.meta.url).href,r=""+new URL("../assets/test-case-modal.38696d3c.png",import.meta.url).href,i=""+new URL("../assets/leaderboard-page.039d51b2.png",import.meta.url).href,l=""+new URL("../assets/grading-page.a3bfa4ce.png",import.meta.url).href,A=`# Graduate Level Natural Language Processing Class Final Project

JaVaCE is a 2-part program I designed to help me with learning Japanese, one half is a Vocabulary Recognizer that highlights my known vocabulary in text, and the other half is a Comprehension Estimator that tries to predict my comprehension level of a sentence on a scale of Easy, Medium, and Hard.
The input is a clipboard hook and the output is in the console that highlights the known words and will display the predicted comprehension level using an AI that I designed and trained. 
More detailed explanations can be found in the associated [paper](https://github.com/sdavis175/JaVaCE/blob/main/JaVaCe%20Report.pdf).
`,S=`# 大学院レベルの自然言語処理クラス最終プロジェクト

JaVaCEは、日本語学習を支援するために設計した2部構成のプログラムです。一方は、テキスト内の既知の単語をハイライトするボキャブラリ認識機能、もう一方は文の理解度を「簡単」「中間」「難しい」のスケールで予測する読解力推定機能です。
入力はクリップボードフックを通じて取得し、出力はコンソールに表示されます。コンソールには既知の単語がハイライトされ、私が設計・学習させたAIが予測した理解度が表示されます。
詳細な説明は、[こちらの論文](https://github.com/sdavis175/JaVaCE/blob/main/JaVaCe%20Report.pdf)をご覧ください。`,c=""+new URL("../assets/output.72880418.png",import.meta.url).href,d=""+new URL("../assets/training-stats.39687704.png",import.meta.url).href,p=""+new URL("../assets/confusion-matrix.9bd2e9d2.png",import.meta.url).href,F=`# Graduate Level Computer Vision Final Team Project

We improved on the DreamBooth fine-tuning approach on text-to-image Diffusion Models. 
The DreamBooth process takes a pretrained Diffusion Model and a user-provided source of images (typically around 5 images) and fine-tunes the Diffusion Model to generate the provided images in custom contexts with an associated 3 character identifier.
We found that this process fails when training multiple custom subjects, and we developed a novel method to allow for training multiple custom subjects on the same diffusion model following the DreamBooth approach. 
We found the main issue with the original approach was that it could not separate the trained unique 3 character identifiers, therefore we implemented a custom loss function to prevent this.
The model trains on all the provided subjects simultaneously to save on time. 

# My Role
I worked together with the team to brainstorm and develop the custom loss function. 
I also implemented an individual stopping method to stop training after a given number of training steps as to prevent overfitting on one subject while the others are still training.`,T=`# 大学院レベルのコンピュータビジョン最終チームプロジェクト

テキストから画像へのDiffusionモデルにおけるDreamBoothファインチューニング手法を改良しました。
DreamBoothプロセスでは、事前に学習されたDiffusionモデルと、ユーザー提供の画像ソース（通常は5枚程度）を使用して、カスタムコンテキストで画像を生成できるようにモデルを微調整します。
このプロセスは複数のカスタム被写体をトレーニングする際に失敗することが分かり、私たちはDreamBooth手法を踏襲しながら、同一モデル上で複数の被写体をトレーニングできる新しい方法を開発しました。
主な問題は、元の手法では3文字の識別子を区別できない点にありました。そのため、これを防ぐためのカスタム損失関数を実装しました。
また、全ての被写体を同時にトレーニングすることで時間を節約する方法を採用しました。

# 私の役割
チームと協力してカスタム損失関数をブレインストームし、開発しました。
さらに、各被写体のトレーニングステップ数を設定し、早期終了を実現する手法を実装して、ある被写体が過学習するのを防ぎました。`,h=""+new URL("../assets/example.7bb27ef4.png",import.meta.url).href,m=""+new URL("../assets/example2.81e65db5.png",import.meta.url).href,u=""+new URL("../assets/example3.2381ecf8.png",import.meta.url).href,g=""+new URL("../assets/original-method-failure.f5b0a512.png",import.meta.url).href,f=""+new URL("../assets/model-diagram.f9c8f45a.png",import.meta.url).href,b=""+new URL("../assets/custom-loss.28056499.png",import.meta.url).href,U=`# Graduate Level Computer Vision Class Final Project

I developed a real-time tool for use in the video game League of Legends to display to the player when they should attack a monster.
It uses an Object Recognition AI model (yolov5) which was trained on a synthetically generated dataset to recognize the in game monsters. 
It then searches for the health bar of the detected monster's bounding box and performs a calculation to see if the monster's health is low enough. 
There are three different types of monsters, all with varying levels of thresholds therefore the AI model needs to accurately recognize the type of monster as well. 
If the health bar is below the threshold, a box is drawn around the monster indicating the player should attack it.

Example video showing the performance of the object recognition in game can be found [here](https://youtu.be/1C-G5RKF2Ls?si=leT9R2qaoO1uwhj4).

Example video calculating the health bar threshold (how it is intended to be used) can be found [here](https://youtu.be/7tiFq17zWGw?si=XzXxXYCc5AZFNc0I).

Further detailed explanations can be found in the associated [paper](https://github.com/sdavis175/League_CS_Helper/blob/master/Course%20Project%20Report.pdf).`,x=`# 大学院レベルのコンピュータビジョンクラス最終プロジェクト

「League of Legends」というゲーム内で、プレイヤーがモンスターを攻撃するタイミングをリアルタイムで表示するツールを開発しました。
これは、合成生成データセットでトレーニングされたオブジェクト認識AIモデル（yolov5）を使用して、ゲーム内モンスターを認識します。
さらに、認識したモンスターの境界ボックス内の体力バーを検出し、体力が閾値を下回った場合に攻撃を指示する計算を行います。
モンスターには3種類があり、それぞれ異なる閾値を持つため、AIモデルはモンスターの種類を正確に識別する必要があります。
体力バーが閾値を下回ると、プレイヤーが攻撃すべきであることを示すボックスがモンスターの周りに描画されます。

オブジェクト認識のパフォーマンスを示す動画は[こちら](https://youtu.be/1C-G5RKF2Ls?si=leT9R2qaoO1uwhj4)。

体力バーの閾値を計算する例は[こちら](https://youtu.be/7tiFq17zWGw?si=XzXxXYCc5AZFNc0I)。

詳細な説明は、[こちらの論文](https://github.com/sdavis175/League_CS_Helper/blob/master/Course%20Project%20Report.pdf)をご覧ください。`,w=""+new URL("../assets/threshold-off.39c3fe96.png",import.meta.url).href,y=""+new URL("../assets/threshold-on.664e44d9.png",import.meta.url).href,R=`# Graduate Level 3D Computer Vision Class Project
This is a program that I developed in Matlab that uses Projective Geometry and SIFT feature extractor to take a series of images of a scene and convert them to a panoramic mosaic image.
The general algorithm uses the SIFT feature extractor to find feature points on the middle image and the rest of the images in the sequence and applies projective geometry to warp the other images' feature points to the middle image's feature points. 
There are detailed explanations in the associated [report](https://github.com/sdavis175/Mosaic_Generator/blob/main/Report.pdf).`,M=`# 大学院レベルの3Dコンピュータビジョンクラスプロジェクト

このプログラムは、Matlabで開発したもので、射影幾何学とSIFT特徴量抽出器を使用して、シーンの一連の画像をパノラマモザイク画像に変換します。
一般的なアルゴリズムとして、SIFT特徴量抽出器を使用して中間画像とその他の画像の特徴点を検出し、射影幾何学を適用して他の画像の特徴点を中間画像の特徴点にワープします。
詳細な説明は、[こちらのレポート](https://github.com/sdavis175/Mosaic_Generator/blob/main/Report.pdf)をご覧ください。`,v=""+new URL("../assets/office.da190a1c.png",import.meta.url).href,D=""+new URL("../assets/hec-building.cbd90ada.png",import.meta.url).href,j=""+new URL("../assets/kitchen.3c2937b9.png",import.meta.url).href,G="My personal website portfolio, modified from an existing Svelte template to add support for additional languages which required refactoring all data loading and displaying code.",E="私の個人ポートフォリオウェブサイトで、既存のSvelteテンプレートを改良し、追加言語のサポートを加えました。この変更には、全てのデータ読み込みコードと表示コードのリファクタリングが必要でした。",H=`# Project under Shane Davis Inc.

The goal of the project was to take a medical PDF document and convert it to an accessible format for the visually impaired. 
This involved tasks such as using Natural Language Processing techniques to separate out paragraphs and using advanced table processing algorithms. 
The program was developed in a scalable fashion as there is various types of medical documents, and an individual converter had to be developed for each one to ensure correctness. 
Due to the nature of the type of documents, the contents had to be rigorously validated to ensure following proper American ADA guidelines, while maintaining HIPAA approved security.
The project is used only inside the company, it is not meant for public use. 

# My Role
I originally created and designed the whole project. I was responsible for the deployment and testing as well. 
There was 2 people on the project that were onboarded later, and I was a lead developer. `,O=`# Shane Davis Inc.プロジェクト

本プロジェクトの目的は、医療PDF文書を視覚障害者向けのアクセシブルな形式に変換することでした。
これには、自然言語処理技術を活用して段落を分離したり、高度なテーブル処理アルゴリズムを使用するタスクが含まれました。
さまざまな種類の医療文書に対応する必要があるため、各文書ごとに個別の変換器を開発し、正確性を確保するスケーラブルな設計が求められました。
また、文書の性質上、アメリカのADAガイドラインに従うことを保証しつつ、HIPAA準拠のセキュリティを維持するために、内容の厳密な検証が行われました。
このプロジェクトは社内のみで使用されており、一般公開は想定されていません。

# 私の役割
本プロジェクトを最初から設計・開発しました。また、展開とテストも担当しました。
プロジェクトには後から2名が参加しましたが、私はリード開発者として活動しました。`,V=`# Project under Shane Davis Inc.
The project was to develop a scalable file processing API that would allow healthcare companies to send the PDF documents to be processed. 
Our system would process it, send it to be printed and shipped, and send the healthcare company a successful response upon finishing. 
The system was developed in Azure, using tools such as API Management, Function Apps, Virtual Machine Scale Set, Azure Storage, and Networking. 
The project had to be secure as the documents contained sensitive medical information, so everything was designed with security first.

# My Role
Out of a team of 2 members, I was primarily responsible for designing and implementing all the Azure services to be connected to our software.`,z=`# Shane Davis Inc.プロジェクト

本プロジェクトは、医療機関がPDF文書を送信し、処理、印刷、配送が行われた後、成功した旨の応答を送信できるスケーラブルなファイル処理APIを開発することを目的としていました。
システムはAzure上に構築され、API Management、Function Apps、Virtual Machine Scale Set、Azure Storage、ネットワーキングなどのツールを活用しました。
文書には機密性の高い医療情報が含まれているため、全ての設計がセキュリティを最優先に行われました。

# 私の役割
2人チームのうち、私は主にAzureサービスの設計と実装を担当し、ソフトウェア全体を接続しました。`,_=[{slug:"senior-design-project",color:"gold",description:I,shortDescription:"Gamifying program and test case submissions for students in Computer Science",links:[],logo:e.UCF,name:"UCF CS Testing App",period:{from:new Date("2021-08-04"),to:new Date("2022-05-01")},skills:t("en",["python","js","docker","django","dynamodb","reactjs"]),type:"Full-Stack Web Application",screenshots:[{label:"Login Page",src:s},{label:"Home Page",src:a},{label:"Assignments Page",src:n},{label:"Test Case Modal",src:r},{label:"Leaderboard Page",src:i},{label:"Grading Page",src:l}]},{slug:"javace",color:"red",description:A,shortDescription:"Japanese Vocabulary and Comprehension Estimator",links:[{to:"https://github.com/sdavis175/JaVaCE/",label:"GitHub"}],logo:e.Nihongo,name:"JaVaCE",period:{from:new Date("2023-02-01"),to:new Date("2023-05-02")},skills:t("en",["python","pytorch","sklearn","numpy","keras"]),type:"Language Learning Assistant Program",screenshots:[{label:"Output",src:c},{label:"Training Statistics",src:d},{label:"Confusion Matrix",src:p}]},{slug:"dreambooth-multi-subject",color:"blue",description:F,shortDescription:"Fine tunes a text-to-image diffusion model on multiple subjects based on the existing Dreambooth fine-tuning method",links:[{to:"https://github.com/sdavis175/diffusers_dreambooth_multi_subject/",label:"GitHub"}],logo:e.Unknown,name:"DreamBooth Multi-Subject Diffusion Model",period:{from:new Date("2023-03-02"),to:new Date("2023-05-01")},skills:t("en",["python","pytorch","numpy"]),type:"Fine-Tuning Text-to-Image Diffusion Model",screenshots:[{label:"Example Output 1",src:h},{label:"Example Output 2",src:m},{label:"Example Output 3",src:u},{label:"Original DreamBooth method failure point",src:g},{label:"Model Diagram",src:f},{label:"Custom Loss Function",src:b}]},{slug:"league-cs-helper",color:"red",description:U,shortDescription:"Object recognition and analysis for the video game League of Legends",links:[{to:"https://github.com/sdavis175/League_CS_Helper/",label:"GitHub"}],logo:e.Unknown,name:"League CS Helper",period:{from:new Date("2021-10-29"),to:new Date("2021-12-05")},skills:t("en",["python","pytorch","sklearn","numpy","keras"]),type:"Object Recognition",screenshots:[{label:"Health Threshold Off - all monsters are detected",src:w},{label:"Health Threshold On - only monsters with low enough health are displayed",src:y}]},{slug:"mosaic",color:"green",description:R,shortDescription:"Generates a panoramic mosaic image from a collection of images using Projective Geometry",links:[{to:"https://github.com/sdavis175/Mosaic_Generator/",label:"GitHub"}],logo:e.Unknown,name:"Mosaic Generator",period:{from:new Date("2022-10-24"),to:new Date("2022-11-07")},skills:t("en",["matlab"]),type:"Projective Geometry & SIFT Feature Extractor Visual Application",screenshots:[{label:"Example: Office",src:v},{label:"Example: HEC Building",src:D},{label:"Example: Kitchen",src:j}]},{slug:"portfolio",color:"orange",description:G,shortDescription:"My personal website portfolio",links:[{to:"https://github.com/sdavis175/portfolio/",label:"GitHub"}],logo:e.Svelte,name:"Portfolio",period:{from:new Date("2024-09-08"),to:new Date("2024-10-08")},skills:t("en",["svelte","ts"]),type:"Website"},{slug:"adc",color:"red",description:H,shortDescription:"Converts documents into an accessible format",links:[],logo:e.Unknown,name:"Accessible Document Converter",period:{from:new Date("2020-06"),to:new Date("2023-06")},skills:t("en",["python","regex","microsoft-word"]),type:"Application"},{slug:"file-processing-api",color:"blue",description:V,shortDescription:"Large-scale file processor API",links:[],logo:e.Unknown,name:"File Processing API",period:{from:new Date("2022-01-02"),to:new Date("2023-06")},skills:t("en",["python","azure","azure-storage"]),type:"API Service"}],B=[{slug:"senior-design-project",color:"gold",description:L,shortDescription:"コンピュータサイエンスの学生向けに、プログラムとテストケース提出をゲーミフィケーション化",links:[],logo:e.UCF,name:"UCF CSテストアプリ",period:{from:new Date("2021-08-04"),to:new Date("2022-05-01")},skills:t("ja",["python","js","docker","django","dynamodb","reactjs"]),type:"Webアプリケーション",screenshots:[{label:"ログインページ",src:s},{label:"ホームページ",src:a},{label:"課題ページ",src:n},{label:"テストケースモーダル",src:r},{label:"リーダーボードページ",src:i},{label:"採点ページ",src:l}]},{slug:"javace",color:"red",description:S,shortDescription:"日本語語彙力と理解力の推定ツール",links:[{to:"https://github.com/sdavis175/JaVaCE/",label:"GitHub"}],logo:e.Nihongo,name:"JaVaCE",period:{from:new Date("2023-02-01"),to:new Date("2023-05-02")},skills:t("ja",["python","pytorch","sklearn","numpy","keras"]),type:"語学学習支援プログラム",screenshots:[{label:"出力結果",src:c},{label:"トレーニング統計",src:d},{label:"混同行列",src:p}]},{slug:"dreambooth-multi-subject",color:"blue",description:T,shortDescription:"既存のDreamBooth微調整手法を基にした、複数対象のテキストから画像への拡散モデルの微調整",links:[{to:"https://github.com/sdavis175/diffusers_dreambooth_multi_subject/",label:"GitHub"}],logo:e.Unknown,name:"DreamBoothマルチ対象拡散モデル",period:{from:new Date("2023-03-02"),to:new Date("2023-05-01")},skills:t("ja",["python","pytorch","numpy"]),type:"テキストから画像への拡散モデル微調整",screenshots:[{label:"出力例1",src:h},{label:"出力例2",src:m},{label:"出力例3",src:u},{label:"DreamBooth手法の課題点",src:g},{label:"モデル図",src:f},{label:"カスタム損失関数",src:b}]},{slug:"league-cs-helper",color:"red",description:x,shortDescription:"リーグ・オブ・レジェンドのオブジェクト認識と分析",links:[{to:"https://github.com/sdavis175/League_CS_Helper/",label:"GitHub"}],logo:e.Unknown,name:"League CSヘルパー",period:{from:new Date("2021-10-29"),to:new Date("2021-12-05")},skills:t("ja",["python","pytorch","sklearn","numpy","keras"]),type:"オブジェクト認識",screenshots:[{label:"全モンスターが検出されている状態",src:w},{label:"低体力モンスターのみ表示されている状態",src:y}]},{slug:"mosaic",color:"green",description:M,shortDescription:"射影幾何学を使用し、画像コレクションからパノラマモザイク画像を生成",links:[{to:"https://github.com/sdavis175/Mosaic_Generator/",label:"GitHub"}],logo:e.Unknown,name:"モザイクジェネレーター",period:{from:new Date("2022-10-24"),to:new Date("2022-11-07")},skills:t("ja",["matlab"]),type:"射影幾何学＆SIFT特徴抽出視覚アプリケーション",screenshots:[{label:"オフィス例",src:v},{label:"HECビル例",src:D},{label:"キッチン例",src:j}]},{slug:"portfolio",color:"orange",description:E,shortDescription:"私のポートフォリオウェブサイト",links:[{to:"https://github.com/sdavis175/portfolio/",label:"GitHub"}],logo:e.Svelte,name:"ポートフォリオ",period:{from:new Date("2024-09-08"),to:new Date("2024-10-08")},skills:t("ja",["svelte","ts"]),type:"ウェブサイト"},{slug:"adc",color:"red",description:O,shortDescription:"文書をアクセシブルな形式に変換",links:[],logo:e.Unknown,name:"アクセシブル文書変換ツール",period:{from:new Date("2020-06"),to:new Date("2023-06")},skills:t("ja",["python","regex","microsoft-word"]),type:"アプリケーション"},{slug:"file-processing-api",color:"blue",description:z,shortDescription:"大規模なファイル処理API",links:[],logo:e.Unknown,name:"ファイル処理API",period:{from:new Date("2022-01-02"),to:new Date("2023-06")},skills:t("ja",["python","azure","azure-storage"]),type:"ファイル処理API"}],o=P({title:"N/A",items:[]});C.subscribe(k=>{switch(k){case"en":o.set({title:"Projects",items:_});break;case"ja":o.set({title:"プロジェクト",items:B});break;default:console.error("Loading Projects - Unknown language selected."),o.set({title:"N/A",items:[]});break}});export{o as p};
