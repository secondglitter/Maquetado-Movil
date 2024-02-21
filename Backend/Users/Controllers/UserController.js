import User from '../Models/UserModel.js';

const getUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const RegisterUsers = async(req, res) => {
  try {
    const Register = await User.Register(req);
    res.json(Register);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}

const SearchUsers = async(req, res) => {
  try {
      const Search = await User.SearchUser(req);
      res.json(Search);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}

const DeleteUser = async(req, res) => {
  try {
    const UserId = await User.DeleteUser(req);
    res.json(UserId);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}

const UpdateUser = async(req, res) => {
  try {
    const UserId = await User.UpdateUser(req);
    res.json(UserId)
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
}

export default { getUsers, RegisterUsers, SearchUsers, DeleteUser, UpdateUser};
