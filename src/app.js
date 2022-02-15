const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  '5YXMN02GPC',
  '64ec321249c0c06af50aa81f74c4a0c3'
);

const search = instantsearch({
  indexName: 'restaurants_list',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search for Restaurants by Name, Cuisine, Location',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
      <div>
      <img src="{{image_url}}" align="left" alt="{{name}}" />
      <div class="hit-name">
        {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
      </div>
      <div class="hit-description">
        {{#helpers.highlight}}{ "attribute": "food_type" }{{/helpers.highlight}}
        <br/>
        <br/>
        {{#helpers.highlight}}{ "attribute": "city"}{{/helpers.highlight}}
        <br/>
        <br/>
        {{#helpers.highlight}}{"attribute": "stars_count"}{{/helpers.highlight}}
        <br/>
        <br/>
        {{#helpers.highlight}}{"attribute": "price_range" }{{/helpers.highlight}}


      </div>
      <div class="hit-price">({{reviews_count}} reviews)</div>
    </div>
    `,
    },
  }),
  instantsearch.widgets.configure({
    facets: ['*'],
    maxValuesPerFacet: 20,
  }),
  // instantsearch.widgets.dynamicWidgets({
  //   container: '#dynamic-widgets',
  //   fallbackWidget({ container, attribute }) {
  //     return instantsearch.widgets.refinementList({
  //       container,
  //       attribute,
  //     });
  //   },
  //   widgets: [],
  // }),


  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

// After the `searchBox` widget
search.addWidgets([
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),

  instantsearch.widgets.refinementList({
    container: '#food-type',
    attribute: 'food_type',
    limit: 7,
  }),

  instantsearch.widgets.refinementList({
    container: '#rating',
    attribute: 'stars_count',
    sortBy:['name:asc'],

    limit: 7,
  }),

  instantsearch.widgets.refinementList({
    container: '#payment-methods',
    attribute: 'payment_options',
    limit: 4,


  }),

  instantsearch.widgets.refinementList({
    container: '#price-range',
    attribute: 'price_range',
  }),

  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),

  instantsearch.widgets.stats({
    container: '#stats',
  }),

  instantsearch.widgets.infiniteHits({
    container: '#infinite-hits',
    templates: {
      item: `
        
        <p>{{ description }}</p>
      `,
    },
  })
  
]);

search.start();
