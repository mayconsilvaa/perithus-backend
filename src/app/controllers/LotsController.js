class LotsController {
  async index(req, res) {
    return res.status(200).json({
      message: true,
    });
  }
}

export default new LotsController();
