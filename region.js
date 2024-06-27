document.getElementById("dropdownButton").addEventListener("click", () => {
  document.getElementById("dropdownMenu").classList.toggle("hidden");
});

document.getElementById("dropDownLetter").addEventListener("click", () => {
  document.getElementById("dropdownMenuLetter").classList.toggle("hidden");
});

const dropdownButtons = document.querySelectorAll("#dropdownMenu button");
dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const region = button.textContent;
    filterByRegion(region);
    document.getElementById("dropdownMenu").classList.add("hidden");
  });
});

function filterByRegion(region) {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      const filteredCountries = data.filter(
        (country) => country.region === region
      );
      displayCountries(filteredCountries);
    })
    .catch((error) => {
      console.error("Error fetching and parsing data:", error);
    });
}

function displayCountries(countries) {
  const detailTextContainer = document.querySelector(".countries-container");
  detailTextContainer.innerHTML = "";

  countries.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.href = `/src/country.html?name=${encodeURIComponent(
      country.name
    )}`;
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

function filterByLetter(range) {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      const filteredCountries = data.filter((country) => {
        const firstLetter = country.name.charAt(0).toUpperCase();
        if (range === "A-L") {
          return firstLetter >= "A" && firstLetter <= "L";
        } else if (range === "M-Z") {
          return firstLetter >= "M" && firstLetter <= "Z";
        }
      });
      displayCountries(filteredCountries);
    })
    .catch((error) => {
      console.error("Error fetching and parsing data:", error);
    });
}
document.addEventListener("DOMContentLoaded", () => {
  // mobile
  document
    .getElementById("dropdownButtonmobile")
    .addEventListener("click", () => {
      document.getElementById("dropdownMenu2").classList.toggle("hidden");
    });

  
  const mobileDropdownButtons = document.querySelectorAll(
    "#dropdownMenu2 button"
  );
  mobileDropdownButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent.trim();
      if (buttonText === "A-L" || buttonText === "M-Z") {
        filterByLetter(buttonText);
      } else {
        filterByRegion(buttonText);
      }
      document.getElementById("dropdownMenu2").classList.add("hidden");
    });
  });

  
  function filterByRegion(region) {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredCountries = data.filter(
          (country) => country.region === region
        );
        displayCountries(filteredCountries);
      })
      .catch((error) => {
        console.error("Error fetching and parsing data:", error);
      });
  }

  
  function filterByLetter(range) {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredCountries = data.filter((country) => {
          const firstLetter = country.name.charAt(0).toUpperCase();
          if (range === "A-L") {
            return firstLetter >= "A" && firstLetter <= "L";
          } else if (range === "M-Z") {
            return firstLetter >= "M" && firstLetter <= "Z";
          }
        });
        displayCountries(filteredCountries);
      })
      .catch((error) => {
        console.error("Error fetching and parsing data:", error);
      });
  }

  
  function displayCountries(countries) {
    const countriesContainer = document.querySelector(".countries-container");
    countriesContainer.innerHTML = "";

    countries.forEach((country) => {
      const countryCard = document.createElement("div");
      countryCard.classList.add(
        "country-card",
        "inline-block",
        "transition-all",
        "ease-in-out",
        "duration-200",
        "hover:scale-105",
        "hover:shadow-lg",
        "hover:cursor-pointer",
        "pb-4",
        "rounded-md",
        "shadow-md",
        "w-full",
        "max-w-xs"
      );

      countryCard.innerHTML = `
        <img class="w-full h-32 object-cover" src="${
          country.flags.png
        }" alt="flag" />
        <div class="p-2">
          <h3 class="text-lg font-semibold mb-1">${country.name}</h3>
          <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Capital:</strong> ${country.capital || "N/A"}</p>
        </div>
      `;
      countriesContainer.appendChild(countryCard);
    });
  }
});

