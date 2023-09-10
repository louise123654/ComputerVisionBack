const getMenuFrontEnd = (role = "USER_ROLE") => {
  const menu = [
    {
      titulo: "Dashboard",
      icono: "mdi mdi-gauge",
      submenu: [
        { titulo: "Main", url: "/" },
      ],
    },

    {
      titulo: "Mantenimiento",
      icono: "mdi mdi-folder-lock-open",
      submenu: [{ titulo: "Usuarios", url: "usuarios" }],
    },
  ];

  // if (role === "ADMIN_ROLE") {
  //   menu[1].submenu.unshift({ titulo: "Usuarios", url: "usuarios" });
  // }

  return menu;
};

module.exports = {
  getMenuFrontEnd,
};
