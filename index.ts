// Secure payment callback starter.
// Connect only an official MonCash/NatCash merchant integration and verify signed callbacks.
// Never credit a wallet from a browser request or an unverified screenshot/reference.
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
serve(async (_req) => new Response(JSON.stringify({
  error: "Payment provider verification is not configured. Wallet deposits require admin review."
}), { status: 501, headers: { "Content-Type": "application/json" } }));
