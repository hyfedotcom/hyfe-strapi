import type { Schema, Struct } from '@strapi/strapi';

export interface FormConsent extends Struct.ComponentSchema {
  collectionName: 'components_form_consents';
  info: {
    displayName: 'consent';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    privacy_link: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    required: Schema.Attribute.Boolean & Schema.Attribute.Required;
  };
}

export interface FormFormContainer extends Struct.ComponentSchema {
  collectionName: 'components_form_form_containers';
  info: {
    displayName: 'form_container';
  };
  attributes: {
    form: Schema.Attribute.Component<'form.hs-form', false> &
      Schema.Attribute.Required;
    list: Schema.Attribute.Component<'ui.benefits-list', true>;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FormHsForm extends Struct.ComponentSchema {
  collectionName: 'components_form_hs_forms';
  info: {
    displayName: 'hb_form';
  };
  attributes: {
    consent: Schema.Attribute.Component<'form.consent', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    cough_news_subscription: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    cta_label: Schema.Attribute.String & Schema.Attribute.Required;
    formId: Schema.Attribute.String & Schema.Attribute.Required;
    inputs: Schema.Attribute.Component<'form.input', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface FormInput extends Struct.ComponentSchema {
  collectionName: 'components_form_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    hb_name: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<['text', 'email', 'tel', 'textarea']> &
      Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    copyright_text: Schema.Attribute.String;
    legal_links: Schema.Attribute.Component<'ui.button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 0;
        },
        number
      >;
    navigation_groups: Schema.Attribute.Component<'layout.footer-column', true>;
  };
}

export interface LayoutFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_columns';
  info: {
    displayName: 'footer_column';
  };
  attributes: {
    links: Schema.Attribute.Component<'ui.button', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    company_items: Schema.Attribute.Component<'layout.header-link', true>;
    cta: Schema.Attribute.Component<'ui.button', false>;
    header_banner: Schema.Attribute.Component<'ui.header-banner', false>;
    product_items: Schema.Attribute.Component<
      'layout.header-product-link',
      true
    >;
    resource_quick_links: Schema.Attribute.Component<
      'layout.header-link',
      true
    >;
    resource_sections: Schema.Attribute.Component<
      'layout.header-section',
      true
    >;
    solutions_items: Schema.Attribute.Component<'layout.header-link', true>;
  };
}

export interface LayoutHeaderLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_header_links';
  info: {
    displayName: 'header_link';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHeaderProductLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_header_product_links';
  info: {
    displayName: 'header_product_link';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHeaderSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_header_sections';
  info: {
    displayName: 'header_section';
  };
  attributes: {
    all_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'layout.header-link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutNewsletterForm extends Struct.ComponentSchema {
  collectionName: 'components_layout_newsletter_forms';
  info: {
    displayName: 'newsletter_form';
  };
  attributes: {};
}

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

export interface ResourceFormNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_resource_form_newsletters';
  info: {
    displayName: 'form_newsletter';
  };
  attributes: {
    benefits_list: Schema.Attribute.Component<'ui.benefits-list', true>;
    consent_label: Schema.Attribute.String & Schema.Attribute.Required;
    cta_label: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface ResourceResourceFeedMany extends Struct.ComponentSchema {
  collectionName: 'components_resource_resource_feed_manies';
  info: {
    displayName: 'resource_feed_many';
  };
  attributes: {
    resource_list: Schema.Attribute.Component<'resource.resource-feed', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 2;
        },
        number
      >;
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
    displayName: 'content_image_split';
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

export interface SharedHeroContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_contents';
  info: {
    displayName: 'hero_content';
  };
  attributes: {
    content: Schema.Attribute.Component<'ui.paragraph', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeroSimple extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_simples';
  info: {
    displayName: 'hero_simple';
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
    clinical_trials: Schema.Attribute.Component<'ui.stat', false> &
      Schema.Attribute.Required;
    coughs: Schema.Attribute.Component<'ui.benefits-list', false> &
      Schema.Attribute.Required;
    countries: Schema.Attribute.Component<'ui.benefits-list', false> &
      Schema.Attribute.Required;
    ctas: Schema.Attribute.Component<'ui.button', true> &
      Schema.Attribute.Required;
    datapoints: Schema.Attribute.Component<'ui.benefits-list', false> &
      Schema.Attribute.Required;
    map_title: Schema.Attribute.String & Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
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
    displayName: 'problem_insight_solution';
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

export interface SharedTimeline extends Struct.ComponentSchema {
  collectionName: 'components_shared_timelines';
  info: {
    displayName: 'timeline';
  };
  attributes: {
    column: Schema.Attribute.Component<'ui.timeline-column', true> &
      Schema.Attribute.Required;
  };
}

export interface UiBenefitsList extends Struct.ComponentSchema {
  collectionName: 'components_ui_benefits_lists';
  info: {
    displayName: 'benefits_list';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface UiHeaderBanner extends Struct.ComponentSchema {
  collectionName: 'components_ui_header_banners';
  info: {
    displayName: 'header_banner';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface UiTimelineColumn extends Struct.ComponentSchema {
  collectionName: 'components_ui_timeline_columns';
  info: {
    displayName: 'timeline_column';
  };
  attributes: {
    item: Schema.Attribute.Component<'ui.timeline-item', true> &
      Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_timeline_items';
  info: {
    displayName: 'timeline_item';
  };
  attributes: {
    month_day: Schema.Attribute.String & Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'form.consent': FormConsent;
      'form.form-container': FormFormContainer;
      'form.hs-form': FormHsForm;
      'form.input': FormInput;
      'layout.footer': LayoutFooter;
      'layout.footer-column': LayoutFooterColumn;
      'layout.header': LayoutHeader;
      'layout.header-link': LayoutHeaderLink;
      'layout.header-product-link': LayoutHeaderProductLink;
      'layout.header-section': LayoutHeaderSection;
      'layout.newsletter-form': LayoutNewsletterForm;
      'resource.additional-info': ResourceAdditionalInfo;
      'resource.additional-resource-link': ResourceAdditionalResourceLink;
      'resource.cta': ResourceCta;
      'resource.cta-card': ResourceCtaCard;
      'resource.form-newsletter': ResourceFormNewsletter;
      'resource.hero': ResourceHero;
      'resource.image': ResourceImage;
      'resource.link-card': ResourceLinkCard;
      'resource.quote': ResourceQuote;
      'resource.related-resources': ResourceRelatedResources;
      'resource.resource-card': ResourceResourceCard;
      'resource.resource-feed': ResourceResourceFeed;
      'resource.resource-feed-many': ResourceResourceFeedMany;
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
      'shared.hero-content': SharedHeroContent;
      'shared.hero-simple': SharedHeroSimple;
      'shared.hero-stats': SharedHeroStats;
      'shared.map': SharedMap;
      'shared.partners': SharedPartners;
      'shared.problem-insight-solution': SharedProblemInsightSolution;
      'shared.products-cards': SharedProductsCards;
      'shared.resource-links': SharedResourceLinks;
      'shared.team-order': SharedTeamOrder;
      'shared.testimonials-feed': SharedTestimonialsFeed;
      'shared.timeline': SharedTimeline;
      'ui.benefits-list': UiBenefitsList;
      'ui.button': UiButton;
      'ui.card': UiCard;
      'ui.card-product': UiCardProduct;
      'ui.card-simple': UiCardSimple;
      'ui.header-banner': UiHeaderBanner;
      'ui.insight-card': UiInsightCard;
      'ui.paragraph': UiParagraph;
      'ui.problem-card': UiProblemCard;
      'ui.solution-card': UiSolutionCard;
      'ui.stat': UiStat;
      'ui.timeline-column': UiTimelineColumn;
      'ui.timeline-item': UiTimelineItem;
    }
  }
}
