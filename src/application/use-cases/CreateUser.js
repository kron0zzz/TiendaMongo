export default class CreateUser {
    constructor(userRepository, passwordEncrypter) {
      this.userRepository = userRepository;
      this.passwordEncrypter = passwordEncrypter;
    }
  
    async execute(userData) {
      const { name, email, password } = userData;
      // encriptar la contraseña antes de guardar
      const hashedPassword = await this.passwordEncrypter.hashPassword(password);

      const userToSave = {
      name,
      email,
      password: hashedPassword,
    };

      return await this.userRepository.create(userToSave);
    }
}  