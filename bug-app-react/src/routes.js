import { HomePage } from "./features/home/HomePage.jsx";
import { FeedPage } from "./features/feed/FeedPage.jsx";
import { NotificationsPage } from "./features/notifications/NotificationsPage.jsx";
import { MessagesPage } from "./features/messaging/MessagesPage.jsx";
import { ConversationPage } from "./features/messaging/ConversationPage.jsx";
import { WorkshopsPage } from "./features/workshops/WorkshopsPage.jsx";
import { WorkshopDetailPage } from "./features/workshops/WorkshopDetailPage.jsx";
import { WorkshopCreatePage } from "./features/workshops/WorkshopCreatePage.jsx";
import { CalendarPage } from "./features/events/CalendarPage.jsx";
import { EventDetailPage } from "./features/events/EventDetailPage.jsx";
import { MentorsPage } from "./features/mentors/MentorsPage.jsx";
import { MentorDetailPage } from "./features/mentors/MentorDetailPage.jsx";
import { MentorApplyPage } from "./features/mentors/MentorApplyPage.jsx";
import { ResourcesPage } from "./features/resources/ResourcesPage.jsx";
import { ResourceDetailPage } from "./features/resources/ResourceDetailPage.jsx";
import { ProfilePage } from "./features/profile/ProfilePage.jsx";
import { ProfileEditPage } from "./features/profile/ProfileEditPage.jsx";
import { LikesPage } from "./features/profile/LikesPage.jsx";
import { MyCommentsPage } from "./features/profile/MyCommentsPage.jsx";
import { SettingsAccountPage } from "./features/settings/SettingsAccountPage.jsx";
import { SettingsNotificationsPage } from "./features/settings/SettingsNotificationsPage.jsx";
import { SettingsPrivacyPage } from "./features/settings/SettingsPrivacyPage.jsx";
import { SettingsBillingPage } from "./features/settings/SettingsBillingPage.jsx";
import { AboutPage } from "./features/company/AboutPage.jsx";
import { CareersPage } from "./features/company/CareersPage.jsx";
import { ContactPage } from "./features/company/ContactPage.jsx";
import { BlogPage } from "./features/company/BlogPage.jsx";
import { BlogPostPage } from "./features/company/BlogPostPage.jsx";
import { HelpPage } from "./features/company/HelpPage.jsx";
import { FaqPage } from "./features/company/FaqPage.jsx";

export const PAGE_COMPONENTS = {
  home: HomePage,
  feed: FeedPage,
  notifications: NotificationsPage,
  messages: MessagesPage,
  conversation: ConversationPage,
  workshops: WorkshopsPage,
  "workshop-detail": WorkshopDetailPage,
  "workshop-create": WorkshopCreatePage,
  calendar: CalendarPage,
  "event-detail": EventDetailPage,
  mentors: MentorsPage,
  "mentor-detail": MentorDetailPage,
  "mentor-apply": MentorApplyPage,
  resources: ResourcesPage,
  "resource-detail": ResourceDetailPage,
  profile: ProfilePage,
  "profile-edit": ProfileEditPage,
  likes: LikesPage,
  "comments-mine": MyCommentsPage,
  "settings-account": SettingsAccountPage,
  "settings-notifications": SettingsNotificationsPage,
  "settings-privacy": SettingsPrivacyPage,
  "settings-billing": SettingsBillingPage,
  about: AboutPage,
  careers: CareersPage,
  contact: ContactPage,
  blog: BlogPage,
  "blog-post": BlogPostPage,
  help: HelpPage,
  faq: FaqPage,
};
