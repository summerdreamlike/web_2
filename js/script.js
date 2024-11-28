// 平滑滚动到各个部分
document.querySelectorAll('nav ul li a[href="#gallery"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // 平滑滚动
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 显示提示信息
function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    // 自动隐藏提示信息
    setTimeout(() => {
        alertBox.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 500);
    }, 2000);
}


// 控制台日志
console.log("清明上河图网页加载完成");
document.addEventListener('DOMContentLoaded', () => {
    // 定义 IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 当元素进入视口时，设置透明度，触发 fadeIn 动画
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target); // 加载完成后不再观察
            }
        });
    });

    // 观察每个 section 元素
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // 显示当前时间
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000); // 每秒刷新当前时间
});

// 显示当前时间的函数
function displayCurrentTime() {
    const date = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const formattedDate = date.toLocaleDateString('zh-CN', options);

    // 如果时间元素已存在，则更新内容
    const timeElement = document.querySelector('.current-time');
    if (timeElement) {
        timeElement.textContent = `当前时间：${formattedDate}`;
    } else {
        const newTimeElement = document.createElement('div');
        newTimeElement.className = 'current-time';
        newTimeElement.textContent = `当前时间：${formattedDate}`;
        document.body.prepend(newTimeElement);
    }
}





// 控制台日志
console.log("清明上河图网页加载完成");

