class User {
    constructor({ id, name, email, rol, createdAt }) {
      if(!name|| name.length < 4)throw new Error("Nombre invalido");
      if(!email || email.length < 4)throw new Error("Nombre invalido");
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.rol = rol;
      this.createdAt = createdAt;
    }
  }
  export default User;
  