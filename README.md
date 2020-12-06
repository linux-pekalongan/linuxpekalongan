# Getting Started

clone and install dependency

```
git clone https://github.com/pekalongan1337/pekalongan1337.vercel.app
cd pekalongan1337.vercel.app
yarn add
```

run the development server:

```bash
yarn dev
```

# cara membuat potingan di linux pekalongan

1. clone dulu reponya

```bash
git clone https://gitub.com/pekalongan1337/pekalongan1337.vercel.app
```

2. masuk ke directory reponya terus install package yang dibutuhkan.
install `yarn` jika belum diinstall

```bash
cd pekalongan1337.vercel.app
yarn add
```

3. test apakah sudah bisa berjalan di lokal

```bash
yarn dev
```

buka browser lalu masukan url `localhost:3000`

4. jika sudah bisa berjalan selanjutnya kita sudah bisa membuat postingan.
caranya eksekusi file `buat_postingan`.

```bash
./buat_postingan
```

masukan slug untuk postingan agan, untuk spasi baiknya menggunakan tanda '-'.

perintah ini akan membuat file pada directory `content/slug-agan.md` dan membuat folder
pada `public/assets/artikel/slug-agan/`

- `content/slug-agan.md`
  sebagai artikel yang agan tulis.

  
- `public/assets/artikel/slug-agan/`
  sebagai tempat agan untuk menyimpat asset pada artikel, misa gambar dll.
  folder ini setidaknya harus mempunyai file gambar dengan nama `cover.png` yang nantinya
  akan digunakan sebagai thumbnail
