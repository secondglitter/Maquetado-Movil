import Auth from "../Models/AuthModel.js";

const Login = async(req, res) =>{
    try {
        const Pass = await Auth.Login(req);
        res.json(Pass)
    } catch (error) {
        res.status(500).json({ mensaje: "Ha ocurrido un error al loguearse" });
    }
}

const Verify = async (req, res)=> {
    try {
        const Pass = await Auth.Verify(req);
        res.json(Pass);
    } catch (error) {
        res.status(500).json({ mensaje: "Ha ocurrido un error al devolver los datos del usuario" });
    }
}

export default {Login, Verify}