import { admin } from "../data"

const adminNav = () => {
  return ( `
  <div class="controls">
  ${admin.map(admins => 
    //active-btn
    `<div class="control" data-id="${admins.link}" >
      <a href="${admins.link}"><i class="${admins.icon}"></i></a>
    </div>`
    ).join("")}
</div>
  `
  )
}

export default adminNav