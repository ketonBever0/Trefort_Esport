#### (tedd a forrást ide https://markdownlivepreview.com/ mert itt rosszul kezeli a belső listákat)

# Környezeti változók

## backend
- DATABASE_URL (string): adatbázis connection string
    - csinálj egy usert (pl. username: prismauser, password: prisma123) mysqlben és add meg neki minden szerkezeti és adatkezelési rangot
    - példa string: mysql://prismauser:prisma123@localhost:3306/trefort_esport
- JWT_SECRET (string): random jelszó token generáláshoz és hitelesítéshez

# Menüpontok
- Főoldal
- Hírek
- Versenyek
    - Meghirdetett események
    - Korábbi eredmények
- Klánjaink
