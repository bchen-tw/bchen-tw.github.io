window.addEventListener('DOMContentLoaded', event => {

    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navigation'
    })


    // Vue
    const { createApp } = Vue

    const vm1 = createApp({
        data() {
            return {
                papers: paper_data,
                projects_konstanz: konstanz_project_data,
                projects_nthu_postdoc: nthu_postdoc_project_data,
                projects_nthu: nthu_professor_project_data,
                awards: award_data,
                education: education_data,
                nonlinear_optics_skills: skill_nonlinear_optics_data,
                ultrafast_optics_skills: skill_ultrafast_optics_data,
                ultrafast_spectroscopy_skills: skill_ultrafast_spectroscopy_data,
                optical_solution_skills: skill_optical_solution_data,
                software_skills: skill_software_data
            }
        }
    }).mount('#page-top')

});