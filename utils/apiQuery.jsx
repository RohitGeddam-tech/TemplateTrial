export const apiQuery = `
...on ComponentComponentBannerComponent{
    banners{
      title,
      image{
        data{
          attributes{
            url,
            alternativeText
          }
        }
      },
      mobile_image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              },
      body,
      desciption_color,
      title_color,
      cta_type,
      cta_icon,
      cta_title,
      cta_action,
      cta_icon_type,
      cta_icon_alignment,
      content_alignment,
      background_color,
      image_alt_text,
      mobile_image{
        data{
          attributes{
            url
          }
        }
      }
    }
  },
  ...on ComponentComponentOurServicesComponent{
    desciption,
    desciption_color,
    title,
    title_color,
    background_color,
    carousel_type,
    cards{
      title,
      subtitle,
      desciption,
      card_type,
      cta_type,
      cta_title,
      cta_action,
      image{
        data{
          attributes{
            url,
            alternativeText
          }
        }
      }
    }
  },
  ...on ComponentComponentTestimonialsComponent{
    desciption,
    desciption_color,
    title,
    title_color,
    background_color,
    cards{
      title,
      subtitle,
      desciption,
      card_type,
      cta_type,
      cta_title,
      cta_action,
      image{
        data{
          attributes{
            url,
            alternativeText
          }
        }
      }
    },
    type_caroursel:carousel_type
  },
  ... on ComponentComponentAboutUsComponent {
    title
    title_color
    desciption
    desciption_color
    image_caption
    background_color
    image {
      data {
        attributes {
          url
        }
      }
    }
    image_alt_text
    component_type
  },
  ... on ComponentComponentCertificatesComponent {
    title
    title_color
    desciption
    desciption_color
    background_color
    images {
      image_alt_text
      image {
        data {
          attributes {
            url
          }
        }
      }
    }
  },
  ... on ComponentComponentOurTeamComponent{
    title
 title_color
 desciption
 desciption_color
 cards{
   name
   desciption
   designation
   image {
     data {
       attributes {
         url
       }
     }
   }
 }
 background_color
},
... on ComponentComponentContactUsComponenet {
  title
  title_color
  desciption
  desciption_color
  background_color
  component_alignment
  contact_details {
    title
    title_color
    type
    icon
    icon_type
    icon_color
    value
  }
}
`;