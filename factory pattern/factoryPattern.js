// 1. Product Interface (Soyut Ürün)
// Bu sınıf, tüm ürünlerin sahip olması gereken temel işlevi (doStuff) tanımlar.
class Product {
  doStuff() {
    // Alt sınıflar bu metodu uygulamak zorundadır.
    throw new Error("Bu metod alt sınıflar tarafından uygulanmalıdır.");
  }
}

// 2. Concrete Products (Gerçek Ürünler)
// Bu sınıflar, Product sınıfını genişleterek (inheritance), her biri kendi işlevini uygulayan gerçek ürünlerdir.
class ConcreteProductA extends Product {
  doStuff() {
    return "ConcreteProductA işini yapıyor!";
  }
}

class ConcreteProductB extends Product {
  doStuff() {
    return "ConcreteProductB işini yapıyor!";
  }
}

// 3. Creator (Yaratıcı Sınıf)
// Yaratıcı sınıf, ürünleri üretmek için kullanılan factory methodu içerir.
// Bu sınıf alt sınıflar tarafından genişletilerek farklı ürünler oluşturulur.
class Creator {
  // Factory Method
  createProduct() {
    // Alt sınıflar bu metodu uygulamalıdır.
    throw new Error("Bu metod alt sınıflar tarafından uygulanmalıdır.");
  }

  // Ortak bir operasyon metodu.
  // Bu metot, ürün oluşturma ve işlem yapma işlevini birleştirir.
  someOperation() {
    const product = this.createProduct(); // Factory methodu kullanarak ürün oluşturulur.
    return product.doStuff(); // Ürün üzerinde işlem yapılır.
  }
}

// 4. Concrete Creators (Gerçek Yaratıcılar)
// Bu sınıflar, Creator sınıfını genişleterek hangi türde ürün oluşturulacağını belirler.
class ConcreteCreatorA extends Creator {
  // Factory methodu uygulayarak ConcreteProductA üretir.
  createProduct() {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  // Factory methodu uygulayarak ConcreteProductB üretir.
  createProduct() {
    return new ConcreteProductB();
  }
}

// Kullanım:

// ConcreteCreatorA sınıfından bir yaratıcı oluşturulur.
// Bu sınıf, ConcreteProductA ürününü üretir.
const creatorA = new ConcreteCreatorA();
console.log(creatorA.someOperation()); // Çıktı: ConcreteProductA işini yapıyor!

// ConcreteCreatorB sınıfından bir yaratıcı oluşturulur.
// Bu sınıf, ConcreteProductB ürününü üretir.
const creatorB = new ConcreteCreatorB();
console.log(creatorB.someOperation()); // Çıktı: ConcreteProductB işini yapıyor!

/* 
Diyelim ki bir kafe işletiyorsunuz ve menünüzde Kahve ve Çay gibi farklı içecekler var. Müşteriler ne içmek istediklerini söylemiyorlar, sadece bir içecek istiyorlar. Siz de onlara doğru içeceği hazırlayıp vermek istiyorsunuz, ama menünüzdeki içecek türlerinin her birini bilmek zorunda kalmadan bunu yapmak istiyorsunuz.

Bu durumda bir fabrika kullanırsınız. Kafe, sipariş alır ve içecek fabrikasına yönlendirir. Fabrika, siparişe göre Kahve ya da Çay üretir ve müşteriye sunar.

Product (Ürün): İçeceklerdir (örneğin Kahve veya Çay). Her biri bir ürün sınıfını temsil eder.
Concrete ProductA / ProductB (Gerçek Ürünler): Gerçek içeceklerdir. Kahve ve Çay sınıfları gibi.
Creator (Yaratıcı): Kafedir. Bu sınıf, hangi içeceği yapacağını bilmez, sadece "bir içecek yap" der.
Concrete CreatorA / CreatorB: Bunlar içeceği yapan bölümlerdir. Biri sadece Kahve yapar, diğeri sadece Çay yapar.
Sonuç olarak, kafe (creator), içecekleri doğrudan yapmaz, hangi içeceği yapacağını fabrikaya (factory method) sorar. Fabrika ise hangi içeceği yapacağını seçer ve uygun içeceği üretir. Bu tasarım sayesinde, menüye yeni bir içecek eklenirse, kafeyi değiştirmek zorunda kalmazsınız, sadece yeni bir üretim bölümü (creator) ekleyebilirsiniz.*/

class Kafe {
  icecekUret() {
    throw new error("bu sadece subclasslar tarafindan kullanilmali");
  }
}

class Kahve extends Kafe {
  icecekUret() {
    console.log("kahve uretildi");
  }
}

class Cay extends Kafe {
  icecekUret() {
    console.log("cay uretildi");
  }
}

class Fabrika {
  icecekUret() {
    throw new error("bu sadece subclasslar tarafindan kullanilmali");
  }
}

class GercekFabrikaA extends Fabrika {
  icecekUret() {
    const kahve = new Kahve();
    return kahve.icecekUret();
  }
}

class GercekFabrikaB extends Fabrika {
  icecekUret() {
    const cay = new Cay();
    return cay.icecekUret();
  }
}

const fabrikaA = new GercekFabrikaA();
fabrikaA.icecekUret();
const fabrikaB = new GercekFabrikaB();
fabrikaB.icecekUret();
