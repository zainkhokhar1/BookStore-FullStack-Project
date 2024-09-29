
import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const secret = 'this*ismySecret$O@K'

export const signUp = async (req, res) => {

    try {
        let { name, email, password, age, gender } = req.body;
        let userFinded = await User.findOne({ email });
        if (!userFinded) {
            const salt = await bcrypt.genSalt(10);
            let smartPassword = await bcrypt.hash(password, salt);
            const userCreator = new User(
                {
                    name,
                    age,
                    gender,
                    email,
                    password: smartPassword,
                }
            );
            await userCreator.save();
            let AuthToken = jwt.sign({ userFinded }, secret);
            console.log(AuthToken)
            return res.status(200).json({ success: 'User Created Successfully', AuthToken, id: userCreator._id });
        }

        res.status(400).json({ error: "User Already Exists" });
    }

    catch (e) {
        console.log(e.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const login = async (req, res) => {

    try {

        let { email, password } = req.body;
        console.log(email);
        console.log(password);
        let searchUser = await User.findOne({ email });
        if (searchUser) {
            let hashPass = searchUser.password;
            let confirmUser = await bcrypt.compare(password, hashPass);
            console.log(confirmUser);
            if (confirmUser) {
                let AuthToken = jwt.sign({ confirmUser }, secret);
                console.log(AuthToken)
                return res.status(200).json({
                    success: 'Welcome to Bookestore',
                    AuthToken,
                    id: searchUser._id
                });
            }
            else {
                return res.status(400).json({ error: 'Incorrect Password' });
            }
        }
        res.status(500).json({ error: 'User does not Exists' })
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const showUser = async (req, res) => {
    try {
        console.log(req.params);
        let { id } = req.params;
        let userCredentials = await User.find({ '_id': id });
        console.log(userCredentials)
        if (userCredentials) {
            return res.status(200).json({ success: 'User Founded', userCredentials })
        }
        else {
            res.status(404).json({ error: 'No user Founded' })
        }
    }
    catch (e) {
        res.status(401).json({ error: e.message })
    }

}