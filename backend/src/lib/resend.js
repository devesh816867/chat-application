// ...existing code...
import { ENV } from "./env.js";

// dynamically import the resend package and handle different export shapes
const ResendModule = await import("resend");
const Resend = ResendModule?.Resend ?? ResendModule?.default ?? ResendModule;

const apiKey = ENV.RESEND_API_KEY || process.env.RESEND_API_KEY;
if (!apiKey) {
  throw new Error(
    "Missing RESEND_API_KEY. Set RESEND_API_KEY in backend/.env or as an environment variable."
  );
}

export const resendClient = new Resend(apiKey);

export const sender = {
  email: ENV.EMAIL_FROM || process.env.EMAIL_FROM,
  name: ENV.EMAIL_FROM_NAME || process.env.EMAIL_FROM_NAME,
};
// ...existing code...