import { exemploUsoSingleton, SingleTonModule } from "./criacao/SingleTon";

// Executa o exemplo de uso do Singleton
exemploUsoSingleton();

// usando o módulo singleton para gerenciar usuários
SingleTonModule.addUser({ id: 1, name: "Alice" });
SingleTonModule.addUser({ id: 2, name: "Bob" });
SingleTonModule.showUsers();

