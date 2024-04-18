const generateId = (arr) => {
  id = arr.length + 1
  return id.toString().padStart(5, '0')
}

class UserProfileManager {
  users = [];
  addUser(info, status = "act") {
    const id = generateId(this.users);
    const user = { id, status };
    Object.entries(info).forEach(([key, value]) => {
        user[key] = value;
      })
    this.users.push(user);
  }
  removeUser(userId) {
    this.users = this.users.filter((user) => user.id !== userId);
  }
  updateUser(userId, newInfo) {
    const index = this.users.findIndex((user) => user.id === userId);
    if (index > -1) {
      const info = Object.entries(newInfo);
      info.forEach(([key, value]) => {
        this.users[index][key] = value;
      });
    }
  }
  findUserByName(name) {
    return this.users.find(
      (user) => user.name.startsWith(name) && user.status === "act"
    );
  }
  getAllUsers() {
    const filtered = this.users.filter((user) => user.status === "act");
    console.log(filtered);
  }
}


const profileManager = new UserProfileManager();

profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" });

console.log(profileManager.getAllUsers()); // Выводит информацию о Alice и Bob

profileManager.updateUser('00001', { name: "Alicia" }); // Обновляет имя Alice на Alicia
profileManager.removeUser('00002'); // Удаляет Bob

console.log(profileManager.findUserByName("Ali")); // Находит Alicia
