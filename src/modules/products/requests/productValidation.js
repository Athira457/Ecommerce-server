import Joi from "joi";

const ProductValidation = {
  register: Joi.object({
    pid: Joi.string().required(),
    name: Joi.string().required(),
    rate: Joi.string().required(),
    quantity: Joi.string().required(),
  }),
};

export default ProductValidation;