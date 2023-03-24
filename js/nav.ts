const file = window.location.pathname.split("/").pop()
let page;
if (file != null)
	page = file.split(".")[0];

const toggleButton = document.querySelector("#togglebtn");
const navbarLinks = document.querySelector("#nlink");

const contact = document.querySelector("#contact");
const nav = document.querySelector("#nav");

const threshold = 0.7 * window.innerHeight;

function sticky(item) {
	if (window.scrollY >= threshold) {
		item.classList.add("sticky");
	} else {
		item.classList.remove("sticky");
	}
}

(function () {
	if (
		toggleButton == null ||
		navbarLinks == null
	)
		return

	toggleButton.addEventListener('click', () => {
		navbarLinks.classList.toggle('active')
		console.log('toggle')
	})

	const thahirLinks = navbarLinks.querySelectorAll("a")
	thahirLinks.forEach(link => {
		link.addEventListener('click', () => {
			navbarLinks.classList.toggle('active')
			console.log('toggle')
		});
	})
});


if (page == "index") {
	window.onscroll = function () {
		sticky(nav);
		sticky(contact);
	}
}
else {
	if (nav == null || contact == null) { }
	else {
		nav.classList.add("sticky");
		contact.classList.add("sticky");
	}
}