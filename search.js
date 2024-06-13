const detailTextContainer = document.querySelector(".countries-container");
const searchBox = document.getElementById("searchBox");

fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    displayCountries(data);

    searchBox.addEventListener("input", () => {
      
      const searchText = searchBox.value.toLowerCase();
      const filteredCountries = data.filter((country) =>
        country.name.toLowerCase().includes(searchText)
      );
      displayCountries(filteredCountries);
    });
  })
  .catch((error) => {
    console.error("Error fetching and parsing data:", error);
  });

function displayCountries(countries) {
  detailTextContainer.innerHTML = "";

  countries.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.href = `/src/country.html?name=${country.name}`;
    countryCard.classList.add(
      "inline-block",
      "transition-all",
      "ease-in-out",
      "duration-[0.2s]",
      "country-card",
      "hover:scale-105",
      "hover:shadow-lg",
      "hover:cursor-pointer",
      "pb-[24px]",
      "rounded-[8px]",
      "shadow",
      "w-[250px]",
      "overflow-hidden"
    );

    countryCard.innerHTML = `
      <img class="w-[100%]" src="${country.flags.png}" alt="flag" />
      <div class="card-text px-[16px]">
        <h3 class="text-[24px] my-[16px]">${country.name}</h3>
        <p class="my-[8px]"><b>Population: </b>${country.population.toLocaleString()}</p>
        <p class="my-[8px]"><b>Region: </b>${country.region}</p>
        <p class="my-[8px]"><b>Capital: </b>${country.capital || "N/A"}</p>
      </div>
    `;
    detailTextContainer.appendChild(countryCard);
  });
}
