# Policy Designer Design Document

## 1. Overview
The Policy Designer is a visual programming interface for the iRODS Zone Management Tool (ZMT). It enables administrators to compose, manage, and deploy server-side iRODS policies using a node-based Event-Condition-Action (ECA) paradigm. The tool abstracts the complexity of the iRODS Policy Engine Framework into a user-friendly graphical workspace.

## 2. Architecture & Integration
- **Route**: `/policies` (Integrated via `App.js`).
- **Core Engine**: React Flow for graph orchestration and visualization.
- **State Management**: A custom `usePolicyDesigner` hook for graph serialization/deserialization.
- **Backend Integration**: Communicates with the iRODS Client HTTP API (`op: report` for fetching, and new `PolicyController` for deployment).

## 3. Visual Design Language
Inspired by the [iRODS Documentation Hub](https://irods.org/documentation/):
- **Workspace Background**: Light Gray (#f8f9fa).
- **Node Headers**: Deep Blue (#003366).
- **Interactive Elements/Edges**: Bright Blue (#007bff).
- **Typography**: Sans-serif stack (Helvetica Neue/Arial).
- **Shapes**: Card-based nodes with 4px border-radius and subtle shadows.

## 4. Policy Fetching & Deployment
- **Fetching**: Hydrated from the `zone_report` (retrieved via `op: report`).
- **Hydration**: Converts iRODS JSON configuration into React Flow nodes/edges.
- **Deployment Targets**:
  - Single Server (hostname-specific).
  - Server Group (e.g., all Consumers).
  - Zone-wide (all servers).
- **Safety**: Mandatory validation/dry-run against the iRODS configuration schema before saving.

## 5. Visual Component Library (ECA Nodes)
- **Event Handlers (Triggers)**: Data Object, Collection, Metadata, Resource, and User/Group modifications.
- **Conditionals (Filters)**: Logical Path matching, Metadata existence checks, and User/Resource filtering.
- **Policy Engines (Actions)**: Data Replication, Retention, Verification, and Enqueue (Async) wrappers.
- **Metadata-Driven Logic**:
  - "Metadata Exists" node with recursive search capability.
  - "Set Metadata" action node for state-aware policy chaining.
  - Metadata-powered "Switch" nodes for branching logic.

## 6. Metadata Integration
Metadata is treated as a first-class citizen. The UI provides:
- Metadata pickers for known attributes.
- Visual badges on edges carrying metadata context.
- Support for complex metadata lookups (Recursive/Parental).

---
*Date: 2026-05-31*
*Status: MVP Design Approved*
