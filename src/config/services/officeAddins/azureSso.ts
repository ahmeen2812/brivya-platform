import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const AZURE_SSO_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "Single Sign-On (SSO) & Microsoft Entra ID Integration | Brivya Solutions",
    description: "Simplify and secure application access with Single Sign-On (SSO) and Microsoft Entra ID (Azure AD). Enterprise authentication, SAML 2.0, OIDC, and SCIM provisioning.",
  },
  hero: {
    serviceTitle: "Office Add-in Development",
    heading: "Simplify Application Access With Single Sign-On & Microsoft Entra ID",
    description: "Make application access easier and more secure with centralized identity and authentication solutions. We develop SSO integrations that connect business applications with Microsoft Entra ID (formerly Azure Active Directory). From centralized login and user authentication to access management and enterprise application integration, our solutions are designed around your organization's identity and security requirements.",
    imagePath: "/images/services/office-addins/sso-hero-illustration.png",
    imageAlt: "Microsoft Entra ID Single Sign-On Architecture Illustration",
  },
  heroDirective: {
    tag: "Identity Directive",
    heading: "SSO & Identity Management Solutions Built Around Your Applications",
    paragraph: "Managing multiple application accounts and authentication systems can create unnecessary complexity for businesses. We implement Single Sign-On solutions that connect applications with Microsoft Entra ID, allowing users to access supported services through a centralized identity platform. Using protocols such as SAML 2.0 and OpenID Connect (OIDC), we configure application authentication, identity integration, and access controls according to your requirements. Our focus is on simplifying user access while maintaining appropriate security, permissions, and authentication policies."
  },
  verticalSplitSection: {
    tag: "SSO & Entra ID Integration",
    heading: "Centralized Enterprise Sign-In & Azure AD Tenant Federation",
    description: "Eliminate multiple credentials and strengthen enterprise security with centralized token authentication and directory integration.",
    keyFeatures: [
      {
        title: "Single Sign-On (SSO) Integration",
        description: "Connect your business applications with a centralized authentication system. We configure SSO integrations that allow users to access supported applications using their organizational identities without repeatedly entering separate credentials."
      },
      {
        title: "Microsoft Entra ID (Azure AD) Integration",
        description: "Connect your applications with Microsoft Entra ID, formerly Azure Active Directory. We configure application registrations, authentication settings, tenant integration, and identity configurations to support secure organizational sign-in."
      }
    ],
    imagePath: "/images/services/office-addins/sso-taskpane-mockup.png",
    imageAlt: "Microsoft Entra ID SSO Configuration and Authentication Flow Mockup",
  },
  fullWidthBanner: {
    tag: "Security Protocols",
    heading: "Standardized SAML 2.0 and OpenID Connect Integration",
    description: "Implement industry-standard authentication protocols with token validation, claims mapping, and cryptographically verified identity assertions."
  },
  fourPartMosaic: {
    block1: {
      title: "SAML & OpenID Connect Authentication",
      description: "Implement industry-standard authentication protocols for application integration. We configure SAML 2.0 and OpenID Connect authentication flows, token validation, claims mapping, and identity information exchange according to application requirements."
    },
    icon1: {
      imagePath: "/images/services/office-addins/sso-saml-icon.png",
      imageAlt: "SAML and OIDC Authentication Protocols Icon"
    },
    block2: {
      title: "Multi-Factor Authentication & Conditional Access",
      description: "Strengthen application access through additional authentication and contextual access policies. We configure supported MFA requirements and Conditional Access policies based on user identity, device information, location, and organizational security requirements."
    },
    icon2: {
      imagePath: "/images/services/office-addins/sso-mfa-icon.png",
      imageAlt: "Multi-Factor Authentication and Security Access Icon"
    }
  },
  panoramicShowcase: {
    tag: "Automated Provisioning",
    heading: "Automated SCIM User Provisioning & Lifecycle Governance",
    description: "Automatically provision, synchronize, and revoke user access across all integrated SaaS platforms when employee roles update in Entra ID.",
    imagePath: "/images/services/office-addins/sso-panoramic-showcase.png",
    imageAlt: "Microsoft Entra ID Identity Lifecycle and SCIM Provisioning Showcase",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "User Provisioning & Access Management",
      description: "Simplify user account management across connected applications. We configure supported user provisioning and deprovisioning workflows using SCIM, group assignments, attribute mapping, and identity synchronization to help maintain consistent access permissions."
    },
    {
      index: "02",
      title: "Enterprise Application Integration & Security",
      description: "Connect enterprise applications with Microsoft identity services and centralized access management. We configure authentication integrations, application permissions, secure API access, and identity-related settings to support your existing business infrastructure."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Microsoft Entra ID & Authentication Documentation",
    description: "Official identity management guides, SSO implementation documentation, and SCIM provisioning references from Microsoft.",
    items: [
      {
        id: "res-entra-docs",
        title: "Microsoft Entra ID Documentation",
        description: "Explore identity management, authentication, application access, and security features.",
        url: "https://learn.microsoft.com/en-us/entra/identity/",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/sso-badge-01.png",
        badgeImageAlt: "Microsoft Entra ID Documentation Badge"
      },
      {
        id: "res-entra-sso",
        title: "Microsoft Entra Single Sign-On",
        description: "Understand centralized authentication and SSO integration using SAML and OpenID Connect.",
        url: "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/understand-microsoft-sso-model",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/sso-badge-02.png",
        badgeImageAlt: "Microsoft Entra SSO Architecture Badge"
      },
      {
        id: "res-identity-platform",
        title: "Microsoft Identity Platform — OAuth 2.0 & OIDC",
        description: "Learn about authentication flows, tokens, and application registration.",
        url: "https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/sso-badge-03.png",
        badgeImageAlt: "Microsoft Identity Platform Protocols Badge"
      },
      {
        id: "res-conditional-access",
        title: "Microsoft Entra Conditional Access",
        description: "Explore identity-based security policies and access conditions.",
        url: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/sso-badge-04.png",
        badgeImageAlt: "Microsoft Entra Conditional Access Badge"
      },
      {
        id: "res-scim-provisioning",
        title: "Microsoft Entra SCIM Provisioning",
        description: "Understand automated user provisioning, synchronization, and deprovisioning.",
        url: "https://learn.microsoft.com/en-us/entra/identity/app-provisioning/scim-support-in-entra-id",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/sso-badge-05.png",
        badgeImageAlt: "Microsoft Entra SCIM Provisioning Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Single Sign-On & Azure AD",
    items: [
      {
        id: "faq-s-1",
        question: "What is Single Sign-On (SSO)?",
        answer: "Single Sign-On is an authentication approach that allows users to access multiple supported applications through a centralized identity provider. After signing in, users can access other connected applications without repeatedly entering their credentials, subject to the applications' session and access policies."
      },
      {
        id: "faq-s-2",
        question: "What is Azure AD, and is it still available?",
        answer: "Azure Active Directory (Azure AD) was renamed Microsoft Entra ID in 2023. The identity platform continues to provide authentication, SSO, user management, and application access capabilities under its updated name."
      },
      {
        id: "faq-s-3",
        question: "Can SSO integrate with my existing business applications?",
        answer: "Yes. Applications that support compatible authentication protocols such as SAML 2.0 or OpenID Connect can integrate with Microsoft Entra ID. Integration requirements depend on application architecture and authentication capabilities."
      },
      {
        id: "faq-s-4",
        question: "What is the difference between SAML and OpenID Connect?",
        answer: "SAML 2.0 uses XML-based assertions to exchange authentication information between an identity provider and an application. OpenID Connect is an identity layer built on OAuth 2.0 that uses tokens, commonly JSON Web Tokens, to communicate authentication information. The appropriate protocol depends on the application."
      },
      {
        id: "faq-s-5",
        question: "Can SSO work with applications hosted outside Microsoft Azure?",
        answer: "Yes. Microsoft Entra ID can provide SSO for supported applications hosted on other cloud platforms, SaaS environments, and compatible on-premises infrastructure. Integration depends on authentication protocol support and configuration requirements."
      },
      {
        id: "faq-s-6",
        question: "What is the difference between SSO and Multi-Factor Authentication?",
        answer: "SSO simplifies access by allowing users to authenticate through a centralized identity provider. Multi-Factor Authentication adds additional verification during sign-in. Both can work together to provide convenient access with additional security controls."
      },
      {
        id: "faq-s-7",
        question: "Can user accounts be managed automatically through Microsoft Entra ID?",
        answer: "Yes. Supported applications can use automated provisioning through SCIM to create, update, synchronize, and deactivate user accounts. This helps organizations manage application access as employee roles and account statuses change."
      },
      {
        id: "faq-s-8",
        question: "How do you secure SSO integrations?",
        answer: "We configure appropriate authentication protocols, token validation, application permissions, and secure communication. Depending on organizational requirements, additional controls can include MFA, Conditional Access, restricted application access, and monitoring of authentication activity."
      }
    ]
  },
  cta: {
    heading: "Simplify Application Access With Secure Identity Integration",
    description: "Centralize application authentication and improve how your organization manages user access. From SSO implementation and Microsoft Entra ID integration to SAML configuration, MFA, and automated user provisioning, let's build an identity solution around your business requirements.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};