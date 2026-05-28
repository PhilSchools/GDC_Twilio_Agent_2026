// src/routes/twiml/twiml-setup.ts 

import { WELCOME_GREETING } from '@prompts/welcome-greeting.ts';
import * as voices from '@voices';


export function buildSetupTwiml(host: string): string { 

  const twiml_setup = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Connect action="/transfer" method="POST">
    <ConversationRelay
        url="wss://${host}/ws"
        welcomeGreeting="${WELCOME_GREETING}"
        ttsProvider="ElevenLabs"
        voice="${voices.Dexter}${voices.VoiceSettings}"
        language="en-US" />
  </Connect>
</Response>`;

  return twiml_setup
};

