barba.use(barbaCss)

barba.init({

    transitions: [

        {
            name: "fade",

            beforeEnter({
                current,
                next,
                trigger
            }) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            },
            leave() {},
            enter() {}
        }

    ],

})