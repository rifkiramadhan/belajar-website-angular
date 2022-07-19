# ANGULAR

- Adalah sebuah Framework untuk membangun aplikasi satu halaman yang menggunakan HTML dan TypeScript, jadi berbeda dengan Framework lainnya Angular itu ditulis dengan TypeScript

## Fitur

- Modules
  - Jadi aplikasi Angular tersebut dibangun secara modular yang didalamnya terdapat component, dan didalam Angular pun setidaknya memiliki satu root module yang melakukan proses bootstraping dalam menyajikan sebuah konten kedalam web browser
  - Root module tersebut kita definisikan sebagai NgModules, malah sebenarnya disatu aplikasi bisa saja kalian memiliki banyak module sebagai fungsionalitas tambahan yang mana module tersebut bisa langsung export dan diimport ke module utamanya
  - Salah satunya ada layanan router, itu module yang automatice akan dipasang pada saat project berhasil digenerate, tapi biasanya ketika kalian mengatur sebuah code artinya buat module buatan maka module tersebut bisa kalian gunakan juga sekaligus bisa membantu kamu dalam mengembangkan aplikasi yang besar atau yang kompleks, sehingga nanti maintainence nya jauh lebih mudah
- Components
  - Didalam aplikasi Angular setidaknya memiliki satu component utama namanya itu app.component nanti root component tersebut akan menghubungkan component satu ke component lainnya, sehingga membentuk sebuah hirarki yang disusun menjadi satu kesatuan aplikasi
  - Jadi pada dasarnya component tersebut hanya sebuah class yang berisi data aplikasi, mengatur logika program, menjalankan sebuah method untuk melakukan sesuatu, tapi tidak hanya itu component pun selalu dikaitkan kedalam template berupa HTML yang kita definisikan sebagai tampilannya
  - Component juga dibuat dengan menggunakan sebuah decorator (@Component()), nanti decorator akan mendefinisikan sebuah metadata didalamnya berupa selector, template, styling
- Templates, directives, dan data binding
  - Semua fitur tersebut sudah diberikan oleh Angular supaya kalian juga bisa lebih mudah memodifikasi element HTML
  - Jadi nanti kalian akan diperkenalkan dengan template directives, template directive ini akan dipasang kedalam HTML nya langsung dieksekusi dan dijalankan sebagai logika program
  - Contoh sederhananya itu penggunaan if atau for layaknya bahasa pemrograman
  - Template directives juga bisa melakukan data binding yang menghubungkan antara DOM dengan data aplikasinya, secara umum ada dua jenis data binding:
    - Event binding
      - Yang memungkinkan kamu untuk merespon apa yang sedang dilakukan oleh user untuk memperbarui data dari aplikasi
    - Property binding
      - Melakukan interpolasi sebuah nilai dengan memasukan data kedalam attribute misalnya atau mencetak data sehingga menjadi output yang kita inginkan
      - Jadi nanti Angular akan mengevaluasi directive apa yang sedang kalian pasang terus menyelesaikan sintax template nya secara binding atau dua arah untuk dimanipulasi element-element tersebut sesuai dengan data dan logika program yang kamu tentukan
      - Jadi tentukan diawal mau seperti apa aplikasinya, lalu pasang, maka nanti template nya akan menyelesaikan tugas sesuai dengan fungsi directive yang kalian pasang
      - Dan yang lebih keren nya lagi seperti yang sudah saya katakan two-way data binding ini data binding dua arah, yang berarti bahwa perubahan DOM akan mempengaruhi atau mencerminkan data didalam model nya
    - Pipes
      - Untuk mentransformasikan sebuah data, misalnya gunakan pipes untuk menampilkan tanggal Indonesia, atau memformat mata uang sesuai dengan Negara nya masing-masing
      - Atau kita juga bisa mengkostom pipe buatan sendiri untuk menjalankan fungsi yang kita inginkan nanti bentuk penulisannya juga sangat unik penggunaan pipes ini
      - Pipes itu seperti function tapi dibalut dengan sintax yang jauh lebih elegan, sedikit berbeda dengan Framework lainnya seperti Vue atau React, jadi terlebih dahulu harus mengetahui konsep Angular agar tidak hilang arah
- Service dan dependency injection
  - Ini adalh fitur yang tidak bisa kalian pisahkan karena ada kalanya kalian ingin berbagi data, lalu kita bagikan datanya ke banyak component, maka kalian butuh class atau service sebagai decorator (@Injectable()), nanti class component tersebut akan diinjector ke component yang ada
- Routing
  - Angular menyediakan layanan router yang membantu kamu dalam melakukan jalur navigasi, diantaranya dengan cara:
    - memasukan sebuah URL, maka nanti browser akan menavigasikan ke halaman yang dituju
    - Atau klik sebuah link atau tautan maka halaman baru akan  dirender tanpa perlu mereload halaman

## Pengertian

- Angular merupakan salah satu Framework JavaScript berbasis Client Side yang dikembangkan oleh Google dan ditulis dengan bahasa TypeScript
- Seperti Front End Framework lainnya Angular dirancang untuk membuat Single Page Application (SPA)
- Single Page Application itu adalah aplikasi yang berjalan disatu halaman tidak membutuhkan Reload halaman meskipun kamu berpindah dari satu halaman ke halaman lainnya, tapi kamu pun bisa menggunakan angular untuk membuat web dinamis atau Fullstack Application yang mana Angular akan melakukan HTTP Request ke Backend Server, contoh teknologinya yang bisa kalian pelajari adalah tentang MEAN Stack (MongoDB, Express, Angular, NodeJS)

## Kenapa Menggunakan Angular ?

