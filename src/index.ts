import { exemploUsoSingleton } from "./criacao/singleton/SingleTon_class";
import { SingleTonModule } from "./criacao/singleton/SingleTon_module";
import { exemploUsoSingleton as exemploSingletonIIFE } from "./criacao/singleton/SingleTon_function";

// Executa o exemplo de uso do Singleton
exemploUsoSingleton();

// usando o módulo singleton para gerenciar usuários
SingleTonModule.addUser({ id: 1, name: "Alice" });
SingleTonModule.addUser({ id: 2, name: "Bob" });
SingleTonModule.showUsers();

// Usando IIFE singleton
exemploSingletonIIFE();
