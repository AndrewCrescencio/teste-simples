### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/AndrewCrescencio/bst.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project. For your information, Next JS need to take some time to compile the project for your first time.

```
.
├── README.md            # README file
├── next.config.js       # Next JS configuration
├── public               # Public folder
│   └── assets
│       └── images       # Images used
├── src
│   ├── background       # Atomic background component
│   ├── button           # Atomic  component
│   ├── footer           # Atomic footer component
│   ├── hero             # Atomic hero component
│   ├── layout           # Atomic layout component
│   ├── navigation       # Atomic navigation component
│   ├── pages            # Next JS pages
│   ├── styles           # global css, PostCSS style folder with Tailwind
│   ├── templates        # templates/sections
│   └── utils            # Utility folder
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

