export const apiQuery = `
...on ComponentComponentBannerComponent{
    banners{
      title,
      title_font_size
      title_font_type
      title_font_weight
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
      image_opacity,
      cta_type,
      cta_icon,
      cta_title,
      cta_action,
      cta_icon_type,
      cta_icon_alignment,
      content_alignment,
      background_color,
      image_alt_text,
      content_position,
      content_box_opacity,
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
    serviceAlignment:text_allignment,
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
    testAlignment:text_allignment,
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
    certi_carousel:carousel_type
    title
    title_color
    desciption
    desciption_color
    background_color
    galleryAlignment: text_allignment
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
 teamAlignment:text_allignment
 view:content_alignment,
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
...on ComponentComponentFeatureComponent{
  title
  title_font_size
  title_font_type
  title_font_weight
  description_font_size
  description_font_type
  description_font_weight
  title_color
  featureAlignment:text_allignment
  description
  description_color
  background_color
  content_alignment
  cards{
    description
    title
    sub_title
    image{
      data{
        attributes{
          url
        }
      }
    }
  }
},
... on ComponentComponentContactUsComponenet {
  title
  title_color
  font_size_title:title_font_size
  font_type_type:title_font_type
  font_weight_title:title_font_weight
  desciption
  desciption_color
  font_size_desc:description_font_size 
  font_type_desc:description_font_type
  font_weight_desx:description_font_weight
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
},
...on ComponentComponentPrivacyPolicy{
  Title
  Description
  description_color
  title_color
  background_color
  DescriptionTitle{
    Title
    Description
  }
}
`;

export const seo = `seo{
  title
  meta{
    content
    type
    type_value
  }
}`;
