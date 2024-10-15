class Database {
  // Kütüphanenin tek bir örneğini tutmak için statik bir değişken
  static _instance = null;

  constructor() {
    // Eğer kütüphane (Database) daha önce oluşturulmamışsa, bu nesneyi sakla
    if (Database._instance == null) {
      Database._instance = this; // Kütüphane örneğini ayarla
      console.log("Database nesnesi oluşturuldu");
    }
    return Database._instance; // Her zaman mevcut kütüphane örneğini döndür
  }

  // Kütüphane örneğine erişmek için statik bir yöntem
  static getInstance() {
    // Eğer kütüphane örneği yoksa, yeni bir kütüphane oluştur
    if (Database._instance === null) {
      Database._instance = new Database();
    }
    // Mevcut kütüphane örneğini döndür
    return Database._instance;
  }

  // Kütüphaneden bir sorgu (kitap isteme) yap
  query(param) {
    console.log(param); // İstediğiniz kitabın adını (parametreyi) yazdır
  }
}

class Application {
  // Okuyucu sınıfı
  main() {
    const foo = Database.getInstance(); // Kütüphaneden bir örnek al
    foo.query("foo"); // "foo" adlı kitabı iste

    const bar = Database.getInstance(); // Aynı kütüphaneden başka bir örnek al
    bar.query("bar"); // "bar" adlı kitabı iste
  }
}

Database.getInstance().query("foo");

// Okuyucu örneği oluştur
const app = new Application();
app.main(); // Okuyucunun kitabı istemesini başlat

/* 
Database sınıfı, kütüphane olarak çalışır ve sadece bir tane kütüphane örneği vardır.
getInstance yöntemi, kütüphaneye erişim sağlamak için kullanılır ve yalnızca bir örneği oluşturur.
query yöntemi, kütüphaneden kitap isteme işlemini simgeler.
Application sınıfı, okuyucu olarak işlev görür ve kütüphaneden kitap ister.
*/
