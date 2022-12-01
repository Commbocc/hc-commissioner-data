import { defineNuxtModule } from '@nuxt/kit'
import { gql } from 'graphql-tag'
import { client } from './graphql'
import { writeFile } from 'node:fs'

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
                headshotConnection {
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
`

export default defineNuxtModule({
  hooks: {
    ready: async (_nuxt) => {
      const { all_commissioner } = await client({
        query,
      })

      writeFile(
        'public/commissioners.json',
        JSON.stringify(all_commissioner?.items?.sort(sortByDistrict) || []),
        (err) => {
          if (err) throw err
          console.log('Commissioner data saved!')
        }
      )
    },
  },
})

//
function sortByDistrict(a: any, b: any) {
  return a.district - b.district
}
