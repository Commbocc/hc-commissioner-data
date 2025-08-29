export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  TaxonomyJSON: any;
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  geolocate?: Maybe<Scalars['JSON']>;
  google_map?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip_code?: Maybe<Scalars['String']>;
};

export type AddressWhere = {
  address?: InputMaybe<Scalars['String']>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  address_ne?: InputMaybe<Scalars['String']>;
  address_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  city?: InputMaybe<Scalars['String']>;
  city_exists?: InputMaybe<Scalars['Boolean']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  city_ne?: InputMaybe<Scalars['String']>;
  city_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  geolocate?: InputMaybe<Scalars['JSON']>;
  geolocate_exists?: InputMaybe<Scalars['Boolean']>;
  google_map?: InputMaybe<Scalars['String']>;
  google_map_exists?: InputMaybe<Scalars['Boolean']>;
  google_map_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  google_map_ne?: InputMaybe<Scalars['String']>;
  google_map_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  latitude?: InputMaybe<Scalars['String']>;
  latitude_exists?: InputMaybe<Scalars['Boolean']>;
  latitude_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  latitude_ne?: InputMaybe<Scalars['String']>;
  latitude_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longitude?: InputMaybe<Scalars['String']>;
  longitude_exists?: InputMaybe<Scalars['Boolean']>;
  longitude_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longitude_ne?: InputMaybe<Scalars['String']>;
  longitude_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Scalars['String']>;
  state_exists?: InputMaybe<Scalars['Boolean']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_ne?: InputMaybe<Scalars['String']>;
  state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zip_code?: InputMaybe<Scalars['String']>;
  zip_code_exists?: InputMaybe<Scalars['Boolean']>;
  zip_code_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zip_code_ne?: InputMaybe<Scalars['String']>;
  zip_code_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AllArticle = {
  __typename?: 'AllArticle';
  items?: Maybe<Array<Maybe<Article>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllAssetFolder = {
  __typename?: 'AllAssetFolder';
  items?: Maybe<Array<Maybe<AssetFolder>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllCalendarEvent = {
  __typename?: 'AllCalendarEvent';
  items?: Maybe<Array<Maybe<CalendarEvent>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllCalendarEventInstance = {
  __typename?: 'AllCalendarEventInstance';
  items?: Maybe<Array<Maybe<CalendarEventInstance>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllCommissioner = {
  __typename?: 'AllCommissioner';
  items?: Maybe<Array<Maybe<Commissioner>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllContact = {
  __typename?: 'AllContact';
  items?: Maybe<Array<Maybe<Contact>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllCouncil = {
  __typename?: 'AllCouncil';
  items?: Maybe<Array<Maybe<Council>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllCountyLeadership = {
  __typename?: 'AllCountyLeadership';
  items?: Maybe<Array<Maybe<CountyLeadership>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllDepartment = {
  __typename?: 'AllDepartment';
  items?: Maybe<Array<Maybe<Department>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllDisclaimer = {
  __typename?: 'AllDisclaimer';
  items?: Maybe<Array<Maybe<Disclaimer>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllExternalLink = {
  __typename?: 'AllExternalLink';
  items?: Maybe<Array<Maybe<ExternalLink>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllFaq = {
  __typename?: 'AllFaq';
  items?: Maybe<Array<Maybe<Faq>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllFeaturedContentComponent = {
  __typename?: 'AllFeaturedContentComponent';
  items?: Maybe<Array<Maybe<FeaturedContentComponent>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllHikingTrail = {
  __typename?: 'AllHikingTrail';
  items?: Maybe<Array<Maybe<HikingTrail>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllHome = {
  __typename?: 'AllHome';
  items?: Maybe<Array<Maybe<Home>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllHtv = {
  __typename?: 'AllHtv';
  items?: Maybe<Array<Maybe<Htv>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllIframeApp = {
  __typename?: 'AllIframeApp';
  items?: Maybe<Array<Maybe<IframeApp>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllImageGallery = {
  __typename?: 'AllImageGallery';
  items?: Maybe<Array<Maybe<ImageGallery>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllLandingPage = {
  __typename?: 'AllLandingPage';
  items?: Maybe<Array<Maybe<LandingPage>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllLocation = {
  __typename?: 'AllLocation';
  items?: Maybe<Array<Maybe<Location>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllLocationNotice = {
  __typename?: 'AllLocationNotice';
  items?: Maybe<Array<Maybe<LocationNotice>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllPage = {
  __typename?: 'AllPage';
  items?: Maybe<Array<Maybe<Page>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllRedirect = {
  __typename?: 'AllRedirect';
  items?: Maybe<Array<Maybe<Redirect>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllSearch = {
  __typename?: 'AllSearch';
  items?: Maybe<Array<Maybe<Search>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllServiceActionType = {
  __typename?: 'AllServiceActionType';
  items?: Maybe<Array<Maybe<ServiceActionType>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllServicenowCategory = {
  __typename?: 'AllServicenowCategory';
  items?: Maybe<Array<Maybe<ServicenowCategory>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllServicenowKbArticle = {
  __typename?: 'AllServicenowKbArticle';
  items?: Maybe<Array<Maybe<ServicenowKbArticle>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllSettings = {
  __typename?: 'AllSettings';
  items?: Maybe<Array<Maybe<Settings>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllSiteAlert = {
  __typename?: 'AllSiteAlert';
  items?: Maybe<Array<Maybe<SiteAlert>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllSocialPlatform = {
  __typename?: 'AllSocialPlatform';
  items?: Maybe<Array<Maybe<SocialPlatform>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllSolidWasteItem = {
  __typename?: 'AllSolidWasteItem';
  items?: Maybe<Array<Maybe<SolidWasteItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllStaySafe = {
  __typename?: 'AllStaySafe';
  items?: Maybe<Array<Maybe<StaySafe>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllSysAsset = {
  __typename?: 'AllSysAsset';
  items?: Maybe<Array<Maybe<SysAsset>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Article = {
  __typename?: 'Article';
  article_categories?: Maybe<ArticleCategories>;
  article_type?: Maybe<Scalars['String']>;
  base?: Maybe<BasePage>;
  departmentsConnection?: Maybe<ArticleDepartmentsConnection>;
  evergreen?: Maybe<Scalars['Boolean']>;
  sidebar?: Maybe<Sidebar>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type ArticleDepartmentsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefArticleDepartmentsWhere>;
};

export type ArticleCategories = {
  __typename?: 'ArticleCategories';
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ArticleCategoriesWhere = {
  categories?: InputMaybe<Scalars['String']>;
  categories_exists?: InputMaybe<Scalars['Boolean']>;
  categories_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories_ne?: InputMaybe<Scalars['String']>;
  categories_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleDepartmentsConnection = {
  __typename?: 'ArticleDepartmentsConnection';
  edges?: Maybe<Array<Maybe<ArticleDepartmentsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleDepartmentsEdge = {
  __typename?: 'ArticleDepartmentsEdge';
  node?: Maybe<ArticleDepartmentsNode>;
};

export type ArticleDepartmentsNode = Department;

export type ArticleDepartmentsWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  department?: InputMaybe<DepartmentWhere>;
};

export enum ArticleOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type ArticleTaxonomyWhere = {
  department?: InputMaybe<ArticleTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<ArticleTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<ArticleTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<ArticleTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<ArticleTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ArticleTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ArticleTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ArticleTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ArticleWhere = {
  AND?: InputMaybe<Array<InputMaybe<ArticleWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ArticleWhere>>>;
  article_categories?: InputMaybe<ArticleCategoriesWhere>;
  article_categories_exists?: InputMaybe<Scalars['Boolean']>;
  article_type?: InputMaybe<Scalars['String']>;
  article_type_exists?: InputMaybe<Scalars['Boolean']>;
  article_type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  article_type_ne?: InputMaybe<Scalars['String']>;
  article_type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  base?: InputMaybe<BasePageWhere>;
  base_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  departments?: InputMaybe<ArticleDepartmentsWhere>;
  departments_count?: InputMaybe<Scalars['Int']>;
  departments_exists?: InputMaybe<Scalars['Boolean']>;
  evergreen?: InputMaybe<Scalars['Boolean']>;
  evergreen_exists?: InputMaybe<Scalars['Boolean']>;
  evergreen_ne?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  sidebar?: InputMaybe<SidebarWhere>;
  sidebar_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<ArticleTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetFolder = {
  __typename?: 'AssetFolder';
  fileConnection?: Maybe<SysAssetConnection>;
  sort_by?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
};

export enum AssetFolderOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type AssetFolderTaxonomyWhere = {
  department?: InputMaybe<AssetFolderTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AssetFolderTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<AssetFolderTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<AssetFolderTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<AssetFolderTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<AssetFolderTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AssetFolderTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type AssetFolderTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type AssetFolderTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type AssetFolderTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type AssetFolderWhere = {
  AND?: InputMaybe<Array<InputMaybe<AssetFolderWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFolderWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  file?: InputMaybe<SysAssetWhere>;
  file_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_by_exists?: InputMaybe<Scalars['Boolean']>;
  sort_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sort_by_ne?: InputMaybe<Scalars['String']>;
  sort_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sort_order?: InputMaybe<Scalars['String']>;
  sort_order_exists?: InputMaybe<Scalars['Boolean']>;
  sort_order_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sort_order_ne?: InputMaybe<Scalars['String']>;
  sort_order_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<AssetFolderTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type BasePage = {
  __typename?: 'BasePage';
  body?: Maybe<BasePageBody>;
  image?: Maybe<Scalars['JSON']>;
  lang?: Maybe<Scalars['String']>;
  navigation?: Maybe<BasePageNavigation>;
  posted_date?: Maybe<Scalars['DateTime']>;
  robots_noindex?: Maybe<Scalars['Boolean']>;
  short_description?: Maybe<Scalars['String']>;
  show_table_of_contents?: Maybe<Scalars['Boolean']>;
  sitecore_guid?: Maybe<Scalars['String']>;
  uniform_enrichment_tag?: Maybe<Scalars['JSON']>;
};

export type BasePageBody = {
  __typename?: 'BasePageBody';
  embedded_itemsConnection?: Maybe<BasePageBodyEmbeddedItemsConnection>;
  json?: Maybe<Scalars['JSON']>;
};


export type BasePageBodyEmbedded_ItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type BasePageBodyEmbeddedItemsConnection = {
  __typename?: 'BasePageBodyEmbeddedItemsConnection';
  edges?: Maybe<Array<Maybe<BasePageBodyEmbeddedItemsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BasePageBodyEmbeddedItemsEdge = {
  __typename?: 'BasePageBodyEmbeddedItemsEdge';
  node?: Maybe<BasePageBodyEmbeddedItemsNode>;
};

export type BasePageBodyEmbeddedItemsNode = Article | AssetFolder | Contact | Council | Department | Disclaimer | ExternalLink | Faq | IframeApp | ImageGallery | Location | Page | SysAsset;

export type BasePageNavigation = {
  __typename?: 'BasePageNavigation';
  hide_in_navigation?: Maybe<Scalars['Boolean']>;
  hide_in_search_results?: Maybe<Scalars['Boolean']>;
  navigation_title?: Maybe<Scalars['String']>;
};

export type BasePageNavigationWhere = {
  hide_in_navigation?: InputMaybe<Scalars['Boolean']>;
  hide_in_navigation_exists?: InputMaybe<Scalars['Boolean']>;
  hide_in_navigation_ne?: InputMaybe<Scalars['Boolean']>;
  hide_in_search_results?: InputMaybe<Scalars['Boolean']>;
  hide_in_search_results_exists?: InputMaybe<Scalars['Boolean']>;
  hide_in_search_results_ne?: InputMaybe<Scalars['Boolean']>;
  navigation_title?: InputMaybe<Scalars['String']>;
  navigation_title_exists?: InputMaybe<Scalars['Boolean']>;
  navigation_title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigation_title_ne?: InputMaybe<Scalars['String']>;
  navigation_title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BasePageWhere = {
  body?: InputMaybe<Scalars['JSON']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Scalars['JSON']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  lang?: InputMaybe<Scalars['String']>;
  lang_exists?: InputMaybe<Scalars['Boolean']>;
  lang_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang_ne?: InputMaybe<Scalars['String']>;
  lang_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigation?: InputMaybe<BasePageNavigationWhere>;
  navigation_exists?: InputMaybe<Scalars['Boolean']>;
  posted_date?: InputMaybe<Scalars['DateTime']>;
  posted_date_exists?: InputMaybe<Scalars['Boolean']>;
  posted_date_gt?: InputMaybe<Scalars['DateTime']>;
  posted_date_gte?: InputMaybe<Scalars['DateTime']>;
  posted_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  posted_date_lt?: InputMaybe<Scalars['DateTime']>;
  posted_date_lte?: InputMaybe<Scalars['DateTime']>;
  posted_date_ne?: InputMaybe<Scalars['DateTime']>;
  posted_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  robots_noindex?: InputMaybe<Scalars['Boolean']>;
  robots_noindex_exists?: InputMaybe<Scalars['Boolean']>;
  robots_noindex_ne?: InputMaybe<Scalars['Boolean']>;
  short_description?: InputMaybe<Scalars['String']>;
  short_description_exists?: InputMaybe<Scalars['Boolean']>;
  short_description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  short_description_ne?: InputMaybe<Scalars['String']>;
  short_description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  show_table_of_contents?: InputMaybe<Scalars['Boolean']>;
  show_table_of_contents_exists?: InputMaybe<Scalars['Boolean']>;
  show_table_of_contents_ne?: InputMaybe<Scalars['Boolean']>;
  sitecore_guid?: InputMaybe<Scalars['String']>;
  sitecore_guid_exists?: InputMaybe<Scalars['Boolean']>;
  sitecore_guid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sitecore_guid_ne?: InputMaybe<Scalars['String']>;
  sitecore_guid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uniform_enrichment_tag?: InputMaybe<Scalars['JSON']>;
  uniform_enrichment_tag_exists?: InputMaybe<Scalars['Boolean']>;
};

export type CalendarEvent = {
  __typename?: 'CalendarEvent';
  base?: Maybe<BasePage>;
  calendar?: Maybe<Scalars['String']>;
  default_event_browser_view?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CalendarEventInstance = {
  __typename?: 'CalendarEventInstance';
  all_day?: Maybe<Scalars['Boolean']>;
  cancelled?: Maybe<Scalars['Boolean']>;
  end_date?: Maybe<Scalars['DateTime']>;
  eventConnection?: Maybe<CalendarEventInstanceEventConnection>;
  generate_url_slug?: Maybe<Scalars['JSON']>;
  link?: Maybe<Link>;
  locationConnection?: Maybe<CalendarEventInstanceLocationConnection>;
  location_note?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CalendarEventInstanceEventConnection = {
  __typename?: 'CalendarEventInstanceEventConnection';
  edges?: Maybe<Array<Maybe<CalendarEventInstanceEventEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CalendarEventInstanceEventEdge = {
  __typename?: 'CalendarEventInstanceEventEdge';
  node?: Maybe<CalendarEventInstanceEventNode>;
};

export type CalendarEventInstanceEventNode = CalendarEvent;

export type CalendarEventInstanceEventWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  calendar_event?: InputMaybe<CalendarEventWhere>;
};

export type CalendarEventInstanceLocationConnection = {
  __typename?: 'CalendarEventInstanceLocationConnection';
  edges?: Maybe<Array<Maybe<CalendarEventInstanceLocationEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CalendarEventInstanceLocationEdge = {
  __typename?: 'CalendarEventInstanceLocationEdge';
  node?: Maybe<CalendarEventInstanceLocationNode>;
};

export type CalendarEventInstanceLocationNode = Location;

export type CalendarEventInstanceLocationWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  location?: InputMaybe<LocationWhere>;
};

export enum CalendarEventInstanceOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type CalendarEventInstanceWhere = {
  AND?: InputMaybe<Array<InputMaybe<CalendarEventInstanceWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<CalendarEventInstanceWhere>>>;
  all_day?: InputMaybe<Scalars['Boolean']>;
  all_day_exists?: InputMaybe<Scalars['Boolean']>;
  all_day_ne?: InputMaybe<Scalars['Boolean']>;
  cancelled?: InputMaybe<Scalars['Boolean']>;
  cancelled_exists?: InputMaybe<Scalars['Boolean']>;
  cancelled_ne?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  end_date_exists?: InputMaybe<Scalars['Boolean']>;
  end_date_gt?: InputMaybe<Scalars['DateTime']>;
  end_date_gte?: InputMaybe<Scalars['DateTime']>;
  end_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  end_date_lt?: InputMaybe<Scalars['DateTime']>;
  end_date_lte?: InputMaybe<Scalars['DateTime']>;
  end_date_ne?: InputMaybe<Scalars['DateTime']>;
  end_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  event?: InputMaybe<CalendarEventInstanceEventWhere>;
  event_exists?: InputMaybe<Scalars['Boolean']>;
  generate_url_slug?: InputMaybe<Scalars['JSON']>;
  generate_url_slug_exists?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<CalendarEventInstanceLocationWhere>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_note?: InputMaybe<Scalars['String']>;
  location_note_exists?: InputMaybe<Scalars['Boolean']>;
  location_note_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_note_ne?: InputMaybe<Scalars['String']>;
  location_note_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes?: InputMaybe<Scalars['String']>;
  notes_exists?: InputMaybe<Scalars['Boolean']>;
  notes_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes_ne?: InputMaybe<Scalars['String']>;
  notes_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  start_date_exists?: InputMaybe<Scalars['Boolean']>;
  start_date_gt?: InputMaybe<Scalars['DateTime']>;
  start_date_gte?: InputMaybe<Scalars['DateTime']>;
  start_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  start_date_lt?: InputMaybe<Scalars['DateTime']>;
  start_date_lte?: InputMaybe<Scalars['DateTime']>;
  start_date_ne?: InputMaybe<Scalars['DateTime']>;
  start_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum CalendarEventOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type CalendarEventTaxonomyWhere = {
  department?: InputMaybe<CalendarEventTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CalendarEventTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<CalendarEventTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<CalendarEventTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<CalendarEventTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<CalendarEventTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CalendarEventTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type CalendarEventTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type CalendarEventTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type CalendarEventTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type CalendarEventWhere = {
  AND?: InputMaybe<Array<InputMaybe<CalendarEventWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<CalendarEventWhere>>>;
  base?: InputMaybe<BasePageWhere>;
  base_exists?: InputMaybe<Scalars['Boolean']>;
  calendar?: InputMaybe<Scalars['String']>;
  calendar_exists?: InputMaybe<Scalars['Boolean']>;
  calendar_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  calendar_ne?: InputMaybe<Scalars['String']>;
  calendar_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  default_event_browser_view?: InputMaybe<Scalars['String']>;
  default_event_browser_view_exists?: InputMaybe<Scalars['Boolean']>;
  default_event_browser_view_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  default_event_browser_view_ne?: InputMaybe<Scalars['String']>;
  default_event_browser_view_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<CalendarEventTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Commissioner = {
  __typename?: 'Commissioner';
  aidesConnection?: Maybe<CommissionerAidesConnection>;
  base?: Maybe<BasePage>;
  contactConnection?: Maybe<CommissionerContactConnection>;
  contact_form_link?: Maybe<Link>;
  countywide?: Maybe<Scalars['Boolean']>;
  designations?: Maybe<Array<Maybe<Scalars['String']>>>;
  district?: Maybe<Scalars['Float']>;
  party?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type CommissionerAidesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefCommissionerAidesWhere>;
};

export type CommissionerAidesConnection = {
  __typename?: 'CommissionerAidesConnection';
  edges?: Maybe<Array<Maybe<CommissionerAidesEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CommissionerAidesEdge = {
  __typename?: 'CommissionerAidesEdge';
  node?: Maybe<CommissionerAidesNode>;
};

export type CommissionerAidesNode = Contact;

export type CommissionerAidesWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  contact?: InputMaybe<ContactWhere>;
};

export type CommissionerContactConnection = {
  __typename?: 'CommissionerContactConnection';
  edges?: Maybe<Array<Maybe<CommissionerContactEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CommissionerContactEdge = {
  __typename?: 'CommissionerContactEdge';
  node?: Maybe<CommissionerContactNode>;
};

export type CommissionerContactNode = Contact;

export type CommissionerContactWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  contact?: InputMaybe<ContactWhere>;
};

export enum CommissionerOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type CommissionerWhere = {
  AND?: InputMaybe<Array<InputMaybe<CommissionerWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<CommissionerWhere>>>;
  aides?: InputMaybe<CommissionerAidesWhere>;
  aides_count?: InputMaybe<Scalars['Int']>;
  aides_exists?: InputMaybe<Scalars['Boolean']>;
  base?: InputMaybe<BasePageWhere>;
  base_exists?: InputMaybe<Scalars['Boolean']>;
  contact?: InputMaybe<CommissionerContactWhere>;
  contact_exists?: InputMaybe<Scalars['Boolean']>;
  contact_form_link?: InputMaybe<LinkWhere>;
  contact_form_link_exists?: InputMaybe<Scalars['Boolean']>;
  countywide?: InputMaybe<Scalars['Boolean']>;
  countywide_exists?: InputMaybe<Scalars['Boolean']>;
  countywide_ne?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  designations?: InputMaybe<Scalars['String']>;
  designations_exists?: InputMaybe<Scalars['Boolean']>;
  designations_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  designations_ne?: InputMaybe<Scalars['String']>;
  designations_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  district?: InputMaybe<Scalars['Float']>;
  district_exists?: InputMaybe<Scalars['Boolean']>;
  district_gt?: InputMaybe<Scalars['Float']>;
  district_gte?: InputMaybe<Scalars['Float']>;
  district_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  district_lt?: InputMaybe<Scalars['Float']>;
  district_lte?: InputMaybe<Scalars['Float']>;
  district_ne?: InputMaybe<Scalars['Float']>;
  district_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  party?: InputMaybe<Scalars['String']>;
  party_exists?: InputMaybe<Scalars['Boolean']>;
  party_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  party_ne?: InputMaybe<Scalars['String']>;
  party_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Contact = {
  __typename?: 'Contact';
  admin_assistantConnection?: Maybe<ContactAdminAssistantConnection>;
  cs_headshotConnection?: Maybe<SysAssetConnection>;
  emails?: Maybe<Array<Maybe<ContactEmails>>>;
  full_name?: Maybe<Scalars['String']>;
  headshot?: Maybe<Scalars['JSON']>;
  job_title?: Maybe<Scalars['String']>;
  locationConnection?: Maybe<ContactLocationConnection>;
  location_note?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<ContactPhones>>>;
  sitecore_guid?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
};


export type ContactAdmin_AssistantConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefContactAdminAssistantWhere>;
};

export type ContactAdminAssistantConnection = {
  __typename?: 'ContactAdminAssistantConnection';
  edges?: Maybe<Array<Maybe<ContactAdminAssistantEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContactAdminAssistantEdge = {
  __typename?: 'ContactAdminAssistantEdge';
  node?: Maybe<ContactAdminAssistantNode>;
};

export type ContactAdminAssistantNode = Contact;

export type ContactAdminAssistantWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  contact?: InputMaybe<ContactWhere>;
};

export type ContactEmails = {
  __typename?: 'ContactEmails';
  address?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContactEmailsWhere = {
  address?: InputMaybe<Scalars['String']>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  address_ne?: InputMaybe<Scalars['String']>;
  address_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactLocationConnection = {
  __typename?: 'ContactLocationConnection';
  edges?: Maybe<Array<Maybe<ContactLocationEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContactLocationEdge = {
  __typename?: 'ContactLocationEdge';
  node?: Maybe<ContactLocationNode>;
};

export type ContactLocationNode = Location;

export type ContactLocationWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  location?: InputMaybe<LocationWhere>;
};

export enum ContactOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type ContactPhones = {
  __typename?: 'ContactPhones';
  extension?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type ContactPhonesWhere = {
  extension?: InputMaybe<Scalars['Float']>;
  extension_exists?: InputMaybe<Scalars['Boolean']>;
  extension_gt?: InputMaybe<Scalars['Float']>;
  extension_gte?: InputMaybe<Scalars['Float']>;
  extension_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  extension_lt?: InputMaybe<Scalars['Float']>;
  extension_lte?: InputMaybe<Scalars['Float']>;
  extension_ne?: InputMaybe<Scalars['Float']>;
  extension_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  number?: InputMaybe<Scalars['Float']>;
  number_exists?: InputMaybe<Scalars['Boolean']>;
  number_gt?: InputMaybe<Scalars['Float']>;
  number_gte?: InputMaybe<Scalars['Float']>;
  number_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  number_lt?: InputMaybe<Scalars['Float']>;
  number_lte?: InputMaybe<Scalars['Float']>;
  number_ne?: InputMaybe<Scalars['Float']>;
  number_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactTaxonomyWhere = {
  department?: InputMaybe<ContactTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<ContactTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<ContactTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<ContactTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<ContactTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ContactTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ContactTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ContactTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ContactWhere = {
  AND?: InputMaybe<Array<InputMaybe<ContactWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactWhere>>>;
  admin_assistant?: InputMaybe<ContactAdminAssistantWhere>;
  admin_assistant_count?: InputMaybe<Scalars['Int']>;
  admin_assistant_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cs_headshot?: InputMaybe<SysAssetWhere>;
  cs_headshot_exists?: InputMaybe<Scalars['Boolean']>;
  emails?: InputMaybe<ContactEmailsWhere>;
  emails_exists?: InputMaybe<Scalars['Boolean']>;
  full_name?: InputMaybe<Scalars['String']>;
  full_name_exists?: InputMaybe<Scalars['Boolean']>;
  full_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  full_name_ne?: InputMaybe<Scalars['String']>;
  full_name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headshot?: InputMaybe<Scalars['JSON']>;
  headshot_exists?: InputMaybe<Scalars['Boolean']>;
  job_title?: InputMaybe<Scalars['String']>;
  job_title_exists?: InputMaybe<Scalars['Boolean']>;
  job_title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  job_title_ne?: InputMaybe<Scalars['String']>;
  job_title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<ContactLocationWhere>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_note?: InputMaybe<Scalars['String']>;
  location_note_exists?: InputMaybe<Scalars['Boolean']>;
  location_note_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_note_ne?: InputMaybe<Scalars['String']>;
  location_note_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phones?: InputMaybe<ContactPhonesWhere>;
  phones_exists?: InputMaybe<Scalars['Boolean']>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  sitecore_guid?: InputMaybe<Scalars['String']>;
  sitecore_guid_exists?: InputMaybe<Scalars['Boolean']>;
  sitecore_guid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sitecore_guid_ne?: InputMaybe<Scalars['String']>;
  sitecore_guid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<ContactTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Council = {
  __typename?: 'Council';
  base?: Maybe<BasePage>;
  contactConnection?: Maybe<CouncilContactConnection>;
  default_calendar_view?: Maybe<Scalars['String']>;
  eventsConnection?: Maybe<CouncilEventsConnection>;
  members?: Maybe<Array<Maybe<CouncilMembers>>>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type CouncilContactConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefCouncilContactWhere>;
};


export type CouncilEventsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefCouncilEventsWhere>;
};

export type CouncilContactConnection = {
  __typename?: 'CouncilContactConnection';
  edges?: Maybe<Array<Maybe<CouncilContactEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CouncilContactEdge = {
  __typename?: 'CouncilContactEdge';
  node?: Maybe<CouncilContactNode>;
};

export type CouncilContactNode = Contact;

export type CouncilContactWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  contact?: InputMaybe<ContactWhere>;
};

export type CouncilEventsConnection = {
  __typename?: 'CouncilEventsConnection';
  edges?: Maybe<Array<Maybe<CouncilEventsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CouncilEventsEdge = {
  __typename?: 'CouncilEventsEdge';
  node?: Maybe<CouncilEventsNode>;
};

export type CouncilEventsNode = CalendarEvent;

export type CouncilEventsWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  calendar_event?: InputMaybe<CalendarEventWhere>;
};

export type CouncilMembers = {
  __typename?: 'CouncilMembers';
  category?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  reappointed?: Maybe<Scalars['Boolean']>;
  start_date?: Maybe<Scalars['DateTime']>;
};

export type CouncilMembersWhere = {
  category?: InputMaybe<Scalars['String']>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_ne?: InputMaybe<Scalars['String']>;
  category_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  end_date_exists?: InputMaybe<Scalars['Boolean']>;
  end_date_gt?: InputMaybe<Scalars['DateTime']>;
  end_date_gte?: InputMaybe<Scalars['DateTime']>;
  end_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  end_date_lt?: InputMaybe<Scalars['DateTime']>;
  end_date_lte?: InputMaybe<Scalars['DateTime']>;
  end_date_ne?: InputMaybe<Scalars['DateTime']>;
  end_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  position?: InputMaybe<Scalars['String']>;
  position_exists?: InputMaybe<Scalars['Boolean']>;
  position_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  position_ne?: InputMaybe<Scalars['String']>;
  position_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reappointed?: InputMaybe<Scalars['Boolean']>;
  reappointed_exists?: InputMaybe<Scalars['Boolean']>;
  reappointed_ne?: InputMaybe<Scalars['Boolean']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  start_date_exists?: InputMaybe<Scalars['Boolean']>;
  start_date_gt?: InputMaybe<Scalars['DateTime']>;
  start_date_gte?: InputMaybe<Scalars['DateTime']>;
  start_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  start_date_lt?: InputMaybe<Scalars['DateTime']>;
  start_date_lte?: InputMaybe<Scalars['DateTime']>;
  start_date_ne?: InputMaybe<Scalars['DateTime']>;
  start_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum CouncilOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type CouncilTaxonomyWhere = {
  department?: InputMaybe<CouncilTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CouncilTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<CouncilTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<CouncilTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<CouncilTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<CouncilTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CouncilTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type CouncilTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type CouncilTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type CouncilTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type CouncilWhere = {
  AND?: InputMaybe<Array<InputMaybe<CouncilWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<CouncilWhere>>>;
  base?: InputMaybe<BasePageWhere>;
  base_exists?: InputMaybe<Scalars['Boolean']>;
  contact?: InputMaybe<CouncilContactWhere>;
  contact_count?: InputMaybe<Scalars['Int']>;
  contact_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  default_calendar_view?: InputMaybe<Scalars['String']>;
  default_calendar_view_exists?: InputMaybe<Scalars['Boolean']>;
  default_calendar_view_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  default_calendar_view_ne?: InputMaybe<Scalars['String']>;
  default_calendar_view_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  events?: InputMaybe<CouncilEventsWhere>;
  events_count?: InputMaybe<Scalars['Int']>;
  events_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  members?: InputMaybe<CouncilMembersWhere>;
  members_exists?: InputMaybe<Scalars['Boolean']>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<CouncilTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type CountyLeadership = {
  __typename?: 'CountyLeadership';
  sections?: Maybe<Array<Maybe<CountyLeadershipSections>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum CountyLeadershipOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type CountyLeadershipSections = {
  __typename?: 'CountyLeadershipSections';
  leadersConnection?: Maybe<CountyLeadershipSectionsLeadersConnection>;
  title?: Maybe<Scalars['String']>;
};


export type CountyLeadershipSectionsLeadersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefCountyLeadershipSectionsLeadersWhere>;
};

export type CountyLeadershipSectionsLeadersConnection = {
  __typename?: 'CountyLeadershipSectionsLeadersConnection';
  edges?: Maybe<Array<Maybe<CountyLeadershipSectionsLeadersEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CountyLeadershipSectionsLeadersEdge = {
  __typename?: 'CountyLeadershipSectionsLeadersEdge';
  node?: Maybe<CountyLeadershipSectionsLeadersNode>;
};

export type CountyLeadershipSectionsLeadersNode = Contact;

export type CountyLeadershipSectionsLeadersWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  contact?: InputMaybe<ContactWhere>;
};

export type CountyLeadershipSectionsWhere = {
  leaders?: InputMaybe<CountyLeadershipSectionsLeadersWhere>;
  leaders_count?: InputMaybe<Scalars['Int']>;
  leaders_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CountyLeadershipWhere = {
  AND?: InputMaybe<Array<InputMaybe<CountyLeadershipWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<CountyLeadershipWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  sections?: InputMaybe<CountyLeadershipSectionsWhere>;
  sections_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Department = {
  __typename?: 'Department';
  base?: Maybe<BasePage>;
  contactConnection?: Maybe<DepartmentContactConnection>;
  icon?: Maybe<Scalars['String']>;
  manager_contactConnection?: Maybe<DepartmentManagerContactConnection>;
  sidebar?: Maybe<Sidebar>;
  site_sections?: Maybe<Array<Maybe<Scalars['String']>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  visual_builder?: Maybe<VisualBuilder>;
};


export type DepartmentManager_ContactConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefDepartmentManagerContactWhere>;
};

export type DepartmentContactConnection = {
  __typename?: 'DepartmentContactConnection';
  edges?: Maybe<Array<Maybe<DepartmentContactEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DepartmentContactEdge = {
  __typename?: 'DepartmentContactEdge';
  node?: Maybe<DepartmentContactNode>;
};

export type DepartmentContactNode = Contact;

export type DepartmentContactWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  contact?: InputMaybe<ContactWhere>;
};

export type DepartmentManagerContactConnection = {
  __typename?: 'DepartmentManagerContactConnection';
  edges?: Maybe<Array<Maybe<DepartmentManagerContactEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DepartmentManagerContactEdge = {
  __typename?: 'DepartmentManagerContactEdge';
  node?: Maybe<DepartmentManagerContactNode>;
};

export type DepartmentManagerContactNode = Contact;

export type DepartmentManagerContactWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  contact?: InputMaybe<ContactWhere>;
};

export enum DepartmentOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type DepartmentWhere = {
  AND?: InputMaybe<Array<InputMaybe<DepartmentWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<DepartmentWhere>>>;
  base?: InputMaybe<BasePageWhere>;
  base_exists?: InputMaybe<Scalars['Boolean']>;
  contact?: InputMaybe<DepartmentContactWhere>;
  contact_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  manager_contact?: InputMaybe<DepartmentManagerContactWhere>;
  manager_contact_count?: InputMaybe<Scalars['Int']>;
  manager_contact_exists?: InputMaybe<Scalars['Boolean']>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  sidebar?: InputMaybe<SidebarWhere>;
  sidebar_exists?: InputMaybe<Scalars['Boolean']>;
  site_sections?: InputMaybe<Scalars['String']>;
  site_sections_exists?: InputMaybe<Scalars['Boolean']>;
  site_sections_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  site_sections_ne?: InputMaybe<Scalars['String']>;
  site_sections_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  visual_builder?: InputMaybe<VisualBuilderWhere>;
  visual_builder_exists?: InputMaybe<Scalars['Boolean']>;
};

export type Disclaimer = {
  __typename?: 'Disclaimer';
  body?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<DisclaimerButtons>>>;
  color?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['DateTime']>;
  header?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  nosnippet?: Maybe<Scalars['Boolean']>;
  plain?: Maybe<Scalars['Boolean']>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
};

export type DisclaimerButtons = DisclaimerButtonsButton;

export type DisclaimerButtonsButton = {
  __typename?: 'DisclaimerButtonsButton';
  Button?: Maybe<DisclaimerButtonsButtonBlock>;
};

export type DisclaimerButtonsButtonBlock = {
  __typename?: 'DisclaimerButtonsButtonBlock';
  link?: Maybe<Link>;
};

export type DisclaimerButtonsButtonBlockWhere = {
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
};

export type DisclaimerButtonsWhere = {
  Button?: InputMaybe<DisclaimerButtonsButtonBlockWhere>;
  Button_exists?: InputMaybe<Scalars['Boolean']>;
};

export enum DisclaimerOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type DisclaimerTaxonomyWhere = {
  department?: InputMaybe<DisclaimerTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DisclaimerTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<DisclaimerTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<DisclaimerTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<DisclaimerTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<DisclaimerTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DisclaimerTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type DisclaimerTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type DisclaimerTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type DisclaimerTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type DisclaimerWhere = {
  AND?: InputMaybe<Array<InputMaybe<DisclaimerWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<DisclaimerWhere>>>;
  body?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_ne?: InputMaybe<Scalars['String']>;
  body_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttons?: InputMaybe<DisclaimerButtonsWhere>;
  buttons_exists?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_ne?: InputMaybe<Scalars['String']>;
  color_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expires_at?: InputMaybe<Scalars['DateTime']>;
  expires_at_exists?: InputMaybe<Scalars['Boolean']>;
  expires_at_gt?: InputMaybe<Scalars['DateTime']>;
  expires_at_gte?: InputMaybe<Scalars['DateTime']>;
  expires_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  expires_at_lt?: InputMaybe<Scalars['DateTime']>;
  expires_at_lte?: InputMaybe<Scalars['DateTime']>;
  expires_at_ne?: InputMaybe<Scalars['DateTime']>;
  expires_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  header?: InputMaybe<Scalars['String']>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  header_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  header_ne?: InputMaybe<Scalars['String']>;
  header_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nosnippet?: InputMaybe<Scalars['Boolean']>;
  nosnippet_exists?: InputMaybe<Scalars['Boolean']>;
  nosnippet_ne?: InputMaybe<Scalars['Boolean']>;
  plain?: InputMaybe<Scalars['Boolean']>;
  plain_exists?: InputMaybe<Scalars['Boolean']>;
  plain_ne?: InputMaybe<Scalars['Boolean']>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<DisclaimerTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type EntrySystemField = {
  __typename?: 'EntrySystemField';
  branch?: Maybe<Scalars['String']>;
  content_type_uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  extensionConnection?: Maybe<SysExtensionConnection>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<SystemPublishDetails>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};


export type EntrySystemFieldExtensionConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum EvalReferenceEnum {
  All = 'ALL',
  Any = 'ANY'
}

export type ExternalLink = {
  __typename?: 'ExternalLink';
  link?: Maybe<Link>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
};

export enum ExternalLinkOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type ExternalLinkTaxonomyWhere = {
  department?: InputMaybe<ExternalLinkTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ExternalLinkTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<ExternalLinkTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<ExternalLinkTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<ExternalLinkTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<ExternalLinkTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ExternalLinkTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ExternalLinkTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ExternalLinkTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ExternalLinkTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ExternalLinkWhere = {
  AND?: InputMaybe<Array<InputMaybe<ExternalLinkWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ExternalLinkWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<ExternalLinkTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Faq = {
  __typename?: 'Faq';
  categories?: Maybe<Array<Maybe<FaqCategories>>>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FaqCategories = {
  __typename?: 'FaqCategories';
  category?: Maybe<Scalars['String']>;
  faqs?: Maybe<Array<Maybe<FaqCategoriesFaqs>>>;
};

export type FaqCategoriesFaqs = {
  __typename?: 'FaqCategoriesFaqs';
  answer?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['String']>;
};

export type FaqCategoriesFaqsWhere = {
  answer?: InputMaybe<Scalars['String']>;
  answer_exists?: InputMaybe<Scalars['Boolean']>;
  answer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  answer_ne?: InputMaybe<Scalars['String']>;
  answer_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question?: InputMaybe<Scalars['String']>;
  question_exists?: InputMaybe<Scalars['Boolean']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question_ne?: InputMaybe<Scalars['String']>;
  question_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FaqCategoriesWhere = {
  category?: InputMaybe<Scalars['String']>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_ne?: InputMaybe<Scalars['String']>;
  category_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  faqs?: InputMaybe<FaqCategoriesFaqsWhere>;
  faqs_exists?: InputMaybe<Scalars['Boolean']>;
};

export enum FaqOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type FaqTaxonomyWhere = {
  department?: InputMaybe<FaqTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FaqTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<FaqTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<FaqTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<FaqTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<FaqTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FaqTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type FaqTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type FaqTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type FaqTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type FaqWhere = {
  AND?: InputMaybe<Array<InputMaybe<FaqWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqWhere>>>;
  categories?: InputMaybe<FaqCategoriesWhere>;
  categories_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<FaqTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type FeaturedContentComponent = {
  __typename?: 'FeaturedContentComponent';
  body?: Maybe<Scalars['String']>;
  cloudinary_image?: Maybe<Scalars['JSON']>;
  color?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  imageConnection?: Maybe<SysAssetConnection>;
  link?: Maybe<Link>;
  subtitle?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
};

export enum FeaturedContentComponentOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type FeaturedContentComponentTaxonomyWhere = {
  department?: InputMaybe<FeaturedContentComponentTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FeaturedContentComponentTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<FeaturedContentComponentTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<FeaturedContentComponentTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<FeaturedContentComponentTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<FeaturedContentComponentTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FeaturedContentComponentTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type FeaturedContentComponentTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type FeaturedContentComponentTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type FeaturedContentComponentTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type FeaturedContentComponentWhere = {
  AND?: InputMaybe<Array<InputMaybe<FeaturedContentComponentWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<FeaturedContentComponentWhere>>>;
  body?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_ne?: InputMaybe<Scalars['String']>;
  body_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cloudinary_image?: InputMaybe<Scalars['JSON']>;
  cloudinary_image_exists?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_ne?: InputMaybe<Scalars['String']>;
  color_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image?: InputMaybe<SysAssetWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_ne?: InputMaybe<Scalars['String']>;
  subtitle_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<FeaturedContentComponentTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type GlobalLocation = {
  __typename?: 'GlobalLocation';
  amenities?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GlobalLocationWhere = {
  amenities?: InputMaybe<Scalars['String']>;
  amenities_exists?: InputMaybe<Scalars['Boolean']>;
  amenities_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amenities_ne?: InputMaybe<Scalars['String']>;
  amenities_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories?: InputMaybe<Scalars['String']>;
  categories_exists?: InputMaybe<Scalars['Boolean']>;
  categories_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories_ne?: InputMaybe<Scalars['String']>;
  categories_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HikingTrail = {
  __typename?: 'HikingTrail';
  class?: Maybe<Scalars['String']>;
  hiking_spree?: Maybe<Scalars['Boolean']>;
  locationConnection?: Maybe<HikingTrailLocationConnection>;
  mapConnection?: Maybe<SysAssetConnection>;
  miles?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
};

export type HikingTrailLocationConnection = {
  __typename?: 'HikingTrailLocationConnection';
  edges?: Maybe<Array<Maybe<HikingTrailLocationEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HikingTrailLocationEdge = {
  __typename?: 'HikingTrailLocationEdge';
  node?: Maybe<HikingTrailLocationNode>;
};

export type HikingTrailLocationNode = Location;

export type HikingTrailLocationWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  location?: InputMaybe<LocationWhere>;
};

export enum HikingTrailOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type HikingTrailTaxonomyWhere = {
  department?: InputMaybe<HikingTrailTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HikingTrailTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<HikingTrailTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<HikingTrailTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<HikingTrailTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<HikingTrailTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HikingTrailTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type HikingTrailTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type HikingTrailTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type HikingTrailTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type HikingTrailWhere = {
  AND?: InputMaybe<Array<InputMaybe<HikingTrailWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<HikingTrailWhere>>>;
  class?: InputMaybe<Scalars['String']>;
  class_exists?: InputMaybe<Scalars['Boolean']>;
  class_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  class_ne?: InputMaybe<Scalars['String']>;
  class_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hiking_spree?: InputMaybe<Scalars['Boolean']>;
  hiking_spree_exists?: InputMaybe<Scalars['Boolean']>;
  hiking_spree_ne?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<HikingTrailLocationWhere>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  map?: InputMaybe<SysAssetWhere>;
  map_exists?: InputMaybe<Scalars['Boolean']>;
  miles?: InputMaybe<Scalars['Float']>;
  miles_exists?: InputMaybe<Scalars['Boolean']>;
  miles_gt?: InputMaybe<Scalars['Float']>;
  miles_gte?: InputMaybe<Scalars['Float']>;
  miles_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  miles_lt?: InputMaybe<Scalars['Float']>;
  miles_lte?: InputMaybe<Scalars['Float']>;
  miles_ne?: InputMaybe<Scalars['Float']>;
  miles_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  rating?: InputMaybe<Scalars['String']>;
  rating_exists?: InputMaybe<Scalars['Boolean']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rating_ne?: InputMaybe<Scalars['String']>;
  rating_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<HikingTrailTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Home = {
  __typename?: 'Home';
  alertConnection?: Maybe<HomeAlertConnection>;
  banner_imageConnection?: Maybe<SysAssetConnection>;
  banner_image_cloudinary?: Maybe<Scalars['JSON']>;
  footer_linksConnection?: Maybe<HomeFooterLinksConnection>;
  footer_links_manual?: Maybe<Array<Maybe<Link>>>;
  footer_social_linksConnection?: Maybe<HomeFooterSocialLinksConnection>;
  locationConnection?: Maybe<HomeLocationConnection>;
  logo_darkConnection?: Maybe<SysAssetConnection>;
  logo_dark_cloudinary?: Maybe<Scalars['JSON']>;
  logo_lightConnection?: Maybe<SysAssetConnection>;
  logo_light_cloudinary?: Maybe<Scalars['JSON']>;
  navigation?: Maybe<Array<Maybe<HomeNavigation>>>;
  placeholder_image?: Maybe<Scalars['JSON']>;
  section_blocks?: Maybe<SectionBlocks>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  website_feedback_url?: Maybe<Link>;
};


export type HomeFooter_LinksConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefHomeFooterLinksWhere>;
};


export type HomeFooter_Social_LinksConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefHomeFooterSocialLinksWhere>;
};

export type HomeAlertConnection = {
  __typename?: 'HomeAlertConnection';
  edges?: Maybe<Array<Maybe<HomeAlertEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HomeAlertEdge = {
  __typename?: 'HomeAlertEdge';
  node?: Maybe<HomeAlertNode>;
};

export type HomeAlertNode = SiteAlert;

export type HomeAlertWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  site_alert?: InputMaybe<SiteAlertWhere>;
};

export type HomeFooterLinksConnection = {
  __typename?: 'HomeFooterLinksConnection';
  edges?: Maybe<Array<Maybe<HomeFooterLinksEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HomeFooterLinksEdge = {
  __typename?: 'HomeFooterLinksEdge';
  node?: Maybe<HomeFooterLinksNode>;
};

export type HomeFooterLinksNode = Page;

export type HomeFooterLinksWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  page?: InputMaybe<PageWhere>;
};

export type HomeFooterSocialLinksConnection = {
  __typename?: 'HomeFooterSocialLinksConnection';
  edges?: Maybe<Array<Maybe<HomeFooterSocialLinksEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HomeFooterSocialLinksEdge = {
  __typename?: 'HomeFooterSocialLinksEdge';
  node?: Maybe<HomeFooterSocialLinksNode>;
};

export type HomeFooterSocialLinksNode = SocialPlatform;

export type HomeFooterSocialLinksWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  social_platform?: InputMaybe<SocialPlatformWhere>;
};

export type HomeLocationConnection = {
  __typename?: 'HomeLocationConnection';
  edges?: Maybe<Array<Maybe<HomeLocationEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HomeLocationEdge = {
  __typename?: 'HomeLocationEdge';
  node?: Maybe<HomeLocationNode>;
};

export type HomeLocationNode = Location;

export type HomeLocationWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  location?: InputMaybe<LocationWhere>;
};

export type HomeNavigation = HomeNavigationSiteSection;

export type HomeNavigationSiteSection = {
  __typename?: 'HomeNavigationSiteSection';
  SiteSection?: Maybe<HomeNavigationSiteSectionBlock>;
};

export type HomeNavigationSiteSectionBlock = {
  __typename?: 'HomeNavigationSiteSectionBlock';
  icon?: Maybe<Scalars['String']>;
  pageConnection?: Maybe<HomeNavigationSiteSectionBlockPageConnection>;
};

export type HomeNavigationSiteSectionBlockPageConnection = {
  __typename?: 'HomeNavigationSiteSectionBlockPageConnection';
  edges?: Maybe<Array<Maybe<HomeNavigationSiteSectionBlockPageEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HomeNavigationSiteSectionBlockPageEdge = {
  __typename?: 'HomeNavigationSiteSectionBlockPageEdge';
  node?: Maybe<HomeNavigationSiteSectionBlockPageNode>;
};

export type HomeNavigationSiteSectionBlockPageNode = Page;

export type HomeNavigationSiteSectionBlockPageWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  page?: InputMaybe<PageWhere>;
};

export type HomeNavigationSiteSectionBlockWhere = {
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page?: InputMaybe<HomeNavigationSiteSectionBlockPageWhere>;
  page_exists?: InputMaybe<Scalars['Boolean']>;
};

export type HomeNavigationWhere = {
  SiteSection?: InputMaybe<HomeNavigationSiteSectionBlockWhere>;
  SiteSection_exists?: InputMaybe<Scalars['Boolean']>;
};

export enum HomeOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type HomeWhere = {
  AND?: InputMaybe<Array<InputMaybe<HomeWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<HomeWhere>>>;
  alert?: InputMaybe<HomeAlertWhere>;
  alert_exists?: InputMaybe<Scalars['Boolean']>;
  banner_image?: InputMaybe<SysAssetWhere>;
  banner_image_cloudinary?: InputMaybe<Scalars['JSON']>;
  banner_image_cloudinary_exists?: InputMaybe<Scalars['Boolean']>;
  banner_image_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  footer_links?: InputMaybe<HomeFooterLinksWhere>;
  footer_links_count?: InputMaybe<Scalars['Int']>;
  footer_links_exists?: InputMaybe<Scalars['Boolean']>;
  footer_links_manual?: InputMaybe<LinkWhere>;
  footer_links_manual_exists?: InputMaybe<Scalars['Boolean']>;
  footer_social_links?: InputMaybe<HomeFooterSocialLinksWhere>;
  footer_social_links_count?: InputMaybe<Scalars['Int']>;
  footer_social_links_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<HomeLocationWhere>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  logo_dark?: InputMaybe<SysAssetWhere>;
  logo_dark_cloudinary?: InputMaybe<Scalars['JSON']>;
  logo_dark_cloudinary_exists?: InputMaybe<Scalars['Boolean']>;
  logo_dark_exists?: InputMaybe<Scalars['Boolean']>;
  logo_light?: InputMaybe<SysAssetWhere>;
  logo_light_cloudinary?: InputMaybe<Scalars['JSON']>;
  logo_light_cloudinary_exists?: InputMaybe<Scalars['Boolean']>;
  logo_light_exists?: InputMaybe<Scalars['Boolean']>;
  navigation?: InputMaybe<HomeNavigationWhere>;
  navigation_exists?: InputMaybe<Scalars['Boolean']>;
  placeholder_image?: InputMaybe<Scalars['JSON']>;
  placeholder_image_exists?: InputMaybe<Scalars['Boolean']>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  section_blocks?: InputMaybe<SectionBlocksWhere>;
  section_blocks_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  website_feedback_url?: InputMaybe<LinkWhere>;
  website_feedback_url_exists?: InputMaybe<Scalars['Boolean']>;
};

export type Htv = {
  __typename?: 'Htv';
  live_video_id?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum HtvOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type HtvWhere = {
  AND?: InputMaybe<Array<InputMaybe<HtvWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<HtvWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  live_video_id?: InputMaybe<Scalars['String']>;
  live_video_id_exists?: InputMaybe<Scalars['Boolean']>;
  live_video_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  live_video_id_ne?: InputMaybe<Scalars['String']>;
  live_video_id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IframeApp = {
  __typename?: 'IframeApp';
  aspect_ratio?: Maybe<Scalars['Float']>;
  container_url?: Maybe<Scalars['Boolean']>;
  display_external_link?: Maybe<Scalars['Boolean']>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum IframeAppOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type IframeAppTaxonomyWhere = {
  department?: InputMaybe<IframeAppTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IframeAppTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<IframeAppTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<IframeAppTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<IframeAppTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<IframeAppTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IframeAppTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type IframeAppTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type IframeAppTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type IframeAppTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type IframeAppWhere = {
  AND?: InputMaybe<Array<InputMaybe<IframeAppWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<IframeAppWhere>>>;
  aspect_ratio?: InputMaybe<Scalars['Float']>;
  aspect_ratio_exists?: InputMaybe<Scalars['Boolean']>;
  aspect_ratio_gt?: InputMaybe<Scalars['Float']>;
  aspect_ratio_gte?: InputMaybe<Scalars['Float']>;
  aspect_ratio_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  aspect_ratio_lt?: InputMaybe<Scalars['Float']>;
  aspect_ratio_lte?: InputMaybe<Scalars['Float']>;
  aspect_ratio_ne?: InputMaybe<Scalars['Float']>;
  aspect_ratio_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  container_url?: InputMaybe<Scalars['Boolean']>;
  container_url_exists?: InputMaybe<Scalars['Boolean']>;
  container_url_ne?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  display_external_link?: InputMaybe<Scalars['Boolean']>;
  display_external_link_exists?: InputMaybe<Scalars['Boolean']>;
  display_external_link_ne?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<IframeAppTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ImageGallery = {
  __typename?: 'ImageGallery';
  cycle?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['JSON']>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
};

export enum ImageGalleryOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type ImageGalleryTaxonomyWhere = {
  department?: InputMaybe<ImageGalleryTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImageGalleryTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<ImageGalleryTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<ImageGalleryTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<ImageGalleryTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<ImageGalleryTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImageGalleryTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ImageGalleryTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ImageGalleryTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ImageGalleryTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type ImageGalleryWhere = {
  AND?: InputMaybe<Array<InputMaybe<ImageGalleryWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageGalleryWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cycle?: InputMaybe<Scalars['Boolean']>;
  cycle_exists?: InputMaybe<Scalars['Boolean']>;
  cycle_ne?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images?: InputMaybe<Scalars['JSON']>;
  images_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<ImageGalleryTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type LandingPage = {
  __typename?: 'LandingPage';
  hide_header?: Maybe<Scalars['Boolean']>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  visual_builder?: Maybe<VisualBuilder>;
};

export enum LandingPageOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type LandingPageTaxonomyWhere = {
  department?: InputMaybe<LandingPageTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LandingPageTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<LandingPageTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<LandingPageTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<LandingPageTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<LandingPageTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LandingPageTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type LandingPageTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type LandingPageTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type LandingPageTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type LandingPageWhere = {
  AND?: InputMaybe<Array<InputMaybe<LandingPageWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<LandingPageWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hide_header?: InputMaybe<Scalars['Boolean']>;
  hide_header_exists?: InputMaybe<Scalars['Boolean']>;
  hide_header_ne?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<LandingPageTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  visual_builder?: InputMaybe<VisualBuilderWhere>;
  visual_builder_exists?: InputMaybe<Scalars['Boolean']>;
};

export type Link = {
  __typename?: 'Link';
  href?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type LinkWhere = {
  href?: InputMaybe<Scalars['String']>;
  href_exists?: InputMaybe<Scalars['Boolean']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  href_ne?: InputMaybe<Scalars['String']>;
  href_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Location = {
  __typename?: 'Location';
  address?: Maybe<Address>;
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  amenities?: Maybe<Array<Maybe<Scalars['String']>>>;
  base?: Maybe<BasePage>;
  blocks?: Maybe<Array<Maybe<LocationBlocks>>>;
  closed?: Maybe<Scalars['Boolean']>;
  closure_notes?: Maybe<Array<Maybe<Scalars['String']>>>;
  contact_phone?: Maybe<Scalars['String']>;
  entrance_fees?: Maybe<Scalars['String']>;
  fees?: Maybe<Array<Maybe<Scalars['Float']>>>;
  global_location?: Maybe<GlobalLocation>;
  hours?: Maybe<Array<Maybe<Scalars['String']>>>;
  location_categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Scalars['String']>;
  section_blocks?: Maybe<SectionBlocks>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LocationBlocks = LocationBlocksGeneric | LocationBlocksIframeApp;

export type LocationBlocksGeneric = {
  __typename?: 'LocationBlocksGeneric';
  Generic?: Maybe<LocationBlocksGenericBlock>;
};

export type LocationBlocksGenericBlock = {
  __typename?: 'LocationBlocksGenericBlock';
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type LocationBlocksGenericBlockWhere = {
  body?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_ne?: InputMaybe<Scalars['String']>;
  body_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LocationBlocksIframeApp = {
  __typename?: 'LocationBlocksIframeApp';
  Iframe_App?: Maybe<LocationBlocksIframeAppBlock>;
};

export type LocationBlocksIframeAppBlock = {
  __typename?: 'LocationBlocksIframeAppBlock';
  appConnection?: Maybe<LocationBlocksIframeAppBlockAppConnection>;
};

export type LocationBlocksIframeAppBlockAppConnection = {
  __typename?: 'LocationBlocksIframeAppBlockAppConnection';
  edges?: Maybe<Array<Maybe<LocationBlocksIframeAppBlockAppEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LocationBlocksIframeAppBlockAppEdge = {
  __typename?: 'LocationBlocksIframeAppBlockAppEdge';
  node?: Maybe<LocationBlocksIframeAppBlockAppNode>;
};

export type LocationBlocksIframeAppBlockAppNode = IframeApp;

export type LocationBlocksIframeAppBlockAppWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  iframe_app?: InputMaybe<IframeAppWhere>;
};

export type LocationBlocksIframeAppBlockWhere = {
  app?: InputMaybe<LocationBlocksIframeAppBlockAppWhere>;
  app_exists?: InputMaybe<Scalars['Boolean']>;
};

export type LocationBlocksWhere = {
  Generic?: InputMaybe<LocationBlocksGenericBlockWhere>;
  Generic_exists?: InputMaybe<Scalars['Boolean']>;
  Iframe_App?: InputMaybe<LocationBlocksIframeAppBlockWhere>;
  Iframe_App_exists?: InputMaybe<Scalars['Boolean']>;
};

export type LocationNotice = {
  __typename?: 'LocationNotice';
  disclaimerConnection?: Maybe<LocationNoticeDisclaimerConnection>;
  display_in_body?: Maybe<Scalars['Boolean']>;
  global_location?: Maybe<GlobalLocation>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
};

export type LocationNoticeDisclaimerConnection = {
  __typename?: 'LocationNoticeDisclaimerConnection';
  edges?: Maybe<Array<Maybe<LocationNoticeDisclaimerEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LocationNoticeDisclaimerEdge = {
  __typename?: 'LocationNoticeDisclaimerEdge';
  node?: Maybe<LocationNoticeDisclaimerNode>;
};

export type LocationNoticeDisclaimerNode = Disclaimer;

export type LocationNoticeDisclaimerWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  disclaimer?: InputMaybe<DisclaimerWhere>;
};

export enum LocationNoticeOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type LocationNoticeTaxonomyWhere = {
  department?: InputMaybe<LocationNoticeTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LocationNoticeTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<LocationNoticeTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<LocationNoticeTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<LocationNoticeTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<LocationNoticeTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LocationNoticeTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type LocationNoticeTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type LocationNoticeTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type LocationNoticeTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type LocationNoticeWhere = {
  AND?: InputMaybe<Array<InputMaybe<LocationNoticeWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<LocationNoticeWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  disclaimer?: InputMaybe<LocationNoticeDisclaimerWhere>;
  disclaimer_exists?: InputMaybe<Scalars['Boolean']>;
  display_in_body?: InputMaybe<Scalars['Boolean']>;
  display_in_body_exists?: InputMaybe<Scalars['Boolean']>;
  display_in_body_ne?: InputMaybe<Scalars['Boolean']>;
  global_location?: InputMaybe<GlobalLocationWhere>;
  global_location_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<LocationNoticeTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum LocationOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type LocationTaxonomyWhere = {
  department?: InputMaybe<LocationTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LocationTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<LocationTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<LocationTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<LocationTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<LocationTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LocationTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type LocationTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type LocationTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type LocationTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type LocationWhere = {
  AND?: InputMaybe<Array<InputMaybe<LocationWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<LocationWhere>>>;
  address?: InputMaybe<AddressWhere>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  aliases?: InputMaybe<Scalars['String']>;
  aliases_exists?: InputMaybe<Scalars['Boolean']>;
  aliases_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aliases_ne?: InputMaybe<Scalars['String']>;
  aliases_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amenities?: InputMaybe<Scalars['String']>;
  amenities_exists?: InputMaybe<Scalars['Boolean']>;
  amenities_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amenities_ne?: InputMaybe<Scalars['String']>;
  amenities_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  base?: InputMaybe<BasePageWhere>;
  base_exists?: InputMaybe<Scalars['Boolean']>;
  blocks?: InputMaybe<LocationBlocksWhere>;
  blocks_exists?: InputMaybe<Scalars['Boolean']>;
  closed?: InputMaybe<Scalars['Boolean']>;
  closed_exists?: InputMaybe<Scalars['Boolean']>;
  closed_ne?: InputMaybe<Scalars['Boolean']>;
  closure_notes?: InputMaybe<Scalars['String']>;
  closure_notes_exists?: InputMaybe<Scalars['Boolean']>;
  closure_notes_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  closure_notes_ne?: InputMaybe<Scalars['String']>;
  closure_notes_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contact_phone?: InputMaybe<Scalars['String']>;
  contact_phone_exists?: InputMaybe<Scalars['Boolean']>;
  contact_phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contact_phone_ne?: InputMaybe<Scalars['String']>;
  contact_phone_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entrance_fees?: InputMaybe<Scalars['String']>;
  entrance_fees_exists?: InputMaybe<Scalars['Boolean']>;
  entrance_fees_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entrance_fees_ne?: InputMaybe<Scalars['String']>;
  entrance_fees_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fees?: InputMaybe<Scalars['Float']>;
  fees_exists?: InputMaybe<Scalars['Boolean']>;
  fees_gt?: InputMaybe<Scalars['Float']>;
  fees_gte?: InputMaybe<Scalars['Float']>;
  fees_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  fees_lt?: InputMaybe<Scalars['Float']>;
  fees_lte?: InputMaybe<Scalars['Float']>;
  fees_ne?: InputMaybe<Scalars['Float']>;
  fees_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  global_location?: InputMaybe<GlobalLocationWhere>;
  global_location_exists?: InputMaybe<Scalars['Boolean']>;
  hours?: InputMaybe<Scalars['String']>;
  hours_exists?: InputMaybe<Scalars['Boolean']>;
  hours_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hours_ne?: InputMaybe<Scalars['String']>;
  hours_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_categories?: InputMaybe<Scalars['String']>;
  location_categories_exists?: InputMaybe<Scalars['Boolean']>;
  location_categories_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_categories_ne?: InputMaybe<Scalars['String']>;
  location_categories_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes?: InputMaybe<Scalars['String']>;
  notes_exists?: InputMaybe<Scalars['Boolean']>;
  notes_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes_ne?: InputMaybe<Scalars['String']>;
  notes_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  section_blocks?: InputMaybe<SectionBlocksWhere>;
  section_blocks_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<LocationTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Page = {
  __typename?: 'Page';
  action_link?: Maybe<Link>;
  action_typeConnection?: Maybe<PageActionTypeConnection>;
  base?: Maybe<BasePage>;
  child_page_custom_sort_orderConnection?: Maybe<PageChildPageCustomSortOrderConnection>;
  departmentsConnection?: Maybe<PageDepartmentsConnection>;
  page_type?: Maybe<Scalars['String']>;
  parent?: Maybe<Parent>;
  redirect?: Maybe<PageRedirect>;
  sidebar?: Maybe<Sidebar>;
  slug?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  visual_builder?: Maybe<VisualBuilder>;
};


export type PageChild_Page_Custom_Sort_OrderConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefPageChildPageCustomSortOrderWhere>;
};


export type PageDepartmentsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefPageDepartmentsWhere>;
};

export type PageActionTypeConnection = {
  __typename?: 'PageActionTypeConnection';
  edges?: Maybe<Array<Maybe<PageActionTypeEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageActionTypeEdge = {
  __typename?: 'PageActionTypeEdge';
  node?: Maybe<PageActionTypeNode>;
};

export type PageActionTypeNode = ServiceActionType;

export type PageActionTypeWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  service_action_type?: InputMaybe<ServiceActionTypeWhere>;
};

export type PageChildPageCustomSortOrderConnection = {
  __typename?: 'PageChildPageCustomSortOrderConnection';
  edges?: Maybe<Array<Maybe<PageChildPageCustomSortOrderEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageChildPageCustomSortOrderEdge = {
  __typename?: 'PageChildPageCustomSortOrderEdge';
  node?: Maybe<PageChildPageCustomSortOrderNode>;
};

export type PageChildPageCustomSortOrderNode = Page;

export type PageChildPageCustomSortOrderWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  page?: InputMaybe<PageWhere>;
};

export type PageDepartmentsConnection = {
  __typename?: 'PageDepartmentsConnection';
  edges?: Maybe<Array<Maybe<PageDepartmentsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageDepartmentsEdge = {
  __typename?: 'PageDepartmentsEdge';
  node?: Maybe<PageDepartmentsNode>;
};

export type PageDepartmentsNode = Department;

export type PageDepartmentsWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  department?: InputMaybe<DepartmentWhere>;
};

export enum PageOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type PageRedirect = {
  __typename?: 'PageRedirect';
  active?: Maybe<Scalars['Boolean']>;
  target?: Maybe<Scalars['String']>;
};

export type PageRedirectWhere = {
  active?: InputMaybe<Scalars['Boolean']>;
  active_exists?: InputMaybe<Scalars['Boolean']>;
  active_ne?: InputMaybe<Scalars['Boolean']>;
  target?: InputMaybe<Scalars['String']>;
  target_exists?: InputMaybe<Scalars['Boolean']>;
  target_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  target_ne?: InputMaybe<Scalars['String']>;
  target_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageTaxonomyWhere = {
  department?: InputMaybe<PageTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<PageTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<PageTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<PageTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<PageTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type PageTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type PageTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type PageTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type PageWhere = {
  AND?: InputMaybe<Array<InputMaybe<PageWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<PageWhere>>>;
  action_link?: InputMaybe<LinkWhere>;
  action_link_exists?: InputMaybe<Scalars['Boolean']>;
  action_type?: InputMaybe<PageActionTypeWhere>;
  action_type_exists?: InputMaybe<Scalars['Boolean']>;
  base?: InputMaybe<BasePageWhere>;
  base_exists?: InputMaybe<Scalars['Boolean']>;
  child_page_custom_sort_order?: InputMaybe<PageChildPageCustomSortOrderWhere>;
  child_page_custom_sort_order_count?: InputMaybe<Scalars['Int']>;
  child_page_custom_sort_order_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  departments?: InputMaybe<PageDepartmentsWhere>;
  departments_count?: InputMaybe<Scalars['Int']>;
  departments_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page_type?: InputMaybe<Scalars['String']>;
  page_type_exists?: InputMaybe<Scalars['Boolean']>;
  page_type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page_type_ne?: InputMaybe<Scalars['String']>;
  page_type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parent?: InputMaybe<ParentWhere>;
  parent_exists?: InputMaybe<Scalars['Boolean']>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  redirect?: InputMaybe<PageRedirectWhere>;
  redirect_exists?: InputMaybe<Scalars['Boolean']>;
  sidebar?: InputMaybe<SidebarWhere>;
  sidebar_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_ne?: InputMaybe<Scalars['String']>;
  slug_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<PageTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  visual_builder?: InputMaybe<VisualBuilderWhere>;
  visual_builder_exists?: InputMaybe<Scalars['Boolean']>;
};

export type Parent = {
  __typename?: 'Parent';
  pageConnection?: Maybe<ParentPageConnection>;
};

export type ParentPageConnection = {
  __typename?: 'ParentPageConnection';
  edges?: Maybe<Array<Maybe<ParentPageEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ParentPageEdge = {
  __typename?: 'ParentPageEdge';
  node?: Maybe<ParentPageNode>;
};

export type ParentPageNode = Page;

export type ParentPageWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  page?: InputMaybe<PageWhere>;
};

export type ParentWhere = {
  page?: InputMaybe<ParentPageWhere>;
  page_exists?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  all_article?: Maybe<AllArticle>;
  all_asset_folder?: Maybe<AllAssetFolder>;
  all_assets?: Maybe<AllSysAsset>;
  all_calendar_event?: Maybe<AllCalendarEvent>;
  all_calendar_event_instance?: Maybe<AllCalendarEventInstance>;
  all_commissioner?: Maybe<AllCommissioner>;
  all_contact?: Maybe<AllContact>;
  all_council?: Maybe<AllCouncil>;
  all_county_leadership?: Maybe<AllCountyLeadership>;
  all_department?: Maybe<AllDepartment>;
  all_disclaimer?: Maybe<AllDisclaimer>;
  all_external_link?: Maybe<AllExternalLink>;
  all_faq?: Maybe<AllFaq>;
  all_featured_content_component?: Maybe<AllFeaturedContentComponent>;
  all_hiking_trail?: Maybe<AllHikingTrail>;
  all_home?: Maybe<AllHome>;
  all_htv?: Maybe<AllHtv>;
  all_iframe_app?: Maybe<AllIframeApp>;
  all_image_gallery?: Maybe<AllImageGallery>;
  all_landing_page?: Maybe<AllLandingPage>;
  all_location?: Maybe<AllLocation>;
  all_location_notice?: Maybe<AllLocationNotice>;
  all_page?: Maybe<AllPage>;
  all_redirect?: Maybe<AllRedirect>;
  all_search?: Maybe<AllSearch>;
  all_service_action_type?: Maybe<AllServiceActionType>;
  all_servicenow_category?: Maybe<AllServicenowCategory>;
  all_servicenow_kb_article?: Maybe<AllServicenowKbArticle>;
  all_settings?: Maybe<AllSettings>;
  all_site_alert?: Maybe<AllSiteAlert>;
  all_social_platform?: Maybe<AllSocialPlatform>;
  all_solid_waste_item?: Maybe<AllSolidWasteItem>;
  all_stay_safe?: Maybe<AllStaySafe>;
  article?: Maybe<Article>;
  asset_folder?: Maybe<AssetFolder>;
  assets?: Maybe<SysAsset>;
  calendar_event?: Maybe<CalendarEvent>;
  calendar_event_instance?: Maybe<CalendarEventInstance>;
  commissioner?: Maybe<Commissioner>;
  contact?: Maybe<Contact>;
  council?: Maybe<Council>;
  county_leadership?: Maybe<CountyLeadership>;
  department?: Maybe<Department>;
  disclaimer?: Maybe<Disclaimer>;
  external_link?: Maybe<ExternalLink>;
  faq?: Maybe<Faq>;
  featured_content_component?: Maybe<FeaturedContentComponent>;
  hiking_trail?: Maybe<HikingTrail>;
  home?: Maybe<Home>;
  htv?: Maybe<Htv>;
  iframe_app?: Maybe<IframeApp>;
  image_gallery?: Maybe<ImageGallery>;
  landing_page?: Maybe<LandingPage>;
  location?: Maybe<Location>;
  location_notice?: Maybe<LocationNotice>;
  page?: Maybe<Page>;
  redirect?: Maybe<Redirect>;
  search?: Maybe<Search>;
  service_action_type?: Maybe<ServiceActionType>;
  servicenow_category?: Maybe<ServicenowCategory>;
  servicenow_kb_article?: Maybe<ServicenowKbArticle>;
  settings?: Maybe<Settings>;
  site_alert?: Maybe<SiteAlert>;
  social_platform?: Maybe<SocialPlatform>;
  solid_waste_item?: Maybe<SolidWasteItem>;
  stay_safe?: Maybe<StaySafe>;
  taxonomies?: Maybe<SysTaxonomies>;
};


export type QueryAll_ArticleArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ArticleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticleWhere>;
};


export type QueryAll_Asset_FolderArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<AssetFolderOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFolderWhere>;
};


export type QueryAll_AssetsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<SysAssetOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysAssetWhere>;
};


export type QueryAll_Calendar_EventArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<CalendarEventOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CalendarEventWhere>;
};


export type QueryAll_Calendar_Event_InstanceArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<CalendarEventInstanceOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CalendarEventInstanceWhere>;
};


export type QueryAll_CommissionerArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<CommissionerOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommissionerWhere>;
};


export type QueryAll_ContactArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ContactOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactWhere>;
};


export type QueryAll_CouncilArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<CouncilOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CouncilWhere>;
};


export type QueryAll_County_LeadershipArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<CountyLeadershipOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CountyLeadershipWhere>;
};


export type QueryAll_DepartmentArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<DepartmentOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepartmentWhere>;
};


export type QueryAll_DisclaimerArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<DisclaimerOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DisclaimerWhere>;
};


export type QueryAll_External_LinkArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ExternalLinkOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ExternalLinkWhere>;
};


export type QueryAll_FaqArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<FaqOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqWhere>;
};


export type QueryAll_Featured_Content_ComponentArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<FeaturedContentComponentOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FeaturedContentComponentWhere>;
};


export type QueryAll_Hiking_TrailArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<HikingTrailOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HikingTrailWhere>;
};


export type QueryAll_HomeArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<HomeOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomeWhere>;
};


export type QueryAll_HtvArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<HtvOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HtvWhere>;
};


export type QueryAll_Iframe_AppArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<IframeAppOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IframeAppWhere>;
};


export type QueryAll_Image_GalleryArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ImageGalleryOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageGalleryWhere>;
};


export type QueryAll_Landing_PageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<LandingPageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LandingPageWhere>;
};


export type QueryAll_LocationArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<LocationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LocationWhere>;
};


export type QueryAll_Location_NoticeArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<LocationNoticeOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LocationNoticeWhere>;
};


export type QueryAll_PageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<PageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhere>;
};


export type QueryAll_RedirectArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<RedirectOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RedirectWhere>;
};


export type QueryAll_SearchArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<SearchOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SearchWhere>;
};


export type QueryAll_Service_Action_TypeArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ServiceActionTypeOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceActionTypeWhere>;
};


export type QueryAll_Servicenow_CategoryArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ServicenowCategoryOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServicenowCategoryWhere>;
};


export type QueryAll_Servicenow_Kb_ArticleArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ServicenowKbArticleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServicenowKbArticleWhere>;
};


export type QueryAll_SettingsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<SettingsOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingsWhere>;
};


export type QueryAll_Site_AlertArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<SiteAlertOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiteAlertWhere>;
};


export type QueryAll_Social_PlatformArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<SocialPlatformOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialPlatformWhere>;
};


export type QueryAll_Solid_Waste_ItemArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<SolidWasteItemOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SolidWasteItemWhere>;
};


export type QueryAll_Stay_SafeArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<StaySafeOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StaySafeWhere>;
};


export type QueryArticleArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryAsset_FolderArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryAssetsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  uid: Scalars['String'];
};


export type QueryCalendar_EventArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryCalendar_Event_InstanceArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryCommissionerArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryContactArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryCouncilArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryCounty_LeadershipArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryDepartmentArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryDisclaimerArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryExternal_LinkArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryFaqArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryFeatured_Content_ComponentArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryHiking_TrailArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryHomeArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryHtvArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryIframe_AppArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryImage_GalleryArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryLanding_PageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryLocationArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryLocation_NoticeArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryPageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryRedirectArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QuerySearchArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryService_Action_TypeArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryServicenow_CategoryArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryServicenow_Kb_ArticleArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QuerySettingsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QuerySite_AlertArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QuerySocial_PlatformArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QuerySolid_Waste_ItemArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryStay_SafeArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryTaxonomiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['TaxonomyJSON']>;
};

export type Redirect = {
  __typename?: 'Redirect';
  sitecore_guid?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  target?: Maybe<Scalars['String']>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
};

export enum RedirectOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type RedirectTaxonomyWhere = {
  department?: InputMaybe<RedirectTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RedirectTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<RedirectTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<RedirectTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<RedirectTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<RedirectTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RedirectTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type RedirectTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type RedirectTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type RedirectTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type RedirectWhere = {
  AND?: InputMaybe<Array<InputMaybe<RedirectWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<RedirectWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  sitecore_guid?: InputMaybe<Scalars['String']>;
  sitecore_guid_exists?: InputMaybe<Scalars['Boolean']>;
  sitecore_guid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sitecore_guid_ne?: InputMaybe<Scalars['String']>;
  sitecore_guid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  source?: InputMaybe<Scalars['String']>;
  source_exists?: InputMaybe<Scalars['Boolean']>;
  source_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  source_ne?: InputMaybe<Scalars['String']>;
  source_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  target?: InputMaybe<Scalars['String']>;
  target_exists?: InputMaybe<Scalars['Boolean']>;
  target_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  target_ne?: InputMaybe<Scalars['String']>;
  target_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<RedirectTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Search = {
  __typename?: 'Search';
  landing_pages?: Maybe<Array<Maybe<SearchLandingPages>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export type SearchLandingPages = {
  __typename?: 'SearchLandingPages';
  icon?: Maybe<Scalars['String']>;
  indices?: Maybe<Array<Maybe<SearchLandingPagesIndices>>>;
  name?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
};

export type SearchLandingPagesIndices = {
  __typename?: 'SearchLandingPagesIndices';
  filters?: Maybe<Array<Maybe<Scalars['String']>>>;
  filters_join?: Maybe<Scalars['String']>;
  hide_count?: Maybe<Scalars['Boolean']>;
  index_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prefix_environment?: Maybe<Scalars['Boolean']>;
  refinements?: Maybe<Array<Maybe<SearchLandingPagesIndicesRefinements>>>;
};

export type SearchLandingPagesIndicesRefinements = {
  __typename?: 'SearchLandingPagesIndicesRefinements';
  attribute?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SearchLandingPagesIndicesRefinementsWhere = {
  attribute?: InputMaybe<Scalars['String']>;
  attribute_exists?: InputMaybe<Scalars['Boolean']>;
  attribute_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  attribute_ne?: InputMaybe<Scalars['String']>;
  attribute_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  component?: InputMaybe<Scalars['String']>;
  component_exists?: InputMaybe<Scalars['Boolean']>;
  component_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  component_ne?: InputMaybe<Scalars['String']>;
  component_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SearchLandingPagesIndicesWhere = {
  filters?: InputMaybe<Scalars['String']>;
  filters_exists?: InputMaybe<Scalars['Boolean']>;
  filters_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filters_join?: InputMaybe<Scalars['String']>;
  filters_join_exists?: InputMaybe<Scalars['Boolean']>;
  filters_join_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filters_join_ne?: InputMaybe<Scalars['String']>;
  filters_join_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filters_ne?: InputMaybe<Scalars['String']>;
  filters_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hide_count?: InputMaybe<Scalars['Boolean']>;
  hide_count_exists?: InputMaybe<Scalars['Boolean']>;
  hide_count_ne?: InputMaybe<Scalars['Boolean']>;
  index_id?: InputMaybe<Scalars['String']>;
  index_id_exists?: InputMaybe<Scalars['Boolean']>;
  index_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index_id_ne?: InputMaybe<Scalars['String']>;
  index_id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  prefix_environment?: InputMaybe<Scalars['Boolean']>;
  prefix_environment_exists?: InputMaybe<Scalars['Boolean']>;
  prefix_environment_ne?: InputMaybe<Scalars['Boolean']>;
  refinements?: InputMaybe<SearchLandingPagesIndicesRefinementsWhere>;
  refinements_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SearchLandingPagesWhere = {
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  indices?: InputMaybe<SearchLandingPagesIndicesWhere>;
  indices_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  route?: InputMaybe<Scalars['String']>;
  route_exists?: InputMaybe<Scalars['Boolean']>;
  route_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  route_ne?: InputMaybe<Scalars['String']>;
  route_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum SearchOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type SearchWhere = {
  AND?: InputMaybe<Array<InputMaybe<SearchWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SearchWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  landing_pages?: InputMaybe<SearchLandingPagesWhere>;
  landing_pages_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type SectionBlocks = {
  __typename?: 'SectionBlocks';
  blocks?: Maybe<Array<Maybe<SectionBlocksBlocks>>>;
};

export type SectionBlocksBlocks = SectionBlocksBlocksDefault | SectionBlocksBlocksDivider | SectionBlocksBlocksEmergencyoperationalstatus | SectionBlocksBlocksImageGallery | SectionBlocksBlocksUniformcomposition | SectionBlocksBlocksVideos;

export type SectionBlocksBlocksDefault = {
  __typename?: 'SectionBlocksBlocksDefault';
  default?: Maybe<SectionBlocksBlocksDefaultBlock>;
};

export type SectionBlocksBlocksDefaultBlock = {
  __typename?: 'SectionBlocksBlocksDefaultBlock';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type SectionBlocksBlocksDefaultBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
};

export type SectionBlocksBlocksDivider = {
  __typename?: 'SectionBlocksBlocksDivider';
  divider?: Maybe<SectionBlocksBlocksDividerBlock>;
};

export type SectionBlocksBlocksDividerBlock = {
  __typename?: 'SectionBlocksBlocksDividerBlock';
  margin?: Maybe<Scalars['Float']>;
};

export type SectionBlocksBlocksDividerBlockWhere = {
  margin?: InputMaybe<Scalars['Float']>;
  margin_exists?: InputMaybe<Scalars['Boolean']>;
  margin_gt?: InputMaybe<Scalars['Float']>;
  margin_gte?: InputMaybe<Scalars['Float']>;
  margin_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  margin_lt?: InputMaybe<Scalars['Float']>;
  margin_lte?: InputMaybe<Scalars['Float']>;
  margin_ne?: InputMaybe<Scalars['Float']>;
  margin_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type SectionBlocksBlocksEmergencyoperationalstatus = {
  __typename?: 'SectionBlocksBlocksEmergencyoperationalstatus';
  emergencyoperationalstatus?: Maybe<SectionBlocksBlocksEmergencyoperationalstatusBlock>;
};

export type SectionBlocksBlocksEmergencyoperationalstatusBlock = {
  __typename?: 'SectionBlocksBlocksEmergencyoperationalstatusBlock';
  gradient?: Maybe<Scalars['String']>;
};

export type SectionBlocksBlocksEmergencyoperationalstatusBlockWhere = {
  gradient?: InputMaybe<Scalars['String']>;
  gradient_exists?: InputMaybe<Scalars['Boolean']>;
  gradient_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gradient_ne?: InputMaybe<Scalars['String']>;
  gradient_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SectionBlocksBlocksImageGallery = {
  __typename?: 'SectionBlocksBlocksImageGallery';
  ImageGallery?: Maybe<SectionBlocksBlocksImageGalleryBlock>;
};

export type SectionBlocksBlocksImageGalleryBlock = {
  __typename?: 'SectionBlocksBlocksImageGalleryBlock';
  galleryConnection?: Maybe<SectionBlocksBlocksImageGalleryBlockGalleryConnection>;
};

export type SectionBlocksBlocksImageGalleryBlockGalleryConnection = {
  __typename?: 'SectionBlocksBlocksImageGalleryBlockGalleryConnection';
  edges?: Maybe<Array<Maybe<SectionBlocksBlocksImageGalleryBlockGalleryEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SectionBlocksBlocksImageGalleryBlockGalleryEdge = {
  __typename?: 'SectionBlocksBlocksImageGalleryBlockGalleryEdge';
  node?: Maybe<SectionBlocksBlocksImageGalleryBlockGalleryNode>;
};

export type SectionBlocksBlocksImageGalleryBlockGalleryNode = ImageGallery;

export type SectionBlocksBlocksImageGalleryBlockGalleryWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  image_gallery?: InputMaybe<ImageGalleryWhere>;
};

export type SectionBlocksBlocksImageGalleryBlockWhere = {
  gallery?: InputMaybe<SectionBlocksBlocksImageGalleryBlockGalleryWhere>;
  gallery_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SectionBlocksBlocksUniformcomposition = {
  __typename?: 'SectionBlocksBlocksUniformcomposition';
  uniformcomposition?: Maybe<SectionBlocksBlocksUniformcompositionBlock>;
};

export type SectionBlocksBlocksUniformcompositionBlock = {
  __typename?: 'SectionBlocksBlocksUniformcompositionBlock';
  enabled?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
};

export type SectionBlocksBlocksUniformcompositionBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SectionBlocksBlocksVideos = {
  __typename?: 'SectionBlocksBlocksVideos';
  videos?: Maybe<SectionBlocksBlocksVideosBlock>;
};

export type SectionBlocksBlocksVideosBlock = {
  __typename?: 'SectionBlocksBlocksVideosBlock';
  color?: Maybe<Scalars['String']>;
  gradient?: Maybe<SectionBlocksBlocksVideosBlockGradient>;
  sources?: Maybe<Array<Maybe<Link>>>;
  title?: Maybe<Scalars['String']>;
};

export type SectionBlocksBlocksVideosBlockGradient = {
  __typename?: 'SectionBlocksBlocksVideosBlockGradient';
  degree?: Maybe<Scalars['Float']>;
  rgba?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SectionBlocksBlocksVideosBlockGradientWhere = {
  degree?: InputMaybe<Scalars['Float']>;
  degree_exists?: InputMaybe<Scalars['Boolean']>;
  degree_gt?: InputMaybe<Scalars['Float']>;
  degree_gte?: InputMaybe<Scalars['Float']>;
  degree_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  degree_lt?: InputMaybe<Scalars['Float']>;
  degree_lte?: InputMaybe<Scalars['Float']>;
  degree_ne?: InputMaybe<Scalars['Float']>;
  degree_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  rgba?: InputMaybe<Scalars['String']>;
  rgba_exists?: InputMaybe<Scalars['Boolean']>;
  rgba_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rgba_ne?: InputMaybe<Scalars['String']>;
  rgba_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SectionBlocksBlocksVideosBlockWhere = {
  color?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_ne?: InputMaybe<Scalars['String']>;
  color_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gradient?: InputMaybe<SectionBlocksBlocksVideosBlockGradientWhere>;
  gradient_exists?: InputMaybe<Scalars['Boolean']>;
  sources?: InputMaybe<LinkWhere>;
  sources_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SectionBlocksBlocksWhere = {
  ImageGallery?: InputMaybe<SectionBlocksBlocksImageGalleryBlockWhere>;
  ImageGallery_exists?: InputMaybe<Scalars['Boolean']>;
  default?: InputMaybe<SectionBlocksBlocksDefaultBlockWhere>;
  default_exists?: InputMaybe<Scalars['Boolean']>;
  divider?: InputMaybe<SectionBlocksBlocksDividerBlockWhere>;
  divider_exists?: InputMaybe<Scalars['Boolean']>;
  emergencyoperationalstatus?: InputMaybe<SectionBlocksBlocksEmergencyoperationalstatusBlockWhere>;
  emergencyoperationalstatus_exists?: InputMaybe<Scalars['Boolean']>;
  uniformcomposition?: InputMaybe<SectionBlocksBlocksUniformcompositionBlockWhere>;
  uniformcomposition_exists?: InputMaybe<Scalars['Boolean']>;
  videos?: InputMaybe<SectionBlocksBlocksVideosBlockWhere>;
  videos_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SectionBlocksWhere = {
  blocks?: InputMaybe<SectionBlocksBlocksWhere>;
  blocks_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ServiceActionType = {
  __typename?: 'ServiceActionType';
  icon?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum ServiceActionTypeOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type ServiceActionTypeWhere = {
  AND?: InputMaybe<Array<InputMaybe<ServiceActionTypeWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceActionTypeWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ServicenowCategory = {
  __typename?: 'ServicenowCategory';
  parent_categoryConnection?: Maybe<ServicenowCategoryParentCategoryConnection>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum ServicenowCategoryOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type ServicenowCategoryParentCategoryConnection = {
  __typename?: 'ServicenowCategoryParentCategoryConnection';
  edges?: Maybe<Array<Maybe<ServicenowCategoryParentCategoryEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ServicenowCategoryParentCategoryEdge = {
  __typename?: 'ServicenowCategoryParentCategoryEdge';
  node?: Maybe<ServicenowCategoryParentCategoryNode>;
};

export type ServicenowCategoryParentCategoryNode = ServicenowCategory;

export type ServicenowCategoryParentCategoryWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  servicenow_category?: InputMaybe<ServicenowCategoryWhere>;
};

export type ServicenowCategoryWhere = {
  AND?: InputMaybe<Array<InputMaybe<ServicenowCategoryWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ServicenowCategoryWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parent_category?: InputMaybe<ServicenowCategoryParentCategoryWhere>;
  parent_category_exists?: InputMaybe<Scalars['Boolean']>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ServicenowKbArticle = {
  __typename?: 'ServicenowKbArticle';
  global_field?: Maybe<BasePage>;
  servicenow_categoryConnection?: Maybe<ServicenowKbArticleServicenowCategoryConnection>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum ServicenowKbArticleOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type ServicenowKbArticleServicenowCategoryConnection = {
  __typename?: 'ServicenowKbArticleServicenowCategoryConnection';
  edges?: Maybe<Array<Maybe<ServicenowKbArticleServicenowCategoryEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ServicenowKbArticleServicenowCategoryEdge = {
  __typename?: 'ServicenowKbArticleServicenowCategoryEdge';
  node?: Maybe<ServicenowKbArticleServicenowCategoryNode>;
};

export type ServicenowKbArticleServicenowCategoryNode = ServicenowCategory;

export type ServicenowKbArticleServicenowCategoryWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  servicenow_category?: InputMaybe<ServicenowCategoryWhere>;
};

export type ServicenowKbArticleWhere = {
  AND?: InputMaybe<Array<InputMaybe<ServicenowKbArticleWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ServicenowKbArticleWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  global_field?: InputMaybe<BasePageWhere>;
  global_field_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  servicenow_category?: InputMaybe<ServicenowKbArticleServicenowCategoryWhere>;
  servicenow_category_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Settings = {
  __typename?: 'Settings';
  meta_noindex_calendar_event_days?: Maybe<Scalars['Float']>;
  meta_noindex_news_article_days?: Maybe<Scalars['Float']>;
  redirects?: Maybe<Array<Maybe<SettingsRedirects>>>;
  robots_text?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum SettingsOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type SettingsRedirects = {
  __typename?: 'SettingsRedirects';
  source?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type SettingsRedirectsWhere = {
  source?: InputMaybe<Scalars['String']>;
  source_exists?: InputMaybe<Scalars['Boolean']>;
  source_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  source_ne?: InputMaybe<Scalars['String']>;
  source_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  target?: InputMaybe<Scalars['String']>;
  target_exists?: InputMaybe<Scalars['Boolean']>;
  target_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  target_ne?: InputMaybe<Scalars['String']>;
  target_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SettingsWhere = {
  AND?: InputMaybe<Array<InputMaybe<SettingsWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SettingsWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  meta_noindex_calendar_event_days?: InputMaybe<Scalars['Float']>;
  meta_noindex_calendar_event_days_exists?: InputMaybe<Scalars['Boolean']>;
  meta_noindex_calendar_event_days_gt?: InputMaybe<Scalars['Float']>;
  meta_noindex_calendar_event_days_gte?: InputMaybe<Scalars['Float']>;
  meta_noindex_calendar_event_days_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  meta_noindex_calendar_event_days_lt?: InputMaybe<Scalars['Float']>;
  meta_noindex_calendar_event_days_lte?: InputMaybe<Scalars['Float']>;
  meta_noindex_calendar_event_days_ne?: InputMaybe<Scalars['Float']>;
  meta_noindex_calendar_event_days_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  meta_noindex_news_article_days?: InputMaybe<Scalars['Float']>;
  meta_noindex_news_article_days_exists?: InputMaybe<Scalars['Boolean']>;
  meta_noindex_news_article_days_gt?: InputMaybe<Scalars['Float']>;
  meta_noindex_news_article_days_gte?: InputMaybe<Scalars['Float']>;
  meta_noindex_news_article_days_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  meta_noindex_news_article_days_lt?: InputMaybe<Scalars['Float']>;
  meta_noindex_news_article_days_lte?: InputMaybe<Scalars['Float']>;
  meta_noindex_news_article_days_ne?: InputMaybe<Scalars['Float']>;
  meta_noindex_news_article_days_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  redirects?: InputMaybe<SettingsRedirectsWhere>;
  redirects_exists?: InputMaybe<Scalars['Boolean']>;
  robots_text?: InputMaybe<Scalars['String']>;
  robots_text_exists?: InputMaybe<Scalars['Boolean']>;
  robots_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  robots_text_ne?: InputMaybe<Scalars['String']>;
  robots_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Sidebar = {
  __typename?: 'Sidebar';
  blocks?: Maybe<Array<Maybe<SidebarBlocks>>>;
};

export type SidebarBlocks = SidebarBlocksArticle | SidebarBlocksContact | SidebarBlocksDisclaimer | SidebarBlocksImage | SidebarBlocksLocation;

export type SidebarBlocksArticle = {
  __typename?: 'SidebarBlocksArticle';
  article?: Maybe<SidebarBlocksArticleBlock>;
};

export type SidebarBlocksArticleBlock = {
  __typename?: 'SidebarBlocksArticleBlock';
  articleConnection?: Maybe<SidebarBlocksArticleBlockArticleConnection>;
};

export type SidebarBlocksArticleBlockArticleConnection = {
  __typename?: 'SidebarBlocksArticleBlockArticleConnection';
  edges?: Maybe<Array<Maybe<SidebarBlocksArticleBlockArticleEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SidebarBlocksArticleBlockArticleEdge = {
  __typename?: 'SidebarBlocksArticleBlockArticleEdge';
  node?: Maybe<SidebarBlocksArticleBlockArticleNode>;
};

export type SidebarBlocksArticleBlockArticleNode = Article;

export type SidebarBlocksArticleBlockArticleWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  article?: InputMaybe<ArticleWhere>;
};

export type SidebarBlocksArticleBlockWhere = {
  article?: InputMaybe<SidebarBlocksArticleBlockArticleWhere>;
  article_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SidebarBlocksContact = {
  __typename?: 'SidebarBlocksContact';
  Contact?: Maybe<SidebarBlocksContactBlock>;
};

export type SidebarBlocksContactBlock = {
  __typename?: 'SidebarBlocksContactBlock';
  contactConnection?: Maybe<SidebarBlocksContactBlockContactConnection>;
};

export type SidebarBlocksContactBlockContactConnection = {
  __typename?: 'SidebarBlocksContactBlockContactConnection';
  edges?: Maybe<Array<Maybe<SidebarBlocksContactBlockContactEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SidebarBlocksContactBlockContactEdge = {
  __typename?: 'SidebarBlocksContactBlockContactEdge';
  node?: Maybe<SidebarBlocksContactBlockContactNode>;
};

export type SidebarBlocksContactBlockContactNode = Contact;

export type SidebarBlocksContactBlockContactWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  contact?: InputMaybe<ContactWhere>;
};

export type SidebarBlocksContactBlockWhere = {
  contact?: InputMaybe<SidebarBlocksContactBlockContactWhere>;
  contact_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SidebarBlocksDisclaimer = {
  __typename?: 'SidebarBlocksDisclaimer';
  Disclaimer?: Maybe<SidebarBlocksDisclaimerBlock>;
};

export type SidebarBlocksDisclaimerBlock = {
  __typename?: 'SidebarBlocksDisclaimerBlock';
  disclaimerConnection?: Maybe<SidebarBlocksDisclaimerBlockDisclaimerConnection>;
};

export type SidebarBlocksDisclaimerBlockDisclaimerConnection = {
  __typename?: 'SidebarBlocksDisclaimerBlockDisclaimerConnection';
  edges?: Maybe<Array<Maybe<SidebarBlocksDisclaimerBlockDisclaimerEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SidebarBlocksDisclaimerBlockDisclaimerEdge = {
  __typename?: 'SidebarBlocksDisclaimerBlockDisclaimerEdge';
  node?: Maybe<SidebarBlocksDisclaimerBlockDisclaimerNode>;
};

export type SidebarBlocksDisclaimerBlockDisclaimerNode = Disclaimer;

export type SidebarBlocksDisclaimerBlockDisclaimerWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  disclaimer?: InputMaybe<DisclaimerWhere>;
};

export type SidebarBlocksDisclaimerBlockWhere = {
  disclaimer?: InputMaybe<SidebarBlocksDisclaimerBlockDisclaimerWhere>;
  disclaimer_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SidebarBlocksImage = {
  __typename?: 'SidebarBlocksImage';
  Image?: Maybe<SidebarBlocksImageBlock>;
};

export type SidebarBlocksImageBlock = {
  __typename?: 'SidebarBlocksImageBlock';
  external_linkConnection?: Maybe<SidebarBlocksImageBlockExternalLinkConnection>;
  image?: Maybe<Scalars['JSON']>;
  link?: Maybe<Link>;
};

export type SidebarBlocksImageBlockExternalLinkConnection = {
  __typename?: 'SidebarBlocksImageBlockExternalLinkConnection';
  edges?: Maybe<Array<Maybe<SidebarBlocksImageBlockExternalLinkEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SidebarBlocksImageBlockExternalLinkEdge = {
  __typename?: 'SidebarBlocksImageBlockExternalLinkEdge';
  node?: Maybe<SidebarBlocksImageBlockExternalLinkNode>;
};

export type SidebarBlocksImageBlockExternalLinkNode = ExternalLink;

export type SidebarBlocksImageBlockExternalLinkWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  external_link?: InputMaybe<ExternalLinkWhere>;
};

export type SidebarBlocksImageBlockWhere = {
  external_link?: InputMaybe<SidebarBlocksImageBlockExternalLinkWhere>;
  external_link_exists?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Scalars['JSON']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SidebarBlocksLocation = {
  __typename?: 'SidebarBlocksLocation';
  location?: Maybe<SidebarBlocksLocationBlock>;
};

export type SidebarBlocksLocationBlock = {
  __typename?: 'SidebarBlocksLocationBlock';
  locationConnection?: Maybe<SidebarBlocksLocationBlockLocationConnection>;
};

export type SidebarBlocksLocationBlockLocationConnection = {
  __typename?: 'SidebarBlocksLocationBlockLocationConnection';
  edges?: Maybe<Array<Maybe<SidebarBlocksLocationBlockLocationEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SidebarBlocksLocationBlockLocationEdge = {
  __typename?: 'SidebarBlocksLocationBlockLocationEdge';
  node?: Maybe<SidebarBlocksLocationBlockLocationNode>;
};

export type SidebarBlocksLocationBlockLocationNode = Location;

export type SidebarBlocksLocationBlockLocationWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  location?: InputMaybe<LocationWhere>;
};

export type SidebarBlocksLocationBlockWhere = {
  location?: InputMaybe<SidebarBlocksLocationBlockLocationWhere>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SidebarBlocksWhere = {
  Contact?: InputMaybe<SidebarBlocksContactBlockWhere>;
  Contact_exists?: InputMaybe<Scalars['Boolean']>;
  Disclaimer?: InputMaybe<SidebarBlocksDisclaimerBlockWhere>;
  Disclaimer_exists?: InputMaybe<Scalars['Boolean']>;
  Image?: InputMaybe<SidebarBlocksImageBlockWhere>;
  Image_exists?: InputMaybe<Scalars['Boolean']>;
  article?: InputMaybe<SidebarBlocksArticleBlockWhere>;
  article_exists?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<SidebarBlocksLocationBlockWhere>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SidebarWhere = {
  blocks?: InputMaybe<SidebarBlocksWhere>;
  blocks_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SiteAlert = {
  __typename?: 'SiteAlert';
  icon?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  system?: Maybe<EntrySystemField>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  title?: Maybe<Scalars['String']>;
};

export enum SiteAlertOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type SiteAlertTaxonomyWhere = {
  department?: InputMaybe<SiteAlertTaxonomyWhereDepartment>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SiteAlertTaxonomyWhereDepartment = {
  term?: InputMaybe<Scalars['String']>;
  term_above?: InputMaybe<SiteAlertTaxonomyWhereDepartmentTermAbove>;
  term_below?: InputMaybe<SiteAlertTaxonomyWhereDepartmentTermBelow>;
  term_eq_above?: InputMaybe<SiteAlertTaxonomyWhereDepartmentTermEqAbove>;
  term_eq_below?: InputMaybe<SiteAlertTaxonomyWhereDepartmentTermEqBelow>;
  term_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  term_ne?: InputMaybe<Scalars['String']>;
  term_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SiteAlertTaxonomyWhereDepartmentTermAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type SiteAlertTaxonomyWhereDepartmentTermBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type SiteAlertTaxonomyWhereDepartmentTermEqAbove = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type SiteAlertTaxonomyWhereDepartmentTermEqBelow = {
  levels?: InputMaybe<Scalars['Float']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type SiteAlertWhere = {
  AND?: InputMaybe<Array<InputMaybe<SiteAlertWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SiteAlertWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomies?: InputMaybe<SiteAlertTaxonomyWhere>;
  taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type SocialPlatform = {
  __typename?: 'SocialPlatform';
  icon?: Maybe<Scalars['String']>;
  share_url?: Maybe<Scalars['String']>;
  shareable?: Maybe<Scalars['Boolean']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum SocialPlatformOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type SocialPlatformWhere = {
  AND?: InputMaybe<Array<InputMaybe<SocialPlatformWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialPlatformWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  share_url?: InputMaybe<Scalars['String']>;
  share_url_exists?: InputMaybe<Scalars['Boolean']>;
  share_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  share_url_ne?: InputMaybe<Scalars['String']>;
  share_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareable?: InputMaybe<Scalars['Boolean']>;
  shareable_exists?: InputMaybe<Scalars['Boolean']>;
  shareable_ne?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type SolidWasteItem = {
  __typename?: 'SolidWasteItem';
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  base?: Maybe<BasePage>;
  county_locationsConnection?: Maybe<SolidWasteItemCountyLocationsConnection>;
  system?: Maybe<EntrySystemField>;
  third_party_locations?: Maybe<Array<Maybe<SolidWasteItemThirdPartyLocations>>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
};


export type SolidWasteItemCounty_LocationsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefSolidWasteItemCountyLocationsWhere>;
};

export type SolidWasteItemCountyLocationsConnection = {
  __typename?: 'SolidWasteItemCountyLocationsConnection';
  edges?: Maybe<Array<Maybe<SolidWasteItemCountyLocationsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SolidWasteItemCountyLocationsEdge = {
  __typename?: 'SolidWasteItemCountyLocationsEdge';
  node?: Maybe<SolidWasteItemCountyLocationsNode>;
};

export type SolidWasteItemCountyLocationsNode = Location;

export type SolidWasteItemCountyLocationsWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  location?: InputMaybe<LocationWhere>;
};

export enum SolidWasteItemOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type SolidWasteItemThirdPartyLocations = {
  __typename?: 'SolidWasteItemThirdPartyLocations';
  address?: Maybe<Address>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SolidWasteItemThirdPartyLocationsWhere = {
  address?: InputMaybe<AddressWhere>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SolidWasteItemWhere = {
  AND?: InputMaybe<Array<InputMaybe<SolidWasteItemWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SolidWasteItemWhere>>>;
  aliases?: InputMaybe<Scalars['String']>;
  aliases_exists?: InputMaybe<Scalars['Boolean']>;
  aliases_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aliases_ne?: InputMaybe<Scalars['String']>;
  aliases_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  base?: InputMaybe<BasePageWhere>;
  base_exists?: InputMaybe<Scalars['Boolean']>;
  county_locations?: InputMaybe<SolidWasteItemCountyLocationsWhere>;
  county_locations_count?: InputMaybe<Scalars['Int']>;
  county_locations_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  third_party_locations?: InputMaybe<SolidWasteItemThirdPartyLocationsWhere>;
  third_party_locations_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type StaySafe = {
  __typename?: 'StaySafe';
  activation_level?: Maybe<Scalars['String']>;
  active_events?: Maybe<Scalars['String']>;
  evacuation_levels?: Maybe<Array<Maybe<Scalars['String']>>>;
  evacuation_link?: Maybe<Link>;
  sandbag_locations?: Maybe<Array<Maybe<StaySafeSandbagLocations>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum StaySafeOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type StaySafeSandbagLocations = StaySafeSandbagLocationsLocation;

export type StaySafeSandbagLocationsLocation = {
  __typename?: 'StaySafeSandbagLocationsLocation';
  Location?: Maybe<StaySafeSandbagLocationsLocationBlock>;
};

export type StaySafeSandbagLocationsLocationBlock = {
  __typename?: 'StaySafeSandbagLocationsLocationBlock';
  locationConnection?: Maybe<StaySafeSandbagLocationsLocationBlockLocationConnection>;
  times?: Maybe<Array<Maybe<StaySafeSandbagLocationsLocationBlockTimes>>>;
};

export type StaySafeSandbagLocationsLocationBlockLocationConnection = {
  __typename?: 'StaySafeSandbagLocationsLocationBlockLocationConnection';
  edges?: Maybe<Array<Maybe<StaySafeSandbagLocationsLocationBlockLocationEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StaySafeSandbagLocationsLocationBlockLocationEdge = {
  __typename?: 'StaySafeSandbagLocationsLocationBlockLocationEdge';
  node?: Maybe<StaySafeSandbagLocationsLocationBlockLocationNode>;
};

export type StaySafeSandbagLocationsLocationBlockLocationNode = Location;

export type StaySafeSandbagLocationsLocationBlockLocationWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  location?: InputMaybe<LocationWhere>;
};

export type StaySafeSandbagLocationsLocationBlockTimes = StaySafeSandbagLocationsLocationBlockTimesTime;

export type StaySafeSandbagLocationsLocationBlockTimesTime = {
  __typename?: 'StaySafeSandbagLocationsLocationBlockTimesTime';
  Time?: Maybe<StaySafeSandbagLocationsLocationBlockTimesTimeBlock>;
};

export type StaySafeSandbagLocationsLocationBlockTimesTimeBlock = {
  __typename?: 'StaySafeSandbagLocationsLocationBlockTimesTimeBlock';
  end_time?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['DateTime']>;
};

export type StaySafeSandbagLocationsLocationBlockTimesTimeBlockWhere = {
  end_time?: InputMaybe<Scalars['DateTime']>;
  end_time_exists?: InputMaybe<Scalars['Boolean']>;
  end_time_gt?: InputMaybe<Scalars['DateTime']>;
  end_time_gte?: InputMaybe<Scalars['DateTime']>;
  end_time_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  end_time_lt?: InputMaybe<Scalars['DateTime']>;
  end_time_lte?: InputMaybe<Scalars['DateTime']>;
  end_time_ne?: InputMaybe<Scalars['DateTime']>;
  end_time_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notes?: InputMaybe<Scalars['String']>;
  notes_exists?: InputMaybe<Scalars['Boolean']>;
  notes_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes_ne?: InputMaybe<Scalars['String']>;
  notes_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  start_time?: InputMaybe<Scalars['DateTime']>;
  start_time_exists?: InputMaybe<Scalars['Boolean']>;
  start_time_gt?: InputMaybe<Scalars['DateTime']>;
  start_time_gte?: InputMaybe<Scalars['DateTime']>;
  start_time_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  start_time_lt?: InputMaybe<Scalars['DateTime']>;
  start_time_lte?: InputMaybe<Scalars['DateTime']>;
  start_time_ne?: InputMaybe<Scalars['DateTime']>;
  start_time_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type StaySafeSandbagLocationsLocationBlockTimesWhere = {
  Time?: InputMaybe<StaySafeSandbagLocationsLocationBlockTimesTimeBlockWhere>;
  Time_exists?: InputMaybe<Scalars['Boolean']>;
};

export type StaySafeSandbagLocationsLocationBlockWhere = {
  location?: InputMaybe<StaySafeSandbagLocationsLocationBlockLocationWhere>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  times?: InputMaybe<StaySafeSandbagLocationsLocationBlockTimesWhere>;
  times_exists?: InputMaybe<Scalars['Boolean']>;
};

export type StaySafeSandbagLocationsWhere = {
  Location?: InputMaybe<StaySafeSandbagLocationsLocationBlockWhere>;
  Location_exists?: InputMaybe<Scalars['Boolean']>;
};

export type StaySafeWhere = {
  AND?: InputMaybe<Array<InputMaybe<StaySafeWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<StaySafeWhere>>>;
  activation_level?: InputMaybe<Scalars['String']>;
  activation_level_exists?: InputMaybe<Scalars['Boolean']>;
  activation_level_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  activation_level_ne?: InputMaybe<Scalars['String']>;
  activation_level_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  active_events?: InputMaybe<Scalars['String']>;
  active_events_exists?: InputMaybe<Scalars['Boolean']>;
  active_events_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  active_events_ne?: InputMaybe<Scalars['String']>;
  active_events_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_by?: InputMaybe<Scalars['String']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_by_ne?: InputMaybe<Scalars['String']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  evacuation_levels?: InputMaybe<Scalars['String']>;
  evacuation_levels_exists?: InputMaybe<Scalars['Boolean']>;
  evacuation_levels_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  evacuation_levels_ne?: InputMaybe<Scalars['String']>;
  evacuation_levels_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  evacuation_link?: InputMaybe<LinkWhere>;
  evacuation_link_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  sandbag_locations?: InputMaybe<StaySafeSandbagLocationsWhere>;
  sandbag_locations_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_by?: InputMaybe<Scalars['String']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_ne?: InputMaybe<Scalars['Int']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type SysAsset = {
  __typename?: 'SysAsset';
  content_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimension?: Maybe<SysAssetDimension>;
  file_size?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  parent_uid?: Maybe<Scalars['String']>;
  permanent_url?: Maybe<Scalars['String']>;
  system?: Maybe<SysAssetSystemField>;
  title?: Maybe<Scalars['String']>;
  unique_identifier?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type SysAssetUrlArgs = {
  transform?: InputMaybe<SysAssetTransformUrl>;
};

/** WEBP images are usually lower in size and have good quality. */
export enum SysAssetAutoValues {
  Webp = 'WEBP'
}

export type SysAssetConnection = {
  __typename?: 'SysAssetConnection';
  edges?: Maybe<Array<Maybe<SysAssetEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SysAssetDimension = {
  __typename?: 'SysAssetDimension';
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type SysAssetDimensionWhere = {
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_ne?: InputMaybe<Scalars['Int']>;
  height_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_ne?: InputMaybe<Scalars['Int']>;
  width_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum SysAssetDisableValues {
  /** UPSCALE is always enabled, in which the image is upscaled if the output image (by specifying the width or height) is bigger than the source image */
  Upscale = 'UPSCALE'
}

/** This parameter allows an image to be downloaded or rendered on page */
export enum SysAssetDispositionValues {
  /** Allows to download an image */
  Attachment = 'ATTACHMENT',
  /** Allows an image to be rendered on page */
  Inline = 'INLINE'
}

export type SysAssetEdge = {
  __typename?: 'SysAssetEdge';
  node?: Maybe<SysAsset>;
};

export enum SysAssetFitValues {
  Bounds = 'BOUNDS',
  Crop = 'CROP'
}

export enum SysAssetImageFormats {
  /** Convert an image to GIF format */
  Gif = 'GIF',
  /** Convert an image to JPEG format */
  Jpg = 'JPG',
  /** A Progressive JPEG is an image file created using a compression method that displays higher detail in progression */
  Pjpg = 'PJPG',
  /** Convert an image to PNG format */
  Png = 'PNG',
  /** WEBP images are usually lower in size and have good quality */
  Webp = 'WEBP',
  /** WEBP Lossless format */
  Webpll = 'WEBPLL',
  /** WEBP Lossy format */
  Webply = 'WEBPLY'
}

export enum SysAssetOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export enum SysAssetOrientValues {
  /** Flip image horizontally and vertically */
  Both = 'BOTH',
  /** Set image to default */
  Default = 'DEFAULT',
  /** Flip image horizontally */
  Horizontally = 'HORIZONTALLY',
  /** Flip image horizontally and then rotate 90 degrees towards left */
  Rotate90Left = 'ROTATE90LEFT',
  /** Rotate image 90 degrees towards right */
  Rotate90Right = 'ROTATE90RIGHT',
  /** Flip image vertically */
  Vertically = 'VERTICALLY'
}

/** The overlay_align parameter allows you to put one image on top of another */
export enum SysAssetOverlayAlignValues {
  /** Align the overlay image to the bottom of the actual image */
  Bottom = 'BOTTOM',
  /** Align the overlay image to the center (horizontally) of the actual image */
  Center = 'CENTER',
  /** Align the overlay image to the left of the actual image */
  Left = 'LEFT',
  /** Align the overlay image to the middle (vertically) of the actual image */
  Middle = 'MIDDLE',
  /** Align the overlay image to the right of the actual image */
  Right = 'RIGHT',
  /** Align the overlay image to the top of the actual image */
  Top = 'TOP'
}

export enum SysAssetOverlayRepeatValues {
  /** Horizontal and vertical repetition */
  Both = 'BOTH',
  /** Horizontal repetition */
  X = 'X',
  /** Vertical repetition */
  Y = 'Y'
}

export type SysAssetSystemField = {
  __typename?: 'SysAssetSystemField';
  branch?: Maybe<Scalars['String']>;
  content_type_uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  extensionConnection?: Maybe<SysExtensionConnection>;
  publish_details?: Maybe<SystemPublishDetails>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};


export type SysAssetSystemFieldExtensionConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SysAssetTransformUrl = {
  /** When the auto parameter is set to webp, it enables WebP image support. WebP images have higher compression rate with minimum loss of quality. */
  auto?: InputMaybe<SysAssetAutoValues>;
  /** The bg-color parameter lets you set a backgroud color for the given image. This is useful when applying padding or for replacing the transparent pixels of an image */
  bg_color?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Scalars['String']>;
  /** The disable parameter disables the functionality that is enabled by default */
  disable?: InputMaybe<SysAssetDisableValues>;
  /** The disposition parameter lets you allow image to download or render.  */
  disposition?: InputMaybe<SysAssetDispositionValues>;
  /** The dpr parameter lets you deliver images with appropriate size to devices that come with a defined device pixel ratio. The device pixel ratio of any device determines the screen resolution that its CSS would interpret */
  dpr?: InputMaybe<Scalars['String']>;
  /** Fit parameter enables you to fit the given image properly within the specified height and width */
  fit?: InputMaybe<SysAssetFitValues>;
  /** Format parameter lets you converts a given image from one format to another */
  format?: InputMaybe<SysAssetImageFormats>;
  height?: InputMaybe<Scalars['String']>;
  /** The orient parameter lets you control the cardinal orientation of the given image */
  orient?: InputMaybe<SysAssetOrientValues>;
  overlay?: InputMaybe<Scalars['String']>;
  overlay_align?: InputMaybe<SysAssetOverlayAlignValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When height is defined in percentage, it relative to the output image */
  overlay_height?: InputMaybe<Scalars['String']>;
  /** The overlay_repeat parameter lets you define how the overlay image will be repeated on the given image */
  overlay_repeat?: InputMaybe<SysAssetOverlayRepeatValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When width is defined in percentage, it is relative to the output image */
  overlay_width?: InputMaybe<Scalars['String']>;
  /** This parameter lets you add extra pixels to the edges of an image. You can specify values for top, right, bottom, and left padding for an image */
  pad?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

export type SysAssetWhere = {
  AND?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dimension?: InputMaybe<SysAssetDimensionWhere>;
  dimension_exists?: InputMaybe<Scalars['Boolean']>;
  file_size?: InputMaybe<Scalars['Int']>;
  file_size_exists?: InputMaybe<Scalars['Boolean']>;
  file_size_gt?: InputMaybe<Scalars['Int']>;
  file_size_gte?: InputMaybe<Scalars['Int']>;
  file_size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  file_size_lt?: InputMaybe<Scalars['Int']>;
  file_size_lte?: InputMaybe<Scalars['Int']>;
  file_size_ne?: InputMaybe<Scalars['Int']>;
  file_size_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filename?: InputMaybe<Scalars['String']>;
  filename_exists?: InputMaybe<Scalars['Boolean']>;
  filename_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename_ne?: InputMaybe<Scalars['String']>;
  filename_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parent_uid?: InputMaybe<Scalars['String']>;
  parent_uid_exists?: InputMaybe<Scalars['Boolean']>;
  parent_uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parent_uid_ne?: InputMaybe<Scalars['String']>;
  parent_uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags?: InputMaybe<Scalars['String']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysBasePageNavigationWhere = {
  hide_in_navigation?: InputMaybe<Scalars['Boolean']>;
  hide_in_navigation_exists?: InputMaybe<Scalars['Boolean']>;
  hide_in_navigation_ne?: InputMaybe<Scalars['Boolean']>;
  hide_in_search_results?: InputMaybe<Scalars['Boolean']>;
  hide_in_search_results_exists?: InputMaybe<Scalars['Boolean']>;
  hide_in_search_results_ne?: InputMaybe<Scalars['Boolean']>;
  navigation_title?: InputMaybe<Scalars['String']>;
  navigation_title_exists?: InputMaybe<Scalars['Boolean']>;
  navigation_title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigation_title_ne?: InputMaybe<Scalars['String']>;
  navigation_title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysContactEmailsWhere = {
  address?: InputMaybe<Scalars['String']>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  address_ne?: InputMaybe<Scalars['String']>;
  address_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysContactPhonesWhere = {
  extension?: InputMaybe<Scalars['Float']>;
  extension_exists?: InputMaybe<Scalars['Boolean']>;
  extension_gt?: InputMaybe<Scalars['Float']>;
  extension_gte?: InputMaybe<Scalars['Float']>;
  extension_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  extension_lt?: InputMaybe<Scalars['Float']>;
  extension_lte?: InputMaybe<Scalars['Float']>;
  extension_ne?: InputMaybe<Scalars['Float']>;
  extension_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  number?: InputMaybe<Scalars['Float']>;
  number_exists?: InputMaybe<Scalars['Boolean']>;
  number_gt?: InputMaybe<Scalars['Float']>;
  number_gte?: InputMaybe<Scalars['Float']>;
  number_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  number_lt?: InputMaybe<Scalars['Float']>;
  number_lte?: InputMaybe<Scalars['Float']>;
  number_ne?: InputMaybe<Scalars['Float']>;
  number_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysExtensionConnection = {
  __typename?: 'SysExtensionConnection';
  edges?: Maybe<Array<Maybe<SysExtensionEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SysExtensionEdge = {
  __typename?: 'SysExtensionEdge';
  node?: Maybe<SysMetadata>;
};

export type SysLocationBlocksGenericBlockWhere = {
  body?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_ne?: InputMaybe<Scalars['String']>;
  body_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysLocationBlocksWhere = {
  Generic?: InputMaybe<SysLocationBlocksGenericBlockWhere>;
  Generic_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SysMetadata = {
  __typename?: 'SysMetadata';
  extension_uid?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type SysPageRedirectWhere = {
  active?: InputMaybe<Scalars['Boolean']>;
  active_exists?: InputMaybe<Scalars['Boolean']>;
  active_ne?: InputMaybe<Scalars['Boolean']>;
  target?: InputMaybe<Scalars['String']>;
  target_exists?: InputMaybe<Scalars['Boolean']>;
  target_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  target_ne?: InputMaybe<Scalars['String']>;
  target_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysRefAddressWhere = {
  address?: InputMaybe<Scalars['String']>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  address_ne?: InputMaybe<Scalars['String']>;
  address_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  city?: InputMaybe<Scalars['String']>;
  city_exists?: InputMaybe<Scalars['Boolean']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  city_ne?: InputMaybe<Scalars['String']>;
  city_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  google_map?: InputMaybe<Scalars['String']>;
  google_map_exists?: InputMaybe<Scalars['Boolean']>;
  google_map_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  google_map_ne?: InputMaybe<Scalars['String']>;
  google_map_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  latitude?: InputMaybe<Scalars['String']>;
  latitude_exists?: InputMaybe<Scalars['Boolean']>;
  latitude_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  latitude_ne?: InputMaybe<Scalars['String']>;
  latitude_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longitude?: InputMaybe<Scalars['String']>;
  longitude_exists?: InputMaybe<Scalars['Boolean']>;
  longitude_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longitude_ne?: InputMaybe<Scalars['String']>;
  longitude_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Scalars['String']>;
  state_exists?: InputMaybe<Scalars['Boolean']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_ne?: InputMaybe<Scalars['String']>;
  state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zip_code?: InputMaybe<Scalars['String']>;
  zip_code_exists?: InputMaybe<Scalars['Boolean']>;
  zip_code_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zip_code_ne?: InputMaybe<Scalars['String']>;
  zip_code_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysRefArticleCategoriesWhere = {
  categories?: InputMaybe<Scalars['String']>;
  categories_exists?: InputMaybe<Scalars['Boolean']>;
  categories_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories_ne?: InputMaybe<Scalars['String']>;
  categories_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysRefArticleDepartmentsWhere = {
  department?: InputMaybe<SysRefDepartmentWhere>;
};

export type SysRefArticleWhere = {
  article_categories?: InputMaybe<SysRefArticleCategoriesWhere>;
  article_type?: InputMaybe<Scalars['String']>;
  article_type_exists?: InputMaybe<Scalars['Boolean']>;
  article_type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  article_type_ne?: InputMaybe<Scalars['String']>;
  article_type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  base?: InputMaybe<SysRefBasePageWhere>;
  evergreen?: InputMaybe<Scalars['Boolean']>;
  evergreen_exists?: InputMaybe<Scalars['Boolean']>;
  evergreen_ne?: InputMaybe<Scalars['Boolean']>;
  sidebar?: InputMaybe<SysRefSidebarWhere>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysRefBasePageWhere = {
  lang?: InputMaybe<Scalars['String']>;
  lang_exists?: InputMaybe<Scalars['Boolean']>;
  lang_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang_ne?: InputMaybe<Scalars['String']>;
  lang_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigation?: InputMaybe<SysBasePageNavigationWhere>;
  posted_date?: InputMaybe<Scalars['DateTime']>;
  posted_date_exists?: InputMaybe<Scalars['Boolean']>;
  posted_date_gt?: InputMaybe<Scalars['DateTime']>;
  posted_date_gte?: InputMaybe<Scalars['DateTime']>;
  posted_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  posted_date_lt?: InputMaybe<Scalars['DateTime']>;
  posted_date_lte?: InputMaybe<Scalars['DateTime']>;
  posted_date_ne?: InputMaybe<Scalars['DateTime']>;
  posted_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  robots_noindex?: InputMaybe<Scalars['Boolean']>;
  robots_noindex_exists?: InputMaybe<Scalars['Boolean']>;
  robots_noindex_ne?: InputMaybe<Scalars['Boolean']>;
  short_description?: InputMaybe<Scalars['String']>;
  short_description_exists?: InputMaybe<Scalars['Boolean']>;
  short_description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  short_description_ne?: InputMaybe<Scalars['String']>;
  short_description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  show_table_of_contents?: InputMaybe<Scalars['Boolean']>;
  show_table_of_contents_exists?: InputMaybe<Scalars['Boolean']>;
  show_table_of_contents_ne?: InputMaybe<Scalars['Boolean']>;
  sitecore_guid?: InputMaybe<Scalars['String']>;
  sitecore_guid_exists?: InputMaybe<Scalars['Boolean']>;
  sitecore_guid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sitecore_guid_ne?: InputMaybe<Scalars['String']>;
  sitecore_guid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysRefCalendarEventWhere = {
  base?: InputMaybe<SysRefBasePageWhere>;
  calendar?: InputMaybe<Scalars['String']>;
  calendar_exists?: InputMaybe<Scalars['Boolean']>;
  calendar_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  calendar_ne?: InputMaybe<Scalars['String']>;
  calendar_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  default_event_browser_view?: InputMaybe<Scalars['String']>;
  default_event_browser_view_exists?: InputMaybe<Scalars['Boolean']>;
  default_event_browser_view_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  default_event_browser_view_ne?: InputMaybe<Scalars['String']>;
  default_event_browser_view_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysRefCommissionerAidesWhere = {
  contact?: InputMaybe<SysRefContactWhere>;
};

export type SysRefContactAdminAssistantWhere = {
  contact?: InputMaybe<SysRefContactWhere>;
};

export type SysRefContactWhere = {
  emails?: InputMaybe<SysContactEmailsWhere>;
  full_name?: InputMaybe<Scalars['String']>;
  full_name_exists?: InputMaybe<Scalars['Boolean']>;
  full_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  full_name_ne?: InputMaybe<Scalars['String']>;
  full_name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  job_title?: InputMaybe<Scalars['String']>;
  job_title_exists?: InputMaybe<Scalars['Boolean']>;
  job_title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  job_title_ne?: InputMaybe<Scalars['String']>;
  job_title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_note?: InputMaybe<Scalars['String']>;
  location_note_exists?: InputMaybe<Scalars['Boolean']>;
  location_note_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_note_ne?: InputMaybe<Scalars['String']>;
  location_note_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phones?: InputMaybe<SysContactPhonesWhere>;
  sitecore_guid?: InputMaybe<Scalars['String']>;
  sitecore_guid_exists?: InputMaybe<Scalars['Boolean']>;
  sitecore_guid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sitecore_guid_ne?: InputMaybe<Scalars['String']>;
  sitecore_guid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysRefCouncilContactWhere = {
  contact?: InputMaybe<SysRefContactWhere>;
};

export type SysRefCouncilEventsWhere = {
  calendar_event?: InputMaybe<SysRefCalendarEventWhere>;
};

export type SysRefCountyLeadershipSectionsLeadersWhere = {
  contact?: InputMaybe<SysRefContactWhere>;
};

export type SysRefDepartmentManagerContactWhere = {
  contact?: InputMaybe<SysRefContactWhere>;
};

export type SysRefDepartmentWhere = {
  base?: InputMaybe<SysRefBasePageWhere>;
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sidebar?: InputMaybe<SysRefSidebarWhere>;
  site_sections?: InputMaybe<Scalars['String']>;
  site_sections_exists?: InputMaybe<Scalars['Boolean']>;
  site_sections_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  site_sections_ne?: InputMaybe<Scalars['String']>;
  site_sections_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visual_builder?: InputMaybe<SysRefVisualBuilderWhere>;
};

export type SysRefGlobalLocationWhere = {
  amenities?: InputMaybe<Scalars['String']>;
  amenities_exists?: InputMaybe<Scalars['Boolean']>;
  amenities_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amenities_ne?: InputMaybe<Scalars['String']>;
  amenities_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories?: InputMaybe<Scalars['String']>;
  categories_exists?: InputMaybe<Scalars['Boolean']>;
  categories_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories_ne?: InputMaybe<Scalars['String']>;
  categories_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysRefHomeFooterLinksWhere = {
  page?: InputMaybe<SysRefPageWhere>;
};

export type SysRefHomeFooterSocialLinksWhere = {
  social_platform?: InputMaybe<SysRefSocialPlatformWhere>;
};

export type SysRefLocationWhere = {
  address?: InputMaybe<SysRefAddressWhere>;
  aliases?: InputMaybe<Scalars['String']>;
  aliases_exists?: InputMaybe<Scalars['Boolean']>;
  aliases_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aliases_ne?: InputMaybe<Scalars['String']>;
  aliases_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amenities?: InputMaybe<Scalars['String']>;
  amenities_exists?: InputMaybe<Scalars['Boolean']>;
  amenities_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amenities_ne?: InputMaybe<Scalars['String']>;
  amenities_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  base?: InputMaybe<SysRefBasePageWhere>;
  blocks?: InputMaybe<SysLocationBlocksWhere>;
  closed?: InputMaybe<Scalars['Boolean']>;
  closed_exists?: InputMaybe<Scalars['Boolean']>;
  closed_ne?: InputMaybe<Scalars['Boolean']>;
  closure_notes?: InputMaybe<Scalars['String']>;
  closure_notes_exists?: InputMaybe<Scalars['Boolean']>;
  closure_notes_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  closure_notes_ne?: InputMaybe<Scalars['String']>;
  closure_notes_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contact_phone?: InputMaybe<Scalars['String']>;
  contact_phone_exists?: InputMaybe<Scalars['Boolean']>;
  contact_phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contact_phone_ne?: InputMaybe<Scalars['String']>;
  contact_phone_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entrance_fees?: InputMaybe<Scalars['String']>;
  entrance_fees_exists?: InputMaybe<Scalars['Boolean']>;
  entrance_fees_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entrance_fees_ne?: InputMaybe<Scalars['String']>;
  entrance_fees_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fees?: InputMaybe<Scalars['Float']>;
  fees_exists?: InputMaybe<Scalars['Boolean']>;
  fees_gt?: InputMaybe<Scalars['Float']>;
  fees_gte?: InputMaybe<Scalars['Float']>;
  fees_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  fees_lt?: InputMaybe<Scalars['Float']>;
  fees_lte?: InputMaybe<Scalars['Float']>;
  fees_ne?: InputMaybe<Scalars['Float']>;
  fees_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  global_location?: InputMaybe<SysRefGlobalLocationWhere>;
  hours?: InputMaybe<Scalars['String']>;
  hours_exists?: InputMaybe<Scalars['Boolean']>;
  hours_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hours_ne?: InputMaybe<Scalars['String']>;
  hours_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_categories?: InputMaybe<Scalars['String']>;
  location_categories_exists?: InputMaybe<Scalars['Boolean']>;
  location_categories_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_categories_ne?: InputMaybe<Scalars['String']>;
  location_categories_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes?: InputMaybe<Scalars['String']>;
  notes_exists?: InputMaybe<Scalars['Boolean']>;
  notes_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes_ne?: InputMaybe<Scalars['String']>;
  notes_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section_blocks?: InputMaybe<SysRefSectionBlocksWhere>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysRefPageChildPageCustomSortOrderWhere = {
  page?: InputMaybe<SysRefPageWhere>;
};

export type SysRefPageDepartmentsWhere = {
  department?: InputMaybe<SysRefDepartmentWhere>;
};

export type SysRefPageWhere = {
  action_link?: InputMaybe<LinkWhere>;
  base?: InputMaybe<SysRefBasePageWhere>;
  page_type?: InputMaybe<Scalars['String']>;
  page_type_exists?: InputMaybe<Scalars['Boolean']>;
  page_type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page_type_ne?: InputMaybe<Scalars['String']>;
  page_type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  redirect?: InputMaybe<SysPageRedirectWhere>;
  sidebar?: InputMaybe<SysRefSidebarWhere>;
  slug?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_ne?: InputMaybe<Scalars['String']>;
  slug_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visual_builder?: InputMaybe<SysRefVisualBuilderWhere>;
};

export type SysRefSectionBlocksWhere = {
  blocks?: InputMaybe<SysSectionBlocksBlocksWhere>;
};

export type SysRefSidebarWhere = {
  blocks?: InputMaybe<SysSidebarBlocksWhere>;
};

export type SysRefSocialPlatformWhere = {
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  share_url?: InputMaybe<Scalars['String']>;
  share_url_exists?: InputMaybe<Scalars['Boolean']>;
  share_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  share_url_ne?: InputMaybe<Scalars['String']>;
  share_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareable?: InputMaybe<Scalars['Boolean']>;
  shareable_exists?: InputMaybe<Scalars['Boolean']>;
  shareable_ne?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysRefSolidWasteItemCountyLocationsWhere = {
  location?: InputMaybe<SysRefLocationWhere>;
};

export type SysRefVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelectManuallyWhere = {
  article?: InputMaybe<SysRefArticleWhere>;
};

export type SysRefVisualBuilderWhere = {
  enable_sidebar?: InputMaybe<Scalars['Boolean']>;
  enable_sidebar_exists?: InputMaybe<Scalars['Boolean']>;
  enable_sidebar_ne?: InputMaybe<Scalars['Boolean']>;
  visual_builder_body?: InputMaybe<SysVisualBuilderVisualBuilderBodyWhere>;
  visual_builder_sidebar?: InputMaybe<SysVisualBuilderVisualBuilderSidebarWhere>;
};

export type SysSectionBlocksBlocksDefaultBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
};

export type SysSectionBlocksBlocksDividerBlockWhere = {
  margin?: InputMaybe<Scalars['Float']>;
  margin_exists?: InputMaybe<Scalars['Boolean']>;
  margin_gt?: InputMaybe<Scalars['Float']>;
  margin_gte?: InputMaybe<Scalars['Float']>;
  margin_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  margin_lt?: InputMaybe<Scalars['Float']>;
  margin_lte?: InputMaybe<Scalars['Float']>;
  margin_ne?: InputMaybe<Scalars['Float']>;
  margin_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type SysSectionBlocksBlocksEmergencyoperationalstatusBlockWhere = {
  gradient?: InputMaybe<Scalars['String']>;
  gradient_exists?: InputMaybe<Scalars['Boolean']>;
  gradient_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gradient_ne?: InputMaybe<Scalars['String']>;
  gradient_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysSectionBlocksBlocksUniformcompositionBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysSectionBlocksBlocksVideosBlockGradientWhere = {
  degree?: InputMaybe<Scalars['Float']>;
  degree_exists?: InputMaybe<Scalars['Boolean']>;
  degree_gt?: InputMaybe<Scalars['Float']>;
  degree_gte?: InputMaybe<Scalars['Float']>;
  degree_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  degree_lt?: InputMaybe<Scalars['Float']>;
  degree_lte?: InputMaybe<Scalars['Float']>;
  degree_ne?: InputMaybe<Scalars['Float']>;
  degree_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  rgba?: InputMaybe<Scalars['String']>;
  rgba_exists?: InputMaybe<Scalars['Boolean']>;
  rgba_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rgba_ne?: InputMaybe<Scalars['String']>;
  rgba_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysSectionBlocksBlocksVideosBlockWhere = {
  color?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_ne?: InputMaybe<Scalars['String']>;
  color_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gradient?: InputMaybe<SysSectionBlocksBlocksVideosBlockGradientWhere>;
  sources?: InputMaybe<LinkWhere>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysSectionBlocksBlocksWhere = {
  default?: InputMaybe<SysSectionBlocksBlocksDefaultBlockWhere>;
  default_exists?: InputMaybe<Scalars['Boolean']>;
  divider?: InputMaybe<SysSectionBlocksBlocksDividerBlockWhere>;
  divider_exists?: InputMaybe<Scalars['Boolean']>;
  emergencyoperationalstatus?: InputMaybe<SysSectionBlocksBlocksEmergencyoperationalstatusBlockWhere>;
  emergencyoperationalstatus_exists?: InputMaybe<Scalars['Boolean']>;
  uniformcomposition?: InputMaybe<SysSectionBlocksBlocksUniformcompositionBlockWhere>;
  uniformcomposition_exists?: InputMaybe<Scalars['Boolean']>;
  videos?: InputMaybe<SysSectionBlocksBlocksVideosBlockWhere>;
  videos_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SysSidebarBlocksImageBlockWhere = {
  link?: InputMaybe<LinkWhere>;
};

export type SysSidebarBlocksWhere = {
  Image?: InputMaybe<SysSidebarBlocksImageBlockWhere>;
  Image_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SysTaxonomies = {
  __typename?: 'SysTaxonomies';
  all_article?: Maybe<AllArticle>;
  all_asset_folder?: Maybe<AllAssetFolder>;
  all_calendar_event?: Maybe<AllCalendarEvent>;
  all_contact?: Maybe<AllContact>;
  all_council?: Maybe<AllCouncil>;
  all_disclaimer?: Maybe<AllDisclaimer>;
  all_external_link?: Maybe<AllExternalLink>;
  all_faq?: Maybe<AllFaq>;
  all_featured_content_component?: Maybe<AllFeaturedContentComponent>;
  all_hiking_trail?: Maybe<AllHikingTrail>;
  all_iframe_app?: Maybe<AllIframeApp>;
  all_image_gallery?: Maybe<AllImageGallery>;
  all_landing_page?: Maybe<AllLandingPage>;
  all_location?: Maybe<AllLocation>;
  all_location_notice?: Maybe<AllLocationNotice>;
  all_page?: Maybe<AllPage>;
  all_redirect?: Maybe<AllRedirect>;
  all_site_alert?: Maybe<AllSiteAlert>;
};


export type SysTaxonomiesAll_ArticleArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ArticleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticleWhere>;
};


export type SysTaxonomiesAll_Asset_FolderArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<AssetFolderOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFolderWhere>;
};


export type SysTaxonomiesAll_Calendar_EventArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<CalendarEventOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CalendarEventWhere>;
};


export type SysTaxonomiesAll_ContactArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ContactOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactWhere>;
};


export type SysTaxonomiesAll_CouncilArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<CouncilOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CouncilWhere>;
};


export type SysTaxonomiesAll_DisclaimerArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<DisclaimerOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DisclaimerWhere>;
};


export type SysTaxonomiesAll_External_LinkArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ExternalLinkOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ExternalLinkWhere>;
};


export type SysTaxonomiesAll_FaqArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<FaqOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqWhere>;
};


export type SysTaxonomiesAll_Featured_Content_ComponentArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<FeaturedContentComponentOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FeaturedContentComponentWhere>;
};


export type SysTaxonomiesAll_Hiking_TrailArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<HikingTrailOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HikingTrailWhere>;
};


export type SysTaxonomiesAll_Iframe_AppArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<IframeAppOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IframeAppWhere>;
};


export type SysTaxonomiesAll_Image_GalleryArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ImageGalleryOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageGalleryWhere>;
};


export type SysTaxonomiesAll_Landing_PageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<LandingPageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LandingPageWhere>;
};


export type SysTaxonomiesAll_LocationArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<LocationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LocationWhere>;
};


export type SysTaxonomiesAll_Location_NoticeArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<LocationNoticeOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LocationNoticeWhere>;
};


export type SysTaxonomiesAll_PageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<PageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhere>;
};


export type SysTaxonomiesAll_RedirectArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<RedirectOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RedirectWhere>;
};


export type SysTaxonomiesAll_Site_AlertArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<SiteAlertOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiteAlertWhere>;
};

export type SysVariants = {
  __typename?: 'SysVariants';
  alias?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  variant_uid?: Maybe<Scalars['String']>;
};

export type SysVisualBuilderVisualBuilderBodyBannerBlockWhere = {
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_ne?: InputMaybe<Scalars['String']>;
  heading_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysVisualBuilderVisualBuilderBodyDefaultBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
};

export type SysVisualBuilderVisualBuilderBodyDividerBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
};

export type SysVisualBuilderVisualBuilderBodyHeroBlockWhere = {
  call_to_action_text?: InputMaybe<Scalars['String']>;
  call_to_action_text_exists?: InputMaybe<Scalars['Boolean']>;
  call_to_action_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  call_to_action_text_ne?: InputMaybe<Scalars['String']>;
  call_to_action_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_ne?: InputMaybe<Scalars['String']>;
  color_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_ne?: InputMaybe<Scalars['String']>;
  heading_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_url?: InputMaybe<Scalars['String']>;
  link_url_exists?: InputMaybe<Scalars['Boolean']>;
  link_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_url_ne?: InputMaybe<Scalars['String']>;
  link_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  show_call_to_action?: InputMaybe<Scalars['Boolean']>;
  show_call_to_action_exists?: InputMaybe<Scalars['Boolean']>;
  show_call_to_action_ne?: InputMaybe<Scalars['Boolean']>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_ne?: InputMaybe<Scalars['String']>;
  subheading_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyButtonBlockWhere = {
  block?: InputMaybe<Scalars['Boolean']>;
  block_exists?: InputMaybe<Scalars['Boolean']>;
  block_ne?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_ne?: InputMaybe<Scalars['String']>;
  color_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  justify?: InputMaybe<Scalars['String']>;
  justify_exists?: InputMaybe<Scalars['Boolean']>;
  justify_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  justify_ne?: InputMaybe<Scalars['String']>;
  justify_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<LinkWhere>;
  size?: InputMaybe<Scalars['String']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size_ne?: InputMaybe<Scalars['String']>;
  size_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_ne?: InputMaybe<Scalars['String']>;
  variant_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyCommissionerAvatarsBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
};

export type SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyDividerBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
};

export type SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlockLinksWhere = {
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<LinkWhere>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlockWhere = {
  links?: InputMaybe<SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlockLinksWhere>;
  variant?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_ne?: InputMaybe<Scalars['String']>;
  variant_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockWhere = {
  categories?: InputMaybe<SysRefArticleCategoriesWhere>;
  limit?: InputMaybe<Scalars['Float']>;
  limit_exists?: InputMaybe<Scalars['Boolean']>;
  limit_gt?: InputMaybe<Scalars['Float']>;
  limit_gte?: InputMaybe<Scalars['Float']>;
  limit_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  limit_lt?: InputMaybe<Scalars['Float']>;
  limit_lte?: InputMaybe<Scalars['Float']>;
  limit_ne?: InputMaybe<Scalars['Float']>;
  limit_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyHtmlBlockWhere = {
  rich_text_editor?: InputMaybe<Scalars['String']>;
  rich_text_editor_exists?: InputMaybe<Scalars['Boolean']>;
  rich_text_editor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rich_text_editor_ne?: InputMaybe<Scalars['String']>;
  rich_text_editor_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyVideoBlockWhere = {
  aspect_ratio?: InputMaybe<Scalars['Float']>;
  aspect_ratio_exists?: InputMaybe<Scalars['Boolean']>;
  aspect_ratio_gt?: InputMaybe<Scalars['Float']>;
  aspect_ratio_gte?: InputMaybe<Scalars['Float']>;
  aspect_ratio_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  aspect_ratio_lt?: InputMaybe<Scalars['Float']>;
  aspect_ratio_lte?: InputMaybe<Scalars['Float']>;
  aspect_ratio_ne?: InputMaybe<Scalars['Float']>;
  aspect_ratio_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  video?: InputMaybe<LinkWhere>;
};

export type SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyWhere = {
  button?: InputMaybe<SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyButtonBlockWhere>;
  button_exists?: InputMaybe<Scalars['Boolean']>;
  commissioner_avatars?: InputMaybe<SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyCommissionerAvatarsBlockWhere>;
  commissioner_avatars_exists?: InputMaybe<Scalars['Boolean']>;
  divider?: InputMaybe<SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyDividerBlockWhere>;
  divider_exists?: InputMaybe<Scalars['Boolean']>;
  featured_links?: InputMaybe<SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlockWhere>;
  featured_links_exists?: InputMaybe<Scalars['Boolean']>;
  featured_news?: InputMaybe<SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockWhere>;
  featured_news_exists?: InputMaybe<Scalars['Boolean']>;
  html?: InputMaybe<SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyHtmlBlockWhere>;
  html_exists?: InputMaybe<Scalars['Boolean']>;
  video?: InputMaybe<SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyVideoBlockWhere>;
  video_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SysVisualBuilderVisualBuilderBodySectionContainerBlockWhere = {
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  grid_modifiers?: InputMaybe<Scalars['String']>;
  grid_modifiers_exists?: InputMaybe<Scalars['Boolean']>;
  grid_modifiers_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  grid_modifiers_ne?: InputMaybe<Scalars['String']>;
  grid_modifiers_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_ne?: InputMaybe<Scalars['String']>;
  heading_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inset_body?: InputMaybe<Scalars['Boolean']>;
  inset_body_exists?: InputMaybe<Scalars['Boolean']>;
  inset_body_ne?: InputMaybe<Scalars['Boolean']>;
  vb_section_container_body?: InputMaybe<SysVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyWhere>;
};

export type SysVisualBuilderVisualBuilderBodyWhere = {
  banner?: InputMaybe<SysVisualBuilderVisualBuilderBodyBannerBlockWhere>;
  banner_exists?: InputMaybe<Scalars['Boolean']>;
  default?: InputMaybe<SysVisualBuilderVisualBuilderBodyDefaultBlockWhere>;
  default_exists?: InputMaybe<Scalars['Boolean']>;
  divider?: InputMaybe<SysVisualBuilderVisualBuilderBodyDividerBlockWhere>;
  divider_exists?: InputMaybe<Scalars['Boolean']>;
  hero?: InputMaybe<SysVisualBuilderVisualBuilderBodyHeroBlockWhere>;
  hero_exists?: InputMaybe<Scalars['Boolean']>;
  section_container?: InputMaybe<SysVisualBuilderVisualBuilderBodySectionContainerBlockWhere>;
  section_container_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SysVisualBuilderVisualBuilderSidebarDefaultBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
};

export type SysVisualBuilderVisualBuilderSidebarImageBlockWhere = {
  link?: InputMaybe<LinkWhere>;
};

export type SysVisualBuilderVisualBuilderSidebarWhere = {
  default?: InputMaybe<SysVisualBuilderVisualBuilderSidebarDefaultBlockWhere>;
  default_exists?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<SysVisualBuilderVisualBuilderSidebarImageBlockWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SystemPublishDetails = {
  __typename?: 'SystemPublishDetails';
  environment?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<SysVariants>>>;
};

export type SystemPublishDetailsWhere = {
  locale?: InputMaybe<Scalars['String']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  time?: InputMaybe<Scalars['DateTime']>;
  time_gt?: InputMaybe<Scalars['DateTime']>;
  time_gte?: InputMaybe<Scalars['DateTime']>;
  time_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  time_lt?: InputMaybe<Scalars['DateTime']>;
  time_lte?: InputMaybe<Scalars['DateTime']>;
  time_ne?: InputMaybe<Scalars['DateTime']>;
  time_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  user?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  user_ne?: InputMaybe<Scalars['String']>;
  user_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Taxonomy = {
  __typename?: 'Taxonomy';
  taxonomy_uid?: Maybe<Scalars['String']>;
  term_uid?: Maybe<Scalars['String']>;
};

export type VisualBuilder = {
  __typename?: 'VisualBuilder';
  enable_sidebar?: Maybe<Scalars['Boolean']>;
  visual_builder_body?: Maybe<Array<Maybe<VisualBuilderVisualBuilderBody>>>;
  visual_builder_sidebar?: Maybe<Array<Maybe<VisualBuilderVisualBuilderSidebar>>>;
};

export type VisualBuilderVisualBuilderBody = VisualBuilderVisualBuilderBodyBanner | VisualBuilderVisualBuilderBodyDefault | VisualBuilderVisualBuilderBodyDivider | VisualBuilderVisualBuilderBodyHero | VisualBuilderVisualBuilderBodySectionContainer;

export type VisualBuilderVisualBuilderBodyBanner = {
  __typename?: 'VisualBuilderVisualBuilderBodyBanner';
  banner?: Maybe<VisualBuilderVisualBuilderBodyBannerBlock>;
};

export type VisualBuilderVisualBuilderBodyBannerBlock = {
  __typename?: 'VisualBuilderVisualBuilderBodyBannerBlock';
  background_gradient?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type VisualBuilderVisualBuilderBodyBannerBlockWhere = {
  background_gradient?: InputMaybe<Scalars['JSON']>;
  background_gradient_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_ne?: InputMaybe<Scalars['String']>;
  heading_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VisualBuilderVisualBuilderBodyDefault = {
  __typename?: 'VisualBuilderVisualBuilderBodyDefault';
  default?: Maybe<VisualBuilderVisualBuilderBodyDefaultBlock>;
};

export type VisualBuilderVisualBuilderBodyDefaultBlock = {
  __typename?: 'VisualBuilderVisualBuilderBodyDefaultBlock';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderBodyDefaultBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderBodyDivider = {
  __typename?: 'VisualBuilderVisualBuilderBodyDivider';
  divider?: Maybe<VisualBuilderVisualBuilderBodyDividerBlock>;
};

export type VisualBuilderVisualBuilderBodyDividerBlock = {
  __typename?: 'VisualBuilderVisualBuilderBodyDividerBlock';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderBodyDividerBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderBodyHero = {
  __typename?: 'VisualBuilderVisualBuilderBodyHero';
  hero?: Maybe<VisualBuilderVisualBuilderBodyHeroBlock>;
};

export type VisualBuilderVisualBuilderBodyHeroBlock = {
  __typename?: 'VisualBuilderVisualBuilderBodyHeroBlock';
  background_gradient?: Maybe<Scalars['JSON']>;
  background_imageConnection?: Maybe<SysAssetConnection>;
  background_image_cloudinary?: Maybe<Scalars['JSON']>;
  call_to_action_text?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  link_url?: Maybe<Scalars['String']>;
  show_call_to_action?: Maybe<Scalars['Boolean']>;
  subheading?: Maybe<Scalars['String']>;
};

export type VisualBuilderVisualBuilderBodyHeroBlockWhere = {
  background_gradient?: InputMaybe<Scalars['JSON']>;
  background_gradient_exists?: InputMaybe<Scalars['Boolean']>;
  background_image?: InputMaybe<SysAssetWhere>;
  background_image_cloudinary?: InputMaybe<Scalars['JSON']>;
  background_image_cloudinary_exists?: InputMaybe<Scalars['Boolean']>;
  background_image_exists?: InputMaybe<Scalars['Boolean']>;
  call_to_action_text?: InputMaybe<Scalars['String']>;
  call_to_action_text_exists?: InputMaybe<Scalars['Boolean']>;
  call_to_action_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  call_to_action_text_ne?: InputMaybe<Scalars['String']>;
  call_to_action_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_ne?: InputMaybe<Scalars['String']>;
  color_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_ne?: InputMaybe<Scalars['String']>;
  heading_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_url?: InputMaybe<Scalars['String']>;
  link_url_exists?: InputMaybe<Scalars['Boolean']>;
  link_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_url_ne?: InputMaybe<Scalars['String']>;
  link_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  show_call_to_action?: InputMaybe<Scalars['Boolean']>;
  show_call_to_action_exists?: InputMaybe<Scalars['Boolean']>;
  show_call_to_action_ne?: InputMaybe<Scalars['Boolean']>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_ne?: InputMaybe<Scalars['String']>;
  subheading_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VisualBuilderVisualBuilderBodySectionContainer = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainer';
  section_container?: Maybe<VisualBuilderVisualBuilderBodySectionContainerBlock>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlock = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlock';
  background_gradient?: Maybe<Scalars['JSON']>;
  background_imageConnection?: Maybe<SysAssetConnection>;
  description?: Maybe<Scalars['String']>;
  grid_modifiers?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading?: Maybe<Scalars['String']>;
  inset_body?: Maybe<Scalars['Boolean']>;
  vb_section_container_body?: Maybe<Array<Maybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBody>>>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBody = VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyButton | VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyCommissionerAvatars | VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyDivider | VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinks | VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNews | VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyHtml | VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyVideo;

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyButton = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyButton';
  button?: Maybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyButtonBlock>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyButtonBlock = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyButtonBlock';
  block?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  justify?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  size?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyButtonBlockWhere = {
  block?: InputMaybe<Scalars['Boolean']>;
  block_exists?: InputMaybe<Scalars['Boolean']>;
  block_ne?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_ne?: InputMaybe<Scalars['String']>;
  color_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  justify?: InputMaybe<Scalars['String']>;
  justify_exists?: InputMaybe<Scalars['Boolean']>;
  justify_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  justify_ne?: InputMaybe<Scalars['String']>;
  justify_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['String']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size_ne?: InputMaybe<Scalars['String']>;
  size_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_ne?: InputMaybe<Scalars['String']>;
  variant_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyCommissionerAvatars = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyCommissionerAvatars';
  commissioner_avatars?: Maybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyCommissionerAvatarsBlock>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyCommissionerAvatarsBlock = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyCommissionerAvatarsBlock';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyCommissionerAvatarsBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyDivider = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyDivider';
  divider?: Maybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyDividerBlock>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyDividerBlock = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyDividerBlock';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyDividerBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinks = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinks';
  featured_links?: Maybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlock>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlock = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlock';
  links?: Maybe<Array<Maybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlockLinks>>>;
  variant?: Maybe<Scalars['String']>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlockLinks = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlockLinks';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlockLinksWhere = {
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlockWhere = {
  links?: InputMaybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlockLinksWhere>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  variant?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_ne?: InputMaybe<Scalars['String']>;
  variant_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNews = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNews';
  featured_news?: Maybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlock>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlock = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlock';
  categories?: Maybe<ArticleCategories>;
  limit?: Maybe<Scalars['Float']>;
  select_manuallyConnection?: Maybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelectManuallyConnection>;
};


export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelect_ManuallyConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysRefVisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelectManuallyWhere>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelectManuallyConnection = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelectManuallyConnection';
  edges?: Maybe<Array<Maybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelectManuallyEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelectManuallyEdge = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelectManuallyEdge';
  node?: Maybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelectManuallyNode>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelectManuallyNode = Article;

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelectManuallyWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  article?: InputMaybe<ArticleWhere>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockWhere = {
  categories?: InputMaybe<ArticleCategoriesWhere>;
  categories_exists?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Float']>;
  limit_exists?: InputMaybe<Scalars['Boolean']>;
  limit_gt?: InputMaybe<Scalars['Float']>;
  limit_gte?: InputMaybe<Scalars['Float']>;
  limit_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  limit_lt?: InputMaybe<Scalars['Float']>;
  limit_lte?: InputMaybe<Scalars['Float']>;
  limit_ne?: InputMaybe<Scalars['Float']>;
  limit_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  select_manually?: InputMaybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockSelectManuallyWhere>;
  select_manually_count?: InputMaybe<Scalars['Int']>;
  select_manually_exists?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyHtml = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyHtml';
  html?: Maybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyHtmlBlock>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyHtmlBlock = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyHtmlBlock';
  rich_text_editor?: Maybe<Scalars['String']>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyHtmlBlockWhere = {
  rich_text_editor?: InputMaybe<Scalars['String']>;
  rich_text_editor_exists?: InputMaybe<Scalars['Boolean']>;
  rich_text_editor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rich_text_editor_ne?: InputMaybe<Scalars['String']>;
  rich_text_editor_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyVideo = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyVideo';
  video?: Maybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyVideoBlock>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyVideoBlock = {
  __typename?: 'VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyVideoBlock';
  aspect_ratio?: Maybe<Scalars['Float']>;
  video?: Maybe<Link>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyVideoBlockWhere = {
  aspect_ratio?: InputMaybe<Scalars['Float']>;
  aspect_ratio_exists?: InputMaybe<Scalars['Boolean']>;
  aspect_ratio_gt?: InputMaybe<Scalars['Float']>;
  aspect_ratio_gte?: InputMaybe<Scalars['Float']>;
  aspect_ratio_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  aspect_ratio_lt?: InputMaybe<Scalars['Float']>;
  aspect_ratio_lte?: InputMaybe<Scalars['Float']>;
  aspect_ratio_ne?: InputMaybe<Scalars['Float']>;
  aspect_ratio_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  video?: InputMaybe<LinkWhere>;
  video_exists?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyWhere = {
  button?: InputMaybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyButtonBlockWhere>;
  button_exists?: InputMaybe<Scalars['Boolean']>;
  commissioner_avatars?: InputMaybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyCommissionerAvatarsBlockWhere>;
  commissioner_avatars_exists?: InputMaybe<Scalars['Boolean']>;
  divider?: InputMaybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyDividerBlockWhere>;
  divider_exists?: InputMaybe<Scalars['Boolean']>;
  featured_links?: InputMaybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedLinksBlockWhere>;
  featured_links_exists?: InputMaybe<Scalars['Boolean']>;
  featured_news?: InputMaybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyFeaturedNewsBlockWhere>;
  featured_news_exists?: InputMaybe<Scalars['Boolean']>;
  html?: InputMaybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyHtmlBlockWhere>;
  html_exists?: InputMaybe<Scalars['Boolean']>;
  video?: InputMaybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyVideoBlockWhere>;
  video_exists?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderBodySectionContainerBlockWhere = {
  background_gradient?: InputMaybe<Scalars['JSON']>;
  background_gradient_exists?: InputMaybe<Scalars['Boolean']>;
  background_image?: InputMaybe<SysAssetWhere>;
  background_image_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  grid_modifiers?: InputMaybe<Scalars['String']>;
  grid_modifiers_exists?: InputMaybe<Scalars['Boolean']>;
  grid_modifiers_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  grid_modifiers_ne?: InputMaybe<Scalars['String']>;
  grid_modifiers_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_ne?: InputMaybe<Scalars['String']>;
  heading_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inset_body?: InputMaybe<Scalars['Boolean']>;
  inset_body_exists?: InputMaybe<Scalars['Boolean']>;
  inset_body_ne?: InputMaybe<Scalars['Boolean']>;
  vb_section_container_body?: InputMaybe<VisualBuilderVisualBuilderBodySectionContainerBlockVbSectionContainerBodyWhere>;
  vb_section_container_body_exists?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderBodyWhere = {
  banner?: InputMaybe<VisualBuilderVisualBuilderBodyBannerBlockWhere>;
  banner_exists?: InputMaybe<Scalars['Boolean']>;
  default?: InputMaybe<VisualBuilderVisualBuilderBodyDefaultBlockWhere>;
  default_exists?: InputMaybe<Scalars['Boolean']>;
  divider?: InputMaybe<VisualBuilderVisualBuilderBodyDividerBlockWhere>;
  divider_exists?: InputMaybe<Scalars['Boolean']>;
  hero?: InputMaybe<VisualBuilderVisualBuilderBodyHeroBlockWhere>;
  hero_exists?: InputMaybe<Scalars['Boolean']>;
  section_container?: InputMaybe<VisualBuilderVisualBuilderBodySectionContainerBlockWhere>;
  section_container_exists?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderSidebar = VisualBuilderVisualBuilderSidebarArticle | VisualBuilderVisualBuilderSidebarCalendarEvent | VisualBuilderVisualBuilderSidebarContact | VisualBuilderVisualBuilderSidebarDefault | VisualBuilderVisualBuilderSidebarDisclaimer | VisualBuilderVisualBuilderSidebarImage | VisualBuilderVisualBuilderSidebarLocation;

export type VisualBuilderVisualBuilderSidebarArticle = {
  __typename?: 'VisualBuilderVisualBuilderSidebarArticle';
  article?: Maybe<VisualBuilderVisualBuilderSidebarArticleBlock>;
};

export type VisualBuilderVisualBuilderSidebarArticleBlock = {
  __typename?: 'VisualBuilderVisualBuilderSidebarArticleBlock';
  articleConnection?: Maybe<VisualBuilderVisualBuilderSidebarArticleBlockArticleConnection>;
};

export type VisualBuilderVisualBuilderSidebarArticleBlockArticleConnection = {
  __typename?: 'VisualBuilderVisualBuilderSidebarArticleBlockArticleConnection';
  edges?: Maybe<Array<Maybe<VisualBuilderVisualBuilderSidebarArticleBlockArticleEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VisualBuilderVisualBuilderSidebarArticleBlockArticleEdge = {
  __typename?: 'VisualBuilderVisualBuilderSidebarArticleBlockArticleEdge';
  node?: Maybe<VisualBuilderVisualBuilderSidebarArticleBlockArticleNode>;
};

export type VisualBuilderVisualBuilderSidebarArticleBlockArticleNode = Article;

export type VisualBuilderVisualBuilderSidebarArticleBlockArticleWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  article?: InputMaybe<ArticleWhere>;
};

export type VisualBuilderVisualBuilderSidebarArticleBlockWhere = {
  article?: InputMaybe<VisualBuilderVisualBuilderSidebarArticleBlockArticleWhere>;
  article_exists?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderSidebarCalendarEvent = {
  __typename?: 'VisualBuilderVisualBuilderSidebarCalendarEvent';
  calendar_event?: Maybe<VisualBuilderVisualBuilderSidebarCalendarEventBlock>;
};

export type VisualBuilderVisualBuilderSidebarCalendarEventBlock = {
  __typename?: 'VisualBuilderVisualBuilderSidebarCalendarEventBlock';
  calendar_eventConnection?: Maybe<VisualBuilderVisualBuilderSidebarCalendarEventBlockCalendarEventConnection>;
};

export type VisualBuilderVisualBuilderSidebarCalendarEventBlockCalendarEventConnection = {
  __typename?: 'VisualBuilderVisualBuilderSidebarCalendarEventBlockCalendarEventConnection';
  edges?: Maybe<Array<Maybe<VisualBuilderVisualBuilderSidebarCalendarEventBlockCalendarEventEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VisualBuilderVisualBuilderSidebarCalendarEventBlockCalendarEventEdge = {
  __typename?: 'VisualBuilderVisualBuilderSidebarCalendarEventBlockCalendarEventEdge';
  node?: Maybe<VisualBuilderVisualBuilderSidebarCalendarEventBlockCalendarEventNode>;
};

export type VisualBuilderVisualBuilderSidebarCalendarEventBlockCalendarEventNode = CalendarEventInstance;

export type VisualBuilderVisualBuilderSidebarCalendarEventBlockCalendarEventWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  calendar_event_instance?: InputMaybe<CalendarEventInstanceWhere>;
};

export type VisualBuilderVisualBuilderSidebarCalendarEventBlockWhere = {
  calendar_event?: InputMaybe<VisualBuilderVisualBuilderSidebarCalendarEventBlockCalendarEventWhere>;
  calendar_event_exists?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderSidebarContact = {
  __typename?: 'VisualBuilderVisualBuilderSidebarContact';
  contact?: Maybe<VisualBuilderVisualBuilderSidebarContactBlock>;
};

export type VisualBuilderVisualBuilderSidebarContactBlock = {
  __typename?: 'VisualBuilderVisualBuilderSidebarContactBlock';
  contactConnection?: Maybe<VisualBuilderVisualBuilderSidebarContactBlockContactConnection>;
};

export type VisualBuilderVisualBuilderSidebarContactBlockContactConnection = {
  __typename?: 'VisualBuilderVisualBuilderSidebarContactBlockContactConnection';
  edges?: Maybe<Array<Maybe<VisualBuilderVisualBuilderSidebarContactBlockContactEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VisualBuilderVisualBuilderSidebarContactBlockContactEdge = {
  __typename?: 'VisualBuilderVisualBuilderSidebarContactBlockContactEdge';
  node?: Maybe<VisualBuilderVisualBuilderSidebarContactBlockContactNode>;
};

export type VisualBuilderVisualBuilderSidebarContactBlockContactNode = Contact;

export type VisualBuilderVisualBuilderSidebarContactBlockContactWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  contact?: InputMaybe<ContactWhere>;
};

export type VisualBuilderVisualBuilderSidebarContactBlockWhere = {
  contact?: InputMaybe<VisualBuilderVisualBuilderSidebarContactBlockContactWhere>;
  contact_exists?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderSidebarDefault = {
  __typename?: 'VisualBuilderVisualBuilderSidebarDefault';
  default?: Maybe<VisualBuilderVisualBuilderSidebarDefaultBlock>;
};

export type VisualBuilderVisualBuilderSidebarDefaultBlock = {
  __typename?: 'VisualBuilderVisualBuilderSidebarDefaultBlock';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderSidebarDefaultBlockWhere = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_exists?: InputMaybe<Scalars['Boolean']>;
  enabled_ne?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderSidebarDisclaimer = {
  __typename?: 'VisualBuilderVisualBuilderSidebarDisclaimer';
  disclaimer?: Maybe<VisualBuilderVisualBuilderSidebarDisclaimerBlock>;
};

export type VisualBuilderVisualBuilderSidebarDisclaimerBlock = {
  __typename?: 'VisualBuilderVisualBuilderSidebarDisclaimerBlock';
  disclaimerConnection?: Maybe<VisualBuilderVisualBuilderSidebarDisclaimerBlockDisclaimerConnection>;
};

export type VisualBuilderVisualBuilderSidebarDisclaimerBlockDisclaimerConnection = {
  __typename?: 'VisualBuilderVisualBuilderSidebarDisclaimerBlockDisclaimerConnection';
  edges?: Maybe<Array<Maybe<VisualBuilderVisualBuilderSidebarDisclaimerBlockDisclaimerEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VisualBuilderVisualBuilderSidebarDisclaimerBlockDisclaimerEdge = {
  __typename?: 'VisualBuilderVisualBuilderSidebarDisclaimerBlockDisclaimerEdge';
  node?: Maybe<VisualBuilderVisualBuilderSidebarDisclaimerBlockDisclaimerNode>;
};

export type VisualBuilderVisualBuilderSidebarDisclaimerBlockDisclaimerNode = Disclaimer;

export type VisualBuilderVisualBuilderSidebarDisclaimerBlockDisclaimerWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  disclaimer?: InputMaybe<DisclaimerWhere>;
};

export type VisualBuilderVisualBuilderSidebarDisclaimerBlockWhere = {
  disclaimer?: InputMaybe<VisualBuilderVisualBuilderSidebarDisclaimerBlockDisclaimerWhere>;
  disclaimer_exists?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderSidebarImage = {
  __typename?: 'VisualBuilderVisualBuilderSidebarImage';
  image?: Maybe<VisualBuilderVisualBuilderSidebarImageBlock>;
};

export type VisualBuilderVisualBuilderSidebarImageBlock = {
  __typename?: 'VisualBuilderVisualBuilderSidebarImageBlock';
  external_linkConnection?: Maybe<VisualBuilderVisualBuilderSidebarImageBlockExternalLinkConnection>;
  imageConnection?: Maybe<SysAssetConnection>;
  image_cloudinary?: Maybe<Scalars['JSON']>;
  link?: Maybe<Link>;
};

export type VisualBuilderVisualBuilderSidebarImageBlockExternalLinkConnection = {
  __typename?: 'VisualBuilderVisualBuilderSidebarImageBlockExternalLinkConnection';
  edges?: Maybe<Array<Maybe<VisualBuilderVisualBuilderSidebarImageBlockExternalLinkEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VisualBuilderVisualBuilderSidebarImageBlockExternalLinkEdge = {
  __typename?: 'VisualBuilderVisualBuilderSidebarImageBlockExternalLinkEdge';
  node?: Maybe<VisualBuilderVisualBuilderSidebarImageBlockExternalLinkNode>;
};

export type VisualBuilderVisualBuilderSidebarImageBlockExternalLinkNode = ExternalLink;

export type VisualBuilderVisualBuilderSidebarImageBlockExternalLinkWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  external_link?: InputMaybe<ExternalLinkWhere>;
};

export type VisualBuilderVisualBuilderSidebarImageBlockWhere = {
  external_link?: InputMaybe<VisualBuilderVisualBuilderSidebarImageBlockExternalLinkWhere>;
  external_link_exists?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<SysAssetWhere>;
  image_cloudinary?: InputMaybe<Scalars['JSON']>;
  image_cloudinary_exists?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderSidebarLocation = {
  __typename?: 'VisualBuilderVisualBuilderSidebarLocation';
  location?: Maybe<VisualBuilderVisualBuilderSidebarLocationBlock>;
};

export type VisualBuilderVisualBuilderSidebarLocationBlock = {
  __typename?: 'VisualBuilderVisualBuilderSidebarLocationBlock';
  locationConnection?: Maybe<VisualBuilderVisualBuilderSidebarLocationBlockLocationConnection>;
};

export type VisualBuilderVisualBuilderSidebarLocationBlockLocationConnection = {
  __typename?: 'VisualBuilderVisualBuilderSidebarLocationBlockLocationConnection';
  edges?: Maybe<Array<Maybe<VisualBuilderVisualBuilderSidebarLocationBlockLocationEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VisualBuilderVisualBuilderSidebarLocationBlockLocationEdge = {
  __typename?: 'VisualBuilderVisualBuilderSidebarLocationBlockLocationEdge';
  node?: Maybe<VisualBuilderVisualBuilderSidebarLocationBlockLocationNode>;
};

export type VisualBuilderVisualBuilderSidebarLocationBlockLocationNode = Location;

export type VisualBuilderVisualBuilderSidebarLocationBlockLocationWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  location?: InputMaybe<LocationWhere>;
};

export type VisualBuilderVisualBuilderSidebarLocationBlockWhere = {
  location?: InputMaybe<VisualBuilderVisualBuilderSidebarLocationBlockLocationWhere>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderVisualBuilderSidebarWhere = {
  article?: InputMaybe<VisualBuilderVisualBuilderSidebarArticleBlockWhere>;
  article_exists?: InputMaybe<Scalars['Boolean']>;
  calendar_event?: InputMaybe<VisualBuilderVisualBuilderSidebarCalendarEventBlockWhere>;
  calendar_event_exists?: InputMaybe<Scalars['Boolean']>;
  contact?: InputMaybe<VisualBuilderVisualBuilderSidebarContactBlockWhere>;
  contact_exists?: InputMaybe<Scalars['Boolean']>;
  default?: InputMaybe<VisualBuilderVisualBuilderSidebarDefaultBlockWhere>;
  default_exists?: InputMaybe<Scalars['Boolean']>;
  disclaimer?: InputMaybe<VisualBuilderVisualBuilderSidebarDisclaimerBlockWhere>;
  disclaimer_exists?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<VisualBuilderVisualBuilderSidebarImageBlockWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<VisualBuilderVisualBuilderSidebarLocationBlockWhere>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
};

export type VisualBuilderWhere = {
  enable_sidebar?: InputMaybe<Scalars['Boolean']>;
  enable_sidebar_exists?: InputMaybe<Scalars['Boolean']>;
  enable_sidebar_ne?: InputMaybe<Scalars['Boolean']>;
  visual_builder_body?: InputMaybe<VisualBuilderVisualBuilderBodyWhere>;
  visual_builder_body_exists?: InputMaybe<Scalars['Boolean']>;
  visual_builder_sidebar?: InputMaybe<VisualBuilderVisualBuilderSidebarWhere>;
  visual_builder_sidebar_exists?: InputMaybe<Scalars['Boolean']>;
};
