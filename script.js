let sections = document.querySelectorAll("section");
let nav = document.querySelectorAll("nav");
let navList = document.querySelectorAll(".nav-list li");

let options= {
	threshold : "0.6" //threshold 0.6 = 60 percent//
}

let observer = new IntersectionObserver((entries) => {

	entries.forEach((e) =>{
		if (e.isIntersecting){

		//changing style to scroll//


		// if (e.target.id !== "base"){
		// 	nav.classList.add("active");
		// } else {
		// 	nav.classList.remove("active");
		// }
		console.log(e.target.id);

		//section indication//

		navList.forEach((link) =>{
			//to remove active class from other
			link.classList.remove("active");


			if(e.target.id == link.dataset.nav){
				link.classList.add("active");
			}
		});
	  }
	});
}, options);

sections.forEach((section) =>{
	observer.observe(section);
});