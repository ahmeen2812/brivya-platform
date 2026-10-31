import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const WHATSAPP_EMAIL_AUTOMATION_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "WhatsApp & Email Marketing Automation | Brivya Solutions",
    description: "Automate customer communications with intelligent WhatsApp Business API and email sequences. Connect notifications, CRM updates, and lead follow-ups.",
  },
  hero: {
    serviceTitle: "WhatsApp & Email Automation",
    heading: "Automate Customer Communication With WhatsApp & Email",
    description: "Improve customer engagement and simplify business communication with automated WhatsApp and email workflows. We develop solutions that manage customer inquiries, send timely notifications, automate follow-ups, and deliver relevant messages based on customer activity. From marketing campaigns to transactional updates, our automation solutions are designed around your communication goals and business requirements.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/ai-automation/whatsapp-email-hero-illustration.png",
    imageAlt: "Automated WhatsApp and Email Messaging Workflows Illustration",
  },
  mainFeaturedCard: {
    tag: "Customer Communication Lifecycle",
    heading: "WhatsApp & Email Automation Built Around Your Customer Journey",
    paragraphs: [
      "Managing customer communication across multiple channels requires consistent messaging, timely responses, and organized follow-ups. We develop WhatsApp and email automation solutions that connect customer interactions with your business workflows, CRM systems, and marketing platforms. From automated welcome messages and lead nurturing to appointment reminders, order updates, and customer re-engagement, our solutions help manage communication at different stages of the customer journey. We focus on relevant messaging, audience segmentation, reliable delivery, and permission-based communication to create more organized customer experiences."
    ]
  },
  supportingCards: {
    heading: "Omnichannel Communication Automation",
    subtitle: "High-deliverability messaging sequences designed around transactional and promotional customer touchpoints.",
    card2IllustrationPath: "/images/services/ai-automation/whatsapp-crm-integration.png",
    card2IllustrationAlt: "WhatsApp Business API and CRM Synchronization Architecture",
    card3IllustrationPath: "/images/services/ai-automation/email-automation-workflow.png",
    card3IllustrationAlt: "Behavioral Email Sequencing and Transactional Alerts Flow",
    items: [
      {
        index: "01",
        title: "WhatsApp Business Messaging Automation",
        description: "Automate customer communication through the WhatsApp Business Platform. We configure messaging workflows for customer inquiries, order confirmations, appointment reminders, service updates, and promotional messages using supported API features and approved message templates where required.",
      },
      {
        index: "02",
        title: "Email Marketing & Campaign Automation",
        description: "Create structured email campaigns that reach customers at relevant stages of their journey. We develop automated welcome sequences, promotional campaigns, newsletters, onboarding emails, and re-engagement workflows based on customer segments and defined triggers.",
      },
      {
        index: "03",
        title: "Transactional Messages & Notifications",
        description: "Keep customers informed through timely automated messages triggered by business activities. We configure notifications for order confirmations, payment updates, booking confirmations, shipping information, account activities, and other relevant customer events.",
      },
      {
        index: "04",
        title: "Automated Lead Follow-Ups & Nurturing",
        description: "Maintain communication with potential customers through scheduled and behavior-based follow-up workflows. We develop email and WhatsApp sequences that respond to lead activity, deliver relevant information, send reminders, and support customer progression through your sales process.",
      },
      {
        index: "05",
        title: "WhatsApp, Email & CRM Integration",
        description: "Connect your communication channels with CRM platforms and other business applications. We integrate supported systems to synchronize customer information, manage communication events, update records, and coordinate automated workflows across connected platforms.",
      },
      {
        index: "06",
        title: "Message Personalization & Performance Monitoring",
        description: "Make automated communication more relevant through audience segmentation and customer-specific information. We configure messaging rules, review delivery and engagement metrics, manage communication preferences, and identify opportunities to improve campaign performance.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Official Messaging & Automation Platforms",
    description: "Access official guidelines, policy documentation, and developer tools for enterprise WhatsApp and email delivery platforms.",
    items: [
      {
        id: "res-whatsapp-policy",
        title: "WhatsApp Business Messaging Policy",
        description: "Review WhatsApp messaging rules, customer permissions, approved templates, and communication requirements.",
        url: "https://whatsappbusiness.com/policy/",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/whatsapp-policy-badge.png",
        badgeImageAlt: "WhatsApp Business Messaging Policy Badge"
      },
      {
        id: "res-whatsapp-devhub",
        title: "WhatsApp Business Developer Hub",
        description: "Explore API documentation, webhooks, integrations, and messaging automation.",
        url: "https://whatsappbusiness.com/developers/developer-hub/",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/whatsapp-dev-badge.png",
        badgeImageAlt: "WhatsApp Business Developer Hub Badge"
      },
      {
        id: "res-google-sender-guidelines",
        title: "Google Email Sender Guidelines",
        description: "Understand email authentication, sender requirements, and deliverability practices.",
        url: "https://support.google.com/mail/answer/81126",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/google-sender-badge.png",
        badgeImageAlt: "Google Email Sender Guidelines Badge"
      },
      {
        id: "res-hubspot-workflows-email",
        title: "HubSpot Workflow Automation",
        description: "Learn how to automate marketing emails, contact management, and customer workflows.",
        url: "https://knowledge.hubspot.com/workflows/create-workflows",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/hubspot-workflows-badge.png",
        badgeImageAlt: "HubSpot Workflow Automation Documentation Badge"
      },
    ]
  },
  faq: {
    heading: "Common Questions About WhatsApp & Email Automation",
    items: [
      {
        id: "faq-wfl-1",
        question: "What is WhatsApp and email automation?",
        answer: "WhatsApp and email automation uses software workflows to send, manage, and organize customer communications based on predefined conditions and customer activities. It can automate welcome messages, follow-ups, promotional campaigns, appointment reminders, order notifications, and other business communications."
      },
      {
        id: "faq-wfl-2",
        question: "Can WhatsApp messages be sent automatically to customers?",
        answer: "Yes. The WhatsApp Business Platform supports automated messaging through approved integrations and APIs. Businesses must obtain appropriate customer opt-in, use approved message templates when initiating conversations, and follow WhatsApp's messaging policies and applicable requirements."
      },
      {
        id: "faq-wfl-3",
        question: "Can I automate both promotional and transactional emails?",
        answer: "Yes. Email automation can support promotional campaigns, newsletters, welcome sequences, onboarding communication, order confirmations, payment notifications, and other transactional messages. Each message type can use different triggers, workflows, and customer preferences."
      },
      {
        id: "faq-wfl-4",
        question: "Can WhatsApp and email automation work together?",
        answer: "Yes. Both channels can be coordinated within a unified customer communication strategy. For example, a business can send a transactional WhatsApp notification and follow it with an email containing additional information, provided the communication is appropriate and the required permissions are in place."
      },
      {
        id: "faq-wfl-5",
        question: "Can automated messages be personalized for individual customers?",
        answer: "Yes. Messaging systems can use available CRM fields, customer preferences, purchase information, and other approved data to personalize messages. This allows businesses to send relevant updates and communication based on individual customer information and defined audience segments."
      },
      {
        id: "faq-wfl-6",
        question: "Can WhatsApp and email automation integrate with my CRM?",
        answer: "Yes. Supported CRM platforms and communication tools can connect through APIs, connectors, and automation platforms. These integrations can synchronize contact records, trigger follow-ups, update customer activity, and coordinate communication workflows."
      },
      {
        id: "faq-wfl-7",
        question: "How do you ensure automated emails reach customers' inboxes?",
        answer: "Email deliverability depends on factors such as domain authentication, sender reputation, message quality, list management, and recipient engagement. We consider relevant authentication settings, including SPF, DKIM, and DMARC where applicable, along with unsubscribe handling and email performance monitoring. No setup can guarantee inbox placement."
      },
      {
        id: "faq-wfl-8",
        question: "How do you measure WhatsApp and email automation performance?",
        answer: "WhatsApp performance can be evaluated through delivery, read, response, and conversion metrics where available. Email performance can be measured through delivery rates, clicks, bounce rates, unsubscribes, and conversions. Comparing these results helps identify opportunities to improve communication relevance and workflow effectiveness."
      }
    ]
  },
  cta: {
    heading: "Make Every Customer Interaction More Efficient With Automation",
    description: "Simplify customer communication and create more organized marketing workflows with WhatsApp and email automation. From customer notifications and automated follow-ups to email campaigns, CRM integrations, and personalized messaging, let's build a communication system that supports your business goals.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};