- Kamu cukup mempelajari satu bahasa maka kamu sudah bisa membuat Aplikasi moderen dengan berbagai platform baik itu Web, Mobile, ataupun Desktop, seperti yang dilansir di dalam Website nya
- Malah kata orang dulu Stack lain dari Angular itu adalah One Framework Mobile and Desktop, lalu juga kode yang kamu buat bisa di guna ulang atau istilahnya reusable
- Kenapa begitu ?, karena basic Application dari Angular ini basis nya adalah Component, jadi itu adalah salah satu keuntungan:

  - Kamu bisa mendevelop untuk semua platform
  - Kemudian untuk kecepatannya atau performa sudah tidak diragukan lagi karena Anglar memberikan kendali atau skalabilitas dalam memenuhi data yang sangat besar dengan membuat model data di RxJS, lalu juga kalian dapat meningkatkan web performa yang jauh lebih baik melalui Web Workers dan Rendering disisi server
  - Berikutnya bangun fitur dengan cepat dan deklaratif yang memberikan bantuan tooling yang keren dan sangat sederhana, dicintai banyak jutawan dan sudah banyak penggunanya tentunya, karena Produk Angular ini adalah Produk langsung dari Google, dari dokumentasinya juga sudah lengkap dan dijelaskan secara detail

## Struktur Folder

- File .editorconfig
  - Adalah file konfigurasi untuk code editor
- File .gitignore
  - Untuk menentukan file mana saja yang kalian awasi dan  file mana saja yang kalian abaikan oleh git
- File README
  - Sebagai pengantar atau introduction untuk sebuah project
  - Sebenarnya ketiga file tersebut adalah pendukung saja dan tidak terlalu penting, itu semua berhubungan dengan git
- File angular.json
  - Sebagai konfigurasi CLI yang secara default terdapat informasi arsitektur dari suatu project, termasuk opsi-opsi setingan dasar sebuah service, serta uji coba melalui tslint, dan kalian juga bisa memberikan opsi assets atau css yang akan kalian gunakan, kalian daftarkan disini
- File package.json
  - Kalau kamu sering menggunakan NodeJS maka tidak asing lagi dengan file yang satu ini
  - Sebuah file ntuk mengatur dependencies dari sebuah paket NPM yang sudah berhasil kalian install untuk project Angular nya, tentu paket dependencies nya sudah automatice disimpan kedalam folder node_modules
- Folder src
  - Sebagai tempat source code atau sumber file kita yang kalian akan tulis
- File tsconfig.json
  - Sebagai tempat konfigurasi dasar TypeScript
- File tslint.json
  - Adalah alat untuk analisis code untuk program TypeScript nya, salah satunya adalah memeriksa bagian error
  - Jadi itu semua sudah dilakukan oleh tslint.json, nanti pesan error nya akan muncul didalam terminalnya
- Folder app
  - Berisi template untuk component nya, nanti juga ada yang berisi logika program, lalu ada data aplikasinya, serta file untuk styling ditiap aplikasinya
  - Adapun difolder app yang berisi logika template berupa component dan bisa menyimpan data untuk aplikasinya, tapi itu semua dipisahkan ke beberapa file, sesuai dengan extension dimasing-masing file:
    - Component nya akan disimpan dalam bentuk HTML, disini kalian bisa mendefinisikan template HTML dan setiap component ada style nya masing-masing, kalian bisa tulis CSS dasarnya di file app.component.css
  - File app.component.spec.ts
    - Untuk kebutuhan testing dari setiap component yang kalian buat
  - File app.module.ts
    - Yang merupakan root module dari semua component, tapi tidak hanya itu, paket atau module yang kalian butuhkan juga harus kalian import di sini
    - Sehingga semuanya bisa diaktifkan dan dirakit menjadi satu aplikasi yang utuh
- Folder assets
  - Sebagai file static berupa gambar atau file asset lainnya yang kalian import kesebuah aplikasi
- Folder environments
  - Sebagai opsi konfigurasi untuk lingkungan pengembangan, secara default standar lingkungan pengembangan pada Angular tidak diketahui namanya tapi yang jelas masih mode development, tapi kalian bisa mengaktifkannya ke mode production
- File favicon.ico
  - Sebagai file icon dari aplikasinya
- File index.html
  - Adalah halaman utama yang berisi struktur HTML biasa, untuk disajikan kepada pengguna tapi jangan khawatir CLI secara automatice menambahkan semua file JS atau CSS ke halaman ini, dan itu semua diatur di dalam file angular.json
  - Intinya kalian tidak perlu menambahkan script ata stylesheet disini secara manual
- File main.ts
  - Ini adalah bentuk penulisan TypeScript, file ini merupakan pintu utama dari aplikasi Angular nya
  - Bertujuan untuk menjalankan aplikasi dengan melakukan bootstraping ke root module dari sebuah aplikasi
  - Sehingga bisa dijalankan disisi browser
  - Nah module ini adalah module yang sudah diimport melalui folder app
- File polyfills.ts
  - Menyediakan layanan untuk dukungan browser version
- File style.css
  - Sudah disiapkan secara global untuk memberikan desain style untuk project Angular nya
  - Extension nya juga tergantung dari preprocessor yang kalian pilih pada saat generate sebuah project
- File test.ts
  - Sebagai inti utama testing dengan beberapa konfigurasi khusus dari Angular nya, biasanya kamu tidak perlu mengedit file tersebut
  - Jadi biarkan default seperti ini
- File Lainnya
  - hanya untuk kebutuhan konfigurasi dari sebuah aplikasi yang sudah dipisahkan sesuai dengan fungsinya masing-masing, edit dan simpan setingan tersebut jika memang diperlukan
