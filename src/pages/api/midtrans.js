import { createSnapTransaction } from "../../utils/midtrans";

export async function POST({ request, locals }) {
  try {
    const body = await request.json();

    const payload = {
      transaction_details: {
        order_id: "ORDER-" + Date.now(),
        gross_amount: body.amount,
      },
      customer_details: {
        first_name: body.name,
        email: body.email,
      }
    };

    const snap = await createSnapTransaction(locals.runtime.env, payload);

    return new Response(JSON.stringify(snap), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: true }), { status: 500 });
  }
}
