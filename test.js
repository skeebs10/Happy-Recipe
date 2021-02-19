const { default: axios } = require("axios");

axios
  .get(
    "https://api.edamam.com/search?q=beef&app_id=fe3678b3&app_key=0a538d08f88f1dfc63f808d434f43772"
  )
  .then(({ data }) => {
    let aa = data?.hits.map((item) => ({
      title: item.recipe?.label,
      image_url: item.recipe?.image,
      publisher: item.recipe?.source,
      ingredients: item.recipe?.ingredientLines,
      description: "Descrition is not available",
    }));
    console.log("aa", aa);
    aa.map(async (item) => {
      await axios
        .post("http://localhost:8000/api", item)
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          console.log("err", err);
        });
    });
  });
