function toggleDarkMode() {
  // Toggle body classes for background and text color
  document.body.classList.toggle("bg-slate-700");
  document.body.classList.toggle("text-white");

  // Toggle input background color
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.toggle("bg-slate-600");
    input.classList.toggle("bg-[#F0F0F0]");
  });

  // Toggle button background color
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.classList.contains("bg-slate-600")) {
      button.classList.toggle("bg-slate-600");
      button.classList.toggle("bg-[#F0F0F0]");
    } else if (button.classList.contains("bg-[#F0F0F0]")) {
      button.classList.toggle("bg-slate-600");
      button.classList.toggle("bg-[#F0F0F0]");
    }
    // Check if button originally has hover:bg-slate-600
    const hasOriginalHoverSlate700 =
      button.classList.contains("hover:bg-slate-700");
    if (hasOriginalHoverSlate700) {
      button.classList.toggle("hover:bg-slate-700");
      button.classList.toggle("hover:bg-white");
    } else if (button.classList.contains("hover:bg-white")) {
      button.classList.toggle("hover:bg-slate-700");
      button.classList.toggle("hover:bg-white");
    }
  });

  // Toggle div background color
  const divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    if (div.classList.contains("bg-slate-600")) {
      div.classList.toggle("bg-slate-600");
      div.classList.toggle("bg-[#F0F0F0]");
    } else if (div.classList.contains("bg-[#F0F0F0]")) {
      div.classList.toggle("bg-slate-600");
      div.classList.toggle("bg-[#F0F0F0]");
    } else if (div.classList.contains("bg-slate-700")) {
      div.classList.toggle("bg-slate-700");
      div.classList.toggle("bg-[#F2F2F2]");
    } else if (div.classList.contains("bg-[#F2F2F2]")) {
      div.classList.toggle("bg-slate-700");
      div.classList.toggle("bg-[#F2F2F2]");
    }

    
  });

  // Toggle dropdownMenu background color
  // const dropdownMenu = document.getElementById("dropdownMenu");
  // // dropdownMenu.classList.toggle("bg-slate-600");
  // dropdownMenu.classList.toggle("bg-[#F0F0F0]");
  // dropdownMenu.classList.toggle("bg-slate-700");

  // Toggle mode text
  const modeText = document.getElementById("modeText");
  modeText.textContent =
    modeText.textContent === "Dark Mode" ? "Light Mode" : "Dark Mode";
}
