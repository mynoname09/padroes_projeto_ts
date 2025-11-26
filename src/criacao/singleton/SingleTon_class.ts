class Singleton {
  private static _instance: Singleton;

  private constructor() {
    // Construtor privado para evitar instanciação externa
  }

  public static get instance(): Singleton {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }
}

// Uso do Singleton
export function exemploUsoSingleton() {
  console.log('Obtendo a primeira instância do Singleton...');
  const singleton1 = Singleton.instance;
  console.log('Obtendo a segunda instância do Singleton...');
  const singleton2 = Singleton.instance;

  console.log(`Instancia1 é igual instancia2? ${singleton1 == singleton2}`);
}
