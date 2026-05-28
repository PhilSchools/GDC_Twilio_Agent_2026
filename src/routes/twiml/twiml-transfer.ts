// src/routes/twiml/twiml-transfer.ts 

const transfer_to = Bun.env.TRANSFER_TO_NUMBER;

export const twiml_transfer = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Dial>
    <Number>${transfer_to}</Number>
  </Dial>
</Response>`;
