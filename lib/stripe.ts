import Stripe from 'stripe';
import dotenv from 'dot-env';

dotenv.config();
const stripeConfig = new Stripe(process.env.STRIPE_SECRET || '', {
  apiVersion: '2020-08-27',
});

export default stripeConfig;
