import type { Schema, Struct } from '@strapi/strapi';

export interface ResourceAdditionalInfo extends Struct.ComponentSchema {
  collectionName: 'components_resource_additional_infos';
  info: {
    displayName: 'additional_info';
  };
  attributes: {
    info_links: Schema.Attribute.Component<
      'resource.additional-resource-link',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Supporting studies'>;
  };
}

export interface ResourceAdditionalResourceLink extends Struct.ComponentSchema {
  collectionName: 'components_resource_additional_resource_links';
  info: {
    displayName: 'additional_info_link';
  };
  attributes: {
    label: Schema.Attribute.Text & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ResourceCta extends Struct.ComponentSchema {
  collectionName: 'components_resource_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    cta: Schema.Attribute.Component<'resource.cta-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface ResourceCtaCard extends Struct.ComponentSchema {
  collectionName: 'components_resource_cta_cards';
  info: {
    displayName: 'cta_card';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ResourceHero extends Struct.ComponentSchema {
  collectionName: 'components_resource_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'ui.button', true> &
      Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ResourceImage extends Struct.ComponentSchema {
  collectionName: 'components_resource_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ResourceLinkCard extends Struct.ComponentSchema {
  collectionName: 'components_resource_link_cards';
  info: {
    displayName: 'link_card';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      ['insights', 'publications', 'white-papers', 'news', 'cough-news']
    > &
      Schema.Attribute.Required;
  };
}

export interface ResourceQuote extends Struct.ComponentSchema {
  collectionName: 'components_resource_quotes';
  info: {
    displayName: 'quote';
  };
  attributes: {
    job: Schema.Attribute.String;
    name: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ResourceRelatedResources extends Struct.ComponentSchema {
  collectionName: 'components_resource_related_resources';
  info: {
    displayName: 'related_resources';
  };
  attributes: {
    auto_mode: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    cards: Schema.Attribute.Component<'resource.resource-card', true>;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ResourceResourceCard extends Struct.ComponentSchema {
  collectionName: 'components_resource_resource_cards';
  info: {
    displayName: 'resource_card';
  };
  attributes: {
    cough_news: Schema.Attribute.Relation<
      'oneToOne',
      'api::cough-news-item.cough-news-item'
    >;
    insight: Schema.Attribute.Relation<'oneToOne', 'api::insight.insight'>;
    news: Schema.Attribute.Relation<'oneToOne', 'api::news-item.news-item'>;
    publication: Schema.Attribute.Relation<
      'oneToOne',
      'api::publication.publication'
    >;
    resource_type: Schema.Attribute.Enumeration<
      ['insights', 'publications', 'white-papers', 'news', 'cough-news']
    > &
      Schema.Attribute.Required;
    white_papers: Schema.Attribute.Relation<
      'oneToOne',
      'api::white-paper.white-paper'
    >;
  };
}

export interface ResourceResourceFeed extends Struct.ComponentSchema {
  collectionName: 'components_resource_resource_feeds';
  info: {
    displayName: 'resource_feed';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
    tag: Schema.Attribute.Relation<'oneToOne', 'api::tag.tag'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      ['insights', 'publications', 'white-papers', 'news', 'cough-news']
    > &
      Schema.Attribute.Required;
  };
}

export interface ResourceRichText extends Struct.ComponentSchema {
  collectionName: 'components_resource_rich_texts';
  info: {
    displayName: 'rich_text';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ResourceSubscriptionForm extends Struct.ComponentSchema {
  collectionName: 'components_resource_subscription_forms';
  info: {
    displayName: 'subscription_form';
  };
  attributes: {};
}

export interface ResourceVideo extends Struct.ComponentSchema {
  collectionName: 'components_resource_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_metas';
  info: {
    displayName: 'seo-meta';
  };
  attributes: {
    canonical_URL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    meta_description: Schema.Attribute.Text;
    meta_image: Schema.Attribute.Media<'images' | 'files'>;
    meta_robots: Schema.Attribute.String;
    meta_title: Schema.Attribute.String;
    structured_data: Schema.Attribute.JSON;
  };
}

export interface SharedAccordion extends Struct.ComponentSchema {
  collectionName: 'components_shared_accordions';
  info: {
    displayName: 'accordion';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
    ctas: Schema.Attribute.Component<'ui.button', true>;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardProductSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_product_steps';
  info: {
    displayName: 'card_product_steps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.card-simple', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    ctas: Schema.Attribute.Component<'ui.button', true>;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardsGrid extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards_grids';
  info: {
    displayName: 'cards_grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 3;
        },
        number
      >;
    ctas: Schema.Attribute.Component<'ui.button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 0;
        },
        number
      >;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContentImageSplit extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_image_splits';
  info: {
    displayName: 'content-image-split';
  };
  attributes: {
    content: Schema.Attribute.Component<'ui.paragraph', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    ctas: Schema.Attribute.Component<'ui.button', true>;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'call_to_action';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'ui.button', true>;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_sections';
  info: {
    displayName: 'faq_section';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeatureCardsRight extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards_rights';
  info: {
    displayName: 'feature_cards_right';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.card', true> &
      Schema.Attribute.Required;
    cta: Schema.Attribute.Component<'ui.button', false> &
      Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeroSimple extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_simples';
  info: {
    displayName: 'hero-simple';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'ui.button', true> &
      Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeroStats extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_stats';
  info: {
    displayName: 'hero_stats';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'ui.button', true> &
      Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
    stats: Schema.Attribute.Component<'ui.stat', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMap extends Struct.ComponentSchema {
  collectionName: 'components_shared_maps';
  info: {
    displayName: 'map';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'ui.button', true>;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedPartners extends Struct.ComponentSchema {
  collectionName: 'components_shared_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    logos: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    paragraph: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProblemInsightSolution extends Struct.ComponentSchema {
  collectionName: 'components_shared_problem_insight_solutions';
  info: {
    displayName: 'problem-insight-solution';
  };
  attributes: {
    insight: Schema.Attribute.Component<'ui.insight-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
    paragraph: Schema.Attribute.Text;
    problem: Schema.Attribute.Component<'ui.problem-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    solution: Schema.Attribute.Component<'ui.solution-card', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SharedProductsCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_products_cards';
  info: {
    displayName: 'products_cards';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.card-product', true>;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedResourceLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_resource_links';
  info: {
    displayName: 'resource_links';
  };
  attributes: {
    links: Schema.Attribute.Component<'resource.link-card', true> &
      Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTeamOrder extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_orders';
  info: {
    displayName: 'team_order';
  };
  attributes: {
    team_group: Schema.Attribute.Relation<
      'oneToOne',
      'api::team-group.team-group'
    >;
  };
}

export interface SharedTestimonialsFeed extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials_feeds';
  info: {
    displayName: 'testimonials_feed';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_cards';
  info: {
    displayName: 'card_icon';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiCardProduct extends Struct.ComponentSchema {
  collectionName: 'components_ui_card_products';
  info: {
    displayName: 'product_card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'ui.button', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiCardSimple extends Struct.ComponentSchema {
  collectionName: 'components_ui_card_simples';
  info: {
    displayName: 'card_simple';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiInsightCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_insight_cards';
  info: {
    displayName: 'insight_card';
  };
  attributes: {
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiParagraph extends Struct.ComponentSchema {
  collectionName: 'components_ui_paragraphs';
  info: {
    displayName: 'paragraph';
  };
  attributes: {
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface UiProblemCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_problem_cards';
  info: {
    displayName: 'problem_card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiSolutionCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_solution_cards';
  info: {
    displayName: 'solution_card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'ui.button', false> &
      Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiStat extends Struct.ComponentSchema {
  collectionName: 'components_ui_stats';
  info: {
    displayName: 'stat';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'resource.additional-info': ResourceAdditionalInfo;
      'resource.additional-resource-link': ResourceAdditionalResourceLink;
      'resource.cta': ResourceCta;
      'resource.cta-card': ResourceCtaCard;
      'resource.hero': ResourceHero;
      'resource.image': ResourceImage;
      'resource.link-card': ResourceLinkCard;
      'resource.quote': ResourceQuote;
      'resource.related-resources': ResourceRelatedResources;
      'resource.resource-card': ResourceResourceCard;
      'resource.resource-feed': ResourceResourceFeed;
      'resource.rich-text': ResourceRichText;
      'resource.subscription-form': ResourceSubscriptionForm;
      'resource.video': ResourceVideo;
      'seo.seo-meta': SeoSeoMeta;
      'shared.accordion': SharedAccordion;
      'shared.card-product-steps': SharedCardProductSteps;
      'shared.cards-grid': SharedCardsGrid;
      'shared.content-image-split': SharedContentImageSplit;
      'shared.cta': SharedCta;
      'shared.faq-section': SharedFaqSection;
      'shared.feature-cards-right': SharedFeatureCardsRight;
      'shared.hero-simple': SharedHeroSimple;
      'shared.hero-stats': SharedHeroStats;
      'shared.map': SharedMap;
      'shared.partners': SharedPartners;
      'shared.problem-insight-solution': SharedProblemInsightSolution;
      'shared.products-cards': SharedProductsCards;
      'shared.resource-links': SharedResourceLinks;
      'shared.team-order': SharedTeamOrder;
      'shared.testimonials-feed': SharedTestimonialsFeed;
      'ui.button': UiButton;
      'ui.card': UiCard;
      'ui.card-product': UiCardProduct;
      'ui.card-simple': UiCardSimple;
      'ui.insight-card': UiInsightCard;
      'ui.paragraph': UiParagraph;
      'ui.problem-card': UiProblemCard;
      'ui.solution-card': UiSolutionCard;
      'ui.stat': UiStat;
    }
  }
}
