function addTimer()
    {
        let has_timer_container = document.querySelectorAll("[time-container]");

        if(has_timer_container.length > 0)
        {
            return;
        }

        let parent = document.querySelector('.BXL82c[jscontroller="qoxFud"][jsaction]');

        if (!parent)
            return;

        let childs = parent.childNodes;
        if (!childs)
            return;

        let parent_total_child = childs.length;
        if (!parent_total_child)
            return;

        let last_child = childs[parent_total_child -1];
        if (!last_child)
            return;

        let html = `
        <div class="wWdzec" style="font-weight: bold;" time-container>
            <span time-hour></span>
            <span time-separator></span>
            <span time-minutes></span>
            <span time-separator></span>
            <span time-seconds></span>
        </div>
        `;

        last_child.insertAdjacentHTML('afterend', html);
    }
    addTimer();

    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var time_hour = document.querySelector('span[time-hour]');
    var time_minutes = document.querySelector('span[time-minutes]');
    var time_separators = document.querySelectorAll('span[time-separator]');
    var time_seconds = document.querySelector('span[time-seconds]');

    function addZero(num)
    {
        if (num < 10) {
            return '0' + num;
        }
        return num;
    }

    function updateTime()
    {
        time = new Date();
        hour = time.getHours();
        minutes = addZero(time.getMinutes());
        seconds = addZero(time.getSeconds());

        var show_separator = !! (seconds%2);

        if(time_hour)
        {
            time_hour.innerHTML = hour;
        }

        if(time_minutes)
        {
            time_minutes.innerHTML = minutes;
        }

        if(time_separators && time_separators.length > 0)
        {
            time_separators.forEach(function(separator) {
                separator.innerHTML = ':';
                separator.style.color = show_separator ? '#d8111163' : 'red';
            });
        }

        if(time_seconds)
        {
            time_seconds.innerHTML = seconds;
        }
    }

    setInterval(updateTime, 1000);
