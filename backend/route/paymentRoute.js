import Stripe from 'stripe';
import express from 'express';


const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.get('/', (req, res) => {
  res.send("hellow stripe")
});


router.post('/', async (req, res) => {
  console.log("Payment request received:", req.body);
  try {
    const { amount, currency } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: currency || 'usd',
      automatic_payment_methods: { enabled: true },
    });
    // const { error, paymentIntent } = await stripe.paymentIntents.confirm(paymentIntent.id);
    // console.log("PaymentIntent created:", paymentIntent);
    // console.log("PaymentIntent confirmed:", cnfm);
    res.status(200).send({ clientSecret: paymentIntent.client_secret, data : paymentIntent.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



export default router;