import Auth from "../Models/AuthModel.js";

const Login = async(req, res) =>{
    try {
        const Pass = await Auth.Login(req);
        res.json(Pass)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default {Login}