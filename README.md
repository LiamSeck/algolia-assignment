## Algolia Assignment - Liam Seck

https://liamseck.github.io/algolia-assignment/

---

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Open http://localhost:3000 to see the app.

---

### Data Manipulation:

1. Checked both JSON and CSV files to confirm correct structure and correct number of objects/enteries following https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/in-depth/prepare-data-in-depth/
2. Noticed the `restaurants_info.csv` was using `;` instead of `,`
3. Carried out a find and replace for `;` to `,`
4. Then converted `restaurants_info.csv` to JSON using `csvtojson` located [here](https://github.com/LiamSeck/algolia-assignment/tree/main/csvtojson).
5. I then imported both JSON files into an index using the dashboard: https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/how-to/importing-from-the-dashboard/

---

### Customer Questions:

- Answers can be found [here](https://github.com/LiamSeck/algolia-assignment/blob/main/Questions.md)

---
