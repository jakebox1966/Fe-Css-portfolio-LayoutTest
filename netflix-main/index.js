window.onload = function () {
    const faqList = document.querySelectorAll(".faq-title");
    const faqContentList = document.querySelectorAll(".faq-content");

    faqList.forEach((item, index, faqList) => {
        faqList[index].addEventListener("click", () => {
            faqContentList[index].classList.toggle("active");

            faqList.forEach((item2, index2, faqList) => {
                if (index !== index2) {
                    faqContentList[index2].classList.remove("active");
                }
            });
        });
    });
};
