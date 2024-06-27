const detailTextContainer = document.querySelector(".country-details");
const countryName = new URLSearchParams(location.search).get("name");

fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    const country = data.find((country) => country.name === countryName);

    if (!country) {
      detailTextContainer.innerHTML = `<p class="m-0"><b>Country not found</b></p>`;
      return;
    }

    const fetchBorderCountryNames = (country, countries) => {
      if (
        !country.borders ||
        !Array.isArray(country.borders) ||
        country.borders.length === 0
      ) {
        return "None";
      }

      const borderCountryLinks = country.borders.map((borderCode) => {
        const borderCountry = countries.find(
          (c) => c.alpha3Code === borderCode
        );
        return borderCountry
          ? `<a href="?name=${encodeURIComponent(
              borderCountry.name
            )}" class="border-link inline-block py-1 px-2 rounded-md bg-gray-200 transition duration-300 hover:bg-gray-300">${
              borderCountry.name
            }</a>`
          : "Unknown";
      });
      return borderCountryLinks.join(", ");
    };

    const borderCountryLinks = fetchBorderCountryNames(country, data);
    console.log(borderCountryLinks);

    const countryDetails = document.createElement("div");
    countryDetails.classList.add("country-details");
    countryDetails.innerHTML = `
      <div>
        <img src="${country.flags.svg}" class="w-[500px]" alt="flag">
      </div>
      <div class="details-text-container items-start">
        <h1 class="text-[24px] my-[16px]" id="country-name"><b>${
          country.name
        }</b></h1>
        <div class="details-text flex-wrap md:flex md:max-h-[180px] gap-y-[12px] gap-x-[64px] md:flex-col">
          <p class="m-0"><b>Native Name:</b> ${country.nativeName}</p>
          <p class="m-0"><b>Population:</b> ${country.population.toLocaleString(
            "en-NG"
          )}</p>
          <p class="m-0"><b>Region:</b> ${country.region}</p>
          <p class="m-0"><b>Sub Region:</b> ${country.subregion}</p>
          <p class="m-0"><b>Capital:</b> ${
            country.capital ? country.capital : "N/A"
          }</p>
          <p class="m-0"><b>Top Level Domain:</b> ${
            country.topLevelDomain ? country.topLevelDomain.join(", ") : "N/A"
          }</p>
          <p class="m-0"><b>Currencies:</b> ${
            country.currencies
              ? country.currencies.map((currency) => currency.name).join(", ")
              : "N/A"
          }</p>
          <p class="m-0"><b>Languages:</b> ${
            country.languages
              ? country.languages.map((lang) => lang.name).join(", ")
              : "N/A"
          }</p>
        </div>
        <div class="border-countries mt-[48px]">
        <p class="pt-[20px] block"><b>Border Countries:</b> <span class=" border rounded-sm ">${borderCountryLinks}</span></p>
        </div>
      </div>
    `;

    detailTextContainer.innerHTML = ""; 
    detailTextContainer.append(countryDetails);
  })
  .catch((error) => {
    console.error("Error fetching and parsing data:", error);
    detailTextContainer.innerHTML = `<p class="m-0"><b>Error loading country details</b></p>`;
  });

function goBack() {
  window.history.back();
}
