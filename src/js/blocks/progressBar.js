function progressBar() {

    const counters = document.querySelectorAll(".ratings-item__percent");
    const lines = document.querySelectorAll(".ratings-item__progress-bar_procient");

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });
}

export default progressBar;