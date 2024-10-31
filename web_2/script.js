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

// 为"联系我们"链接添加点击事件
document.querySelector('nav ul li:last-child a').addEventListener('click', function() {
    showAlert('请通过邮箱联系我们：1910312327@qq.com');
});

// 控制台日志
console.log("清明上河图网页加载完成");
// 等待页面加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有的section元素
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 1; // 使透明度为1，以触发动画
    });

    // 显示当前时间
    displayCurrentTime();
    
    // 每秒刷新当前时间
    setInterval(displayCurrentTime, 1000);
});

// 显示当前时间
function displayCurrentTime() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' , second: '2-digit' };
    const formattedDate = date.toLocaleDateString('zh-CN', options);
    // 如果时间元素已存在，则更新其内容，否则创建新的时间元素
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

