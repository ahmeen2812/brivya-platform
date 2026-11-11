import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const CLOUD_DEPLOYMENT_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Cloud Deployment & Infrastructure Solutions | Brivya Solutions",
    description: "Deploy applications with reliable, scalable cloud infrastructure across AWS, Microsoft Azure, and Google Cloud. Automated CI/CD, migration, and monitoring.",
  },
  hero: {
    serviceTitle: "Cloud Deployment",
    heading: "Deploy Your Applications With Reliable & Scalable Cloud Infrastructure",
    description: "Move your applications and business systems to secure, flexible cloud environments. We develop and configure cloud deployment solutions that support application hosting, infrastructure management, data storage, and automated software releases. From cloud setup and application migration to performance monitoring and resource optimization, our solutions are designed around your technical and business requirements.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/cloud-solutions/cloud-deployment-hero.png",
    imageAlt: "Cloud Deployment and Infrastructure Management Illustration",
  },
  mainFeaturedCard: {
    tag: "Cloud Infrastructure Directive",
    heading: "Cloud Deployment Solutions Built Around Your Business Requirements",
    paragraphs: [
      "Running applications on unreliable infrastructure, managing server configurations, and handling manual software deployments can create operational challenges. We develop cloud deployment solutions that provide the infrastructure and configurations needed to run your applications effectively. Using platforms such as AWS, Microsoft Azure, and Google Cloud, we configure suitable cloud environments, deploy applications, manage server resources, and establish automated deployment workflows. From cloud migration and containerization to security configuration, performance monitoring, and resource management, our approach focuses on reliable application delivery, infrastructure security, and efficient cloud operations."
    ]
  },
  supportingCards: {
    heading: "Enterprise Cloud Infrastructure Capabilities",
    subtitle: "End-to-end cloud infrastructure engineering built for continuous uptime and scalability.",
    card2IllustrationPath: "/images/services/cloud-solutions/cloud-infrastructure-setup.png",
    card2IllustrationAlt: "Cloud Infrastructure Virtual Networking and Resource Provisioning",
    card3IllustrationPath: "/images/services/cloud-solutions/containerization-cicd.png",
    card3IllustrationAlt: "Containerized Orchestration and Automated CI/CD Pipelines",
    items: [
      {
        index: "01",
        title: "Cloud Infrastructure Setup & Configuration",
        description: "Build cloud environments suited to your application requirements. We configure virtual machines, networking, storage, databases, and cloud resources across supported platforms, with infrastructure settings aligned with your deployment and operational needs.",
      },
      {
        index: "02",
        title: "Application & Website Cloud Deployment",
        description: "Deploy websites, web applications, APIs, and backend services to suitable cloud environments. We configure application hosting, server environments, domain connections, SSL certificates, and required runtime dependencies to support production deployment.",
      },
      {
        index: "03",
        title: "Cloud Migration & Modernization",
        description: "Move existing applications, databases, and business workloads to cloud infrastructure. We assess migration requirements, prepare deployment environments, transfer relevant resources, and configure applications to operate within the selected cloud platform.",
      },
      {
        index: "04",
        title: "Containerization & CI/CD Automation",
        description: "Simplify application deployment using container technologies and automated software delivery pipelines. We configure Docker environments, supported orchestration platforms, and CI/CD workflows to automate application builds, testing, and deployment processes.",
      },
      {
        index: "05",
        title: "Cloud Security & Access Management",
        description: "Protect cloud applications and infrastructure through appropriate security configurations. We configure identity and access permissions, network security rules, encryption settings, secrets management, and other controls according to your application requirements.",
      },
      {
        index: "06",
        title: "Cloud Monitoring, Scaling & Optimization",
        description: "Maintain visibility into application performance and infrastructure usage. We configure monitoring, logging, alerts, backups, and suitable scaling policies to help identify operational issues, manage resource consumption, and support application availability.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Leading Cloud Infrastructure Platforms",
    description: "Access official cloud architecture guidelines, well-architected frameworks, and automated deployment documentation.",
    items: [
      {
        id: "res-aws-well-architected",
        title: "AWS Well-Architected Framework",
        description: "Explore cloud architecture best practices for security, reliability, performance, and cost management.",
        url: "https://docs.aws.amazon.com/wellarchitected/",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/cloud-solutions/aws-well-architected-badge.png",
        badgeImageAlt: "AWS Well-Architected Framework Documentation Badge"
      },
      {
        id: "res-azure-well-architected",
        title: "Microsoft Azure Well-Architected Framework",
        description: "Learn about secure cloud architecture, workload reliability, and infrastructure optimization.",
        url: "https://learn.microsoft.com/en-us/azure/well-architected/",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/cloud-solutions/azure-well-architected-badge.png",
        badgeImageAlt: "Microsoft Azure Well-Architected Framework Badge"
      },
      {
        id: "res-gcp-well-architected",
        title: "Google Cloud Well-Architected Framework",
        description: "Explore cloud infrastructure design, operational excellence, and performance optimization.",
        url: "https://docs.cloud.google.com/docs/get-started/well-architected-framework",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/cloud-solutions/gcp-well-architected-badge.png",
        badgeImageAlt: "Google Cloud Well-Architected Framework Badge"
      },
      {
        id: "res-gcp-deploy",
        title: "Google Cloud Deploy",
        description: "Understand automated application delivery and deployment pipelines.",
        url: "https://cloud.google.com/deploy",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/cloud-solutions/gcp-deploy-badge.png",
        badgeImageAlt: "Google Cloud Deploy Tool Badge"
      },
    ]
  },
  faq: {
    heading: "Common Questions About Cloud Deployment",
    items: [
      {
        id: "faq-cd-1",
        question: "What is cloud deployment?",
        answer: "Cloud deployment is the process of hosting and running applications, databases, and business systems on cloud infrastructure. It involves configuring computing resources, networking, storage, security settings, and application environments to make software accessible and operational."
      },
      {
        id: "faq-cd-2",
        question: "Which cloud platforms can you use for deployment?",
        answer: "Cloud deployments can be configured on platforms such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud. The appropriate platform depends on application architecture, infrastructure requirements, existing systems, technical preferences, and budget."
      },
      {
        id: "faq-cd-3",
        question: "Can you migrate my existing website or application to the cloud?",
        answer: "Yes. Existing websites, applications, databases, and backend services can be migrated to suitable cloud environments. The process depends on application compatibility, data requirements, infrastructure dependencies, and the selected migration strategy."
      },
      {
        id: "faq-cd-4",
        question: "What is the difference between cloud hosting and cloud deployment?",
        answer: "Cloud hosting refers to providing infrastructure and resources for running applications online. Cloud deployment involves the broader process of configuring the environment, releasing application code, managing dependencies, and making the application operational within that infrastructure."
      },
      {
        id: "faq-cd-5",
        question: "Can cloud deployment improve application performance?",
        answer: "Cloud deployment can provide access to resources such as scalable computing, content delivery networks, and managed databases that support application performance. Actual improvements depend on application architecture, resource configuration, network conditions, and workload requirements."
      },
      {
        id: "faq-cd-6",
        question: "Is cloud deployment secure for business applications?",
        answer: "Cloud environments provide security capabilities such as identity management, encryption, network controls, and access policies. However, security also depends on correct configuration, application security, credential management, and ongoing monitoring."
      },
      {
        id: "faq-cd-7",
        question: "Can applications automatically scale in the cloud?",
        answer: "Yes. Many cloud platforms support automatic scaling based on configured conditions such as traffic, CPU utilization, and resource demand. Scaling policies depend on the selected services, application architecture, and infrastructure configuration."
      },
      {
        id: "faq-cd-8",
        question: "How do you monitor and maintain deployed applications?",
        answer: "Cloud applications can be monitored through performance metrics, application logs, infrastructure alerts, and availability checks. We configure suitable monitoring and operational controls to help identify failures, manage resources, and maintain deployment reliability."
      }
    ]
  },
  cta: {
    heading: "Deploy Your Applications With Confidence in the Cloud",
    description: "Build a cloud environment that supports your applications, business operations, and future technical requirements. From infrastructure setup and application migration to automated deployments, security configuration, and ongoing monitoring, let's develop a cloud deployment solution suited to your business.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};