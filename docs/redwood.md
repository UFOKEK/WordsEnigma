
``` bash

cd WordsEnigma
yarn redwood dev
```


```

├── api
│   ├── db
│   │   ├── schema.prisma
│   ├── dist
│   ├── src
│   │   ├── directives
│   │   │   ├── requireAuth
│   │   │   └── skipAuth
│   │   ├── functions
│   │   │   └── graphql.ts
│   │   ├── graphql
│   │   ├── lib
│   │   │   ├── auth.ts
│   │   │   ├── db.ts
│   │   │   └── logger.ts
│   │   └── services
│   └── types
│
├── scripts
│   └── seed.ts
│
└── web
    ├── public
    │   ├── favicon.png
    │   ├── README.md
    │   └── robots.txt
    └── src
        ├── components
        ├── layouts
        ├── pages
        │   ├── FatalErrorPage
        │   │   └── FatalErrorPage.tsx
        │   └── NotFoundPage
        │       └── NotFoundPage.tsx
        ├── App.tsx
        ├── index.css
        ├── index.html
        └── Routes.tsx

```

# Source
https://redwoodjs.com/docs/tutorial/chapter1/installation