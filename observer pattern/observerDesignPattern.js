class EventManager {
  _listeners = [];

  subscribe(eventType, listener) {
    this._listeners.push({ eventType, listener });
  }

  unsubscribe(eventType, listener) {
    this._listeners = this._listeners.filter(
      (item) => item.eventType !== eventType || item.listener !== listener
    );
  }

  notify(eventType, data) {
    for (const { eventType: type, listener } of this._listeners) {
      if (type === eventType) {
        listener(data);
      }
    }
  }
}

class Editor {
  _events;
  _file;

  constructor() {
    this._events = new EventManager(); // Hatalı değişken tanımını düzelttik
  }

  openFile(path) {
    this._file = path;
    this._events.notify("open", this._file);
  }

  saveFile() {
    this._events.notify("save", this._file);
  }

  get events() {
    return this._events;
  }
}

class EventListener {
  update(filename) {}
}

class LoggingListener extends EventListener {
  _log;
  _message;

  constructor(log_filename, message) {
    super(); // Üst sınıfın constructor'ını çağırıyoruz
    this._log = log_filename;
    this._message = message;
  }

  update(filename) {
    console.log(`${this._message}: ${filename}`);
  }
}

class Application {
  constructor() {
    this.editor = new Editor(); // Editörü başlat
    this.loggingListener = new LoggingListener(
      "log.txt",
      "File event occurred"
    ); // LoggingListener oluştur
    this.config(); // Uygulamayı yapılandır
  }

  config() {
    // Olay dinleyicisini editöre abone et
    this.editor.events.subscribe(
      "open",
      this.loggingListener.update.bind(this.loggingListener)
    );
    this.editor.events.subscribe(
      "save",
      this.loggingListener.update.bind(this.loggingListener)
    );
  }

  run() {
    // Uygulamanın ana çalışma döngüsü
    this.editor.openFile("example.txt"); // Örnek dosyayı aç
    this.editor.saveFile(); // Dosyayı kaydet
  }
}

// Uygulamayı başlat
const app = new Application();
app.run();

/* 
İş mantığınızı gözden geçirin ve bunu iki bölüme ayırmaya çalışın: Diğer kodlardan bağımsız olan çekirdek işlevsellik yayıncı (publisher) olarak hareket edecek; geri kalan kısım ise abone (subscriber) sınıfları haline gelecek.

Abone arayüzünü tanımlayın. Minimumda, tek bir update metodunu içermelidir.

Yayıncı arayüzünü tanımlayın ve bir abone nesnesini listeye ekleme ve listeden çıkarma işlemlerini gerçekleştirecek iki yöntem tanımlayın. Yayıncıların yalnızca abone arayüzü aracılığıyla abonelerle çalışması gerektiğini unutmayın.

Gerçek abonelik listesini nereye koyacağınıza ve abonelik yöntemlerinin uygulanmasına karar verin. Genellikle bu kod tüm yayıncılar için aynı görüneceğinden, bu kodu yayıncı arayüzünden türetilen soyut bir sınıfa yerleştirmek bariz bir çözümdür. Somut yayıncılar (concrete publishers) bu sınıfı genişleterek abonelik davranışını devralırlar.

Ancak, deseni mevcut bir sınıf hiyerarşisine uyguluyorsanız, kompozisyon temelli bir yaklaşımı değerlendirin: Abonelik mantığını ayrı bir nesneye yerleştirin ve tüm gerçek yayıncılar bu nesneyi kullansın.

Somut yayıncı sınıflarını oluşturun. Yayıncı içinde önemli bir şey olduğunda, tüm abonelerini bilgilendirmesi gerekir.

Somut abone sınıflarında güncelleme bildirim yöntemlerini uygulayın. Çoğu abone, olay hakkında bazı bağlamsal verilere ihtiyaç duyar. Bu veri, bildirim yönteminin bir argümanı olarak geçebilir.

Ancak başka bir seçenek daha vardır: Bildirimi aldıktan sonra, abone gerekli verileri doğrudan bildirimden alabilir. Bu durumda, yayıncı kendisini update metodu aracılığıyla iletmelidir. Daha az esnek olan seçenek, bir yayıncıyı aboneye kalıcı olarak yapıcı (constructor) aracılığıyla bağlamaktır.

İstemci (client), gerekli tüm aboneleri oluşturmalı ve bunları uygun yayıncılara kaydetmelidir.
*/
