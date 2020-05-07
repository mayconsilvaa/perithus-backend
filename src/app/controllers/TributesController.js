import Product from '../models/Product';
import Tributes from '../models/Tributes';

class TributesController {
  async index(req, res) {
    const { year_reference, month } = req.body;

    console.log(year_reference, month);

    try {
      const searchTributes = await Tributes.find({
        year_reference,
        month,
        // $and: [{ year_reference }, { month }],
      });

      if (searchTributes.length === 0) {
        return res.status(400).json({
          message:
            'Não conseguimos localizar nenhum imposto com os parâmetros informados.',
        });
      }

      return res.status(200).json({
        message: 'Impostos localizados com sucesso.',
        searchTributes,
      });
    } catch (e) {
      return res.status(404).json({
        message: 'Ops! Ocorreu algum erro...',
      });
    }
  }

  async show(req, res) {
    const { tributeId } = req.params;

    const tribute = await Tributes.findById(tributeId);

    try {
      if (!tribute) {
        return res.status(400).json({
          message: 'O id informado não foi localizado',
        });
      }

      const response = await Tributes.findOne({
        _id: tribute._id,
      });

      return res.status(200).json({
        message: 'Imposto localizado com sucesso.',
        response,
      });
    } catch (e) {
      return res.status(404).json({
        message: 'Ops! Não foi possível localizar o registro de ID informado.',
      });
    }
  }

  async store(req, res) {
    const { year_reference, month } = req.body;

    try {
      const searchProducts = await Product.find({
        $expr: {
          $and: [
            { $eq: [{ $year: '$date' }, parseInt(year_reference)] },
            { $eq: [{ $month: '$date' }, parseInt(month)] },
          ],
        },
      });

      const resu = [];
      searchProducts.map((products) => {
        return resu.push(products.price);
      });

      const sumValues = (accumulator, currentValue) =>
        accumulator + currentValue;
      const valueFinal = resu.reduce(sumValues);

      const porcentagemFinal = (valueFinal * 6) / 100;

      const response = await Tributes.create({
        year_reference,
        month,
        rate: porcentagemFinal,
      });

      return res.status(200).json({
        message: 'Cálculo realizado e salvo com sucesso!',
        response,
      });
    } catch (e) {
      return res.status(404).json({
        message: 'Ops! Algo ocorreu por aqui...',
      });
    }
  }

  async update(req, res) {
    const { tributeId } = req.params;
    const { payment } = req.body;

    const tribute = await Tributes.findById(tributeId);

    try {
      if (!tribute) {
        return res.status(400).json({
          message: 'O id informado não foi localizado',
        });
      }

      const response = await Tributes.updateOne(
        {
          _id: tribute._id,
        },
        {
          payment,
        }
      );

      return res.status(200).json({
        message: 'Imposto pago com sucesso!',
        response,
      });
    } catch (e) {
      return res.status(404).json({
        message: 'Ops! Não foi possível atualizar o imposto desejado.',
      });
    }
  }
}

export default new TributesController();
