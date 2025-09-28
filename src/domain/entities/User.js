class User {
    constructor({ id, name, email, password, rol, createdAt }) {
      if(!name || name.length <2 ) throw new Error("Nombre inválido");
      if(!email || email.length <8 || !email.includes("@")) throw new Error("Email inválido");
      if(!password || password.length <4) throw new Error("Password inválido");
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.rol = rol;
      this.createdAt = createdAt;
    }
  }
  export default User;
  