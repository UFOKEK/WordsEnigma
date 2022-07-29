# WordsEnigma
Wordle in multi languague

## Run in dev mode
```bash 
    cd WordsEnigma
    yarn install
    cp .env.default .env
    yarn rw prisma migrate dev
    yarn rw exec seed # optional
    yarn rw dev
```

### Docker-Compose
```bash
    docker-compose up -d
```


## Create Postgres Database Docker
```bash
    docker run --name=db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p '5432:5432' -d postgres
```

## Deployement Production
```bash
    yarn rw deploy baremetal production --first-run
```
