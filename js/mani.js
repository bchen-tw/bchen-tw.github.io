window.addEventListener('DOMContentLoaded', event => {

    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navigation'
    })


    // Vue
    const { createApp } = Vue

    const vm1 = createApp({
        data() {
            return {
                papers: paper_data
            }
        }
    }).mount('#publication')

});