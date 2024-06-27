function toggleDarkMode() {
  //  body classes for background and text color
  document.body.classList.toggle("bg-slate-700");
  document.body.classList.toggle("text-white");

  //  input background color
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.toggle("bg-slate-600");
    input.classList.toggle("bg-[#F0F0F0]");
  });

  // button background color
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.classList.contains("bg-slate-600")) {
      button.classList.toggle("bg-slate-600");
      button.classList.toggle("bg-[#F0F0F0]");
    } else if (button.classList.contains("bg-[#F0F0F0]")) {
      button.classList.toggle("bg-slate-600");
      button.classList.toggle("bg-[#F0F0F0]");
    }
    // 
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

  // div background color
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

  //  dropdownMenu background color
  // const dropdownMenu = document.getElementById("dropdownMenu");
  // // dropdownMenu.classList.toggle("bg-slate-600");
  // dropdownMenu.classList.toggle("bg-[#F0F0F0]");
  // dropdownMenu.classList.toggle("bg-slate-700");

  // mode text
  const modeText = document.getElementById("modeText");
  modeText.textContent =
    modeText.textContent === "Dark Mode" ? "Light Mode" : "Dark Mode";
}
