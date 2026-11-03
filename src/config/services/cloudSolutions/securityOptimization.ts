import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const SECURITY_OPTIMIZATION_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Security & Performance Optimization | Enterprise Systems | Brivya Solutions",
    description: "Strengthen digital security and optimize system performance. Comprehensive vulnerability assessments, infrastructure hardening, and performance tuning.",
  },
  hero: {
    serviceTitle: "Security & Performance Optimization",
    heading: "Strengthen Your Digital Security & Optimize System Performance",
    description: "Protect your applications and improve system performance with comprehensive security and optimization solutions. We identify security weaknesses, improve application configurations, and optimize websites, databases, and server environments. From vulnerability assessments and access controls to performance monitoring and resource optimization, our solutions focus on creating more secure, stable, and efficient digital systems.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/cloud-solutions/security-performance-hero.png",
    imageAlt: "Enterprise Security Hardening and Systems Performance Illustration",
  },
  mainFeaturedCard: {
    tag: "Security & Systems Directive",
    heading: "Security & Performance Solutions Built Around Your Technical Requirements",
    paragraphs: [
      "Security vulnerabilities, inefficient application code, outdated configurations, and poorly optimized infrastructure can affect both system reliability and user experience. We provide security and performance optimization services that help identify these issues and improve how your digital systems operate. Our approach combines application security assessments, vulnerability management, access control configuration, code optimization, database tuning, and infrastructure analysis. From strengthening application protection to reducing unnecessary processing and improving response times, we focus on identifying technical bottlenecks, addressing security risks, and maintaining reliable system performance."
    ]
  },
  supportingCards: {
    heading: "Defense-in-Depth & Performance Architecture",
    subtitle: "From vulnerability management and WAF configurations to database tuning and Core Web Vitals optimization.",
    card2IllustrationPath: "/images/services/cloud-solutions/vulnerability-assessment.png",
    card2IllustrationAlt: "Vulnerability Assessment and API Security Architecture",
    card3IllustrationPath: "/images/services/cloud-solutions/backend-performance-opt.png",
    card3IllustrationAlt: "Backend Performance Diagnostics and Resource Optimization",
    items: [
      {
        index: "01",
        title: "Security Assessment & Vulnerability Management",
        description: "Identify potential security weaknesses across your applications, servers, and infrastructure. We review configurations, software dependencies, access permissions, and common application vulnerabilities to identify risks and recommend appropriate security improvements.",
      },
      {
        index: "02",
        title: "Application & API Security",
        description: "Strengthen the security of websites, applications, and API connections through appropriate validation and protection mechanisms. We review authentication, authorization, input validation, secure communication, and application configurations to help reduce common security risks.",
      },
      {
        index: "03",
        title: "Server & Infrastructure Hardening",
        description: "Improve infrastructure security through properly configured operating systems, network controls, and server permissions. We configure firewalls, secure remote access, software updates, service restrictions, and other security settings according to your environment.",
      },
      {
        index: "04",
        title: "Website & Application Performance Optimization",
        description: "Improve website loading times and application responsiveness by identifying inefficient code, large resources, unnecessary requests, and frontend bottlenecks. We optimize assets, caching, scripts, and application delivery to support a smoother user experience.",
      },
      {
        index: "05",
        title: "Database & Backend Performance Optimization",
        description: "Improve data access and backend processing through query analysis, indexing, caching, and application-level optimization. We examine database workloads, API response times, and server resource usage to identify bottlenecks affecting system performance.",
      },
      {
        index: "06",
        title: "Performance Monitoring & Security Maintenance",
        description: "Maintain visibility into system health and potential security issues through regular monitoring and maintenance. We configure performance alerts, review system logs, manage updates, and assess application behavior to help identify problems and support continuous improvement.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Industry Security Standards & Optimization Guidelines",
    description: "Access official guidelines, web vitals documentation, and security standards from industry authorities.",
    items: [
      {
        id: "res-owasp-top10",
        title: "OWASP Top 10: 2025",
        description: "Explore major web application security risks, including access control failures, security misconfigurations, and injection vulnerabilities.",
        url: "https://owasp.org/www-project-top-ten/",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/cloud-solutions/owasp-top10-badge.png",
        badgeImageAlt: "OWASP Top 10 Security Standards Badge"
      },
      {
        id: "res-nist-csf",
        title: "NIST Cybersecurity Framework 2.0",
        description: "Explore cybersecurity risk management guidance covering governance, protection, detection, response, and recovery.",
        url: "https://www.nist.gov/cyberframework",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/cloud-solutions/nist-framework-badge.png",
        badgeImageAlt: "NIST Cybersecurity Framework Badge"
      },
      {
        id: "res-core-web-vitals",
        title: "Google Core Web Vitals",
        description: "Learn about website loading performance, responsiveness, and visual stability.",
        url: "https://developers.google.com/search/docs/appearance/core-web-vitals",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/cloud-solutions/core-web-vitals-badge.png",
        badgeImageAlt: "Google Core Web Vitals Badge"
      },
      {
        id: "res-google-lighthouse",
        title: "Google Lighthouse",
        description: "Explore website performance, accessibility, SEO, and quality auditing.",
        url: "https://developer.chrome.com/docs/lighthouse/overview",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/cloud-solutions/lighthouse-badge.png",
        badgeImageAlt: "Google Lighthouse Audit Tool Badge"
      },
    ]
  },
  faq: {
    heading: "Common Questions About Security & Performance Optimization",
    items: [
      {
        id: "faq-sec-1",
        question: "What is security and performance optimization?",
        answer: "Security and performance optimization involves identifying technical weaknesses, strengthening application protection, and improving how websites, applications, databases, and servers operate. It combines security assessments, configuration improvements, code optimization, and ongoing system monitoring."
      },
      {
        id: "faq-sec-2",
        question: "Why does my website or application need security optimization?",
        answer: "Websites and applications can face risks from outdated software, weak authentication, insecure configurations, and vulnerable code. Security optimization helps identify these weaknesses and implement appropriate safeguards to reduce exposure to potential threats."
      },
      {
        id: "faq-sec-3",
        question: "How do you identify security vulnerabilities in applications?",
        answer: "Security assessments can include configuration reviews, dependency checks, access control analysis, and testing against recognized vulnerability categories such as the OWASP Top 10. The assessment scope depends on the application, infrastructure, and authorized testing requirements."
      },
      {
        id: "faq-sec-4",
        question: "Can performance optimization make my website load faster?",
        answer: "Yes. Improvements to image delivery, caching, JavaScript execution, database queries, server response times, and other technical bottlenecks can improve loading performance. Actual results depend on the existing application architecture and the issues identified during assessment."
      },
      {
        id: "faq-sec-5",
        question: "What are Core Web Vitals?",
        answer: "Core Web Vitals are Google's metrics for measuring real-world user experience. They include Largest Contentful Paint (LCP) for loading performance, Interaction to Next Paint (INP) for responsiveness, and Cumulative Layout Shift (CLS) for visual stability."
      },
      {
        id: "faq-sec-6",
        question: "Can you improve both application security and performance without rebuilding the system?",
        answer: "In many cases, yes. Existing applications can often be improved through security configuration changes, code optimization, dependency updates, database tuning, and infrastructure improvements. The appropriate approach depends on the application's architecture and technical limitations."
      },
      {
        id: "faq-sec-7",
        question: "How do you protect applications against common security threats?",
        answer: "Protection can involve secure authentication, access controls, input validation, encryption, dependency updates, firewall configuration, and security monitoring. The selected measures depend on the application and its specific security requirements."
      },
      {
        id: "faq-sec-8",
        question: "How do you measure security and performance improvements?",
        answer: "Performance can be evaluated through loading times, API response times, resource utilization, database query performance, and Core Web Vitals. Security improvements can be assessed through vulnerability findings, configuration reviews, access control checks, and security testing results."
      }
    ]
  },
  cta: {
    heading: "Build More Secure & Better-Performing Digital Systems",
    description: "Protect your business applications while improving their speed, responsiveness, and operational reliability. From security assessments and infrastructure hardening to application optimization, database tuning, and ongoing monitoring, let's develop a solution that strengthens your digital environment.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};