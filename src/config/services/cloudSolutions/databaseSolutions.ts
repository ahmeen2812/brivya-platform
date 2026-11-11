import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const DATABASE_SOLUTIONS_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Database Solutions & Cloud Data Architecture | Brivya Solutions",
    description: "Reliable, scalable database solutions covering schema design, SQL & NoSQL development, cloud migration, query optimization, and automated backups.",
  },
  hero: {
    serviceTitle: "Database Solutions",
    heading: "Build Reliable & Scalable Database Solutions for Your Business",
    description: "Manage your business information with well-structured, secure, and efficient database systems. We develop database solutions that support data storage, retrieval, processing, and integration across your applications. From database design and development to migration, optimization, and ongoing management, our solutions are designed around your data requirements and business operations.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/cloud-solutions/database-solutions-hero.png",
    imageAlt: "Enterprise Database Solutions and Cloud Storage Illustration",
  },
  mainFeaturedCard: {
    tag: "Data Architecture Directive",
    heading: "Database Solutions Built Around Your Data & Application Requirements",
    paragraphs: [
      "Managing growing amounts of business information requires more than basic data storage. Poor database structures, inefficient queries, disconnected systems, and inadequate backup procedures can create performance and data management challenges. We develop database solutions that organize information, support application requirements, and provide reliable access to business data. Using relational and NoSQL technologies, database architecture, query optimization, and secure integrations, we build systems suited to your application workloads. From designing database structures and migrating existing records to managing access, backups, and performance, our approach focuses on data consistency, accessibility, security, and long-term maintainability."
    ]
  },
  supportingCards: {
    heading: "Comprehensive Database Engineering",
    subtitle: "From normalized relational schemas to distributed NoSQL architectures and automated recovery.",
    card2IllustrationPath: "/images/services/cloud-solutions/sql-nosql-design.png",
    card2IllustrationAlt: "Relational SQL and NoSQL Data Modeling Architecture",
    card3IllustrationPath: "/images/services/cloud-solutions/database-perf-optimization.png",
    card3IllustrationAlt: "Database Query Optimization and Indexing Performance Dashboard",
    items: [
      {
        index: "01",
        title: "Database Design & Architecture",
        description: "Build structured database environments around your application's data requirements. We design database schemas, tables, relationships, data models, and indexing strategies to organize information and support efficient data operations.",
      },
      {
        index: "02",
        title: "SQL & NoSQL Database Development",
        description: "Develop database systems using suitable relational and non-relational technologies. We work with platforms such as PostgreSQL, MySQL, Microsoft SQL Server, and MongoDB to support different data structures, application requirements, and workloads.",
      },
      {
        index: "03",
        title: "Database Migration & Modernization",
        description: "Move existing databases to updated infrastructure or alternative database platforms. We handle data transfer, schema conversion, compatibility checks, and migration validation to help maintain data integrity during the transition.",
      },
      {
        index: "04",
        title: "Database Performance Optimization",
        description: "Improve database performance by identifying inefficient queries, missing indexes, and resource bottlenecks. We review query execution, indexing strategies, database configurations, and workload patterns to support faster and more efficient data access.",
      },
      {
        index: "05",
        title: "Database Security & Access Management",
        description: "Protect business information through appropriate database security configurations. We implement user permissions, role-based access, authentication, encryption options, and connection controls according to your application and data protection requirements.",
      },
      {
        index: "06",
        title: "Database Backup, Recovery & Maintenance",
        description: "Protect important business information through structured backup and recovery procedures. We configure backup schedules, recovery arrangements, database updates, maintenance routines, and monitoring to support data availability and operational continuity.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Leading Database Technologies & Documentation",
    description: "Official technical documentation for enterprise relational and document database platforms.",
    items: [
      {
        id: "res-postgres-docs",
        title: "PostgreSQL Documentation",
        description: "Explore database development, SQL queries, indexing, administration, and performance.",
        url: "https://www.postgresql.org/docs/current/",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/cloud-solutions/postgresql-badge.png",
        badgeImageAlt: "PostgreSQL Official Documentation Badge"
      },
      {
        id: "res-mysql-docs",
        title: "MySQL Reference Manual",
        description: "Learn about database design, SQL operations, administration, and optimization.",
        url: "https://dev.mysql.com/doc/refman/8.4/en/",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/cloud-solutions/mysql-badge.png",
        badgeImageAlt: "MySQL Reference Manual Badge"
      },
      {
        id: "res-mongodb-modeling",
        title: "MongoDB Data Modeling",
        description: "Understand document database structures, schema design, and data relationships.",
        url: "https://www.mongodb.com/docs/manual/data-modeling/",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/cloud-solutions/mongodb-badge.png",
        badgeImageAlt: "MongoDB Data Modeling Documentation Badge"
      },
      {
        id: "res-aws-dms",
        title: "AWS Database Migration Service",
        description: "Explore database migration, data replication, and schema conversion.",
        url: "https://docs.aws.amazon.com/dms/",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/cloud-solutions/aws-dms-badge.png",
        badgeImageAlt: "AWS Database Migration Service Badge"
      },
    ]
  },
  faq: {
    heading: "Common Questions About Database Solutions",
    items: [
      {
        id: "faq-db-1",
        question: "What are database solutions?",
        answer: "Database solutions involve designing, developing, managing, and maintaining systems that store and organize business information. They support data retrieval, processing, application connectivity, reporting, and other operations that depend on structured or unstructured data."
      },
      {
        id: "faq-db-2",
        question: "What is the difference between SQL and NoSQL databases?",
        answer: "SQL databases use relational structures with tables and defined relationships, making them suitable for applications requiring structured data and transactional operations. NoSQL databases support different data models, including documents and key-value structures, and can accommodate varying data requirements. The right choice depends on application architecture and workload needs."
      },
      {
        id: "faq-db-3",
        question: "Which database platforms can you work with?",
        answer: "Database solutions can be developed using PostgreSQL, MySQL, Microsoft SQL Server, MongoDB, and other suitable technologies. Platform selection depends on data structure, application requirements, expected workload, integration needs, and infrastructure preferences."
      },
      {
        id: "faq-db-4",
        question: "Can you migrate my existing database without losing information?",
        answer: "Database migration can be performed using appropriate transfer, replication, and validation procedures. We consider source and destination compatibility, schema conversion, data integrity checks, and backup arrangements. Migration risks and possible downtime depend on database size, architecture, and migration method."
      },
      {
        id: "faq-db-5",
        question: "Can you improve the performance of an existing database?",
        answer: "Yes. Database performance can often be improved by reviewing query execution, indexing, schema design, database configuration, and resource utilization. Optimization opportunities depend on the workload and the underlying performance bottlenecks."
      },
      {
        id: "faq-db-6",
        question: "How do you protect databases from unauthorized access?",
        answer: "Database security can include authentication, role-based permissions, restricted network access, encryption, secure connections, and regular security updates. The appropriate controls depend on the database platform, deployment environment, and sensitivity of the information."
      },
      {
        id: "faq-db-7",
        question: "Can databases integrate with my existing website or applications?",
        answer: "Yes. Databases can connect with websites, mobile applications, CRM platforms, backend services, and other business systems through appropriate drivers, APIs, and application logic. Integration depends on the technical architecture and access requirements of the connected systems."
      },
      {
        id: "faq-db-8",
        question: "How do you ensure database backups and recovery?",
        answer: "We configure suitable backup schedules, retention policies, and recovery procedures based on business requirements. Backup verification and restoration testing are also important to establish that information can be recovered when needed."
      }
    ]
  },
  cta: {
    heading: "Manage Your Business Data With Reliable Database Solutions",
    description: "Build a database environment that supports your applications, protects important information, and handles your growing data requirements. From database architecture and development to migration, performance optimization, security, and maintenance, let's develop a database solution suited to your business.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};