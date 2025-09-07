// Revenue Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Revenue',
            data: [2200, 2800, 2400, 3200, 2900, 3800, 2847],
            borderColor: '#F59E0B',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#9CA3AF'
                },
                grid: {
                    color: '#374151'
                }
            },
            y: {
                ticks: {
                    color: '#9CA3AF',
                    callback: function (value) {
                        return ' ' + value;
                    }
                },
                grid: {
                    color: '#374151'
                }
            }
        }
    }
});

// Orders Pie Chart
const ordersCtx = document.getElementById('ordersChart').getContext('2d');
new Chart(ordersCtx, {
    type: 'doughnut',
    data: {
        labels: ['Dine In', 'Takeout', 'Delivery'],
        datasets: [{
            data: [45, 30, 25],
            backgroundColor: ['#3B82F6', '#10B981', '#F59E0B'],
            borderColor: '#1F2937',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#9CA3AF',
                    padding: 20
                }
            }
        }
    }
});

// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function () {
    // Add animation classes to cards
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('slide-in');
        }, index * 100);
    });

    // Update stats with animations
    function updateStats() {
        const stats = [
            {
                element: document.querySelector('.text-2xl.font-bold.text-green-400'),
                target: 2847, prefix: '/20'
            },
            {
                element: document.querySelectorAll('.text-2xl.font-bold')[1],
                target: 18
            },
            {
                element: document.querySelectorAll('.text-2xl.font-bold')[2],
                target: 24, suffix: '/32'
            },
            {
                element: document.querySelectorAll('.text-2xl.font-bold')[3],
                target: 12
            }
        ];

        stats.forEach(stat => {
            if (stat.element) {
                animateValue(stat.element, 0, stat.target, 2000, stat.prefix, stat.suffix);
            }
        });
    }

    function animateValue(element, start, end, duration, prefix = '', suffix = '') {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = prefix + current + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Initialize animations
    setTimeout(updateStats, 500);

    // Add click handlers for interactive elements
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Live time update
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        // Update any time displays if needed
    }
    setInterval(updateTime, 1000);

    // Simulate real-time updates
    setInterval(() => {
        // Update notification count
        const notificationBadge = document.querySelector('.notification-dot');
        if (notificationBadge) {
            const currentCount = parseInt(notificationBadge.textContent);
            if (Math.random() > 0.7) { // 30% chance to add notification
                notificationBadge.textContent = currentCount + 1;
            }
        }
    }, 10000);
});