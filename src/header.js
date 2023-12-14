import { getExactDate, addMonths, getMonth, getYear } from "./date";
import { state } from "./state";
import { i18n } from "./ia8n";

const template = `
    <header class="main">
            <a class="logo">📅</a>
            <button>Today</button>

        <nav>
            <button data-dir="prev">←</button>
            <button data-dir="next">→</button>
        
        </nav>

        <h2> April 2023</h2>
    </header>
`;

export function initHeader() {
    state.$element.insertAdjacentHTML("beforeend", template);
    
   
    const header = document.querySelector("header.main")
    header.addEventListener("click", ev => {
        const {target} = ev;

        switch (target.tagName) {
            case "BUTTON": {
                const parent = target.parentElement;
                parent.tagName === "NAV" ? onNavClick(target) : onTodayClick()
            }; break;
        }
    });

        // TODO: Listen for calendar change - update label
        const label = header.querySelector("h2");
        state.calendar.onDateChange$.subscribe(date => {
            const month = getMonth(date);
            const year = getYear(date);
            label.innerHTML = `${i18n["month-" + month]} ${year}`;
        })
    }

    function onTodayClick() {
        state.calendar.setDate(getExactDate());

    }

    function onNavClick(target) {
        const direction = target.getAttribute("data-dir");
        const next = addMonths(state.calendar.date, direction === "prev" ? -1 : 1);
        state.calendar.setDate(next);

    }