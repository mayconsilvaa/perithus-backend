import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string(),
      quantity: Yup.number(),
      date: Yup.date(),
      price: Yup.number(),
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
