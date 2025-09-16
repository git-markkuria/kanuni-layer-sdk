## Kanuni Layer SDK

The Kanuni Layer SDK provides a simple, open-source toolkit for developers building AI-enabled applications for people living with disabilities. It helps applications redact disability-identifying information (when users opt in) and transparently enhance prompts so large language models (LLMs) can still produce helpful, context-aware responses without exposing sensitive personal data.

Key goals:
- Protect disability-related personal data from unethical uses
- Preserve usability by enriching prompts with non-identifying context
- Provide an easy-to-integrate HTTP API and client libraries for common stacks

---

## Features

- Opt-in redaction of disability-identifying information
- Prompt enhancement pipeline to preserve context and provide accessibility-aware guidance to the LLM
- Pluggable model integrations (Azure OpenAI by default)
- Audit-friendly response that includes a redaction map and enhancement summary

---

## Quick Start

1. Install the SDK (example for npm / NuGet):
    - npm: `npm install @kanuni/layer-sdk` (example)
    - .NET: `dotnet add package Kanuni.Layer.SDK` (example)

2. Configure environment variables:
    - AZURE_OPENAI_ENDPOINT — your Azure OpenAI endpoint
    - AZURE_OPENAI_KEY — your API key for the model provider
    - KANUNI_API_KEY — optional key for your Kanuni instance
    - KANUNI_MODEL — optional default model name (e.g., gpt-4o)

3. Example request (curl):
    ```
    curl -X POST https://your-kanuni-host/enhance-prompt \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer <KANUNI_API_KEY>" \
      -d '{
         "OptIn": true,
         "Prompt": "I am blind and I often struggle with accessing buildings. How can you help me do this?"
      }'
    ```

---

## API: POST /enhance-prompt

Request body (JSON)
- OptIn (boolean) — whether the user has opted in to have their disability information redacted
- Prompt (string) — the original user prompt
- Language (string, optional) — language code for prompt enhancements
- Metadata (object, optional) — non-identifying metadata to assist enhancement (e.g., device type, input modality)
- RequestId (string, optional) — client-supplied ID for tracing

Example:
```
{
  "OptIn": true,
  "Prompt": "I am blind and I often struggle with accessing buildings. How can you help me do this?"
}
```

Response body (JSON)
- EnhancedPrompt (string) — the augmented prompt that will be or has been sent to the LLM
- RedactedPrompt (string) — the prompt with disability-identifying phrases replaced or removed
- RedactionMap (object) — map of original phrases to redaction tokens (for auditing)
- EnhancementNotes (string[]) — short notes describing the enhancement strategies used
- ModelResponse (object, optional) — passthrough response from the model if proxied by the SDK
- Status (string) — "ok" | "error"
- Errors (array, optional) — validation or processing errors

Example:
```
{
  "EnhancedPrompt": "User is a person with visual impairment. They report difficulty accessing buildings. Please provide accessible navigation advice...",
  "RedactedPrompt": "User is a person with [REDACTED_DISABILITY]. They report difficulty accessing buildings. How can you help me do this?",
  "RedactionMap": { "I am blind": "[REDACTED_DISABILITY]" },
  "EnhancementNotes": ["Added non-identifying accessibility context", "Suggested step-by-step, tactile and audio guidance"],
  "ModelResponse": {
     "text": "...",
     "model": "gpt-4o"
  },
  "Status": "ok"
}
```

---

## Integration examples

Node.js (express middleware example)
```js
const express = require('express');
const { KanuniClient } = require('@kanuni/layer-sdk');

const app = express();
app.use(express.json());

const kanuni = new KanuniClient({ apiKey: process.env.KANUNI_API_KEY });

app.post('/ask', async (req, res) => {
  const { optIn, prompt } = req.body;
  const result = await kanuni.enhancePrompt({
     OptIn: optIn,
     Prompt: prompt,
  });
  // Optionally forward result.EnhancedPrompt to your LLM of choice
  res.json(result);
});

app.listen(3000);
```

C# (ASP.NET Core minimal example)
```csharp
app.MapPost("/ask", async (AskRequest request, KanuniClient kanuni) =>
{
     var result = await kanuni.EnhancePromptAsync(new EnhanceRequest {
          OptIn = request.OptIn,
          Prompt = request.Prompt
     });
     return Results.Ok(result);
});
```

---

## Configuration

Common environment variables
- KANUNI_API_KEY — API key for access control (optional but recommended)
- AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_KEY — credentials for model calls
- KANUNI_DEFAULT_MODEL — default model used when relaying to the LLM
- LOG_LEVEL — logging verbosity

Runtime knobs
- RedactionSensitivity — controls aggressiveness of redaction (low/medium/high)
- EnableModelProxy — when true, Kanuni sends the EnhancedPrompt directly to configured model provider and returns ModelResponse

---

## Security & Privacy

- Kanuni is opt-in by design. Applications must surface and obtain explicit user consent before redacting or processing disability-identifying information.
- Minimize logging of raw prompts. When logs are necessary, prefer storing only RedactionMap + hashes, not full original prompt content.
- Follow your organization’s data retention and access controls. The SDK provides hooks for auditing and secure storage.
- The SDK does not guarantee legal compliance in all jurisdictions — consult legal and privacy teams.

---

## Testing & Local Development

- Unit tests: run with your language runtime test runner (example: `npm test` or `dotnet test`).
- Local server: run using provided sample server configuration, set environment variables to point to a test model or mock service.
- Mocks: the SDK contains interfaces to mock the model provider for CI tests.

---

## Contributing

Contributions are welcome. Please follow these steps:
1. Fork the repository.
2. Create a feature branch: git checkout -b feat/my-feature
3. Run and add tests for your changes.
4. Open a pull request with a clear description and any required migration notes.

Code style:
- Keep public API stable and documented.
- Add unit tests for behavior changes.
- Use semantic versioning for releases.

---

## Changelog & Releases

- Follow semantic versioning (MAJOR.MINOR.PATCH).
- Document breaking changes in a CHANGELOG.md.

---

## Limitations & Responsibilities

- Kanuni provides technical assistance for redaction and prompt enhancement. It is the integrator’s responsibility to ensure their implementation fulfills accessibility, legal, and ethical requirements for their users.
- Models may still infer sensitive attributes in edge cases; continuous evaluation and tuning are required.

---

## License

This project is open source. Include an OSI-approved license (for example: MIT). Add LICENSE file to the repository.

---

## Contact & Support

- Report issues via the repository issue tracker.
- For security-sensitive disclosures, use a private channel as documented in SECURITY.md.

---

Acknowledgements: This SDK was designed to balance privacy protection and usability for people living with disabilities. Contributions that improve safety, accessibility, and privacy are encouraged.