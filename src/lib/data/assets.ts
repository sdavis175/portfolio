import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	AWS: a('aws.svg'),
	Bootstrap: a('bootstrap.svg'),
	C: a('c.svg'),
	Cpp: a('cpp.svg'),
	Celery: a('celery.svg'),
	Django: a('django.svg'),
	FastApi: a('fastapi'),
	Flask: a('flask.svg'),
	Go: a('go.svg'),
	Kafka: a('kafka.svg'),
	Neo4j: a('neo4j.svg'),
	Nginx: a('nginx.svg'),
	Numpy: a('numpy.svg'),
	Pandas: a('pandas.svg'),
	RabbitMQ: a('rabbitmq.svg'),
	Rust: a('rust.svg', 'rust-dark.png'),
	Scrapy: a('scrapy.png'),
	Selenium: a('selenium.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kubernetes.svg'),
	Csharp: a('csharp.svg'),
	Xamarin: a('xamarin.svg'),
	TypeScript: a('ts.png'),
	VueJs: a('vue.png'),
	ReactJs: a('react.svg'),
	Dart: a('dart.png'),
	Kotlin: a('kotlin.png'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Deno: a('deno.png', 'deno-dark.png'),
	Svelte: a('svelte.png'),
	ExpressJs: a('express.png'),
	JavaScript: a('js.png'),
	Fastify: a('fastify.svg', 'fastify-dark.png'),
	NestJs: a('nest.svg'),
	Quasar: a('quasar.svg'),
	SolidJs: a('solid.svg'),
	Electron: a('electron.png'),
	Flutter: a('flutter.svg'),
	Java: a('java.png'),
	AdonisJs: a('adonis.png'),
	Android: a('android.png'),
	Angular: a('angular.png'),
	PostgreSQL: a('postgres.png'),
	Firebase: a('firebase.png'),
	Sass: a('sass.png'),
	Unknown: a('no-img.svg'),
	MongoDB: a('mongodb.svg'),
	Redis: a('redis.svg'),
	Tailwind: a('tailwind.svg'),
	HTML: a('html.svg'),
	Premiere: a('premiere.svg'),
	Photoshop: a('photoshop.svg'),
	CSS: a('css.svg'),
	AfterEffects: a('after-effects.svg'),
	Illustrator: a('illustrator.svg'),
	Nuxt: a('nuxt.png'),
	Vite: a('vite.png'),
	Vitest: a('vitest.svg'),
	Jest: a('jest.png'),
	Unocss: a('unocss.svg'),
	Ruvy: a('ruvy.svg'),
	Postcss: a('postcss.svg'),
	UCF: a('ucf.svg'), // https://commons.wikimedia.org/wiki/File:UCF_Knights_logo.svg
	Valencia: a('valencia.png'), // Favicon from https://brand.valenciacollege.edu/logos.php
	KCP: a('kcp.jpg'), // Favicon from https://www.kcpinternational.com/
	AutoHotkey: a('autohotkey.svg'), // https://www.veryicon.com/icons/business/vscode-program-item-icon/autohotkey.html
	TensorFlow: a('tensorflow.svg'), // https://www.tensorflow.org/extras/tensorflow_brand_guidelines.pdf
	ScikitLearn: a('scikit-learn.svg'), // https://techicons.dev/icons/scikitlearn
	Keras: a('keras.svg'), // https://en.m.wikipedia.org/wiki/File:Keras_logo.svg
	PyTorch: a('pytorch.svg'), // https://commons.wikimedia.org/wiki/File:PyTorch_logo_icon.svg
	RegEx: a('regex-grey.svg'), // https://iconduck.com/icons/20674/regex
	DynamoDB: a('dynamodb.svg'), // https://iconduck.com/icons/27073/aws-dynamodb
	Azure: a('azure.svg'), // https://en.m.wikipedia.org/wiki/File:Microsoft_Azure.svg
	MicrosoftWord: a('microsoft-word.svg'), // https://en.m.wikipedia.org/wiki/File:Microsoft_Office_Word_%282019%E2%80%93present%29.svg
	MicrosoftExcel: a('microsoft-excel.svg'), // https://en.m.wikipedia.org/wiki/File:Microsoft_Office_Excel_%282019%E2%80%93present%29.svg
	MicrosoftPowerPoint: a('microsoft-powerpoint.svg'), // https://en.m.wikipedia.org/wiki/File:Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg
	JetBrains: a('jetbrains.svg'), // https://en.wikipedia.org/wiki/File:JetBrains_beam_logo.svg
	Nihongo: a('nihongo.png'), // https://www.facebook.com/The.Nihongo.Learning.Community/?locale=ja_JP
	Matlab: a('matlab.png'), // https://en.m.wikipedia.org/wiki/File:Matlab_Logo.png
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
