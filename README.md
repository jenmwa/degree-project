# Inga raka rosor

’Inga raka rosor’ is my exam project for Front End Developer Education at the Medieinstitutet February 2024.
It’s a fullstack web application for local flower arranger Emma and her services. Our leading words for this project is that it should be Simple, Build Relationship and to Show Inspiration. The Main part is all about the user and to be able to make flower arrangement requests, easy and accessible and for Admin use, be able to update products, both texts and images, and to get order requests.

### Requirements School:

- Dynamic content (use an API or a database)
- The page must be interactive (not just HTML and CSS)
- Conducted any type of testing (unit testing, integration testing, interface testing, user testing, or similar)
- Durable and documented code
- The service/product must be accessibility checked and adapted
- The page must be attractive (the CSS must be elaborate when you read Front End development)
- The page must work and be interactive (i.e. there must be some kind of functionality on it that the user can interact with)

#### Mandatory elements - choose 3 of these (at least)

- Use at least 1 framework or library (eg React, Vue, Next.js, etc.).
- It must be correctly used and a discussion of the choice must be found in the documentation along with limitations in the form of dependencies, version requirements and more
- The "product" must be responsive, i.e. adapted for all devices.
- Adaptation means that appearance AND function are changed in such a way that none of the site's communication and functional requirements are unavailable or non-functional, and the device's capabilities and limitations are used to the maximum.
- All data on the site is loaded and displayed asynchronously (no page reloads) while all content is linkable via readable URLs.
- Style templates must be implemented using a preprocessor (Sass, Tailwind) or similar (e.g. styled components) and its functions and structure must be used according to the respective best practice.

### Requirements Client:

- Be able to change data for products easily
- would like to be able to upload images
- preferable contact source is through mail
- should represent the clients style and visual, and our aim is to have a simple, but stylish service.

## Features

Visit the live site [here](https://degree-project-two.vercel.app)

- Björby blomster is Emma, a local flower arranger with the passion to create unconventual bouqets of flower. We show off some of her work and each arrangement is crafted with creativity and expertise, showcasing Emma's style and attention to detail.

- Learn more about the services offered by Björby Blomster, including event floral arrangements leave a requestoffer to her directly if youre intrested. Emma's expertise extends to a variety of occasions, from weddings and parties to funerals and personal celebrations.

- Connect with Emma directly through the website to inquire about her services, request a custom arrangement, or schedule a consultation. Emma is dedicated to providing personalized attention to each client and ensuring their floral needs are met with excellence.

- For our admin-part we are able to do direct changes to the database and to update the site in real-time. and to get a summary of all the requests done through the site.

- This is a project in development, we will continue evaluate and work on this from time to time.

## Demo

![demo Björby Blomster](/public/bjorby.gif)

## Tech

[![My Skills](https://skillicons.dev/icons?i=next,typescript,tailwind,supabase,vercel,jest)](https://skillicons.dev)

and Nodemailer for emailService.

## Installation

Install the project locally with npm

```bash
  npm install
```

Run the project

```bash
  npm run dev
```

Don't forget to create an .env file according to example.env

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

**NEXT_PUBLIC_SUPABASE_URL:**  
The URL of the Supabase instance used for database operations.  
**NEXT_PUBLIC_SUPABASE_KEY:**  
The public API key for accessing the Supabase instance.  
**DATABASE_URL:**.
The URL of the database used by the application.  
**NEXT_PUBLIC_IMG_STORAGE_ALL:**  
The base URL for accessing uploaded productImages.  
**NEXT_PUBLIC_SUPABASE_STORAGE_IMG:**  
The URL of the Supabase storage service for storing images.

And for nodeMailer:  
**EMAIL_SERVER_USER**  
**EMAIL_SERVER_PASSWORD**
**EMAIL_SERVER_HOST**  
**EMAIL_SERVER_PORT**  
**EMAIL_FROM**

## Running Tests

To run tests with jest, run the following command

```bash
  npm test
```

## Subject Line Standard Terminology Commit messages

| First Word | Meaning                                              |
| ---------- | ---------------------------------------------------- |
| Add        | Create a capability e.g. feature, test, dependency.  |
| Cut        | Remove a capability e.g. feature, test, dependency.  |
| Fix        | Fix an issue e.g. bug, typo, accident, misstatement. |
| Bump       | Increase the version of something e.g. dependency.   |
| Make       | Change the build process, or tooling, or infra.      |
| Start      | Begin doing something; e.g. create a feature flag.   |
| Stop       | End doing something; e.g. remove a feature flag.     |
| Refactor   | A code change that MUST be just a refactoring.       |
| Reformat   | Refactor of formatting, e.g. omit whitespace.        |
| Optimize   | Refactor of performance, e.g. speed up code.         |
| Document   | Refactor of documentation, e.g. help files.          |

## Acknowledgements

Björby blomster is a project by [Jenny Waller](hej@jenwaller.se) as a degree project for Front End deleopment studies at [MedieInstitutet](https://medieinstitutet.se/) 2024.
