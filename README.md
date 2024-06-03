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

### Page navigation  Optimization
#### Creating layouts and pages
To create a nested route, you can nest folders inside each other and add page.tsx files inside them.

#### Page navigation optimization
Nextjs automatically code splits your app via route segments. This means pages get isolated. If a certain page throws an error other elements will still work. By using `<Link>` it optimized web navigation and wont fully refresh browser on every 'click'.

### Fetching data
If you're fetching data from the client, you should use an additional API layer to avoid exposing database secrets to the client. Nextjs uses React Server Components by default, allowing you to skip the API layer and query your database directly without exposing secrets. In addition, server components execute directly on the server. Allowing the server to handle the heavy and expensive data fetches and logic on the server and pushing only the result to the client.

***Promises in this context refer to the result of fetched data. In sql context and in specific libraries when executing a SQL query they typically return a Promise. This could be the data returned by the SQL query or an error if something went wrong***

###### async and await
`async` lets javascript move on progressing the code even though the function isn't finished being executed. `await` tells an `async` function to pause until it recieves a 'promise'(data) back.
#### Request waterfalls
A waterfall refers to the sequence of network requests that depend on the completion of the previous request before the present one can execute. When necessary waterfalls are a good option otherwise if unintentional it can impact performance.
##### Ways to avoid waterfalls
###### Parallel data fetching
Initiating all data requests at the same time - in parallel. In JavaScript you can use `Promise.all` or `Promise.allSettled` functions to initiate all promises at the same time
### Static and Dynamic Rendering
#### Static Rendering
Data fetching and rendering happens on the server at build time or during revalidation. The result can then be distributed or cached to a Content Delivery Network. Static rendering is useful for UI with no data or data that is shared across users. I.E. if there is a page with personalized data that is frequently updated static rendering would not be a good fit.
###### Benefits of static rendering
**Faster Websites**
Prerendered content can be cached and globally distributed. This helps uesrs around the world access website content quickly and reliably.

**Reduced Server Load**
Because content is cached, the server won't need to dynamically generate content for each user request.

**Search Engine Optimization**
Prerendered content allows search engine crawlers to index as the content is available when the page loads.
#### Dynamic Rendering 
Content is rendered on the server for each user at request time(when the user visits the page).
###### Benefits of dynamic rendering
**Real-time Data**
Allows application to display real-time or frequently updated data.

**User-specific Content**
Easier to serve personalized content, i.e. dashboards or user profiles, and update the data based on user interaction.

**Request Time Information**
Allows acces to information that can only be known at request time, ie cookies or URL search parameters.
### Streaming
Streaming is a data transfer technique that breaks down a route into smaller "chunks" and streams them from the server to the client as they become ready. This helps prevent slow data requests from blocking your whole page and allowing the user to  see and interact with parts of the page without waiting for all the data to load before any UI can be shown. In context of React's component model, each component can be considered a "chunk". In n
ext.js two wa
ys to implement streaming are at page level with the `loading.tsx` file or `<Suspense>`