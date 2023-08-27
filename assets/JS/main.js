document.addEventListener("DOMContentLoaded", () => {
  // HEADER
  const header = document.getElementById("header");
  const headerLogoBtn = document.querySelector(".logo");

  //   LOGO BTN
  const logoBtn = document.querySelector(".logo-btn");

  // ACTIVE TAB
  const navBar = Array.from(document.querySelectorAll(".nav__ul li"));

  // NAVBAR ICONS
  const homeIcon = document.querySelector(".home");
  const aboutIcon = document.querySelector(".about");
  const contactIcon = document.querySelector(".contact");

  // ARRAY OF ALL PAGES
  const Pages = Array.from(document.querySelectorAll(".pages"));

  // HTML PAGES
  const homePage = document.getElementById("home");
  const aboutPage = document.getElementById("about");
  const contactPage = document.getElementById("contact");

  // END OF VARIABLES

  //   SHOW HEADER

  /*
  headerLogoBtn.addEventListener("click", (e) => {
    header.classList.toggle("show-header");
  });

  //   SHOW LOGO BTN
  logoBtn.addEventListener("click", () => {
    header.classList.toggle("show-header");
  });
  */

  /*
  // HOME PAGE ACTIVE
  homeIcon.addEventListener("click", () => {
    Pages.forEach((element) => element.classList.remove("active-page"));
    navBar.forEach((element) => element.classList.remove("active-tab"));

    homePage.classList.add("active-page");

    homeIcon.classList.add("active-tab");

    console.log("home page is active");
  });

  // ABOUT PAGE ACTIVE
  aboutIcon.addEventListener("click", () => {
    Pages.forEach((element) => element.classList.remove("active-page"));
    navBar.forEach((element) => element.classList.remove("active-tab"));

    aboutPage.classList.add("active-page");

    aboutIcon.classList.add("active-tab");

    console.log("about page is active");
  });

  // CONTACT PAGE ACTIVE
  contactIcon.addEventListener("click", () => {
    Pages.forEach((element) => element.classList.remove("active-page"));
    navBar.forEach((element) => element.classList.remove("active-tab"));

    contactPage.classList.add("active-page");

    contactIcon.classList.add("active-tab");

    console.log("contact page is active");
  });*/

  //   SHOW HEADER
  const showHeader = (button) => {
    button.addEventListener("click", () =>
      header.classList.toggle("show-header")
    );
  };

  // PAGE ACTIVE
  const showPage = (icon, page) => {
    icon.addEventListener("click", () => {
      Pages.forEach((element) => element.classList.remove("active-page"));
      navBar.forEach((element) => element.classList.remove("active-tab"));

      page.classList.add("active-page");

      icon.classList.add("active-tab");

      console.log(`${page} page is active`);
    });
  };

  // INVOKE SHOW HEADER
  showHeader(headerLogoBtn);
  showHeader(logoBtn);

  // INVOKE ACTIVE PAGE
  showPage(homeIcon, homePage);
  showPage(aboutIcon, aboutPage);
  showPage(contactIcon, contactPage);
});
