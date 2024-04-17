import User from '../Models/UserModel.js';

const getUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener usuarios"});
  }
};

const RegisterUsers = async(req, res) => {
  try {
    const Register = await User.Register(req);
    res.json(Register);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al registrar usuario"});
  }
}

const SearchUsers = async(req, res) => {
  try {
      const Search = await User.SearchUser(req);
      res.json(Search);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al buscar usuario"});
  }
}

const DeleteUser = async(req, res) => {
  try {
    const UserId = await User.DeleteUser(req);
    res.json(UserId);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar usuario"});
  }
}

const UpdateUser = async(req, res) => {
  try {
    const UserId = await User.UpdateUser(req);
    res.json(UserId)
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar el usuario"});
  }
}

export default { getUsers, RegisterUsers, SearchUsers, DeleteUser, UpdateUser};
