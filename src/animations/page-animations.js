export const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 1,
            when: "beforeChildren"
        }
    },
    exit: {
        opacity:0
    }
}

export const headingVariants = {
    initial: {
        opacity: 0,
        x: "-80vw",
        transition: { delay: 1, duration: 1}
    },
    final: {
        opacity: 1,
        x: 0
    }

}