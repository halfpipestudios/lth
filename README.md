# Lemon Tree hostel Webpage

## Setup Development Server

### Clone repository

Switch to dev branch

### Pocketbase Setup
```bash
git checkout dev
```

Copy ./pb_data into ./pocketbase folder
```bash
cp -r ./pb_data/ ./pocketbase/
```

Make pocketbase executable
```bash
chmod +x ./pocketbase/pocketbase
```

### Nuxt3 Setup

Install node dependecies
```bash
npm install
```
Create ./.env file and add:
POCKETBASE_URL=http://127.0.0.1:8090/

### Run Develpment eviroment

Run Nuxt3 dev eviroment
```bash
npm run dev
```
Run pocketbase
```bash
./pocketbase/pocketbase
```
