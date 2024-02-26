export const apiQuery = `
...on ComponentComponentBannerComponent{
    banners{
      title,
      title_font_size
      title_font_type
      title_font_weight
      description_font_size
      description_font_type
      description_font_weight
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
    card_type,
    cards{
      title,
      subtitle,
      desciption,
      cta_type,
      cta_title,
      cta_action,
      font_size_title_card:title_font_size,
    font_type_title_card:title_font_type
    font_weight_title_card:title_font_weight
    font_size_desc_card:description_font_size 
    font_type_desc_card:description_font_type
    font_weight_desc_card:description_font_weight
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
    testi_card_type:card_type,
    cards{
      title,
      subtitle,
      desciption,
      card_type,
      cta_type,
      cta_title,
      cta_action,
      testi_title_font_size: title_font_size,
      testi_title_font_type:title_font_type
      testi_title_font_weight:title_font_weight
      testi_description_font_size:description_font_size 
      testi_description_font_type:description_font_type
      testi_description_font_weight:description_font_weight
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
  about_title_font_size:title_font_size
  about_title_font_type:title_font_type
  about_title_font_weight:title_font_weight
  about_description_font_size:description_font_size
  about_description_font_type:description_font_type
  about_description_font_weight:description_font_weight
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
    certi_title_font_size:title_font_size
    certi_title_font_type:title_font_type
    certi_title_font_weight:title_font_weight
    certi_description_font_size:description_font_size
    certi_description_font_type:description_font_type
    certi_description_font_weight:description_font_weight
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
 team_card_type:card_type,
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
  feature_card_type:card_type,
  cards{
    description
    title
    font_size_title_feat:title_font_size
    font_type_title_feat:title_font_type
    font_weight_title_feat:title_font_weight
    font_size_desc_feat:description_font_size 
    font_type_desc_feat:description_font_type
    font_weight_desc_feat:description_font_weight
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
  font_weight_desc:description_font_weight
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
