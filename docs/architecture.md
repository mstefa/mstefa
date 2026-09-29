# Project Architecture Overview

This project is built using **Clean Architecture** (also known as Hexagonal or Onion Architecture) combined with Domain-Driven Design (DDD) principles. It is structured into clearly decoupled layers to ensure maintainability, testability, and independence from external frameworks.

## Dependency Rule

Dependencies only point **inward**. The core domain layer has no knowledge of any databases, file systems, or presentation frameworks (like Next.js).

```mermaid
graph TD
    %% Define layers
    Presentation[Presentation Layer / Next.js Pages & Components]
    Infrastructure[Infrastructure Layer / JSON Data, File Mappings]
    Application[Application Layer / Services]
    Domain[Domain Layer / Entities & Types]

    %% Dependencies flow inward
    Presentation --> Application
    Presentation --> Infrastructure
    Infrastructure --> Domain
    Application --> Domain
    Application --> Infrastructure
```

---

## Layers breakdown

### 1. Domain Layer (`src/domain`)
The domain layer holds the core business entities, types, and validation rules. It has no external dependencies and represents the business models of the application.
* **Key Files**:
  * [Job.ts](file:///Users/mstefanutti/workspace/mstefa/src/domain/Job.ts), [Education.ts](file:///Users/mstefanutti/workspace/mstefa/src/domain/Education.ts), [PersonalInfo.ts](file:///Users/mstefanutti/workspace/mstefa/src/domain/PersonalInfo.ts), [Project.ts](file:///Users/mstefanutti/workspace/mstefa/src/domain/Project.ts): Core CV and portfolio domain types.

### 2. Application Layer (`src/application`)
The application layer contains the business use cases and service orchestration. It coordinates domain models and repositories to satisfy presentation requirements.

### 3. Infrastructure Layer (`src/infrastructure`)
The infrastructure layer implements technical details such as loading data from the filesystem or external services. It fulfills data access interfaces consumed by presentation and application layers.
* **Key Files**:
  * [JobRepository.ts](file:///Users/mstefanutti/workspace/mstefa/src/infrastructure/JobRepository.ts), [EducationRepository.ts](file:///Users/mstefanutti/workspace/mstefa/src/infrastructure/EducationRepository.ts), [PersonaInfoRepository.ts](file:///Users/mstefanutti/workspace/mstefa/src/infrastructure/PersonaInfoRepository.ts), [ProjectRepository.ts](file:///Users/mstefanutti/workspace/mstefa/src/infrastructure/ProjectRepository.ts): Load CV and project data from local JSON data files.

### 4. Presentation Layer (`src/app` & `src/components`)
The presentation layer is composed of Next.js App Router components and React UI components. It is responsible for handling user interactions, routing, page layouts, and rendering content.
* **Key Directory**: [src/app](file:///Users/mstefanutti/workspace/mstefa/src/app)
