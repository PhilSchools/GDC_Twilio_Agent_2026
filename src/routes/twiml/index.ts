// src/routes/twiml/index.ts 

import { Elysia, t } from 'elysia';
import { buildSetupTwiml } from './twiml-setup.ts';
import { twiml_transfer } from './twiml-transfer.ts';

const intelligenceServiceSid = Bun.env.TWILIO_INTELLIGENCE_SERVICE_SID || "";

export const twimlRoute = new Elysia()
  .all('/twiml', (context) => {
    context.set.headers['Content-Type'] = 'text/xml'
    return buildSetupTwiml(context.headers.host)
  },
  {
    headers: t.Object({
      host: t.String()
    })
  }
)

  .all('/transfer', (context) => {
    context.set.headers['Content-Type'] = 'text/xml'
    return twiml_transfer
})
