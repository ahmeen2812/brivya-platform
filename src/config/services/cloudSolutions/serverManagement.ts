import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const SERVER_MANAGEMENT_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Server Setup & Systems Management | Linux & Windows | Brivya Solutions",
    description: "Professional Linux and Windows server setup, hardening, monitoring, and administration. Keep your infrastructure stable, secure, and maintained.",
  },
  hero: {
    serviceTitle: "Server Setup & Management",
    heading: "Build Reliable Server Environments With Professional Setup & Management",
    description: "Keep your applications and business systems running with properly configured and maintained server infrastructure. We provide server setup and management services covering operating system installation, server configuration, security settings, application hosting, and performance monitoring. From Linux and Windows servers to web hosting environments and database servers, our solutions are designed around your infrastructure and operational requirements.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/cloud-solutions/server-management-hero.png",
    imageAlt: "Server Administration and Systems Configuration Illustration",
  },
  mainFeaturedCard: {
    tag: "Server Operations Directive",
    heading: "Server Management Solutions Built Around Your Infrastructure Needs",
    paragraphs: [
      "Poorly configured servers, outdated software, limited monitoring, and weak access controls can create operational and security challenges for businesses. We provide server setup and management solutions that establish properly configured environments for hosting applications, managing databases, and supporting business operations. Our services cover Linux and Windows server administration, web server configuration, network settings, user permissions, security updates, and routine maintenance. From initial server installation to ongoing monitoring and troubleshooting, our approach focuses on infrastructure stability, controlled access, and reliable server operations."
    ]
  },
  supportingCards: {
    heading: "Complete Server Administration & Hardening",
    subtitle: "From OS installation and reverse proxies to automated security updates and resource monitoring.",
    card2IllustrationPath: "/images/services/cloud-solutions/linux-windows-config.png",
    card2IllustrationAlt: "Linux and Windows Server Configuration Architecture",
    card3IllustrationPath: "/images/services/cloud-solutions/server-security-access.png",
    card3IllustrationAlt: "Server Hardening and Access Control Matrix",
    items: [
      {
        index: "01",
        title: "Linux & Windows Server Configuration",
        description: "Set up server environments using suitable operating systems and configurations. We handle Linux distributions such as Ubuntu and Debian, alongside Windows Server environments, including system installation, user management, software configuration, and essential server services.",
      },
      {
        index: "02",
        title: "Web Server & Application Configuration",
        description: "Prepare servers to host websites, applications, and backend services. We configure web server software such as Nginx, Apache, and Microsoft IIS, along with application runtimes, reverse proxies, SSL certificates, and required dependencies.",
      },
      {
        index: "03",
        title: "Database & Storage Management",
        description: "Configure server environments for reliable database and file storage operations. We work with suitable database systems such as MySQL, PostgreSQL, and Microsoft SQL Server, including database configuration, storage management, access permissions, and backup arrangements.",
      },
      {
        index: "04",
        title: "Server Security & Access Management",
        description: "Protect server environments through appropriate security configurations and access controls. We configure firewalls, SSH access, user permissions, authentication settings, software updates, and security hardening practices to help reduce unnecessary exposure.",
      },
      {
        index: "05",
        title: "Server Monitoring & Performance Optimization",
        description: "Maintain visibility into server health and resource usage through monitoring and performance analysis. We review CPU, memory, storage, network activity, service availability, and system logs to identify performance issues and support operational stability.",
      },
      {
        index: "06",
        title: "Server Backup, Updates & Maintenance",
        description: "Keep server environments maintained through regular updates, backup configurations, and routine checks. We establish suitable backup procedures, review system health, manage software updates, and support recovery planning to help protect important business data and services.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Server Administration & Security Documentation",
    description: "Official guides and technical benchmarks for Linux, Windows Server, web proxies, and security configuration.",
    items: [
      {
        id: "res-ubuntu-docs",
        title: "Ubuntu Server Documentation",
        description: "Explore Linux server installation, networking, security, storage, and system administration.",
        url: "https://ubuntu.com/server/docs/",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/cloud-solutions/ubuntu-server-badge.png",
        badgeImageAlt: "Ubuntu Server Official Documentation Badge"
      },
      {
        id: "res-win-server",
        title: "Microsoft Windows Server Management",
        description: "Learn about server configuration, remote administration, performance management, and maintenance.",
        url: "https://learn.microsoft.com/en-us/windows-server/administration/manage-windows-server",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/cloud-solutions/windows-server-badge.png",
        badgeImageAlt: "Microsoft Windows Server Management Guide Badge"
      },
      {
        id: "res-nginx-docs",
        title: "NGINX Documentation",
        description: "Explore web server configuration, reverse proxy settings, and server management.",
        url: "https://nginx.org/en/docs/",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/cloud-solutions/nginx-badge.png",
        badgeImageAlt: "NGINX Web Server Documentation Badge"
      },
      {
        id: "res-cis-benchmarks",
        title: "CIS Security Benchmarks",
        description: "Review established security configuration recommendations for operating systems and server software.",
        url: "https://www.cisecurity.org/cis-benchmarks",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/cloud-solutions/cis-benchmarks-badge.png",
        badgeImageAlt: "CIS Security Benchmarks Standards Badge"
      },
    ]
  },
  faq: {
    heading: "Common Questions About Server Setup & Management",
    items: [
      {
        id: "faq-sm-1",
        question: "What is server setup and management?",
        answer: "Server setup and management involves installing, configuring, securing, and maintaining server infrastructure. It includes operating system administration, network configuration, application hosting, storage management, security updates, monitoring, and troubleshooting."
      },
      {
        id: "faq-sm-2",
        question: "Which server operating systems can you configure?",
        answer: "Server environments can be configured using Linux distributions such as Ubuntu and Debian, as well as Microsoft Windows Server. The appropriate operating system depends on application requirements, software compatibility, infrastructure, and administrative preferences."
      },
      {
        id: "faq-sm-3",
        question: "Can you configure servers for website and application hosting?",
        answer: "Yes. Servers can be configured to host websites, web applications, APIs, and backend services. This may include Nginx, Apache, IIS, application runtimes, reverse proxies, domain connections, and SSL certificates."
      },
      {
        id: "faq-sm-4",
        question: "Can you manage existing servers?",
        answer: "Yes. Existing servers can be reviewed, configured, maintained, and monitored according to their current infrastructure and operational requirements. Management activities may include software updates, security configuration, performance checks, backup management, and troubleshooting."
      },
      {
        id: "faq-sm-5",
        question: "How do you secure a server environment?",
        answer: "Server security involves multiple controls, including firewalls, user permissions, secure authentication, restricted remote access, software updates, and security hardening. The appropriate configuration depends on the operating system, hosted services, network exposure, and business requirements."
      },
      {
        id: "faq-sm-6",
        question: "How do you monitor server performance?",
        answer: "Server performance can be monitored using system metrics, service logs, network activity, and resource utilization. Common indicators include CPU usage, memory consumption, disk space, response times, and service availability. Monitoring alerts can help identify potential issues."
      },
      {
        id: "faq-sm-7",
        question: "Do servers need regular maintenance and updates?",
        answer: "Yes. Servers require ongoing maintenance to address security vulnerabilities, software compatibility, resource usage, and operational issues. Regular updates, backup verification, system checks, and log reviews help maintain server reliability."
      },
      {
        id: "faq-sm-8",
        question: "Can you configure automatic server backups?",
        answer: "Yes. Backup solutions can be configured for server files, databases, and application data using suitable backup tools and storage destinations. Backup schedules, retention policies, and recovery procedures should be established according to business requirements."
      }
    ]
  },
  cta: {
    heading: "Keep Your Server Infrastructure Secure, Stable & Well Managed",
    description: "Build a reliable foundation for your websites, applications, and business systems with professional server setup and management. From operating system configuration and security hardening to monitoring, backups, and ongoing maintenance, let's establish a server environment that supports your business operations.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};