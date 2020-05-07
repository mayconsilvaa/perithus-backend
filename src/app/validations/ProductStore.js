import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      quantity: Yup.number().required(),
      date: Yup.date().required(),
      price: Yup.number().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res.status(400).json({
      message: 'Falha na validação',
      error: err.inner,
    });
  }
};
