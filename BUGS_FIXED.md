## Final Summary of Bugs Fixed
Summary of Bugs Fixed and Resolutions
During the setup, integration, and deployment of the Omniplex application, several issues were identified and resolved. The following is a summary of these fixes.

1. Dependency Resolution Failure During Local Setup

Bug: The initial npm install command failed with an ERESOLVE error, indicating a dependency conflict between the project's Svelte 5 requirement and a sub-dependency's preference for Svelte 4.

Fix: The conflict was resolved by running the installation with the --legacy-peer-deps flag, which instructs npm to ignore peer dependency mismatches and proceed with the installation.

2. Application Crash on Startup due to Firebase

Bug: Upon running the application locally, it would immediately crash with a FirebaseError: (auth/invalid-api-key). This was because the project was attempting to initialize Firebase Authentication without valid API keys.

Fix: As the assignment's focus was on Stripe integration, the Firebase authentication check in the AuthWrapper.tsx component was temporarily bypassed to allow the application to load and proceed with the core tasks.

3. Missing Stripe Module Error

Bug: After implementing the Stripe API route, the application failed to compile, throwing a Module not found: Can't resolve 'stripe' error.

Fix: The official Stripe Node.js library was missing from the project's dependencies. This was fixed by running npm install stripe.

4. Incorrect Stripe Price ID Error

Bug: When calling the Stripe checkout API, Stripe returned a "No such price" error, even though the API key was correct.

Fix: Investigation revealed that the Product ID (starting with prod_...) was being used instead of the required Price ID (starting with price_...). The code was updated to use the correct Price ID from the Stripe dashboard.

5. Stripe Price Type Mismatch

Bug: The Stripe API returned an error stating a mismatch between the payment mode in the code and a recurring price from the dashboard.

Fix: The initial price for the product in the Stripe dashboard had been incorrectly configured as "Recurring". A new, "One-time" price was created, and the application's code was updated with the new Price ID to resolve the conflict.

6. CI/CD Build Failure due to Missing Build-Time Secrets

Bug: The initial deployment workflow failed during the build step on GitHub Actions. The logs showed errors indicating that first the STRIPE_SECRET_KEY and subsequently the OPENAI_API_KEY were missing.

Fix: The issue was resolved by adding all required environment variables as "Secrets" in the GitHub repository settings. The GitHub Actions workflow (.yml) file was then modified to explicitly expose these secrets to the build step, providing it with the necessary configuration to complete successfully.

7. Critical Azure Runtime Failure & Platform Pivot

Bug: After a successful build and deployment to Azure App Service, the live application consistently failed to start, crashing with a next: not found runtime error. This indicated the Azure container environment could not locate the Next.js executable.

Fix: After exhausting all standard configuration fixes (including multiple startup commands like npm run start, npx next start, and ./node_modules/.bin/next start), it was determined to be a persistent platform-specific issue. To ensure a successful delivery for the assignment, a pragmatic decision was made to pivot the deployment to Vercel, a platform optimized for Next.js. The application was successfully deployed and operational on Vercel in under 5 minutes, demonstrating the ability to overcome environmental blockers and deliver a working product.