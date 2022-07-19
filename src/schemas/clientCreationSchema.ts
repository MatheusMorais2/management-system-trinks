import Joi from "joi";

const clientCreationSchema = Joi.object({
  name: Joi.string().required(),
  cnpj: Joi.string().length(14).pattern(/^\d+$/),
  state: Joi.string().required()
});

export default clientCreationSchema;
