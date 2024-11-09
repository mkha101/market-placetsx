const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req: Request, res: Response) => {
  const { item } = req.body as unknown as { item: any }; // Replace `any` with the actual type if you know it
};
