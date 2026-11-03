import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const APPLICATION_DEPLOYMENT_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Application Deployment & Release Automation | Brivya Solutions",
    description: "Deploy applications with reliable, automated release processes. Web and backend application hosting, Docker containerization, and production CI/CD pipelines.",
  },
  hero: {
    serviceTitle: "Application Deployment",
    heading: "Deploy Your Applications With Reliable & Efficient Deployment Solutions",
    description: "Launch your applications with properly configured deployment environments and streamlined release processes. We provide application deployment services covering code configuration, build processes, server setup, environment management, and software releases. From web applications and backend services to containerized applications and automated deployment pipelines, our solutions are designed around your technical requirements.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/cloud-solutions/app-deployment-hero.png",
    imageAlt: "Application Deployment and Continuous Delivery Architecture Illustration",
  },
  mainFeaturedCard: {
    tag: "Deployment Directive",
    heading: "Application Deployment Solutions Built Around Your Development Needs",
    paragraphs: [
      "Deploying applications involves more than uploading code to a server. Businesses need properly configured environments, reliable release processes, compatible dependencies, and effective testing to ensure applications work as expected. We develop application deployment solutions that prepare software for production, configure hosting environments, and establish structured release workflows. Using platforms such as AWS, Microsoft Azure, and Google Cloud, alongside Docker and CI/CD technologies, we manage application builds, environment configurations, deployment execution, and release validation. Our approach focuses on deployment reliability, controlled updates, application availability, and easier maintenance."
    ]
  },
  supportingCards: {
    heading: "Production Delivery & Pipeline Engineering",
    subtitle: "End-to-end deployment engineering spanning automated builds, container packaging, and zero-downtime updates.",
    card2IllustrationPath: "/images/services/cloud-solutions/cicd-pipeline-setup.png",
    card2IllustrationAlt: "Automated CI/CD Pipeline and Software Release Flow",
    card3IllustrationPath: "/images/services/cloud-solutions/docker-containerized-deployment.png",
    card3IllustrationAlt: "Docker Containerization and Production Environment Staging",
    items: [
      {
        index: "01",
        title: "Web & Backend Application Deployment",
        description: "Deploy websites, web applications, APIs, and backend services to suitable hosting environments. We configure application runtimes, server dependencies, domain connections, SSL certificates, and production settings to prepare applications for release.",
      },
      {
        index: "02",
        title: "Automated CI/CD Pipeline Setup",
        description: "Streamline software releases through continuous integration and continuous deployment workflows. We configure automated builds, code testing, deployment triggers, and release processes using tools such as GitHub Actions, GitLab CI/CD, and other supported platforms.",
      },
      {
        index: "03",
        title: "Docker & Containerized Deployment",
        description: "Package applications and their dependencies into portable container environments using Docker. We configure container images, Docker Compose, and suitable container platforms to support consistent application deployment across development, testing, and production environments.",
      },
      {
        index: "04",
        title: "Cloud-Based Application Deployment",
        description: "Deploy applications to suitable cloud infrastructure using AWS, Microsoft Azure, and Google Cloud. We configure application hosting, cloud resources, environment variables, networking, and required services according to your application's architecture.",
      },
      {
        index: "05",
        title: "Production Environment Configuration",
        description: "Prepare application environments with the settings and dependencies required for production operation. We configure environment variables, database connections, application secrets, domain settings, permissions, and deployment configurations to support reliable application execution.",
      },
      {
        index: "06",
        title: "Release Management & Deployment Monitoring",
        description: "Manage application releases through structured deployment procedures and post-release verification. We configure deployment checks, application logs, error monitoring, and rollback procedures to help identify deployment issues and maintain stable application operations.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Application Deployment & Release Management Tools",
    description: "Official documentation covering continuous deployment workflows, containerization, and release strategies.",
    items: [
      {
        id: "res-github-actions",
        title: "GitHub Actions — Continuous Deployment",
        description: "Explore automated software builds, testing, and deployment workflows.",
        url: "https://docs.github.com/en/actions/get-started/continuous-deployment",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/cloud-solutions/github-actions-badge.png",
        badgeImageAlt: "GitHub Actions Continuous Deployment Badge"
      },
      {
        id: "res-docker-docs",
        title: "Docker Documentation",
        description: "Learn about container creation, application packaging, and deployment environments.",
        url: "https://docs.docker.com/",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/cloud-solutions/docker-badge.png",
        badgeImageAlt: "Docker Documentation Badge"
      },
      {
        id: "res-aws-deployment-strategies",
        title: "AWS Application Deployment Strategies",
        description: "Understand rolling, blue-green, and canary application releases.",
        url: "https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/deployment-strategies.html",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/cloud-solutions/aws-deploy-strategies-badge.png",
        badgeImageAlt: "AWS Deployment Strategies Whitepaper Badge"
      },
      {
        id: "res-azure-cd",
        title: "Microsoft Azure Continuous Deployment",
        description: "Learn how to automate application updates using connected code repositories.",
        url: "https://learn.microsoft.com/en-us/azure/app-service/deploy-continuous-deployment",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/cloud-solutions/azure-cd-badge.png",
        badgeImageAlt: "Microsoft Azure Continuous Deployment Badge"
      },
    ]
  },
  faq: {
    heading: "Common Questions About Application Deployment",
    items: [
      {
        id: "faq-ad-1",
        question: "What is application deployment?",
        answer: "Application deployment is the process of preparing and releasing software into an environment where users or other systems can access it. It involves application builds, dependency configuration, server or cloud setup, environment settings, and release validation."
      },
      {
        id: "faq-ad-2",
        question: "Which applications can you deploy?",
        answer: "Deployment services can support websites, web applications, APIs, backend services, and containerized applications. The deployment method depends on the programming framework, application architecture, hosting requirements, and infrastructure."
      },
      {
        id: "faq-ad-3",
        question: "Can you deploy applications to AWS, Azure, and Google Cloud?",
        answer: "Yes. Applications can be deployed to suitable services within AWS, Microsoft Azure, and Google Cloud. Platform selection depends on application requirements, infrastructure preferences, technical compatibility, and operational costs."
      },
      {
        id: "faq-ad-4",
        question: "What is CI/CD in application deployment?",
        answer: "Continuous Integration and Continuous Deployment (CI/CD) use automated workflows to build, test, and release software updates. These pipelines help standardize deployment procedures and reduce repetitive manual release activities."
      },
      {
        id: "faq-ad-5",
        question: "Can you deploy applications using Docker?",
        answer: "Yes. Docker packages applications and their dependencies into containers that can run in compatible environments. Containerized deployment can help maintain consistency between development, testing, and production systems."
      },
      {
        id: "faq-ad-6",
        question: "Can you deploy an existing application without changing its source code?",
        answer: "In many cases, existing applications can be deployed without major source-code changes. However, compatibility issues, outdated dependencies, environment requirements, and infrastructure limitations may require configuration adjustments or application modifications."
      },
      {
        id: "faq-ad-7",
        question: "How do you minimize downtime during application deployment?",
        answer: "Deployment strategies such as rolling updates, blue-green deployments, and canary releases can help reduce the impact of application updates. The appropriate approach depends on infrastructure, application architecture, database compatibility, and traffic requirements."
      },
      {
        id: "faq-ad-8",
        question: "How do you verify that an application is working after deployment?",
        answer: "We perform deployment checks that may include application availability, endpoint testing, database connectivity, functionality validation, error log reviews, and performance checks. These tests help identify issues before and after a production release."
      }
    ]
  },
  cta: {
    heading: "Launch Your Applications With Confidence",
    description: "Get your applications ready for production with structured deployment processes and reliable release configurations. From application hosting and Docker deployment to CI/CD automation, production setup, and release monitoring, let's build a deployment solution that supports your software and business requirements.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};