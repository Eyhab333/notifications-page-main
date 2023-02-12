//SHOW AND HIDE ON CLICK
const markAsRead = document.getElementById("mark-all-as-read");
const unReadNotifications = document.querySelectorAll(".unread")
const unReadCounter = document.querySelector(".unread-counter")

unReadCounter.innerText = unReadNotifications.length

unReadNotifications.forEach((notification) => {
  notification.addEventListener("click", () => {
    notification.classList.remove("unread")
    const newUnReadNotifications = document.querySelectorAll(".unread")
    unReadCounter.innerText = newUnReadNotifications.length
  })

  markAsRead.addEventListener("click", () => {
    unReadNotifications.forEach((notification) => {
      notification.classList.remove("unread")
    })
    const newUnReadNotifications = document.querySelectorAll(".unread")
    unReadCounter.innerText = newUnReadNotifications.length
  })
})
