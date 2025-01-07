import { GCService } from "../services/GCService.js";

export class GCController {
  constructor() {
    this.gcService = new GCService();
  }

  list = async (req, res) => {
    const gcs = await this.gcService.list();
    return res.json(gcs);
  };

  findById = async (req, res) => {
    const { id } = req.params;
    const gc = await this.gcService.findById(id);
    return res.json(gc);
  };

  create = async (req, res) => {
    const gc = await this.gcService.create(req.body);
    return res.status(201).json(gc);
  };

  update = async (req, res) => {
    const { id } = req.params;
    const gc = await this.gcService.update(id, req.body);
    return res.json(gc);
  };

  delete = async (req, res) => {
    const { id } = req.params;
    await this.gcService.delete(id);
    return res.status(204).send();
  };
}
