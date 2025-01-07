import Joi from "joi";
import { AppError } from "../errors/AppError.js";

const gcSchema = Joi.object({
  title: Joi.string().required(),
  leaders: Joi.string().required(),
  contact: Joi.string().required(),
  data: Joi.string().required(),
  time: Joi.string().required(),
  isOnline: Joi.boolean().required(),
  isCouple: Joi.boolean().required(),
  addressDetails: Joi.object({
    street: Joi.string().when("isOnline", {
      is: false,
      then: Joi.required(),
      otherwise: Joi.optional().allow(null),
    }),
    number: Joi.string().when("isOnline", {
      is: false,
      then: Joi.required(),
      otherwise: Joi.optional().allow(null),
    }),
    neighborhood: Joi.string().when("isOnline", {
      is: false,
      then: Joi.required(),
      otherwise: Joi.optional().allow(null),
    }),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
  coordinates: Joi.object({
    lat: Joi.number().when("isOnline", {
      is: false,
      then: Joi.required(),
      otherwise: Joi.optional().allow(null),
    }),
    lng: Joi.number().when("isOnline", {
      is: false,
      then: Joi.required(),
      otherwise: Joi.optional().allow(null),
    }),
  }).required(),
});

export const validateGCData = (req, res, next) => {
  const { error } = gcSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    throw new AppError(errors, 400);
  }

  next();
};
