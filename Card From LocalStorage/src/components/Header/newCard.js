export default function newCard() {
    const titleInput = document.querySelector("#Title")
    const descriptionInput = document.querySelector("#Description")
    const createdInput = document.querySelector("#Date")

    if (titleInput.value) {
        if (!localStorage[titleInput.value]) {
            localStorage.setItem(titleInput.value, JSON.stringify({
                title: titleInput.value,
                description: descriptionInput.value || "",
                created: createdInput.value,
            }))
            titleInput.value = ""
            descriptionInput.value = ""
            createdInput.value = ""
        }
        else
            throw new Error("Can't create repeat card")
    }
    else
        throw new Error("Can't create NoName card")
}