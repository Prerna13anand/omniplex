// File: src/app/api/create-checkout-session/route.js

import { NextResponse } from "next/server";
// Make sure to run `npm install stripe` in your terminal if you haven't
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const origin = req.headers.get('origin');

  try {
    // Create the Checkout Session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // IMPORTANT: Replace this with the Price ID you copied
          price: 'price_1Rxn1XHoPdTzMRMXyAaTR2ow', 
          quantity: 1,
        },
      ],
      mode: 'payment',
      // These are the URLs Stripe will redirect to
      success_url: `${origin}/success`,
      cancel_url: `${origin}/`,
    });
    // Instead of res.redirect, we return a NextResponse
    return NextResponse.redirect(session.url, { status: 303 });
  } catch (err) {
    return NextResponse.json(err.message, { status: 500 });
  }
}