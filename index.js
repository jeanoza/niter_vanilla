fetch("http://152.228.139.203/Efrei/ProductController.php")
  .then((res) => res.json())
  .then(
    (result) => {
      const table = document.querySelector("#table");

      result.forEach((el, index) => {
        const list = document.createElement("div");
        const items = ["image", "name", "price", "button"];

        items.forEach((item) => {
          const parent = document.createElement("div");
          let child = document.createElement("div");
          parent.className = "item";

          if (item == "button") {
            child = document.createElement(item);
            child.innerText = "acheter";
          } else if (item == "image") {
            child = document.createElement("img");
            child.src = el.imageURL;
          } else if (item == "name") {
            child.innerHTML = el.name;
          } else if (item == "price") {
            child.innerHTML = `a partir de ${el.price}`;
          }
          child.className = item;
          parent.appendChild(child);
          list.append(parent);
        });
        table.appendChild(list);
      });
    },
    (error) => {
      console.log(error);
    }
  );
