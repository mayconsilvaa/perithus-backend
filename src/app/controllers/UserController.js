import User from '../models/User';

class UserController {
  async index(req, res) {
    const response = await User.find();

    return res.status(200).json({
      message: 'Todos os usuários localizados.',
      response,
    });
  }

  async store(req, res) {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({
        message: 'Usuário já cadastrado!',
      });
    }

    // create user
    const { id, name, email } = await User.create(req.body);

    return res.status(200).json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    const { userId } = req.params;
    const { name, email, oldPassword, password, confirmPassword } = req.body;
    const user = await User.findById(userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ email: req.body.email });

      if (userExists) {
        return res.status(400).json({
          message: 'Usuário já cadastrado!',
        });
      }
    }

    if (oldPassword && !(await user.validatePassword(oldPassword))) {
      return res.status(401).json({
        message: 'Senha incorreta!',
      });
    }

    const response = await User.updateOne(
      { _id: userId },
      {
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      }
    );
    return res.status(200).json({
      response,
    });
  }

  async show(req, res) {
    const { userId } = req.params;

    try {
      const response = await User.findById(userId);

      if (!response) {
        return res.status(400).json({
          message: 'O id informado não foi localizado.',
        });
      }
      const { name, email, active } = response;

      return res.status(200).json({
        message: 'Usuário localizado',
        name,
        email,
        active,
      });
    } catch (err) {
      return res.status(200).json({
        message: 'O número de id informado é inválido.',
      });
    }
  }

  async destroy(req, res) {
    // const { userId } = req.params;
    // const { type, active, action } = req.body;

    return res.status(200).json({
      message: true,
    });
  }
}

export default new UserController();
