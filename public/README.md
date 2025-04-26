# Public Directory

This directory contains static assets that will be served directly by the Next.js server.

## Contents

- `favicon.ico`: The website favicon
- Other static assets like images, fonts, etc. should be placed here

## Usage

Files in this directory can be referenced in your code starting from the base URL.

For example, to reference the favicon:

```jsx
<link rel="icon" href="/favicon.ico" />
```

Or to reference an image:

```jsx
<img src="/images/logo.png" alt="Logo" />
