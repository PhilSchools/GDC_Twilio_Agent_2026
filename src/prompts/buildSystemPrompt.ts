// prompts/buildSystemPrompt.ts

import { SYSTEM_PROMPT } from "./spot-system-prompt.ts";

export function buildSystemPrompt() {
  const now = new Date();

  const easternDateTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(now);

  return `${SYSTEM_PROMPT}

Current date and time context:
- The current date and time at Glencadia Dog Camp is ${easternDateTime}.
- Glencadia Dog Camp is in the America/New_York time zone.
- Use this only for interpreting relative dates like today, tomorrow, this Monday, next Thursday, or this weekend.
- Do not mention the current date or time unless it is helpful to the caller’s question.
- If exact scheduling, reservation availability, pickup timing, or delivery timing is needed, use the appropriate tool or transfer to a human.`;
}
