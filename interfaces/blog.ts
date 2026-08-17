export interface BlogItem {
  id: number;
  date: string;
  date_gmt: string;
  guid: GUID;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  featured_media: number;
  template: string;
  blogcat: number[];
  class_list: unknown[];
  acf: unknown[];
  _links?: BlogItemLinks;
  _embedded?: Embedded;
}

export interface GUID {
  rendered: string;
  protected?: boolean;
}

// BlogItemLinks is defined below (line ~181) — single definition to avoid merge conflicts
export interface Content {
  rendered: string;
  protected: boolean;
}

export interface About {
  href: string;
}

export interface Collection {
  href: string;
}

export interface Curie {
  name: string;
  href: string;
  templated: boolean;
}

export interface Self {
  href: string;
}

export interface WpPostType {
  href: string;
}

//////////////////////// _embedded
export interface Embedded {
  "wp:featuredmedia"?: WpFeaturedmedia[];
  "wp:term"?: Array<EmbeddedWpTerm[]>;
}

export interface WpFeaturedmedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: Caption;
  author: number;
  featured_media: number;
  acf: unknown[];
  caption: Caption;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  source_url: string;
  _links: WpFeaturedmediaLinks;
}

export interface WpFeaturedmediaLinks {
  self: Self[];
  collection: About[];
  about: About[];
  author: AuthorElement[];
  replies: AuthorElement[];
}

export interface About {
  href: string;
}

export interface AuthorElement {
  embeddable: boolean;
  href: string;
}

export interface Self {
  href: string;
  targetHints: TargetHints;
}

export interface TargetHints {
  allow: string[];
}

export interface Caption {
  rendered: string;
}

export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: Sizes;
  image_meta: ImageMeta;
}

export interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: unknown[];
}

export interface Sizes {
  medium: Full;
  thumbnail: Full;
  medium_large: Full;
  full: Full;
}

export interface Full {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
  filesize?: number;
}

export interface EmbeddedWpTerm {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  acf: unknown[];
  _links: WpTermLinks;
}

export interface WpTermLinks {
  self: Self[];
  collection: About[];
  about: About[];
  "wp:post_type": About[];
  curies: Cury[];
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface BlogItemLinks {
  self: Self[];
  collection: About[];
  about: About[];
  "version-history"?: VersionHistory[];
  "predecessor-version"?: PredecessorVersion[];
  "wp:featuredmedia"?: AuthorElement[];
  "wp:post_type"?: WpPostType[] | About[];
  "wp:attachment"?: About[];
  "wp:term"?: LinksWpTerm[];
  curies: Cury[];
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface LinksWpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}