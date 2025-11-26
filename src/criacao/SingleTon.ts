class Singleton {
  private static instance: Singleton;

  private constructor() {
    // Construtor privado para evitar instanciação externa
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

// Uso do Singleton
export function exemploUsoSingleton() {
  console.log("Obtendo a primeira instância do Singleton...");
  const singleton1 = Singleton.getInstance();
  console.log("Obtendo a segunda instância do Singleton...");
  const singleton2 = Singleton.getInstance();

  console.log(`Instancia1 é igual instancia2? ${singleton1 == singleton2}`);
}

