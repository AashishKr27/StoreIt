# 📦 Store It

A full-stack file storage and management web application built using Next.js 15, Tailwind CSS, Appwrite, and TypeScript. It enables users to securely upload, manage, and view files with a polished UI and authentication system.

Features include file upload, authentication via Appwrite, responsive UI using Tailwind CSS, form validation with Zod and React Hook Form, data visualization using Recharts, debounced search input, and modern UI feedback via Radix UI and toasts.

Tech Stack used: Next.js for SSR and routing, TypeScript for static typing, Tailwind CSS for styling, Appwrite for backend services (auth, storage, DB), React Hook Form for efficient form handling, Zod for schema validation, Recharts for charting, Radix UI for accessible components.

To run this project locally:

# 1. Clone the repository  
git clone https://github.com/your-username/store_it.git  
cd store_it

# 2. Install dependencies  
npm install  
or  
yarn install

# 3. Create a `.env.local` file in the root directory and add the following values:  
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1  
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id  
NEXT_PUBLIC_APPWRITE_BUCKET_ID=your_bucket_id  
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id  
NEXT_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id  
NEXT_PUBLIC_APPWRITE_PLATFORM=your_platform  
NEXT_PUBLIC_SECRET_KEY=your_secret_key

(Do not commit `.env.local` to version control.)

# 4. Start the development server  
npm run dev  
or  
yarn dev

Open http://localhost:3000 to view the app.

# Scripts available:  
- dev: Start development server  
- build: Build the app for production  
- start: Run the production build  
- lint: Lint the codebase

# Project structure (simplified):

store_it/  
├── components/ (UI components)  
├── app/ (Next.js app router structure)  
├── lib/ (Utility functions)  
├── constants/ (App-wide constants)  
├── types/ (TypeScript definitions)  
├── .env.local (env variables, not committed)  
├── next.config.ts  
├── tailwind.config.ts  
├── tsconfig.json  
├── package.json

# Todo items:  
- Add pagination to file listing  
- Add file sharing feature with unique links  
- Drag-and-drop file uploads with preview  
- Improve mobile performance and responsiveness

# Contributing:  
Open a PR or raise an issue. To contribute:  
git checkout -b feature-name  
git commit -m "Add something"  
git push origin feature-name

Licensed under the MIT License.

Made by Ashish Kumar  
GitHub: [https://github.com/AashishKr27]
LiveDemo : [https://store-it-tawny.vercel.app/sign-up]
