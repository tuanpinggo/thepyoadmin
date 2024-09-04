import type { Schema, Attribute } from '@strapi/strapi';

export interface ServiceStep extends Schema.Component {
  collectionName: 'components_service_steps';
  info: {
    displayName: 'step';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface ServiceService extends Schema.Component {
  collectionName: 'components_service_services';
  info: {
    displayName: 'service';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface ServiceFaq extends Schema.Component {
  collectionName: 'components_service_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'menu';
    icon: 'bulletList';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface HomepageHomepage extends Schema.Component {
  collectionName: 'components_homepage_homepages';
  info: {
    displayName: 'Homepage';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface AboutusNangluc extends Schema.Component {
  collectionName: 'components_aboutus_nanglucs';
  info: {
    displayName: 'nangluc';
  };
  attributes: {
    name: Attribute.String;
    number: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'service.step': ServiceStep;
      'service.service': ServiceService;
      'service.faq': ServiceFaq;
      'seo.seo': SeoSeo;
      'menu.menu': MenuMenu;
      'homepage.homepage': HomepageHomepage;
      'aboutus.nangluc': AboutusNangluc;
    }
  }
}
