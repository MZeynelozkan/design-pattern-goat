// Strategy Design Pattern (Strateji Tasarım Deseni) Uygulaması

/* Bu tasarım deseninde, belirli bir işlevselliği (örneğin toplama, çıkarma) gerçekleştirmek için bir interface (StratejiInterface) oluşturuyoruz. 
   Bu interface, alt sınıfların (ConcreteStrategyAdd, ConcreteStrategySubtract, ConcreteStrategyMultiply) hangi yöntemi uygulayacaklarını belirler.
   Her bir strateji, aynı metot ismini kullanarak kendi özgü davranışını tanımlar. Böylece, farklı stratejiler aynı soyut yapıyı paylaşır. */

// Strateji Arayüzü
class StrategyInterface {
  execute(a, b) {
    throw new Error("This method should be overridden!"); // Alt sınıflar bu metodu kendilerine özgü bir şekilde uygulamalıdır.
  }
}

// Toplama Stratejisi
class ConcreteStrategyAdd extends StrategyInterface {
  execute(a, b) {
    return a + b; // Toplama işlemini gerçekleştirir.
  }
}

// Çıkarma Stratejisi
class ConcreteStrategySubtract extends StrategyInterface {
  execute(a, b) {
    return a - b; // Çıkarma işlemini gerçekleştirir.
  }
}

// Çarpma Stratejisi
class ConcreteStrategyMultiply extends StrategyInterface {
  execute(a, b) {
    return a * b; // Çarpma işlemini gerçekleştirir.
  }
}

// Bağlam Sınıfı
class Context {
  _strategy; // Kullanılacak stratejiyi tutar.

  constructor(strategy) {
    this._strategy = strategy; // Başlangıçta bir strateji atanır.
  }

  setStrategy(strategy) {
    this._strategy = strategy; // Stratejiyi değiştirmek için kullanılır.
  }

  executeStrategy(a, b) {
    return this._strategy.execute(a, b); // Belirtilen strateji ile işlemi gerçekleştirir.
  }
}

// Örnek Uygulama
class ExampleApplication {
  constructor() {
    this.context = new Context(new ConcreteStrategyAdd()); // Varsayılan strateji olarak toplama belirlenir.
  }

  executeStrategy(a, b, strategy) {
    this.context.setStrategy(strategy); // Geçerli strateji ayarlanır.
    return this.context.executeStrategy(a, b); // Strateji kullanılarak işlem yapılır.
  }

  print(a, b, strategy) {
    console.log(this.executeStrategy(a, b, strategy)); // Sonuç konsola yazdırılır.
  }
}

// Uygulamayı başlatma
const main = new ExampleApplication();
main.print(1, 2, new ConcreteStrategyAdd()); // Toplama sonucu: 3
main.print(5, 3, new ConcreteStrategySubtract()); // Çıkarma sonucu: 2
main.print(4, 6, new ConcreteStrategyMultiply()); // Çarpma sonucu: 24

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

/* Bu tasarim deseninde classlari fazla buyutmeden bir tane interface olusturuyoruz ve  bu interfaceyi kullanarak ayni isme sahip farkli stratejileri herbirine farkli isim vermeden ya da cok fazla logical ifadeler kullanmadan olusturuyoruz ve hangisini istersek o an onu seciyoruz ve kullaniyoruz.  */

/* Strategy Pattern Analoji */

/* Diyelimki bir tane navigasyon uygulamasi yapiyorsunuz ve bu uygulama ilk basta sadece bir tane ozellik ekliyorsunuz ve bu ozellik yuruken a noktasindan b noktasina giderken yuruken kullanabileceginiz en kisa yolu gosteriyor fakat diyelimki yeni bir ozellik eklediniz ve bu sefer araba ile gidilebilecek en kisa yol icin sonra bisiklet icin eklediniz bu durumda classimiz asiri buyuyor ve tekrar eden kodlar kullaniyoruz bunun icin strateji tasarimi kullanilabilir bir tane interface olusturup strateji classlari olusturyoruz ve bir baglamda ya da contextte bunlari degistirerek farkli sonuclar elde ediyoruz */

/* Strateji deseni, yazılımda esneklik sağlamak ve kodun bakımını kolaylaştırmak için mükemmel bir çözümdür. 
   Farklı stratejilerin aynı isimle tanımlanması, geliştiricilerin kodu daha kolay anlamasına ve genişletmesine yardımcı olur.
   Navigasyon uygulaması gibi bir senaryoda, farklı ulaşım modları (yürüyüş, araba, bisiklet) için ayrı stratejiler oluşturabiliriz. 
   Böylece, her bir mod için en kısa yolu bulmak üzere strateji sınıflarını değiştirebiliriz.

   Bu yaklaşım, kodun büyümesini önler ve her bir stratejinin kendi içinde bağımsız çalışmasını sağlar. 
   Yeni bir ulaşım modu eklemek istediğimizde, mevcut sınıfları değiştirmek yerine yalnızca yeni bir strateji sınıfı ekleyebiliriz. 
   Sonuç olarak, kodumuz daha okunabilir, sürdürülebilir ve genişletilebilir hale gelir. */
