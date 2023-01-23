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
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
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

export type AllLocation = {
  __typename?: 'AllLocation';
  items?: Maybe<Array<Maybe<Location>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllPage = {
  __typename?: 'AllPage';
  items?: Maybe<Array<Maybe<Page>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllPressRelease = {
  __typename?: 'AllPressRelease';
  items?: Maybe<Array<Maybe<PressRelease>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllRedirect = {
  __typename?: 'AllRedirect';
  items?: Maybe<Array<Maybe<Redirect>>>;
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
  base?: Maybe<BasePage>;
  departmentsConnection?: Maybe<ArticleDepartmentsConnection>;
  evergreen?: Maybe<Scalars['Boolean']>;
  posted_date?: Maybe<Scalars['DateTime']>;
  sidebar?: Maybe<Sidebar>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type ArticleDepartmentsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type ArticleWhere = {
  AND?: InputMaybe<Array<InputMaybe<ArticleWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ArticleWhere>>>;
  article_categories?: InputMaybe<ArticleCategoriesWhere>;
  article_categories_exists?: InputMaybe<Scalars['Boolean']>;
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
  posted_date?: InputMaybe<Scalars['DateTime']>;
  posted_date_exists?: InputMaybe<Scalars['Boolean']>;
  posted_date_gt?: InputMaybe<Scalars['DateTime']>;
  posted_date_gte?: InputMaybe<Scalars['DateTime']>;
  posted_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  posted_date_lt?: InputMaybe<Scalars['DateTime']>;
  posted_date_lte?: InputMaybe<Scalars['DateTime']>;
  posted_date_ne?: InputMaybe<Scalars['DateTime']>;
  posted_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sidebar?: InputMaybe<SidebarWhere>;
  sidebar_exists?: InputMaybe<Scalars['Boolean']>;
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

export type AssetFolder = {
  __typename?: 'AssetFolder';
  folder?: Maybe<Scalars['JSON']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  uni?: Maybe<UniformComposition>;
};

export enum AssetFolderOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

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
  folder?: InputMaybe<Scalars['JSON']>;
  folder_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  uni?: InputMaybe<UniformCompositionWhere>;
  uni_exists?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type BasePage = {
  __typename?: 'BasePage';
  base_imageConnection?: Maybe<SysAssetConnection>;
  body?: Maybe<BasePageBody>;
  image?: Maybe<Scalars['JSON']>;
  navigation?: Maybe<BasePageNavigation>;
  short_description?: Maybe<Scalars['String']>;
  show_table_of_contents?: Maybe<Scalars['Boolean']>;
  sitecore_guid?: Maybe<Scalars['String']>;
  uniform_enrichment_tag?: Maybe<Scalars['JSON']>;
};

export type BasePageBody = {
  __typename?: 'BasePageBody';
  embedded_itemsConnection?: Maybe<BasePageBodyConnection>;
  json?: Maybe<Scalars['JSON']>;
};


export type BasePageBodyEmbedded_ItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type BasePageBodyConnection = {
  __typename?: 'BasePageBodyConnection';
  edges?: Maybe<Array<Maybe<BasePageBodyEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BasePageBodyEdge = {
  __typename?: 'BasePageBodyEdge';
  node?: Maybe<BasePageBodyNode>;
};

export type BasePageBodyNode = Article | AssetFolder | Department | Disclaimer | ExternalLink | Faq | IframeApp | ImageGallery | Location | Page | SysAsset;

export type BasePageNavigation = {
  __typename?: 'BasePageNavigation';
  navigation_title?: Maybe<Scalars['String']>;
  show_children?: Maybe<Scalars['Boolean']>;
  show_in_breadcrumbs?: Maybe<Scalars['Boolean']>;
  show_in_navigation?: Maybe<Scalars['Boolean']>;
  show_in_search_results?: Maybe<Scalars['Boolean']>;
};

export type BasePageNavigationWhere = {
  navigation_title?: InputMaybe<Scalars['String']>;
  navigation_title_exists?: InputMaybe<Scalars['Boolean']>;
  navigation_title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigation_title_ne?: InputMaybe<Scalars['String']>;
  navigation_title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  show_children?: InputMaybe<Scalars['Boolean']>;
  show_children_exists?: InputMaybe<Scalars['Boolean']>;
  show_children_ne?: InputMaybe<Scalars['Boolean']>;
  show_in_breadcrumbs?: InputMaybe<Scalars['Boolean']>;
  show_in_breadcrumbs_exists?: InputMaybe<Scalars['Boolean']>;
  show_in_breadcrumbs_ne?: InputMaybe<Scalars['Boolean']>;
  show_in_navigation?: InputMaybe<Scalars['Boolean']>;
  show_in_navigation_exists?: InputMaybe<Scalars['Boolean']>;
  show_in_navigation_ne?: InputMaybe<Scalars['Boolean']>;
  show_in_search_results?: InputMaybe<Scalars['Boolean']>;
  show_in_search_results_exists?: InputMaybe<Scalars['Boolean']>;
  show_in_search_results_ne?: InputMaybe<Scalars['Boolean']>;
};

export type BasePageWhere = {
  base_image?: InputMaybe<SysAssetWhere>;
  base_image_exists?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<Scalars['JSON']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Scalars['JSON']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  navigation?: InputMaybe<BasePageNavigationWhere>;
  navigation_exists?: InputMaybe<Scalars['Boolean']>;
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
  locationConnection?: Maybe<CalendarEventLocationConnection>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CalendarEventInstance = {
  __typename?: 'CalendarEventInstance';
  canceled?: Maybe<Scalars['Boolean']>;
  end_time?: Maybe<Scalars['DateTime']>;
  eventConnection?: Maybe<CalendarEventInstanceEventConnection>;
  start_time?: Maybe<Scalars['DateTime']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
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

export enum CalendarEventInstanceOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type CalendarEventInstanceWhere = {
  AND?: InputMaybe<Array<InputMaybe<CalendarEventInstanceWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<CalendarEventInstanceWhere>>>;
  canceled?: InputMaybe<Scalars['Boolean']>;
  canceled_exists?: InputMaybe<Scalars['Boolean']>;
  canceled_ne?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  end_time?: InputMaybe<Scalars['DateTime']>;
  end_time_exists?: InputMaybe<Scalars['Boolean']>;
  end_time_gt?: InputMaybe<Scalars['DateTime']>;
  end_time_gte?: InputMaybe<Scalars['DateTime']>;
  end_time_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  end_time_lt?: InputMaybe<Scalars['DateTime']>;
  end_time_lte?: InputMaybe<Scalars['DateTime']>;
  end_time_ne?: InputMaybe<Scalars['DateTime']>;
  end_time_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  event?: InputMaybe<CalendarEventInstanceEventWhere>;
  event_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  start_time?: InputMaybe<Scalars['DateTime']>;
  start_time_exists?: InputMaybe<Scalars['Boolean']>;
  start_time_gt?: InputMaybe<Scalars['DateTime']>;
  start_time_gte?: InputMaybe<Scalars['DateTime']>;
  start_time_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  start_time_lt?: InputMaybe<Scalars['DateTime']>;
  start_time_lte?: InputMaybe<Scalars['DateTime']>;
  start_time_ne?: InputMaybe<Scalars['DateTime']>;
  start_time_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
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

export type CalendarEventLocationConnection = {
  __typename?: 'CalendarEventLocationConnection';
  edges?: Maybe<Array<Maybe<CalendarEventLocationEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CalendarEventLocationEdge = {
  __typename?: 'CalendarEventLocationEdge';
  node?: Maybe<CalendarEventLocationNode>;
};

export type CalendarEventLocationNode = Location;

export type CalendarEventLocationWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  location?: InputMaybe<LocationWhere>;
};

export enum CalendarEventOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

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
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<CalendarEventLocationWhere>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
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

export type Contact = {
  __typename?: 'Contact';
  admin_assistantConnection?: Maybe<ContactAdminAssistantConnection>;
  cloudinary_headshot?: Maybe<Scalars['JSON']>;
  emails?: Maybe<Array<Maybe<ContactEmails>>>;
  headshotConnection?: Maybe<SysAssetConnection>;
  job_title?: Maybe<Scalars['String']>;
  locationConnection?: Maybe<ContactLocationConnection>;
  phones?: Maybe<Array<Maybe<ContactPhones>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};


export type ContactAdmin_AssistantConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  number?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type ContactPhonesWhere = {
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

export type ContactWhere = {
  AND?: InputMaybe<Array<InputMaybe<ContactWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactWhere>>>;
  admin_assistant?: InputMaybe<ContactAdminAssistantWhere>;
  admin_assistant_count?: InputMaybe<Scalars['Int']>;
  admin_assistant_exists?: InputMaybe<Scalars['Boolean']>;
  cloudinary_headshot?: InputMaybe<Scalars['JSON']>;
  cloudinary_headshot_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  emails?: InputMaybe<ContactEmailsWhere>;
  emails_exists?: InputMaybe<Scalars['Boolean']>;
  headshot?: InputMaybe<SysAssetWhere>;
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
  phones?: InputMaybe<ContactPhonesWhere>;
  phones_exists?: InputMaybe<Scalars['Boolean']>;
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
};

export type Council = {
  __typename?: 'Council';
  base?: Maybe<BasePage>;
  eventConnection?: Maybe<CouncilEventConnection>;
  members?: Maybe<Array<Maybe<CouncilMembers>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CouncilEventConnection = {
  __typename?: 'CouncilEventConnection';
  edges?: Maybe<Array<Maybe<CouncilEventEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CouncilEventEdge = {
  __typename?: 'CouncilEventEdge';
  node?: Maybe<CouncilEventNode>;
};

export type CouncilEventNode = CalendarEvent;

export type CouncilEventWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  calendar_event?: InputMaybe<CalendarEventWhere>;
};

export type CouncilMembers = {
  __typename?: 'CouncilMembers';
  end_date?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  reappointed?: Maybe<Scalars['Boolean']>;
  start_date?: Maybe<Scalars['DateTime']>;
};

export type CouncilMembersWhere = {
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

export type CouncilWhere = {
  AND?: InputMaybe<Array<InputMaybe<CouncilWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<CouncilWhere>>>;
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
  event?: InputMaybe<CouncilEventWhere>;
  event_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  members?: InputMaybe<CouncilMembersWhere>;
  members_exists?: InputMaybe<Scalars['Boolean']>;
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

export type Department = {
  __typename?: 'Department';
  base?: Maybe<BasePage>;
  contactConnection?: Maybe<DepartmentContactConnection>;
  icon?: Maybe<Scalars['String']>;
  manager_contactConnection?: Maybe<DepartmentManagerContactConnection>;
  post_container_blocks?: Maybe<SectionBlocks>;
  pre_container_blocks?: Maybe<SectionBlocks>;
  sidebar?: Maybe<Sidebar>;
  site_sections?: Maybe<Array<Maybe<Scalars['String']>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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
  manager_contact_exists?: InputMaybe<Scalars['Boolean']>;
  post_container_blocks?: InputMaybe<SectionBlocksWhere>;
  post_container_blocks_exists?: InputMaybe<Scalars['Boolean']>;
  pre_container_blocks?: InputMaybe<SectionBlocksWhere>;
  pre_container_blocks_exists?: InputMaybe<Scalars['Boolean']>;
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
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Disclaimer = {
  __typename?: 'Disclaimer';
  body?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<DisclaimerButtons>>>;
  color?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
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
  expires_at?: InputMaybe<Scalars['DateTime']>;
  expires_at_exists?: InputMaybe<Scalars['Boolean']>;
  expires_at_gt?: InputMaybe<Scalars['DateTime']>;
  expires_at_gte?: InputMaybe<Scalars['DateTime']>;
  expires_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  expires_at_lt?: InputMaybe<Scalars['DateTime']>;
  expires_at_lte?: InputMaybe<Scalars['DateTime']>;
  expires_at_ne?: InputMaybe<Scalars['DateTime']>;
  expires_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
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
  title?: Maybe<Scalars['String']>;
};

export enum ExternalLinkOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

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
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
};

export type Faq = {
  __typename?: 'Faq';
  categories?: Maybe<Array<Maybe<FaqCategories>>>;
  system?: Maybe<EntrySystemField>;
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
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  title?: Maybe<Scalars['String']>;
};

export enum FeaturedContentComponentOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

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
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_ne?: InputMaybe<Scalars['String']>;
  subtitle_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  rating?: InputMaybe<Scalars['String']>;
  rating_exists?: InputMaybe<Scalars['Boolean']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rating_ne?: InputMaybe<Scalars['String']>;
  rating_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
};

export type Home = {
  __typename?: 'Home';
  alertConnection?: Maybe<HomeAlertConnection>;
  banner_imageConnection?: Maybe<SysAssetConnection>;
  footer_linksConnection?: Maybe<HomeFooterLinksConnection>;
  footer_social_linksConnection?: Maybe<HomeFooterSocialLinksConnection>;
  locationConnection?: Maybe<HomeLocationConnection>;
  logo_darkConnection?: Maybe<SysAssetConnection>;
  logo_lightConnection?: Maybe<SysAssetConnection>;
  navigation?: Maybe<Array<Maybe<HomeNavigation>>>;
  section_blocks?: Maybe<SectionBlocks>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  website_feedback_url?: Maybe<Link>;
};


export type HomeFooter_LinksConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HomeFooter_Social_LinksConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  banner_image_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  footer_links?: InputMaybe<HomeFooterLinksWhere>;
  footer_links_count?: InputMaybe<Scalars['Int']>;
  footer_links_exists?: InputMaybe<Scalars['Boolean']>;
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
  logo_dark_exists?: InputMaybe<Scalars['Boolean']>;
  logo_light?: InputMaybe<SysAssetWhere>;
  logo_light_exists?: InputMaybe<Scalars['Boolean']>;
  navigation?: InputMaybe<HomeNavigationWhere>;
  navigation_exists?: InputMaybe<Scalars['Boolean']>;
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
  website_feedback_url?: InputMaybe<LinkWhere>;
  website_feedback_url_exists?: InputMaybe<Scalars['Boolean']>;
};

export type IframeApp = {
  __typename?: 'IframeApp';
  aspect_ratio?: Maybe<Scalars['Float']>;
  container_url?: Maybe<Scalars['Boolean']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum IframeAppOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

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
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type ImageGallery = {
  __typename?: 'ImageGallery';
  cloudinary_images?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  image_filesConnection?: Maybe<SysAssetConnection>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};


export type ImageGalleryImage_FilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ImageGalleryOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type ImageGalleryWhere = {
  AND?: InputMaybe<Array<InputMaybe<ImageGalleryWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageGalleryWhere>>>;
  cloudinary_images?: InputMaybe<Scalars['JSON']>;
  cloudinary_images_exists?: InputMaybe<Scalars['Boolean']>;
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
  image_files?: InputMaybe<SysAssetWhere>;
  image_files_count?: InputMaybe<Scalars['Int']>;
  image_files_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  contact_phone?: Maybe<Scalars['String']>;
  entrance_fees?: Maybe<Scalars['String']>;
  fees?: Maybe<Array<Maybe<Scalars['Float']>>>;
  hours?: Maybe<Array<Maybe<Scalars['String']>>>;
  location_categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Scalars['String']>;
  section_blocks?: Maybe<SectionBlocks>;
  system?: Maybe<EntrySystemField>;
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

export enum LocationOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

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
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Page = {
  __typename?: 'Page';
  action_link?: Maybe<Link>;
  action_typeConnection?: Maybe<PageActionTypeConnection>;
  base?: Maybe<BasePage>;
  base_page?: Maybe<BasePage>;
  departmentsConnection?: Maybe<PageDepartmentsConnection>;
  page_type?: Maybe<Scalars['String']>;
  parent?: Maybe<Parent>;
  post_container_blocks?: Maybe<SectionBlocks>;
  pre_container_blocks?: Maybe<SectionBlocks>;
  redirect?: Maybe<PageRedirect>;
  sidebar?: Maybe<Sidebar>;
  slug?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type PageDepartmentsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type PageWhere = {
  AND?: InputMaybe<Array<InputMaybe<PageWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<PageWhere>>>;
  action_link?: InputMaybe<LinkWhere>;
  action_link_exists?: InputMaybe<Scalars['Boolean']>;
  action_type?: InputMaybe<PageActionTypeWhere>;
  action_type_exists?: InputMaybe<Scalars['Boolean']>;
  base?: InputMaybe<BasePageWhere>;
  base_exists?: InputMaybe<Scalars['Boolean']>;
  base_page?: InputMaybe<BasePageWhere>;
  base_page_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
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
  post_container_blocks?: InputMaybe<SectionBlocksWhere>;
  post_container_blocks_exists?: InputMaybe<Scalars['Boolean']>;
  pre_container_blocks?: InputMaybe<SectionBlocksWhere>;
  pre_container_blocks_exists?: InputMaybe<Scalars['Boolean']>;
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

export type PressRelease = {
  __typename?: 'PressRelease';
  article_categories?: Maybe<ArticleCategories>;
  base?: Maybe<BasePage>;
  departmentsConnection?: Maybe<PressReleaseDepartmentsConnection>;
  posted_date?: Maybe<Scalars['DateTime']>;
  sidebar?: Maybe<Sidebar>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type PressReleaseDepartmentsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PressReleaseDepartmentsConnection = {
  __typename?: 'PressReleaseDepartmentsConnection';
  edges?: Maybe<Array<Maybe<PressReleaseDepartmentsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PressReleaseDepartmentsEdge = {
  __typename?: 'PressReleaseDepartmentsEdge';
  node?: Maybe<PressReleaseDepartmentsNode>;
};

export type PressReleaseDepartmentsNode = Department;

export type PressReleaseDepartmentsWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  department?: InputMaybe<DepartmentWhere>;
};

export enum PressReleaseOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type PressReleaseWhere = {
  AND?: InputMaybe<Array<InputMaybe<PressReleaseWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<PressReleaseWhere>>>;
  article_categories?: InputMaybe<ArticleCategoriesWhere>;
  article_categories_exists?: InputMaybe<Scalars['Boolean']>;
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
  departments?: InputMaybe<PressReleaseDepartmentsWhere>;
  departments_count?: InputMaybe<Scalars['Int']>;
  departments_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  posted_date?: InputMaybe<Scalars['DateTime']>;
  posted_date_exists?: InputMaybe<Scalars['Boolean']>;
  posted_date_gt?: InputMaybe<Scalars['DateTime']>;
  posted_date_gte?: InputMaybe<Scalars['DateTime']>;
  posted_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  posted_date_lt?: InputMaybe<Scalars['DateTime']>;
  posted_date_lte?: InputMaybe<Scalars['DateTime']>;
  posted_date_ne?: InputMaybe<Scalars['DateTime']>;
  posted_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sidebar?: InputMaybe<SidebarWhere>;
  sidebar_exists?: InputMaybe<Scalars['Boolean']>;
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
  all_department?: Maybe<AllDepartment>;
  all_disclaimer?: Maybe<AllDisclaimer>;
  all_external_link?: Maybe<AllExternalLink>;
  all_faq?: Maybe<AllFaq>;
  all_featured_content_component?: Maybe<AllFeaturedContentComponent>;
  all_hiking_trail?: Maybe<AllHikingTrail>;
  all_home?: Maybe<AllHome>;
  all_iframe_app?: Maybe<AllIframeApp>;
  all_image_gallery?: Maybe<AllImageGallery>;
  all_location?: Maybe<AllLocation>;
  all_page?: Maybe<AllPage>;
  all_press_release?: Maybe<AllPressRelease>;
  all_redirect?: Maybe<AllRedirect>;
  all_service_action_type?: Maybe<AllServiceActionType>;
  all_servicenow_category?: Maybe<AllServicenowCategory>;
  all_servicenow_kb_article?: Maybe<AllServicenowKbArticle>;
  all_site_alert?: Maybe<AllSiteAlert>;
  all_social_platform?: Maybe<AllSocialPlatform>;
  all_stay_safe?: Maybe<AllStaySafe>;
  article?: Maybe<Article>;
  asset_folder?: Maybe<AssetFolder>;
  assets?: Maybe<SysAsset>;
  calendar_event?: Maybe<CalendarEvent>;
  calendar_event_instance?: Maybe<CalendarEventInstance>;
  commissioner?: Maybe<Commissioner>;
  contact?: Maybe<Contact>;
  council?: Maybe<Council>;
  department?: Maybe<Department>;
  disclaimer?: Maybe<Disclaimer>;
  external_link?: Maybe<ExternalLink>;
  faq?: Maybe<Faq>;
  featured_content_component?: Maybe<FeaturedContentComponent>;
  hiking_trail?: Maybe<HikingTrail>;
  home?: Maybe<Home>;
  iframe_app?: Maybe<IframeApp>;
  image_gallery?: Maybe<ImageGallery>;
  location?: Maybe<Location>;
  page?: Maybe<Page>;
  press_release?: Maybe<PressRelease>;
  redirect?: Maybe<Redirect>;
  service_action_type?: Maybe<ServiceActionType>;
  servicenow_category?: Maybe<ServicenowCategory>;
  servicenow_kb_article?: Maybe<ServicenowKbArticle>;
  site_alert?: Maybe<SiteAlert>;
  social_platform?: Maybe<SocialPlatform>;
  stay_safe?: Maybe<StaySafe>;
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


export type QueryAll_LocationArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<LocationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LocationWhere>;
};


export type QueryAll_PageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<PageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhere>;
};


export type QueryAll_Press_ReleaseArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<PressReleaseOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PressReleaseWhere>;
};


export type QueryAll_RedirectArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<RedirectOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RedirectWhere>;
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


export type QueryLocationArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryPageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryPress_ReleaseArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryRedirectArgs = {
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


export type QueryStay_SafeArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};

export type Redirect = {
  __typename?: 'Redirect';
  source?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  target?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export enum RedirectOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

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
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
};

export type SectionBlocks = {
  __typename?: 'SectionBlocks';
  blocks?: Maybe<Array<Maybe<SectionBlocksBlocks>>>;
};

export type SectionBlocksBlocks = SectionBlocksBlocksDivider | SectionBlocksBlocksEmergencyoperationalstatus | SectionBlocksBlocksFeaturedContent | SectionBlocksBlocksImageGallery | SectionBlocksBlocksUniformcomposition | SectionBlocksBlocksVideos;

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

export type SectionBlocksBlocksFeaturedContent = {
  __typename?: 'SectionBlocksBlocksFeaturedContent';
  FeaturedContent?: Maybe<SectionBlocksBlocksFeaturedContentBlock>;
};

export type SectionBlocksBlocksFeaturedContentBlock = {
  __typename?: 'SectionBlocksBlocksFeaturedContentBlock';
  background_imageConnection?: Maybe<SysAssetConnection>;
  cloudinary_background?: Maybe<Scalars['JSON']>;
  custom?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<SectionBlocksBlocksFeaturedContentBlockGradient>;
  referenceConnection?: Maybe<SectionBlocksBlocksFeaturedContentBlockReferenceConnection>;
  variant?: Maybe<Scalars['String']>;
};

export type SectionBlocksBlocksFeaturedContentBlockGradient = {
  __typename?: 'SectionBlocksBlocksFeaturedContentBlockGradient';
  degree?: Maybe<Scalars['Float']>;
  rgba?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SectionBlocksBlocksFeaturedContentBlockGradientWhere = {
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

export type SectionBlocksBlocksFeaturedContentBlockReferenceConnection = {
  __typename?: 'SectionBlocksBlocksFeaturedContentBlockReferenceConnection';
  edges?: Maybe<Array<Maybe<SectionBlocksBlocksFeaturedContentBlockReferenceEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SectionBlocksBlocksFeaturedContentBlockReferenceEdge = {
  __typename?: 'SectionBlocksBlocksFeaturedContentBlockReferenceEdge';
  node?: Maybe<SectionBlocksBlocksFeaturedContentBlockReferenceNode>;
};

export type SectionBlocksBlocksFeaturedContentBlockReferenceNode = FeaturedContentComponent;

export type SectionBlocksBlocksFeaturedContentBlockReferenceWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  featured_content_component?: InputMaybe<FeaturedContentComponentWhere>;
};

export type SectionBlocksBlocksFeaturedContentBlockWhere = {
  background_image?: InputMaybe<SysAssetWhere>;
  background_image_exists?: InputMaybe<Scalars['Boolean']>;
  cloudinary_background?: InputMaybe<Scalars['JSON']>;
  cloudinary_background_exists?: InputMaybe<Scalars['Boolean']>;
  custom?: InputMaybe<Scalars['JSON']>;
  custom_exists?: InputMaybe<Scalars['Boolean']>;
  gradient?: InputMaybe<SectionBlocksBlocksFeaturedContentBlockGradientWhere>;
  gradient_exists?: InputMaybe<Scalars['Boolean']>;
  reference?: InputMaybe<SectionBlocksBlocksFeaturedContentBlockReferenceWhere>;
  reference_exists?: InputMaybe<Scalars['Boolean']>;
  variant?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_ne?: InputMaybe<Scalars['String']>;
  variant_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  FeaturedContent?: InputMaybe<SectionBlocksBlocksFeaturedContentBlockWhere>;
  FeaturedContent_exists?: InputMaybe<Scalars['Boolean']>;
  ImageGallery?: InputMaybe<SectionBlocksBlocksImageGalleryBlockWhere>;
  ImageGallery_exists?: InputMaybe<Scalars['Boolean']>;
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
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parent_category?: InputMaybe<ServicenowCategoryParentCategoryWhere>;
  parent_category_exists?: InputMaybe<Scalars['Boolean']>;
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
  global_field?: InputMaybe<BasePageWhere>;
  global_field_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
};

export type Sidebar = {
  __typename?: 'Sidebar';
  blocks?: Maybe<Array<Maybe<SidebarBlocks>>>;
};

export type SidebarBlocks = SidebarBlocksAsset | SidebarBlocksContact | SidebarBlocksDisclaimer | SidebarBlocksImage | SidebarBlocksLocation;

export type SidebarBlocksAsset = {
  __typename?: 'SidebarBlocksAsset';
  Asset?: Maybe<SidebarBlocksAssetBlock>;
};

export type SidebarBlocksAssetBlock = {
  __typename?: 'SidebarBlocksAssetBlock';
  cloudinary_file?: Maybe<Scalars['JSON']>;
  fileConnection?: Maybe<SysAssetConnection>;
};

export type SidebarBlocksAssetBlockWhere = {
  cloudinary_file?: InputMaybe<Scalars['JSON']>;
  cloudinary_file_exists?: InputMaybe<Scalars['Boolean']>;
  file?: InputMaybe<SysAssetWhere>;
  file_exists?: InputMaybe<Scalars['Boolean']>;
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
  cloudinary_image?: Maybe<Scalars['JSON']>;
  external_linkConnection?: Maybe<SidebarBlocksImageBlockExternalLinkConnection>;
  imageConnection?: Maybe<SysAssetConnection>;
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
  cloudinary_image?: InputMaybe<Scalars['JSON']>;
  cloudinary_image_exists?: InputMaybe<Scalars['Boolean']>;
  external_link?: InputMaybe<SidebarBlocksImageBlockExternalLinkWhere>;
  external_link_exists?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<SysAssetWhere>;
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
  Asset?: InputMaybe<SidebarBlocksAssetBlockWhere>;
  Asset_exists?: InputMaybe<Scalars['Boolean']>;
  Contact?: InputMaybe<SidebarBlocksContactBlockWhere>;
  Contact_exists?: InputMaybe<Scalars['Boolean']>;
  Disclaimer?: InputMaybe<SidebarBlocksDisclaimerBlockWhere>;
  Disclaimer_exists?: InputMaybe<Scalars['Boolean']>;
  Image?: InputMaybe<SidebarBlocksImageBlockWhere>;
  Image_exists?: InputMaybe<Scalars['Boolean']>;
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
  title?: Maybe<Scalars['String']>;
};

export enum SiteAlertOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

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
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StaySafe = {
  __typename?: 'StaySafe';
  activation_level?: Maybe<Scalars['String']>;
  active_events?: Maybe<Scalars['String']>;
  evacuation_levels?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  evacuation_levels?: InputMaybe<Scalars['String']>;
  evacuation_levels_exists?: InputMaybe<Scalars['Boolean']>;
  evacuation_levels_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  evacuation_levels_ne?: InputMaybe<Scalars['String']>;
  evacuation_levels_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
};

export type SysAsset = {
  __typename?: 'SysAsset';
  content_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimension?: Maybe<SysAssetDimension>;
  file_size?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
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

export type SysExtensionConnection = {
  __typename?: 'SysExtensionConnection';
  edges?: Maybe<Array<Maybe<SysExtensionEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SysExtensionEdge = {
  __typename?: 'SysExtensionEdge';
  node?: Maybe<SysMetadata>;
};

export type SysMetadata = {
  __typename?: 'SysMetadata';
  extension_uid?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type SystemPublishDetails = {
  __typename?: 'SystemPublishDetails';
  environment?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
};

export type UniformComposition = {
  __typename?: 'UniformComposition';
  url?: Maybe<Scalars['String']>;
};

export type UniformCompositionWhere = {
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
