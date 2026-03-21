document.addEventListener("DOMContentLoaded", () => {
    chaiCSS()
})

function chaiCSS() {

    const elements = document.querySelectorAll("[class*='chai-']")

    elements.forEach(el => {

        const classes = [...el.classList]

        classes.forEach(cls => {

            if (!cls.startsWith("chai-")) return

            // Prebuilt components
            if (cls === "chai-btn") {
                applyButton(el)
                el.classList.remove(cls)
                return
            }

            if (cls === "chai-btn-outline") {
                applyOutlineButton(el)
                el.classList.remove(cls)
                return
            }

            if (cls === "chai-btn-secondary") {
                applySecondaryButton(el)
                el.classList.remove(cls)
                return
            }

            if (cls === "chai-btn-primary") {
                applyButton(el)
                el.classList.remove(cls)
                return
            }

            if (cls === "chai-btn-danger") {
                applyDangerButton(el)
                el.classList.remove(cls)
                return
            }

            if (cls === "chai-btn-ghost") {
                applyGhostButton(el)
                el.classList.remove(cls)
                return
            }

            if (cls === "chai-card") {
                applyCard(el)
                el.classList.remove(cls)
                return
            }

            if (cls === "chai-card-primary") {
                applyCardPrimary(el)
                el.classList.remove(cls)
                return
            }

            if (cls === "chai-card-secondary") {
                applyCardSecondary(el)
                el.classList.remove(cls)
                return
            }

            if (cls === "chai-flex") {
                el.style.display = "flex"
                el.classList.remove(cls)
                return
            }

            if (cls === "chai-center") {
                el.style.display = "flex"
                el.style.justifyContent = "center"
                el.style.alignItems = "center"
                el.classList.remove(cls)
                return
            }

            if (cls === "chai-flex-wrap") {
                el.style.flexWrap = "wrap"
                el.classList.remove(cls)
                return
            }

            const parsed = parseUtility(cls)

            if (!parsed) return

            const { property, value } = parsed

            el.style[property] = value

            el.classList.remove(cls)

        })

    })

}

function parseUtility(cls) {

    const parts = cls.split("-")

    if (parts.length < 3) return null

    const utility = parts[1]
    const value = parts.slice(2).join("-")

    const utilityMap = {

        p: "padding",
        m: "margin",

        pt: "paddingTop",
        pb: "paddingBottom",
        pl: "paddingLeft",
        pr: "paddingRight",

        mt: "marginTop",
        mb: "marginBottom",

        bg: "backgroundColor",

        text: "color",

        fs: "fontSize",

        radius: "borderRadius",

        w: "width",
        h: "height",

        align: "textAlign",

        gap: "gap"

    }

    const property = utilityMap[utility]

    if (!property) return null

    return {
        property,
        value: formatValue(property, value)
    }

}

function formatValue(property, value) {

    const unitProperties = [
        "padding",
        "margin",
        "paddingTop",
        "paddingBottom",
        "paddingLeft",
        "paddingRight",
        "marginTop",
        "marginBottom",
        "fontSize",
        "borderRadius",
        "width",
        "height"
    ]

    if (unitProperties.includes(property) && !isNaN(value)) {
        return value + "px"
    }

    return value

}

function applyButton(el) {

    el.style.padding = "10px 16px"
    el.style.border = "none"
    el.style.borderRadius = "6px"
    el.style.cursor = "pointer"
    el.style.fontSize = "16px"
    el.style.backgroundColor = "#2563eb"
    el.style.color = "white"
    el.style.transition = "background-color 0.2s ease, transform 0.2s ease"

    setHoverEffect(el, {
        backgroundColor: "#1d4ed8",
        transform: "translateY(-1px)"
    }, {
        backgroundColor: "#2563eb",
        transform: "translateY(0)"
    })

}

function applyOutlineButton(el) {

    el.style.padding = "10px 16px"
    el.style.border = "2px solid #2563eb"
    el.style.borderRadius = "6px"
    el.style.background = "transparent"
    el.style.color = "#2563eb"
    el.style.cursor = "pointer"
    el.style.transition = "background-color 0.2s ease, transform 0.2s ease"

    setHoverEffect(el, {
        backgroundColor: "rgba(37, 99, 235, 0.08)",
        transform: "translateY(-1px)"
    }, {
        backgroundColor: "transparent",
        transform: "translateY(0)"
    })

}

function applySecondaryButton(el) {

    el.style.padding = "10px 16px"
    el.style.border = "none"
    el.style.borderRadius = "6px"
    el.style.cursor = "pointer"
    el.style.fontSize = "16px"
    el.style.backgroundColor = "#6b7280"
    el.style.color = "white"
    el.style.transition = "background-color 0.2s ease, transform 0.2s ease"

    setHoverEffect(el, {
        backgroundColor: "#4b5563",
        transform: "translateY(-1px)"
    }, {
        backgroundColor: "#6b7280",
        transform: "translateY(0)"
    })

}

function applyDangerButton(el) {

    el.style.padding = "10px 16px"
    el.style.border = "none"
    el.style.borderRadius = "6px"
    el.style.cursor = "pointer"
    el.style.fontSize = "16px"
    el.style.backgroundColor = "#dc2626"
    el.style.color = "white"
    el.style.transition = "background-color 0.2s ease, transform 0.2s ease"

    setHoverEffect(el, {
        backgroundColor: "#b91c1c",
        transform: "translateY(-1px)"
    }, {
        backgroundColor: "#dc2626",
        transform: "translateY(0)"
    })

}

function applyGhostButton(el) {

    el.style.padding = "10px 16px"
    el.style.border = "2px solid rgba(37, 99, 235, 0.7)"
    el.style.borderRadius = "6px"
    el.style.background = "transparent"
    el.style.color = "#2563eb"
    el.style.cursor = "pointer"
    el.style.transition = "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease"

    setHoverEffect(el, {
        backgroundColor: "rgba(37, 99, 235, 0.12)",
        color: "#1d4ed8",
        transform: "translateY(-1px)"
    }, {
        backgroundColor: "transparent",
        color: "#2563eb",
        transform: "translateY(0)"
    })

}

function applyCard(el) {

    el.style.padding = "16px"
    el.style.borderRadius = "8px"
    el.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
    el.style.backgroundColor = "white"
    el.style.margin = "10px"
    el.style.transition = "transform 0.2s ease, box-shadow 0.2s ease"
    el.style.transform = "translateY(0)"

    setHoverEffect(el, {
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        transform: "translateY(-2px)"
    }, {
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transform: "translateY(0)"
    })

}

function applyCardPrimary(el) {

    applyCard(el)
    el.style.backgroundColor = "#eff6ff"
    el.style.border = "1px solid #93c5fd"

}

function applyCardSecondary(el) {

    applyCard(el)
    el.style.backgroundColor = "#f8fafc"
    el.style.border = "1px solid #cbd5e1"

}

function setHoverEffect(el, hoverStyle, baseStyle) {
    el.addEventListener("mouseenter", () => {
        Object.entries(hoverStyle).forEach(([key, value]) => {
            el.style[key] = value
        })
    })

    el.addEventListener("mouseleave", () => {
        const styleToApply = baseStyle || {}
        Object.entries(styleToApply).forEach(([key, value]) => {
            el.style[key] = value
        })
    })
}