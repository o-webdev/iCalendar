import { state } from "./state";
import { initHeader } from "./header";
import { initCalendar } from "./calendar";
import { initEventModal } from "./event-modal";

export function initApp(selector) {
    state.$element = document.querySelector(selector);
    initHeader();
    initCalendar();
    initEventModal();

    window.onbeforeunload = () => {
        window.localStorage.setItem("events", JSON.stringify(state.events));
    }
}