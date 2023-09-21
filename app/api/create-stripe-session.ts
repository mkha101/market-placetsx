const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req: Request, res: Response) => {
  const { item } = req.body;
};
