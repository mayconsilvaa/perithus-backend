import Product from '../models/Product';

class ProductsController {
  async index(req, res) {
    const { year, month } = req.params;

    try {
      const searchProducts = await Product.find({
        $expr: {
          $and: [
            { $eq: [{ $year: '$created_at' }, parseInt(year)] },
            { $eq: [{ $month: '$created_at' }, parseInt(month)] },
          ],
        },
      });

      if (searchProducts.length === 0) {
        return res.status(400).json({
          message:
            'Nenhum registro localizado. Por gentileza, verifique o ano e mês informado!',
        });
      }

      return res.status(200).json({
        message: 'Produtos localizados com sucesso!',
        searchProducts,
      });
    } catch (e) {
      return res.status(404).json({
        message: 'Ops! Algo ocorreu por aqui...',
      });
    }
  }

  async show(req, res) {
    const { productId } = req.params;

    try {
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(400).json({
          message: 'O id informado não existe!',
        });
      }

      const { name, quantity, date, price } = product;

      return res.status(200).json({
        message: 'Dados localizados com sucesso',
        name,
        quantity,
        date,
        price,
      });
    } catch (e) {
      return res.status(200).json({
        message: 'O número de id informado é inválido!',
      });
    }
  }

  async store(req, res) {
    const { name, quantity, date, price } = req.body;

    try {
      const response = await Product.create({
        name,
        quantity,
        date,
        price,
      });

      return res.status(200).json({
        message: 'Quantidade de produtos cadastrado com sucesso!',
        response,
      });
    } catch (e) {
      return res.status(404).json({
        message:
          'Ops! Ocorreu um erro ao registrar a quantidade de produto. Verifique!',
      });
    }
  }

  async update(req, res) {
    const { productId } = req.params;
    const { name, quantity, date, price } = req.body;

    try {
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({
          message: 'O id informado não foi localizado!',
        });
      }

      await Product.updateOne(
        {
          _id: product._id,
        },
        {
          name,
          quantity,
          date,
          price,
        }
      );

      return res.status(200).json({
        message: 'Produto atualizado com sucesso!',
      });
    } catch (e) {
      return res.status(200).json({
        message: 'Ops! Não foi possível atualizar o produto. Verifique!',
      });
    }
  }

  async destroy(req, res) {
    const { productId } = req.params;

    try {
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({
          message: 'O id informado não foi localizado',
        });
      }

      const response = await Product.deleteOne({ _id: product._id });

      return res.status(200).json({
        message: 'Produto excluído com sucesso!',
        response,
      });
    } catch (e) {
      return res.status(200).json({
        message: 'Ops! Não foi possível excluir o produto desejado. Verifique!',
      });
    }
  }
}

export default new ProductsController();
