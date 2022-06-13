# WordsEnigma
Wordle in multi languague

## Install Program
cd WordsEnigma
yarn install
cp .env.default .env
yarn rw prisma migrate dev
yarn rw dev


## Create Postgres Database Docker
docker run --name=db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p '5432:5432' -d postgres