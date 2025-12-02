export async function createSnapTransaction(env, payload) {
  const serverKey = env.MIDTRANS_SERVER_KEY;
  const auth = btoa(serverKey + ":");

  const res = await fetch("https://app.sandbox.midtrans.com/snap/v1/transactions", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  return await res.json();
}
