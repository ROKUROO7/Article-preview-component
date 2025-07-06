const share_container = document.getElementById("share-container")
const share_icon = document.getElementById("share-icon")
const share_menu = document.getElementById("share-menu")

share_icon.addEventListener('click',() => {
  share_icon.classList.toggle("card__share-icon--active")
  share_menu.classList.toggle("card__share-menu--active")
})

document.addEventListener('click', function (event) {
  if (!share_container.contains(event.target) && event.target !== share_container ) {
      share_icon.classList.remove("card__share-icon--active")
      share_menu.classList.remove("card__share-menu--active")
    }
  }
)