// Singleton como imediatly-invoked function expression (IIFE)
interface User {
  id: number;
  name: string;
}

const SingleTonFunction = (function () {
  let instance: SingleTonFunctionType;
  const users: User[] = [];

  function init() {
    return {
      addUser(user: User) {
        users.push(user);
      },
      getUsers(): User[] {
        return users;
      },
      showUsers() {
        console.log('Usuários cadastrados:', users);
      },
    };
  }

  return {
    getInstance(): SingleTonFunctionType {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

type SingleTonFunctionType = {
  addUser(user: User): void;
  getUsers(): User[];
  showUsers(): void;
};

// Uso do Singleton Function
export function exemploUsoSingleton() {
  console.log('Usando IIFE para singleton');
  console.log('Obtendo a primeira instância do Singleton Function...');
  const singleton1 = SingleTonFunction.getInstance();
  console.log('Obtendo a segunda instância do Singleton Function...');
  const singleton2 = SingleTonFunction.getInstance();

  singleton1.addUser({ id: 1, name: 'Alice' });
  singleton2.addUser({ id: 2, name: 'Bob' });

  singleton1.showUsers();

  console.log(`Instancia1 é igual instancia2? ${singleton1 === singleton2}`);
}
