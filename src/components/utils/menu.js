const menu = () => {
  // 헤더 메뉴 클릭
  const menu = document.querySelector(".vertex.menu");
  const menuList = document.querySelector(".vertex ul");

  menu.addEventListener("click", () => {
    menuList.classList.toggle("show");
  });
};

export default menu;
