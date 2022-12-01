module.exports = {
  schema: {
    [`https://graphql.contentstack.com/stacks/${process.env.CONTENTSTACK_API_KEY}?environment=${process.env.CONTENTSTACK_ENVIRONMENT}`]:
      {
        headers: {
          access_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
        },
      },
  },
  generates: {
    './types/contentstack.d.ts': {
      plugins: ['typescript'],
      config: {
        // noExport: true,
      },
    },
  },
}
