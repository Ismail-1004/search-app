import { User } from "../types/User";
import usersData from "../users.json";
import ApiError from "../error/ApiError";

class UserService {
  users: User[] = usersData;

  async searchUser(email: string, number?: string) {
    console.log(this.users);
    
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const result: User[] = this.users.filter(
      (user) =>
        user.email === email &&
        (!number || user.number === number.replace(/-/g, ""))
    );

    if (!result.length) {
      return ApiError.notFound('Пользователь не найден')
    }

    return result
  }
}

export default new UserService();
