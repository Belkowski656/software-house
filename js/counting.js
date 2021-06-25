window.addEventListener('load', () => {
    const spans = document.querySelectorAll('.stats__stat');

    let spansFlags = [true, true, true, true];


    const counting = (span, index) => {
        if (!spansFlags[index]) return;

        const endValue = span.dataset.number * 1;
        let value = 0;
        let increaseValue = 5;

        if (index === 0 || index === 3) increaseValue = 25;
        if (index === 1) increaseValue = 1;
        if (index === 2) increaseValue = 50;

        setInterval(() => {
            if (value === endValue) {
                spansFlags[index] = false;
                return;
            };
            value += increaseValue;
            span.textContent = value;
        }, 50);
    }

    const isVisible = () => {
        spans.forEach((span, index) => {
            if (span.getBoundingClientRect().top - span.offsetHeight + 120 < window.innerHeight) {
                counting(span, index);
            }
        })
    };

    document.addEventListener('scroll', isVisible);
    isVisible();
});