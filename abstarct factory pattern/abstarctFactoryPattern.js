// Mobilya fabrikası için temel sınıf
class FurnitureFactory {
  createChair() {} // Sandalye oluşturma metodu
  createTable() {} // Masa oluşturma metodu
  createSofa() {} // Kanepe oluşturma metodu
}

// Yeni tarz mobilya fabrikası, temel fabrikadan türetiliyor
class NewStyleFurnitureFactory extends FurnitureFactory {
  createChair() {
    // Yeni tarz sandalye oluştur
    return new NewStyleChair();
  }
  createTable() {
    // Yeni tarz masa oluştur
    return new NewStyleTable();
  }
  createSofa() {
    // Yeni tarz kanepe oluştur
    return new NewStyleSofa();
  }
}

// Eski tarz mobilya fabrikası, temel fabrikadan türetiliyor
class OldStyleFurnitureFactory extends FurnitureFactory {
  createChair() {
    console.log("old style chair"); // Konsola eski tarz sandalye yaz
    return new OldStyleChair(); // Eski tarz sandalye oluştur
  }
  createTable() {
    console.log("old style table"); // Konsola eski tarz masa yaz
    return new OldStyleTable(); // Eski tarz masa oluştur
  }

  createSofa() {
    console.log("old style sofa"); // Konsola eski tarz kanepe yaz
    return new OldStyleSofa(); // Eski tarz kanepe oluştur
  }
}

// Mobilyaların temel sınıfı
class Chair {
  create() {} // Sandalye oluşturma metodu
}

class Table {
  create() {} // Masa oluşturma metodu
}

class Sofa {
  create() {} // Kanepe oluşturma metodu
}

// Yeni tarz sandalye sınıfı, sandalye sınıfından türetiliyor
class NewStyleChair extends Chair {
  create() {
    return new NewStyleChair(); // Yeni tarz sandalye oluştur
  }
}

// Yeni tarz masa sınıfı
class NewStyleTable extends Table {
  create() {
    return new NewStyleTable(); // Yeni tarz masa oluştur
  }
}

// Yeni tarz kanepe sınıfı
class NewStyleSofa extends Sofa {
  create() {
    return new NewStyleSofa(); // Yeni tarz kanepe oluştur
  }
}

// Eski tarz sandalye sınıfı
class OldStyleChair extends Chair {
  create() {
    console.log("old style chair"); // Konsola eski tarz sandalye yaz
    return new OldStyleChair(); // Eski tarz sandalye oluştur
  }
}

// Eski tarz masa sınıfı
class OldStyleTable extends Table {
  create() {
    console.log("old style table"); // Konsola eski tarz masa yaz
    return new OldStyleTable(); // Eski tarz masa oluştur
  }
}

// Eski tarz kanepe sınıfı
class OldStyleSofa extends Sofa {
  create() {
    console.log("old style sofa"); // Konsola eski tarz kanepe yaz
    return new OldStyleSofa(); // Eski tarz kanepe oluştur
  }
}

// Uygulama sınıfı, mobilya fabrikasını alır ve mobilya oluşturur
class Application {
  _furnitureFactory; // Mobilya fabrikası
  constructor(furnitureFactory) {
    this._furnitureFactory = furnitureFactory; // Fabrikayı ayarla
  }

  createFurniture() {
    // Fabrikadan mobilyaları oluştur
    const chair = this._furnitureFactory.createChair(); // Sandalye
    const table = this._furnitureFactory.createTable(); // Masa
    const sofa = this._furnitureFactory.createSofa(); // Kanepe
    return { chair, table, sofa }; // Oluşturulan mobilyaları döndür
  }
}

// Uygulama ayarları sınıfı, mobilya fabrikasını ayarlamak için
class AppSettings {
  constructor() {
    this.furnitureFactory = new NewStyleFurnitureFactory(); // Varsayılan fabrika
  }

  setFurnitureType(furnitureType) {
    // Mobilya tipi ayarlama metodu
    switch (furnitureType) {
      case "new":
        console.log("new style furnitures"); // Yeni tarz mobilyalar yaz
        this.furnitureFactory = new NewStyleFurnitureFactory(); // Yeni tarz fabrikayı ayarla
        break;
      case "old":
        console.log("old style furnitures"); // Eski tarz mobilyalar yaz
        this.furnitureFactory = new OldStyleFurnitureFactory(); // Eski tarz fabrikayı ayarla
        break;
    }
  }
}

// Uygulama ayarlarını oluştur ve mobilya tipini ayarla
const appSettings = new AppSettings();
appSettings.setFurnitureType("old"); // Ayarları günceller
const app = new Application(appSettings.furnitureFactory); // Fabrikayı kullanarak uygulama oluştur
const furniture = app.createFurniture(); // Mobilya yaratma
console.log(furniture); // Oluşturulan mobilyaları konsola yaz

/* 
fabrika Metaforu: FurnitureFactory, farklı mobilya türlerini oluşturmak için bir fabrika gibi düşünülebilir. NewStyleFurnitureFactory ve OldStyleFurnitureFactory, bu fabrikaların farklı modelleridir. Yani bir otomobil fabrikası, sedan, SUV veya spor otomobiller üretebilir; benzer şekilde, bu fabrika da farklı tarzlarda mobilyalar üretir.

İşletim Sistemi: AppSettings, bir bilgisayarın ayarları gibi düşünülebilir. Bilgisayarınızda hangi işletim sistemini (Windows, macOS, Linux) kullanıyorsanız, buna bağlı olarak farklı uygulamalar açılır. Burada da, mobilya tarzı ayarları, uygulamanın nasıl çalışacağını belirler.

İşlemci ve Yazılım: Application sınıfı, bir işlemci gibi düşünülür; AppSettings sınıfı ise işletim sistemi gibi. İşlemci, işletim sisteminin sağladığı bilgilerle çalışır ve sonuç olarak gerekli işlevleri yerine getirir. Mobilyaların yaratılması sürecinde, Application sınıfı, ayarlanan fabrikayı kullanarak mobilyaları üretir.
*/
