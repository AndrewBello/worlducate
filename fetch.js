const countriesContainer = document.querySelector(".countries-container");

fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      const countryCard = document.createElement(`a`);
      countryCard.classList.add(`country-card`);
      countryCard.href = `/src/country.html?name=${country.name}`;
      countryCard.innerHTML = `
          <img class="size-[100%]" src="${country.flags.svg}" alt="${
        country.name
      }" />
          <div class="card-text px-[16px] ">
            <h3 class="text-[24px] my-[16px]">${country.name}</h3>
            <p class="my-[8px]"><b>Population: </b>${country.population.toLocaleString(
              "en-NG"
            )}</p>
            <p class="my-[8px]"><b>Region: </b>${country.region}</p>
            <p class="my-[8px]"><b>Capital: </b>${country.capital}</p>
          </div>
`;

      countriesContainer.append(countryCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching and parsing data:", error);
  });
