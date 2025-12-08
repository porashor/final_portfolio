import Stripe from 'stripe';
import express from 'express';


const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.get('/', (req, res) => {
  res.send("hellow stripe")
});


router.post('/', async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
      currency: 'bdt',
      automatic_payment_methods: { enabled: true },
    });
    res.status(200).send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



export default router;