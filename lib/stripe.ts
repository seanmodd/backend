import Stripe from 'stripe';
import dotenv from 'dot-env';

const stripeConfig = new Stripe(process.env.STRIPE_SECRET || '', {
  apiVersion: '2020-08-27',
});

export default stripeConfig;
