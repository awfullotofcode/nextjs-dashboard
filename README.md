## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## NOTES
### CSS Styling
When you `create-next-app` and select you would like to use Tailwind, it is automatically configured for your app. Tailwind and CSS modules are 2 ways to implement CSS styles into your app and both can be used.
### Font and Image Optimization
#### Fonts
Using custom fonts in project can affect performance if the font files need to be fetched and loaded. Google uses cumulative layout shift as a metric for performance and user experience of a website. In regards to fonts, layout shift happens when the browser loads 'fallback' or system fonts then swap to the custom font when loaded. In return, this can cause text size, spacing, and/or layout to change as it will shift elements around it. When using next/font module Next.js will automatically optimize fonts in the app by downloading fonts at build time and hosts the font with other static assets. This prevents additional network requests for fonts, optimizing performance.
###### Example from next.js course
In this course in order to add Inter and Lusitana font we created a new file called `font.ts`, from there we imported both fonts from next/font/google then exported them. In page.tsx and layout.tsx we imported both fonts from `@/app/ui/fonts`.

### Creating layouts and pages
To create a nested route, you can nest folders inside each other and add page.tsx files inside them.