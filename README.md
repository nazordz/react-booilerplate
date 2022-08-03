# React Boilerplate

## Intro
This is boilerplate for goorita

## Library
1. [Mui](https://mui.com) - UI Kit
2. [Formik](https://formik.org) - React Form Validation
3. [Router](https://reactrouter.com/) - Router
4. [Redux](https://react-redux.js.org/) - React Redux
5. [Vite](https://vitejs.dev/) - Webserver

## Folder Structure
    .
    ├── build                   # Compiled files (alternatively `dist`)
    ├── src                     # Source files (alternatively `lib` or `app`)
      ├── apis                  # for Api files
        ├── *.ts                
      ├── assets                # Asset files 
      │   └── *.png
      ├── components            # Components files
      │   └── *.tsx         
      ├── layouts
      │   └── MainLayout.tsx    # Layout will implemented to pages
      ├── main.tsx              # Main File
      ├── pages                 # Pages files
      │   └── *.tsx
      ├── routers               # Routing files
      │   ├── *.tsx
      │   └── index.tsx
      ├── store                 # redux files
        ├── FeatureName         # FeatureName of redux
          ├── FeatureNameSlice.tsx # redux slice
          ├── FeatureNameReducer.tsx # redux reducer
        ├── store.tsx           # store for redux
      ├── themes                # customize theme for override MUI UIKit
      │   └── Theme.tsx
      ├── utils                 # Util files for development. For example axios, sdk etc
      └── vite-env.d.ts
    ├── test                    # Automated tests (alternatively `spec` or `tests`)
    ├── tools                   # Tools and utilities
    ├── LICENSE
    └── README.md

