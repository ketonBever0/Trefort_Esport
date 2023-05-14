# Futtatási útmutató

- Futtasson MySQL szolgáltatást pl. XAMPP vagy Docker segítségével
- Ha ez megvan, nyissa meg az esport.code-workspace fájlt Visual Studio Code-al

## Backend

1. Nyisson terminált a backend mappához (ctrl+shift+ö, majd fenti menüben backend)
2. Hozza létre a .env fájlt és töltse ki a "Környezeti változók" szekció szerint
3. Parancsok:
```
npm i
npx prisma migrate dev (ha itt kér nevet, lehet pl. init)
npm run start:dev
```

## Frontend

1. Nyisson terminált a frontend mappához (ctrl+shift+ö, majd fenti menüben frontend)
2. Parancsok:
```
npm i
npm run dev
```

# Környezeti változók

## Backend
- DATABASE_URL (string): adatbázis connection string
    - csináljon egy usert (pl. username: prismauser, password: prisma123) MySQL-ben és adja meg neki minden szerkezeti és adatkezelési jogot
    - string szintaxis: "(szolgáltatástípus)://(felhasználónév):(jelszó)@(ip-cím/(domain )név):(port)/(használandó (és/vagy létrehozandó) adatbázis neve)"
    - példa string: "mysql://prismauser:prisma123@localhost:3306/trefort_esport"
- JWT_SECRET (string): random jelszó token generáláshoz és hitelesítéshez

