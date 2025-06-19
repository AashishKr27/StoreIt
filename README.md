# 📦 Store It

A full-stack file storage and management web application built using Next.js 15, Tailwind CSS, Appwrite, and TypeScript. It enables users to securely upload, manage, and view files with a polished UI and authentication system.

Features include file upload, authentication via Appwrite, responsive UI using Tailwind CSS, form validation with Zod and React Hook Form, data visualization using Recharts, debounced search input, and modern UI feedback via Radix UI and toasts.

# 📂 Tech Stack

| Name                          | Description                              |
|-------------------------------|------------------------------------------|
| Next.js                       | React framework for full-stack apps      |
| TypeScript                    | Typed JavaScript                         |
| Tailwind CSS                  | Utility-first CSS framework              |
| Appwrite                      | Backend server for auth and file storage |
| Radix UI                      | Accessible UI components                 |
| React Hook Form               | Performant form handling                 |
| Zod                           | Schema validation                        |
| Recharts                      | Charting library for React               |


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
├── components/           # UI components
├── app/                  # Next.js app directory
├── lib/                  # Utility functions
├── constants/            # Static values and enums
├── types/                # TypeScript types
├── .env.local            # Local environment variables (excluded from git)
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project metadata and scripts

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
GitHub: [https://github.com/AashishKr27]<br/>
LiveDemo : [https://store-it-tawny.vercel.app/sign-up]
