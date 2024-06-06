function handleScroll() {
    let windowHeight = window.innerHeight
    let currentDistance = window.scrollY

    // =================================     p1     =================================

    if (currentDistance >= 0.5*windowHeight) {
        let p1_title = document.getElementById('p1_title')
        p1_title.setAttribute('class', 'bounceIn-now')

        let p1s1 = document.getElementById('p1s1-path')
        p1s1.setAttribute('class', 'path-to-add-now')

        let p1_method1 = document.getElementById('p1_method1')
        p1_method1.setAttribute('class', 'bounceIn-1s')

        let p1s2 = document.getElementById('p1s2-path')
        p1s2.setAttribute('class', 'path-to-add-1s')

        let p1_problem1 = document.getElementById('p1_problem1')
        p1_problem1.setAttribute('class', 'bounceIn-2s')
    }

    // if (currentDistance >= 0.7*windowHeight) {
    //     let p1s3 = document.getElementById('p1s3-path')
    //     p1s3.setAttribute('class', 'path-to-add-now')
    // }

    if (currentDistance >= windowHeight) {
        let p1s3 = document.getElementById('p1s3-path')
        p1s3.setAttribute('class', 'path-to-add-now')

        let p1_method2 = document.getElementById('p1_method2')
        p1_method2.setAttribute('class', 'bounceIn-now')

        let p1s4 = document.getElementById('p1s4-path')
        p1s4.setAttribute('class', 'path-to-add-1s')

        let p1_problem2 = document.getElementById('p1_problem2')
        p1_problem2.setAttribute('class', 'bounceIn-1s')
    }

    if (currentDistance >= 1.5*windowHeight) {
        let p1s5 = document.getElementById('p1s5-path')
        p1s5.setAttribute('class', 'path-to-add-now')

        let p1_method3 = document.getElementById('p1_method3')
        p1_method3.setAttribute('class', 'bounceIn-now')

        let p1s6 = document.getElementById('p1s6-path')
        p1s6.setAttribute('class', 'path-to-add-1s')

        let p1_problem3 = document.getElementById('p1_problem3')
        p1_problem3.setAttribute('class', 'bounceIn-1s')
    }

    if (currentDistance >= 2*windowHeight) {
        let p1s7 = document.getElementById('p1s7-path')
        p1s7.setAttribute('class', 'path-to-add-now')

        let p1_method4 = document.getElementById('p1_method4')
        p1_method4.setAttribute('class', 'bounceIn-now')

        let p1s8 = document.getElementById('p1s8-path')
        p1s8.setAttribute('class', 'path-to-add-1s')

        let p1_advantage = document.getElementById('p1_advantage')
        p1_advantage.setAttribute('class', 'bounceIn-1s')

        // let p2s1 = document.getElementById('p2s1-path')
        // p2s1.setAttribute('class', 'path-to-add-2s')
        //
        // let p2s2 = document.getElementById('p2s2-path')
        // p2s2.setAttribute('class', 'path-to-add-2s')
        //
        // let p2s3 = document.getElementById('p2s3-path')
        // p2s3.setAttribute('class', 'path-to-add-2s')
    }

    // =================================     p2     =================================

    if (currentDistance >= 2.6*windowHeight) {
        let p2s1 = document.getElementById('p2s1-path')
        p2s1.setAttribute('class', 'path-to-add-now')

        let p2s2 = document.getElementById('p2s2-path')
        p2s2.setAttribute('class', 'path-to-add-now')

        let p2s3 = document.getElementById('p2s3-path')
        p2s3.setAttribute('class', 'path-to-add-1s')

        let p2_challenges = document.getElementById('p2_challenges')
        p2_challenges.setAttribute('class', 'bounceIn-now')
    }

    if (currentDistance >= 3.1*windowHeight) {
        let p2s4 = document.getElementById('p2s4-path')
        p2s4.setAttribute('class', 'path-to-add-now')

        let p2_cha1 = document.getElementById('p2_cha1')
        p2_cha1.setAttribute('class', 'bounceIn-now')

        let p2_cha2 = document.getElementById('p2_cha2')
        p2_cha2.setAttribute('class', 'bounceIn-1s')
    }

    if (currentDistance >= 3.8*windowHeight) {
        let p2s5 = document.getElementById('p2s5-path')
        p2s5.setAttribute('class', 'path-to-add-now')

        let p2s6 = document.getElementById('p2s6-path')
        p2s6.setAttribute('class', 'path-to-add-now')

        let p2s7 = document.getElementById('p2s7-path')
        p2s7.setAttribute('class', 'path-to-add-now')

        let p2_other = document.getElementById('p2_other')
        p2_other.setAttribute('class', 'bounceIn-now')

        let p2_select = document.getElementById('p2_select')
        p2_select.setAttribute('class', 'bounceIn-1s')
    }

    // =================================     p3     =================================

    if (currentDistance >= 4.8*windowHeight) {
        let p3s1 = document.getElementById('p3s1-path')
        p3s1.setAttribute('class', 'path-to-add-now')

        let p3_challenges = document.getElementById('p3_challenges')
        p3_challenges.setAttribute('class', 'bounceIn-now')
    }

    if (currentDistance >= 5.2*windowHeight) {
        let p3s2 = document.getElementById('p3s2-path')
        p3s2.setAttribute('class', 'path-to-add-now')

        let p3_explore1 = document.getElementById('p3_explore1')
        p3_explore1.setAttribute('class', 'bounceIn-now')

        let p3_explore2 = document.getElementById('p3_explore2')
        p3_explore2.setAttribute('class', 'bounceIn-1s')
    }

    if (currentDistance >= 5.6*windowHeight) {
        let p3s3 = document.getElementById('p3s3-path')
        p3s3.setAttribute('class', 'path-to-add-now')

        let p3_detail1 = document.getElementById('p3_detail1')
        p3_detail1.setAttribute('class', 'bounceIn-now')

        let p3_detail2 = document.getElementById('p3_detail2')
        p3_detail2.setAttribute('class', 'bounceIn-1s')

        let p3s4 = document.getElementById('p3s4-path')
        // console.log(p3s4)
        p3s4.setAttribute('class', 'path-to-add-1s')

        let p3_detail3 = document.getElementById('p3_detail3')
        p3_detail3.setAttribute('class', 'bounceIn-2s')
    }

    // =================================     p4     =================================

    if (currentDistance >= 6.4*windowHeight) {
        let p4s1 = document.getElementById('p4s1-path')
        p4s1.setAttribute('class', 'path-to-add-now')

        let p4_halo1 = document.getElementById('p4_halo1')
        p4_halo1.setAttribute('class', 'bounceIn-now')

        let p4s2 = document.getElementById('p4s2-path')
        p4s2.setAttribute('class', 'path-to-add-now')

        let p4_halo2 = document.getElementById('p4_halo2')
        p4_halo2.setAttribute('class', 'bounceIn-1s')
    }

    if (currentDistance >= 7.2*windowHeight) {
        let p4s3 = document.getElementById('p4s3-path')
        p4s3.setAttribute('class', 'path-to-add-now')

        let p4_halo3 = document.getElementById('p4_halo3')
        p4_halo3.setAttribute('class', 'bounceIn-now')

        let p4s4 = document.getElementById('p4s4-path')
        p4s4.setAttribute('class', 'path-to-add-1s')

        let p4_halo4 = document.getElementById('p4_halo4')
        p4_halo4.setAttribute('class', 'bounceIn-1s')
    }

    if (currentDistance >= 7.8*windowHeight) {
        let p4s5 = document.getElementById('p4s5-path')
        p4s5.setAttribute('class', 'path-to-add-now')

        let p4_halo5 = document.getElementById('p4_halo5')
        p4_halo5.setAttribute('class', 'bounceIn-now')

        let p4s6 = document.getElementById('p4s6-path')
        p4s6.setAttribute('class', 'path-to-add-1s')

        let p4_halo6 = document.getElementById('p4_halo6')
        p4_halo6.setAttribute('class', 'bounceIn-1s')
    }

    // =================================     p5     =================================

    if (currentDistance >= 8*windowHeight) {
        let p5s1 = document.getElementById('p5s1')
        console.log(p5s1)
        p5s1.setAttribute('class', 'p5s1-to-add')

        let p5cover = document.getElementById('p5cover')
        p5cover.setAttribute('class', 'p5cover-to-add')

    }
}

window.addEventListener("scroll", handleScroll, true)
