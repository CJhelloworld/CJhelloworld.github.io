const a="Simulator Permohonan Genshin Impact",n="Karakter",e="Senjata",t="Vision",i="Anemo",r="Cryo",s="Dendro",m="Electro",o="Hydro",u="Geo",k="Pyro",d="Bow",l="Catalyst",p="Claymore",h="Sword",g="Polearm",y="Extra",c="Mendapatkan",b="Tunggu",P="Koneksi Gagal!",S="OK",j="Batalkan",K="Semua aset yang digunakan di situs ini adalah milik Mihoyo.",f="Aplikasi ini murni buatan Fan, enjoy aja!",v="Tekan di area kosong untuk melanjutkan",w="Cara menginstall ke beranda Smartphone/Desktop",T="Bagikan",B="Ambil Gambar",A="Memproses",D="Hadiah membagikan pertama kali : {qty}",I="Versi",E="Donasi",M={beginner:"Permohonan Pemula",wanderlust:"Wanderlust Invocation","epitome-invocation":"Epitome Invocation","adrift-in-the-harbor":"Misteri Keabadian","auric-blaze":"Kilauan\u2008Bara Api Surya","azure-excursion":"Ketenangan Riak Air","ballad-in-goblets":"Syair Dalam Piala","born-of-ocean-swell":"Tarian Gulungan Ombak","caution-in-confidence":"Perintah dan Siasat","chanson-of-many-waters":"Kidung Semesta Perairan","conjuring-chiaroscuro":"Muslihat\u2008Bayang dan Terang","dance-of-lantern":"Tarian Lentera","decree-of-the-deeps":"Titah\u2008di Kedalaman Lautan","discerner-of-enigmas":"Sang\u2008Pengungkap Misteri","drifting-luminescence":"Mutiara\u2008di Atas Laut","everbloom-violet":"Lembayung Sakura","farewell-of-snezhnaya":"Sampai\u2008Jumpa Snezhnaya","from-ashes-reborn":"Inkarnasi\u2008Sisa Bara Api","gentry-of-hermitage":"Bangsawan dan Pertapa","immaculate-pulse":"Hati\u2008Semurni Mutiara","invitation-to-mundane-life":"Panggilan Cahaya","leaves-in-the-wind":"Dedaunan di Tengah Angin","moment-of-bloom":"Bunga Bersemi","oni_s-royale":"Perjamuan Oni","reign-of-serenity":"Sang\u2008Penguasa Tunggal","secretum-secretorum":"Enigma Kehidupan","sparkling-steps":"Percikan Langkah Api","tapestry-of-golden-flames":"Pijar\u2008Api di Angkasa","tempestuous-destiny":"Lilitan\u2008Takdir Menggelora","the-heron_s-court":"Pelataran Bangau Putih","the-moongrass-enlightenment":"Anugerah\u2008Kebijaksanaan Rumput Rembulan","the-transcendent-one-returns":"Kembali\u2008ke Dunia Fana","twilight-arbiter":"Hakim Senja","twirling-lotus":"Tarian Limbai Teratai","viridescent-vigil":"Langkah Suaka Rimba"},R={bannerConfig:"Konfigurasi {banner}",baseRate:"Probabilitas Dasar {rarity}\u2605:",maxPity:"Piti Maksimal {rarity}\u2605:",hardPity:"Tingkatkan probabilitas {rarity}\u2605 pada piti:",currentPity:"Pity {rarity}\u2605 saat ini",winRate:"Probabilitas mendapat item RateUP:",charRate:"Probabilitas mendapat Karakter dibanding Senjata",nonRateup:"(Item 4\u2605 saat kalah)",selectedRate:"Probabilitas mendapat senjata terpilih:",guaranteedSystem:"Sistem Jaminan",backToDefault:"Pengaturan Default",resetPrompt:'Apakah kamu yakin akan mereset pengaturan probabilitas untuk <b>"{banner}"</b>?',default:"Aktif",never:"NonAktif",always:"Selalu"},U={wishTitle:"Permohonan",rollButton:"Mohon {count}",stellaFortuna:"Stella Fortuna",loadFailed:"Gagal Memuat Banner! <br /> Silahkan ganti banner atau hubungkan kembali ke internet untuk menghindari error!",loadMeteor:"Load Meteor",skipMeteor:"Skip Meteor",loadMeteorMsg:"Loading <span>{star} Star Meteor Animation </span>",meteorNotLoaded:"Can't find Meteor Animation in your storage, <span> Load the Meteor</span> first before wishing, or <span> Turn ON </span> the option to skip Meteor Animation!",preloadFilesMsg:"* Loaded files will be stored to Browser Storage, so you don't need to load them again until the site update.",banner:{text:"Banner",allBanner:"Semua Banner",previous:"Banner Terdahulu",findBanner:"Cari Banner",group:"Grup",beginner:"Permohonan Pemula","character-event":"Event Permohonan Karakter","weapon-event":"Permohonan Senjata",standard:"Permohonan Standar",novice:"Permohonan Pemula",wishDescription:"Setiap 10 kali Permohonan pasti mendapatkan item 4\u2605 ke atas",up:"UP!",beginnerSet:"10-set diskon 20%. 10-set pertama pasti mendapatkan {character}.",beginnerNote:'"Aku akan selalu ingat etika seorang pelayan."',beginnerChance:"Sisa Kesempatan: {chances}",standardNote:"Permohonan Standar tidak memiliki batas waktu.",allWeaponTypes:"Semua tipe senjata",etc:"dll.",probIncreased:"Kesempatan untuk memperoleh ditingkatkan !",eventNote:"Karakter 5\u2605 Eksklusif hanya dapat diperoleh di Event Permohonan tertentu selama periode event.",viewDetails:"Tekan Rincian untuk info lebih lanjut."},epitomizedPath:{text:"Epitomized Path",fatePoint:"Poin Takdir",cancelPrompt:"Apakah kamu ingin membatalkan pilihanmu saat ini ?",cancelDesc:"Pembatalan akan me-reset akumulasi poin takdir",selectWeapon:"Senjata yang Dipilih",chartCourseOf:"Pilih {target}",cancelCourse:"Batalkan Pilihan",chartCourse:"Pilih",courseSetFor:"Pilihan Ditentukan untuk: {selectedCourse}",description:['"Epitomized Path" adalah sistem yang termasuk dalam "Epitome Invocation" ini:',"Setelah kamu menentukan senjata pilihanmu, jika kamu <span> menerima senjata bintang 5 yang bukan pilihanmu</span>, kamu akan mendapatkan 1 poin takdir.",'Setelah kamu mengumpulkan Poin Takdir yang cukup, senjata bintang 5 berikutnya akan menjadi senjata yang kamu pilih melalui "Epitomized Path"','Point Takdir kamu <span> akan di-reset setelah mendapatkan senjata "Epitomized Path"</span> dalam "Epitome Invocation" ini.',"Jika kamu tidak memilih senjata, Poin Takdir tidak akan terkumpul dari Permohonanmu","Kamu dapat mengubah atau membatalkan pilihanmu, tetapi tindakan ini <span> akan me-reset Poin Takdir yang telah terkumpul. </span>",'<span>Saat "Epitome Invocation" ini berakhir, Poin Takdir yang terkumpul juga akan di-reset</span>.']},result:{skip:"Lewati",meteorFailed:"Animasi meteor gagal dimuat",new:"Baru",convertion:"Konversi",title:"Hasil Permohonan untuk {item} et al"}},C={heading:"Kostum Karakter",default:"Default",setOutfit:"Atur Kostum",owned:"Sudah Dimiliki",purchasePrompt:"Kamu belum memiliki karakter untuk kostum ini, apakah kamu yakin ingin membeli kostum ini?",promptInfo:"Kamu masih bisa menggunakan kostum ini setelah mendapatkan karakter yang sesuai.",obtained:"Mendapatkan Kostum Baru",unlocked:"Berhasil membuka kostum untuk {character}!",item:{"5-star-outrider":{name:"5-Star Outrider"},"favonian-fevotion":{name:"Favonian Devotion"},"flowing-fate":{name:"Flowing Fate"},"executor_s-thorns":{name:"Executor's Thorns"},"sea-breeze-dandelion":{name:"Sea Breeze Dandelion",description:"Pakaian yang dikenakan Jean saat musim panas. Terlihat nyaman dan santai, namun tetap elegan, sangat cocok dikenakan saat bepergian ke pantai."},"summertime-sparkle":{name:"Summertime Sparkle",description:"Pakaian pantai Barbara. Rok pendek yang indah penuh dengan vitalitas musim panas dan seolah membawa suasana udara segar dari laut."},"opulent-splendor":{name:"Opulent Splendor",description:"Pakaian resmi Keqing. Ia hadir di tengah pagi yang indah pada momen Lantern Rite. Benang yang sudah dirajut begitu lama oleh jerih payah ini, kemudian terjalin menjadi penampilan yang sederhana namun mengesankan."},"orchid_s-evening-gown":{name:"Orchid's Evening Gown",description:"Pakaian formal Ningguang. Rok cyan panjang mengikuti lekuk tubuhnya yang elegan, dan sayap kupu-kupu di pergelangan kakinya menambahkan sentuhan anggun pada pakaian ini."},"ein-immernachtstraum":{name:"Ein Immernachtstraum",description:"Pakaian upacara untuk Prinzessin. Semoga dia yang hatinya mulia selalu mempunyai keberanian, ketulusan dan kebaikan selamanya di dalam hatinya, dan agar tidak ada kejahatan yang bisa mengalahkannya."},"red-dead-of-night":{name:"Red Dead of Night",description:"Salah satu pakaian Diluc yang dia pakai saat beroperasi dalam rahasia, bagaikan kobaran api dalam gelapnya bayangan. Bekas luka berwarna merah merona di ujung penglihatan para musuh adalah mimpi buruk di sisa hidup mereka."},"a-sobriquet-under-shade":{name:"A Sobriquet Under Shade",description:"Kostum Lisa yang dipesankan oleh seseorang saat dirinya berkunjung kembali ke Sumeru. Keseimbangan sempurna antara kepraktisan dan keanggunan, modelnya lumayan mirip dengan seragam lamanya ketika masih belajar di Akademiya dulu."},"springbloom-missive":{name:"Springbloom Missive",description:"Kostum perjalanan Kamisato Ayaka. Gaun yang dirancang mengikuti model gaun para wanita Fontaine dalam ilustrasi novel ringan, yang menunjukkan sekilas gaya hidup para wanita terhormat di sana."},"blossoming-starlight":{name:"Blossoming Starlight",description:"Kostum yang dikenakan Klee hanya untuk pertunjukan penting. Warnanya sangat indah, seperti kue yang dihiasi dengan bunga-bunga krim dan lilin merah yang menawan. Dengan mengenakannya, dapat membawa kebahagiaan dan senyuman dalam petualangannya ke seluruh penjuru."},"sailwind-shadow":{name:"Sailwind Shadow",description:'Kostum Kaeya yang dikenakan saat memerankan "Bandit Belati". Desain kostum ini sengaja dibuat agar terlihat sangat mencolok. Tapi mengenakannya pun tidak sulit, malahan aksesoris lain dan belatinya yang lebih memakan waktu saat dikenakan.'}}},N={text:"Rincian",promotional:"Item UP",itemlist:"Daftar Item",increasedRate:"Persentase Perolehan Meningkat",percentageDrop:"Kemungkinan dari Persentase Perolehan {rarity}\u2605: {percentage}",wishDetails:"Rincian Permohonan",probInfo:"Persentase Dasar Perolehan Item {rarity}\u2605: {singlePercentage} (Termasuk Jaminan: {avgPercentage})",itemWishFor:"Daftar Item Permohonan :",itemType:"Jenis Item",itemName:"Nama Item",beginnerInfo:"Tanpa Batas Waktu (Berakhir setelah 20 Permohonan)",limited:"Event Terbatas",permanent:"Permanen",alert:"\u203B Permohonan ini termasuk {wishName}. Hitungan jaminan Permohonan pada event ini hanya diakumulasi untuk kategori {wishName} dan terpisah dari hitungan jaminan Permohonan lainnya",beginner:["Permohonan <span> Pemula </span> tidak memiliki batas waktu dan ditujukan untuk pengembara baru yang baru saja mendarat di Teyvat. Menyediakan karakter dan senjata Non-promosi. <br /> pada Permohonan Pemula, permohonan \xD710 mendapat pengurangan biaya <span> 20%</span> lebih rendah menggunakan Acquaint Fate, dan \xD710 permohonan pertama termasuk jaminan {character}, dan \xD710 permohonan kedua termasuk min. character 4\u2605 <span>lainnya</span>! Permohonan Pemula akan berakhir setelah <span> 20 </span> percobaan. Setelah permohonan berakhir, halaman ini akan berhenti ditampilkan","\u203B Dalam keadaan normal, Permohonan Karakter atau Senjata dihitung berdasarkan pada persentase dasar. Untuk Permohonan dengan persentase perolehan yang meningkat, jaminan perolehan, dan lainnya, akan dihitung berdasarkan pada ketentuan yang berlaku.","\u3013Ketentuan\u3013","Persentase dasar untuk mendapatkan item 5\u2605: <span>0,600%</span>; Persentase dasar untuk mendapatkan item 4\u2605: <span>5,100%</span>; persentase keseluruhan untuk mendapatkan item 4\u2605 (termasuk jaminan): <span>13,000%</span>;"],standard:['"{bannerName}" adalah Permohonan Standar tanpa batas waktu di mana Karakter dan Senjata non-eksklusif tersedia. <br/>Pada Permohonan ini, setiap 10 kali Permohonan, <span>dijamin</span> akan memberikan sebuah item 4\u2605 ke atas.',"\u203B Dalam keadaan normal, Permohonan Karakter atau Senjata dihitung berdasarkan pada persentase dasar. Untuk Permohonan dengan persentase perolehan yang meningkat, jaminan perolehan, dan lainnya, akan dihitung berdasarkan pada ketentuan yang berlaku.","\u3013Ketentuan\u3013","Persentase dasar untuk mendapatkan item 5\u2605: <span>0,600%</span>; persentase dasar untuk mendapatkan Karakter 5\u2605: <span>0,300%</span>, persentase dasar untuk mendapatkan Senjata 5\u2605: <span>0,300%</span>; persentase keseluruhan untuk mendapatkan item 5\u2605 (termasuk jaminan): <span>1,600%</span>. Dijamin mendapatkan item 5\u2605 setidaknya satu kali setiap <span>90</span> kali Permohonan. <br/> Persentase dasar untuk mendapatkan item 4\u2605: <span>5,100%</span>; persentase dasar untuk mendapatkan Karakter 4\u2605: <span>2,550%</span>, persentase dasar untuk mendapatkan Senjata 4\u2605: <span>2,550%</span>; persentase keseluruhan untuk mendapatkan item 4\u2605 (termasuk jaminan): <span>13,000%</span>. Dijamin mendapatkan item 4\u2605 ke atas setidaknya satu kali setiap <span>10</span> kali Permohonan. Persentase perolehan item 4\u2605 dari jaminan adalah <span>99,400%</span>, persentase perolehan item 5\u2605 dari jaminan adalah <span>0,600%</span>"],events:['Event Permohonan - {bannerName} telah dimulai. Selama Event Permohonan, persentase perolehan Karakter 5\u2605 {featuredCharacter},Karakter 4\u2605 {rateupCharacters} <span> meningkat drastis! </span> <br /> <span> \u203BKarakter Eksklusif di atas tidak akan masuk ke Permohonan Standar "Wanderlust Invocation". </span>',"\u203BDalam keadaan normal, Permohonan Karakter atau Senjata dihitung berdasarkan pada persentase dasar. Untuk Permohonan dengan persentase perolehan yang meningkat, jaminan perolehan, dan lainnya, akan dihitung berdasarkan pada ketentuan yang berlaku.","\u3013Ketentuan\u3013","[Item 5\u2605]","Untuk Event Permohonan - {bannerName}, persentase dasar untuk mendapatkan Karakter 5\u2605: <span>0,600%</span>; persentase keseluruhan (termasuk jaminan): <span>1,600%</span>. Dijamin mendapatkan Karakter 5\u2605 setidaknya satu kali setiap <span>90</span> kali Permohonan. Saat kamu mendapatkan Karakter 5\u2605 dari Permohonan, ada <span>50,000%</span> kemungkinan Karakter tersebut adalah Karakter UP event ini: {featuredCharacter}. Jika Karakter 5\u2605 pertama yang kamu dapatkan dari event ini bukan Karakter UP, Karakter 5\u2605 yang kamu peroleh selanjutnya dijamin adalah Karakter UP.","[Item 4\u2605]","Untuk Event Permohonan - {bannerName}, persentase dasar untuk mendapatkan item 4\u2605: <span>5,100%</span>; persentase dasar untuk mendapatkan Karakter 4\u2605: <span>2,550%</span>, persentase dasar untuk mendapatkan Senjata 4\u2605: <span>2,550%</span>; persentase keseluruhan untuk mendapatkan item 4\u2605 (termasuk jaminan): <span>13,000%</span>. Dijamin mendapatkan item 4\u2605 ke atas setidaknya satu kali setiap <span>10</span> kali Permohonan; persentase perolehan item 4\u2605 dari jaminan adalah <span>99,400%</span>, persentase perolehan item 5\u2605 dari jaminan adalah <span>0,600%</span>. Saat kamu mendapatkan item 4\u2605 dari Permohonan, ada <span>50,000%</span> kemungkinan item tersebut adalah Karakter UP event ini: {rateupCharacters} . Jika item 4\u2605 pertama yang kamu dapatkan dari event ini bukan Karakter UP, maka item 4\u2605 yang kamu peroleh selanjutnya dijamin adalah Karakter 4\u2605 UP dari periode ini. Saat kamu mendapatkan item 4\u2605 UP dari Permohonan, persentase perolehan setiap Karakter 4\u2605 UP di event permohonan ini adalah sama rata."],weapons:['Event Permohonan - {bannerName} dimulai. Selama event Permohonan ini, persentase perolehan Senjata 5\u2605 Eksklusif {featuredWeapon1} , persentase perolehan Senjata 5\u2605 {featuredWeapon2}, persentase perolehan Senjata 4\u2605 Eksklusif {rateupWeapons} meningkat drastis! <br /> <span> \u203B  Senjata Eksklusif di atas tidak akan masuk ke Permohonan Standar "Wanderlust Invocation".</span>',"\u203BDalam keadaan normal, Permohonan Karakter atau Senjata dihitung berdasarkan pada persentase dasar. Untuk Permohonan dengan persentase perolehan yang meningkat, jaminan perolehan, dan lainnya, akan dihitung berdasarkan pada ketentuan yang berlaku.","\u3013Ketentuan\u3013","[Item 5\u2605]",'Untuk Event Permohonan - {bannerName}, persentase dasar untuk mendapatkan Senjata 5\u2605: <span>0,700%</span>; persentase keseluruhan (termasuk jaminan perolehan): <span>1,850%</span>. Dijamin mendapatkan Senjata 5\u2605 setidaknya satu kali setiap <span>80</span> kali Permohonan. <br/> Saat kamu mendapatkan Senjata 5\u2605 dari Permohonan, ada <span>75,000%</span> kemungkinan Senjata tersebut adalah Senjata UP event ini: {featuredWeapon1} dan {featuredWeapon2}. Jika Senjata 5\u2605 yang kamu dapatkan kali ini bukan Senjata UP, maka Senjata 5\u2605 yang kamu peroleh selanjutnya dijamin adalah Senjata UP. Jika kamu tidak memilih untuk mendapatkan Senjata tertentu dengan mengumpulkan Poin Takdir hingga maksimum, maka saat kamu mendapatkan item 5\u2605 UP, persentase perolehan semua Senjata 5\u2605 UP adalah sama rata. <br/> Dalam Event Permohonan - {bannerName}, Traveler dapat menggunakan sistem "Epitomized Path" untuk memilih Senjata 5\u2605 yang ingin didapatkan, pemilihan Senjata ini hanya berlaku selama Event Permohonan - {bannerName} berlangsung. <br/> Dalam Event Permohonan Event Permohonan - {bannerName}, setelah kamu menentukan senjata pilihanmu, jika kamu menerima Senjata 5\u2605 yang bukan pilihanmu, kamu akan mendapatkan 1 Poin Takdir. Setelah kamu mengumpulkan Poin Takdir hingga <span>maksimum</span>, maka Senjata 5\u2605 yang kamu dapatkan berikutnya pasti adalah senjata yang kamu pilih melalui "Epitomized Path". Jika kamu mendapatkan senjata pilihanmu, maka semua Poin Takdir yang kamu miliki akan kembali menjadi <span>0</span> dan dihitung ulang, terlepas apakah Poin Takdir-mu sudah maksimum atau belum. <br/>Jika kamu tidak memilih senjata dengan "Epitomized Path", maka Poin Takdir <span>tidak akan</span> terkumpul. Kamu bisa mengubah atau membatalkan pilihan senjatamu. Mengubah atau membatalkan pilihan senjatamu akan membuat semua Poin Takdir yang kamu miliki kembali menjadi <span>0</span> dan dihitung ulang. <br/> \u203B Poin Takdir di Event Permohonan ini hanya berlaku selama Event Permohonan - {bannerName} berlangsung. Setelah Event Permohonan berakhir, semua Poin Takdir yang kamu miliki akan kembali menjadi <span>0</span> dan dihitung ulang.',"[Item 4\u2605]","Untuk Event Permohonan - {bannerName}, persentase dasar untuk mendapatkan item 4\u2605: <span>6,000%</span>; persentase dasar untuk mendapatkan Karakter 4\u2605: 3,000%, persentase dasar untuk mendapatkan Senjata 4\u2605: <span>3,000%</span>; persentase keseluruhan untuk mendapatkan item 4\u2605 (termasuk jaminan perolehan): <span>14,500%</span>. Dijamin mendapatkan item 4\u2605 ke atas setidaknya satu kali setiap <span>10</span> kali Permohonan. Persentase perolehan item 4\u2605 dari jaminan adalah <span>99,300%</span>, persentase perolehan item 5\u2605 dari jaminan adalah <span>0,700%</span>. Saat kamu mendapatkan item 4\u2605 dari Permohonan, ada <span>75,000%</span> kemungkinan Senjata tersebut adalah Senjata UP event ini: {rateupWeapons}. Jika item 4\u2605 yang kamu dapatkan kali ini bukan Senjata 4\u2605 UP, maka item 4\u2605 yang kamu peroleh selanjutnya dijamin adalah Senjata 4\u2605 UP pada periode kali ini. Saat kamu mendapatkan item 4\u2605 UP dari Permohonan, persentase perolehan setiap Senjata 4\u2605 UP di event permohonan ini adalah sama rata."],convertion:{fiveStar:"Senjata 5\u2605 yang diperoleh dari permohonan ini juga akan memberikan {starglitter} \xD710;",fourStar:"Senjata 4\u2605 yang diperoleh dari permohonan ini juga akan memberikan {starglitter} \xD72;",threeStar:"Senjata 3\u2605 yang diperoleh dari permohonan ini juga akan memberikan {stardust} \xD715."},duplicate:{heading:"\u3013Karakter Duplikat\u3013",text:"Saat kamu mendapat Karakter {rarity}\u2605 yang sudah dimiliki untuk ke 2-7 kalinya, tak peduli diperoleh dari mana (seperti Permohonan, ditukar di Toko, atau diberikan oleh game), Karakter duplikat tersebut akan diubah menjadi {stellaFortuna} Karakter tersebut \xD71 dan {starglitter} {constBonus}; untuk ke-8 kali dan seterusnya, Karakter duplikat tersebut akan diubah menjadi {starglitter} {fullConstBonus}."}},x={title:"Riwayat Permohonan",text:"Riwayat",resetButton:"Reset",resetPromptTitle:"Reset Riwayat ?",resetPrompt:'Tindakan ini akan menghapus semua Karakter dan Senjata dimiliki yang berasal dari banner "{bannerName}". <br /> Yakin untuk me-Reset ?',resetSuccess:"Berhasil me-Reset",keepPity:"Jangan reset Piti dan status jaminan",selectWish:"Jenis Permohonan ",disclaimer:"Data kamu tidak akan pernah disimpan secara online, semua data akan disimpan ke IndexedDB yang artinya data akan disimpan pada browser, data ini tidak akan dihapus selama kamu tidak menghapusnya secara manual melalui tombol reset atau selama tidak menghapus data browser",currentPity:"Pity saat ini :",totalPull:"Total Permohonan :",totalSpend:"Total Pengeluaran :",filterTxt:"Filter",filter:"Bintang {rarity}",filterAll:"Semua",pity:"Pity",timeReceived:"Waktu Perolehan",waiting:"Tunggu",noData:"Tidak ada data .",untracked:"Tidak Terlacak",item:"Item",win:"Menang 50/50",lose:"Kalah 50/50",guaranteed:"Item Jaminan",selected:"Item Pilihan",olderLayout:"Layout Lama",switchv2:"Ganti ke V2"},F={text:"Toko",paimonBargains:"Penukaran Paimon",fateNeeded:"Tambahan {rollQty} {currency} diperlukan.",primoNeeded:"Beli dengan menggunakan {primoPrice} Primogem ?",purchaseUpto:"Batas Pembelian 1",purchaseConfirm:"Konfirmasi Pembelian",exchangeHeading:"Redeem Item",purchaseHeading:"Beli Item",purchaseButton:"Beli",pay:"Bayar",product:"Produk",consume:"Mengkonsumsi",selectPayment:"Pilih Jenis Pembayaran",unrealWallet:"UnReal Wallet",convertPrimo:"Otomatis Konversi ke Primogem?",proceedPayment:"Proses Pembayaran",qty:"Qty",insufficient:"Saldo Tidak Cukup",crystalTopup:"Top Up Crystal",initialBonus:"Bonus Topup Perdana",bonus:"Bonus",buyGenesisHeading:"Beli Genesis Crystal",recomendedHeading:"Item Rekomendasi",paimonHeading:"Penukaran Paimon",welkinNote:"Bisa dibeli beberapa kali",limitedOffer:"Penawaran Terbatas",noLimitTime:"Item tersedia tanpa batas waktu",paymentChilde:"Childe",paymentTears:"Tears",paymentWakaranai:"Wakaranai",recomended:{blessing:"Blessing of the Welkin Moon",newOutfit:"Kostum Karakter Baru",dayRemaining:"Tersisa {days} hari",alreadyClaimed:"Telah diperoleh hari ini",instantlyGet:"Beli dan Peroleh",dailyGift:"Bonus Harian",obtainTotal:"*Berlaku 30 hari memberikan total {totalGenesis} Genesis Crystal dan {totalPrimo} Primogems",claimingBlessing:"Tekan untuk mengklaim hadiah harian Blessing of the Welkin Moon",issuedPurchase:"Pendapatan saat Pembelian",collect:"Dapatkan Bonus Harian Selama 30 Hari"},exchange:{starglitter:"Penukaran Starglitter",stardust:"Penukaran Stardust",primogem:"Penukaran Primogem"},item:{genesis:"Genesis Crystal",primogem:"Primogem",intertwined:"Intertwined Fate",acquaint:"Acquaint Fate",starglitter:"Masterless Starglitter",stardust:"Masterless Stardust"},description:{intertwined:"Benih takdir yang menghubungkan mimpi.Batu menyala yang dapat menghubungkan takdir dan mimpi satu sama lain, seperti kecerahan yang menghubungkan bintang-bintang dan membentuk hati.",acquaint:"Benih yang menyinari malam, Tidak peduli seberapa jauh, yang ditakdirkan akan bertemu di bawah bintang, dipandu oleh sinar batunya."}},W={text:"Inventaris",unsetOutfit:"Lepaskan Kostum",setOutfit:"Atur Kostum pada Karakter",refinement:"Refinement {count}",constellation:"Konstelasi {count}",extra:"{count} Extra",firstSummon:"Pertama kali dimiliki pada : {date}",notOwned:"Tidak Dimiliki",sort:"Urutkan",rarity:"Rarity",name:"Nama",quantity:"Quantity",element:"Element",release:"Tgl Rilis",type:"Jenis",owned:"Dimiliki",showAllOption:"Tampilkan Semua {item}"},L={no:"Tidak",yes:"Ya",text:"Menu",feedback:"Feedback",options:"Opsi",updates:"Riwayat Pembaruan",language:"Bahasa",currency:"Mata Uang",fates:"Saldo",unlimited:"Unlimited",manual:"Manual Input",mute:"Matikan Audio dan Musik",switchBanner:"Ganti Banner",showAllitems:"Tampilkan Semua Item pada Inventaris",autoskip:"Auto Skip Splash Art",animatedbg:"Animasi Background",multiRoll:"Jumlah permohonan dalam sekali klik",factoryReset:"Bersihkan Data dan Kembalikan Seperti Semula",resetTitle:"Factory Reset",rotate:"Putar untuk pengalaman yang lebih baik",keepSetting:"Jangan ubah pengaturan? <small> Pity, Saldo, dan pengaturan tidak akan direset</small>",clearCache:"Hapus Cache ( {size} )? <small> Asset dalam cache akan dimuat ulang setelah tindakan ini!</small>",resetButton:"Reset Sekarang",resetPrompt:"Apakah kamu yakin untuk menghapus <strong> Semua Data </strong> dan mengembalikan aplikasi seperti semula?",resetSuccess:"Berhasil me-Reset",removeAds:"Hapus Iklan",removeKey:"Hapus AdKey",removeKeyConfirm:"Kamu yakin untuk menghapus Adkey? Kamu perlu memasukan Adkey baru untuk menghapus iklan selanjutnya",getNewKey:"Dapatkan AdKey baru di sini!",noKey:"Belum memiliki AdKey?",verifyFail:"Gagal terhubung untuk memverifikasi AdKey!",invalidKey:"AdKey tidak valid",keyExpired1:"Adkey Kadaluarsa!",keyExpired2:'Adkey "{key}" sudah kadaluarsa sejak {date}!',adFreeUser:"Kamu telah menggunakan Simulator Iklan!",inputKeyPlaceholder:"Masukkan AdKey",inputKeyTxt:"Masukkan AdKey untuk menghapus Iklan !",checkingKey:"Menverifikasi AdKey tersimpan",authorNotes:"* I need to say sorry about the ads. Actually I don't want to ruin your wishing experience, but I don't have any Team or Sponsor to keep this app alive. If you don't want to spend anythings, You can still turn on the Ad Blocker or just use custom DNS, I will not forbid you."},J={title:a,character:n,weapon:e,vision:t,anemo:i,cryo:r,dendro:s,electro:m,hydro:o,geo:u,pyro:k,bow:d,catalyst:l,claymore:p,sword:h,polearm:g,extra:y,obtained:c,waiting:b,connectionFailed:P,confirmButton:S,cancelButton:j,disclaimer:K,fanmade:f,pressToContinue:v,installInstruction:w,share:T,screenshot:B,capturing:A,rewardFirstShare:D,version:I,donate:E,banner:M,editor:R,wish:U,outfit:C,details:N,history:x,shop:F,inventory:W,menu:L};export{i as anemo,M as banner,d as bow,j as cancelButton,A as capturing,l as catalyst,n as character,p as claymore,S as confirmButton,P as connectionFailed,r as cryo,J as default,s as dendro,N as details,K as disclaimer,E as donate,R as editor,m as electro,y as extra,f as fanmade,u as geo,x as history,o as hydro,w as installInstruction,W as inventory,L as menu,c as obtained,C as outfit,g as polearm,v as pressToContinue,k as pyro,D as rewardFirstShare,B as screenshot,T as share,F as shop,h as sword,a as title,I as version,t as vision,b as waiting,e as weapon,U as wish};
