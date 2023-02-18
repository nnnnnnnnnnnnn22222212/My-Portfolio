import { menus } from "../data"

const Nav = () => {
  return (
    `
      <div class="controls">
        ${menus.map(menu => 
          //active-btn
          `<div class="control" data-id="${menu.link}" >
            <a href="${menu.link}"><i class="${menu.icon}"></i></a>
          </div>`
          ).join("")}
      </div>
    `
  )
}

export default Nav