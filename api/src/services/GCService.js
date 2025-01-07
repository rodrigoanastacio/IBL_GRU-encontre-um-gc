import { GCRepository } from "../repositories/GCRepository.js";
import { AppError } from "../errors/AppError.js";

export class GCService {
  constructor() {
    this.gcRepository = new GCRepository();
  }

  async list() {
    return this.gcRepository.findAll();
  }

  async findById(id) {
    const gc = await this.gcRepository.findById(id);
    if (!gc) {
      throw new AppError("GC not found", 404);
    }
    return gc;
  }

  async create(data) {
    return this.gcRepository.create(data);
  }

  async update(id, data) {
    const exists = await this.gcRepository.findById(id);
    if (!exists) {
      throw new AppError("GC not found", 404);
    }
    return this.gcRepository.update(id, data);
  }

  async delete(id) {
    const exists = await this.gcRepository.findById(id);
    if (!exists) {
      throw new AppError("GC not found", 404);
    }
    await this.gcRepository.delete(id);
  }
}
