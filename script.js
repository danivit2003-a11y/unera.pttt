const searchInput = document.getElementById("universitySearch");

const universityCards =
    document.querySelectorAll(".university-card");

const noResults =
    document.getElementById("noResults");


if (searchInput) {

    searchInput.addEventListener("input", function () {

        const search =
            this.value
                .toLowerCase()
                .trim();

        let found = false;


        universityCards.forEach(function (card) {

            const university =
                card.dataset.search.toLowerCase();

            if (
                search === "" ||
                university.includes(search)
            ) {

                card.style.display = "flex";

                found = true;

            } else {

                card.style.display = "none";

            }

        });


        if (noResults) {

            if (found || search === "") {

                noResults.style.display = "none";

            } else {

                noResults.style.display = "block";

            }

        }

    });

}
