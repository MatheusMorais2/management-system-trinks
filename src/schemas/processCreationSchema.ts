import Joi from "joi";

const processCreationSchema = Joi.object({
  number: Joi.string().required(),
  value: Joi.number().required(),
  state: Joi.string().required(),
  date: Joi.string().required(),
  isActive: Joi.boolean().required(),
  clientCNPJ: Joi.number().required(),
});

export default processCreationSchema;
