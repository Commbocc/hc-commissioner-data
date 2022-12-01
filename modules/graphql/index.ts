import { defineNuxtModule } from '@nuxt/kit'
import { ASTNode, print } from 'graphql'
import { Query } from '~~/types/contentstack'
import { $fetch } from 'ohmyfetch'

export default defineNuxtModule({
  //
})

interface IGraphqlRequest {
  query: any
  variables?: any
}

/**
 *
 * @param param0
 * @returns
 */
export async function client({ query, variables }: IGraphqlRequest) {
  const { data }: { data: Query } = await $fetch(
    `https://graphql.contentstack.com/stacks/${process.env.CONTENTSTACK_API_KEY}?environment=${process.env.CONTENTSTACK_ENVIRONMENT}`,
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        access_token: process.env.CONTENTSTACK_DELIVERY_TOKEN || '',
      },

      body: JSON.stringify({
        query: typeof query === 'string' ? query : print(query as ASTNode),
        variables,
      }),
    }
  )

  return data
}
