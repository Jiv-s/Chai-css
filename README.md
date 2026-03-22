☕ Chai CSS

A lightweight utility-first CSS engine built with JavaScript.

Instead of writing traditional CSS, you can use simple class names like:

chai-p-10
chai-bg-red
chai-text-center

The JavaScript engine scans the DOM, detects these classes, converts them into CSS styles, and applies them dynamically.

🌐 Live Demo:
https://chai-css.vercel.app/

Features
Utility-first CSS system
Automatic DOM scanning
Dynamic style application
Lightweight (pure JavaScript)
No external dependencies
Reusable UI components

Supported utilities include:

Spacing (padding, margin)
Colors (background, text)
Typography (font size, alignment)
Borders and radius
Layout utilities (flex, center, gap)
Prebuilt components (buttons, cards)
⚙️ How It Works

1️⃣ When the page loads, the script runs:

document.addEventListener("DOMContentLoaded", () => {
    chaiCSS()
})

2️⃣ The script scans the entire DOM and finds elements containing chai-* classes.

3️⃣ Each class is parsed to determine:

the CSS property
the value

Example:

chai-p-10

gets converted to:

padding: 10px

4️⃣ The style is then applied using JavaScript:

el.style[property] = value

5️⃣ After applying the style, the original chai-* class is removed.

This makes the engine behave like a mini utility CSS framework.

Example Usage
HTML
<div class="chai-p-20 chai-bg-lightblue chai-radius-10">
    Hello Chai CSS
</div>
Result

The script converts it into inline styles:

padding: 20px
background-color: lightblue
border-radius: 10px
Available Utilities
Spacing
chai-p-10
chai-m-10
chai-pt-10
chai-mt-20
Colors
chai-bg-red
chai-text-blue
Typography
chai-fs-18
chai-align-center
Layout
chai-flex
chai-center
chai-flex-wrap
chai-gap-10
Size
chai-w-200
chai-h-100
Borders
chai-radius-10
Prebuilt Components

Chai CSS also includes ready-made components.

Buttons
chai-btn
chai-btn-primary
chai-btn-secondary
chai-btn-outline
chai-btn-danger
chai-btn-ghost
Cards
chai-card
chai-card-primary
chai-card-secondary

These components automatically apply styles and hover effects.

📁 Project Structure
chai-css/
│
├── index.html
├── script.js
└── README.md
📚 Learning Goals

This project was built to practice:

DOM Traversal
Class Parsing
Dynamic Styling
JavaScript Utility Engines
How frameworks like Tailwind CSS work internally
🛠 Tech Stack
HTML
JavaScript
DOM API
Vercel (deployment)
Future Improvements

Possible enhancements:

More utilities
Responsive utilities
Grid system
Dark mode support
CLI build version
👨‍💻 Author

Jivesh Jadhav

GitHub:
https://github.com/Jiv-s
