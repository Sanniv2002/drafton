This is a GEN-AI based Proposal generating fullstack web app. Based on gpt-3.5-turbo LLM model.

## Getting Started

Steps to start the project locally:

1. Get a local mongodb database, OPENAI API KEY.
2. Put these in the .env file.
3. Run these commands
```bash
npm i
npx prisma generate
npm run dev
```
The api/v1/generate backend endpoint was needed to be shifted to Render due to Vercel's gateway timeout limit on free tier, so the app/api/generate file in this production is redundant.
