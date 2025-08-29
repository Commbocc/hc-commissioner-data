import { type ASTNode, print } from "graphql";
import type { Query } from "~~/types/contentstack";
import { gql } from "graphql-tag";

interface IGraphqlRequest {
  query: any;
  variables?: any;
}

const query = gql`
  {
    all_commissioner {
      items {
        url
        district
        countywide
        designations
        party
        title
        contact_form_link {
          href
          title
        }

        contactConnection {
          edges {
            node {
              ... on Contact {
                headshot
                cs_headshotConnection {
                  edges {
                    node {
                      ...SysAssetFragment
                    }
                  }
                }
              }
            }
          }
        }

        # base {
        #   base_imageConnection {
        #     edges {
        #       node {
        #         ...SysAssetFragment
        #       }
        #     }
        #   }
        # }

        system {
          uid
          created_at
          updated_at
        }
      }
    }
  }

  fragment SysAssetFragment on SysAsset {
    url
    title
    description
    file_size
    content_type
    system {
      uid
      created_at
      updated_at
      tags
    }
  }
`;

export default defineEventHandler(async (event) => {
  const { all_commissioner } = await client({
    query,
  });

  return all_commissioner?.items?.sort(sortByDistrict) ?? [];
});

/**
 *
 * @param param0
 * @returns
 */
async function client({ query, variables }: IGraphqlRequest): Promise<Query> {
  const { data } = await $fetch<{ data: Query }>(
    `https://graphql.contentstack.com/stacks/${process.env.CONTENTSTACK_API_KEY}?environment=${process.env.CONTENTSTACK_ENVIRONMENT}`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        access_token: process.env.CONTENTSTACK_DELIVERY_TOKEN || "",
      },

      body: JSON.stringify({
        query: typeof query === "string" ? query : print(query as ASTNode),
        variables,
      }),
    }
  );

  return data;
}

/**
 *
 * @param a
 * @param b
 * @returns
 */
function sortByDistrict(a: any, b: any) {
  return a.district - b.district;
}
