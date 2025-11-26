interface User {
  id: number;
  name: string;
}

const users: User[] = [];

// module como singleton
// Não precisa instanciar, o módulo é um singleton por natureza
export const SingleTonModule = {
  addUser(user: User) {
    users.push(user);
  },
  getUsers(): User[] {
    return users;
  },
  showUsers() {
    console.log("Usuários cadastrados:", users);
  },
};