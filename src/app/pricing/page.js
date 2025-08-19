// File: src/app/pricing/page.js

export default function PricingPage() {
  return (
    <div style={{ display: 'grid', placeContent: 'center', height: '100vh', background: '#111', color: 'white', textAlign: 'center' }}>
      <div>
        <h1>Pro Plan</h1>
        <p>$10.00</p>
        <form action="/api/create-checkout-session" method="POST">
          <button 
            type="submit" 
            role="link"
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Checkout with Stripe
          </button>
        </form>
      </div>
    </div>
  );
}