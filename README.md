# Data Visualization Dashboard

## Introduction

This projects is a data visualization dashboard that displays towers data. The dashboard displays the following data:

- A map that displays the towers locations.
- A chart that displays the number of towers per technology, tower type, or operator.
- A table that displays the towers data. The table has the following features:
  - Sorting by any column
  - Searching by any column
  - Number of rows per page
  - Pagination
  - Sticky header

## Technologies

- Angular v16.2.0
- Angular Material 16.2.2
- Angular GoogleMaps v16.2.3
- ApexCharts v3.42.0
- RxJs v7.8.9

## Design Decisions

- Network call is made `OnInit` since the data is unlikely to change frequently. If the frequency of data change is high, a proper approach is to use websocket for backend to send new records. If frequency is medium, polling can be used
- Files are grouped per module for better long-term maintainability especially when more functionalities/modules are added
- URLs and keys are stored as environment variables to avoid sharing those with others, especially the keys; and to change the values per env

## Environment Variable

The projects uses environment variables to store the API keys, API URLs and other variables. The environment variables are stored in the `environment.ts` file. The file is not included in the repository for security reasons but a sample file ([`src/environments/environment.ts.sample`](./src/environments/environment.ts.sample)) is included.
To use the sample file, copy it to `src/environments/environment.ts` and `src/environments/environment.development.ts`, and replace the values with the correct ones.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
