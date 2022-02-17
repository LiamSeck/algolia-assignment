### Question 1:

Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records: Indexing:

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers,<br /> George

---

Hi George,

Thanks for reaching out. I'd be happy to help answer your questions in detail to ensure your success on the platform.

A record is an object that is added to an index. Each record can contain multiple attributes or details about this object. In a product example this would be information such as `product name, brand, colour, category and price`. Objects in an index can be searched or queried by an enduser of your application. An example product record (JSON format) can be seen below and our official definition can been found in our community forum [here](https://support.algolia.com/hc/en-us/articles/4406981906833#:~:text=What%20is%20a%20record).

```
{
  "name": "Iphone 6 64Gb",
  "brand": "Apple",
  "color": "Gold",
  "categories": ["smartphone", "phone", "electronics"],
  "price": 789
}
```

In order to take advantage of the Algolia platform you first need to add your objects to an [index](https://support.algolia.com/hc/en-us/articles/4406981910289-What-is-an-index-#:~:text=An%20index%20is%20the%20place,is%20optimized%20for%20search%20operations). An index is the place where the data used by a search engine is stored. For example, in an e-commerce website, the index would be a complete list of all products with a custom ranking. More info on sending your data to Algolia can be found [here](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/).

Following on from this, the main goal of search is to help users find what they are looking for. Search breaks down into two crucial steps:

1. Returning accurate results
2. Ranking these results.

Algolia first orders results with its default ranking strategy, then with custom ranking.

[Custom ranking](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#custom) helps you increase visibility for some of your most essential products. Typical custom ranking attributes include `number of sales, views, likes, ratings, release date, etc` (any boolean or numeric attribute works with custom ranking).

Hopefully all this information helps.

Please let me know if you have any follow up questions.

Cheers,<br /> Liam Seck<br /> Sr. Solutions Engineer @ Algolia

---

### Question 2:

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design.

Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards,<br /> Matt

---

Hi Matt,

Thanks for reaching out.

Sorry for the inconvenience, we are always looking for customer feedback on ways to improve the platform.

While we cannot revert back the changes to the dashboard back at this point, I'm happy to share this feedback with our product teams.

While managing the index from the dashboard may now require a number of additional clicks our APIs help developers interact with the platform in a programmatic manner allowing you to script aspects of your iteration process - more information on this [here](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-your-indices/).

Let us know if there's any other additional feedback you'd like to share and I'll loop in the correct project managers.

Best Regards,<br /> Liam Seck<br /> Sr. Solutions Engineer @ Algolia

---

### Question 3:

Hi,

I'm looking to integrate Algolia in my website.

Will this be a lot of development work for me? What's the high level process look like?

Regards,<br /> Leo

---

Hi Leo,

Great choice! Algolia makes it easy for customers to implement and deliver exceptionally fast search experiences in no time.

On a high level the implementation will involve 4 core steps:

1. Send your data to Algolia The very first step is to send your data to Algolia’s servers - to ensure your users get the fastest search and discovery experience possible. Along with file upload and using the Algolia Crawler, the most common way to do this is to use one of our API clients. You just need to connect to your application, select your index, and send your data to Algolia in JSON format. And our API clients are available in many programming languages.

2. Configure relevance The second step is to configure relevance - to give your users the best results for them and for your business. Although Algolia offers incredibly powerful features to fine tune and improve relevance, you just have to configure 2 settings to get started: searchable attributes and custom ranking.

3. Build search UI The third step is to build the search UI - to provide your users with an awesome interface to search and browse. That can be coded with one of our [InstantSearch libraries](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/), which provide fully customisable front-end widgets that you can quickly assemble into a unique search interface. And the InstantSearch library is available for many frameworks.

4. Iterate But one more step is important. That’s to iterate. You can use our Analytics to get insights into your search’s performance, to make informed changes. Or automate this process by using our more advanced features, such as our AI suite to release the full potential of Algolia.

Hopefully that adds some clarity and provides you with a framework to getting started.

Regards,<br /> Liam Seck<br /> Sr. Solutions Engineer @ Algolia

---
