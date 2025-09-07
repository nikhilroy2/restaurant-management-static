# 🍽️ RestaurantPro Dashboard

A premium, responsive restaurant management dashboard built with modern web technologies. Features a sleek dark mode interface with real-time analytics, inventory management, and staff performance tracking.

![Restaurant Dashboard Preview](https://img001.prntscr.com/file/img001/FIdUDiaBTUSaDW3E8Sjujg.gif)

## 🚀 Live Demo

**[View Live Dashboard](https://nikhilroy2.github.io/restaurant-management-static/)**

## ✨ Features

### 📊 **Analytics & Insights**
- Real-time revenue tracking with growth indicators
- Interactive charts (Line & Pie charts using Chart.js)
- Order distribution analytics
- Staff performance metrics
- Daily/weekly/monthly revenue trends

### 🏪 **Restaurant Operations**
- **Table Management**: Visual table status grid with real-time updates
- **Order Tracking**: Live order status with color-coded priorities
- **Menu Analytics**: Popular items with sales performance
- **Staff Dashboard**: Employee ratings and productivity tracking

### 📦 **Inventory Management**
- Critical stock alerts with color-coded warnings
- Low inventory notifications
- Automated reorder suggestions
- Real-time stock level monitoring

### 🎨 **Premium UI/UX**
- **Dark Mode Theme**: Professional dark interface
- **Responsive Design**: Works seamlessly on all devices
- **Smooth Animations**: Hover effects, slide-ins, and transitions
- **Glass Morphism Effects**: Modern glassmorphism design elements
- **Interactive Elements**: Button feedback and smooth transitions

## 🛠️ Technology Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with advanced effects
- **JavaScript (ES6+)** - Interactive functionality
- **TailwindCSS** - Utility-first CSS framework
- **Chart.js** - Interactive charts and graphs
- **Inter Font** - Modern, professional typography

## 📁 Project Structure

```
restaurant-dashboard/
├── index.html          # Main HTML structure
├── style.css           # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/nikhilroy2/sunsine-school-management.git
   cd restaurant-dashboard
   ```

2. **Open the project**
   Simply open `index.html` in your web browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. **View the dashboard**
   Navigate to `http://localhost:8000` in your browser

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Key Components

### Dashboard Cards
- **Revenue Analytics**: Today's earnings with percentage growth
- **Active Orders**: Real-time order count with status indicators
- **Table Occupancy**: Current capacity utilization
- **Staff Status**: On-duty staff count and availability

### Interactive Charts
- **Revenue Line Chart**: 7-day revenue trend visualization
- **Order Distribution**: Pie chart showing dine-in vs takeout vs delivery

### Management Sections
- **Popular Menu Items**: Top-selling dishes with images and metrics
- **Recent Orders**: Live order feed with status tracking
- **Table Status Grid**: Visual representation of table availability
- **Inventory Alerts**: Critical stock warnings and reorder suggestions

## 🎨 Design Features

### Color Scheme
- **Primary**: Orange (#F59E0B)
- **Background**: Dark Gray (#111827)
- **Cards**: Gray (#1F2937)
- **Text**: White/Light Gray
- **Accents**: Blue, Green, Purple, Red for status indicators

### Animation Effects
- Smooth slide-in animations on page load
- Hover transformations for interactive elements
- Pulsing animations for critical alerts
- Chart animations with smooth transitions

## 🔧 Customization

### Updating Colors
Modify the color scheme in `style.css`:
```css
:root {
  --primary-color: #F59E0B;
  --background-color: #111827;
  --card-color: #1F2937;
}
```

### Adding New Charts
Include Chart.js configuration in `script.js`:
```javascript
const newChart = new Chart(ctx, {
  type: 'bar', // or 'line', 'pie', etc.
  data: {
    // Your data here
  },
  options: {
    // Chart options
  }
});
```

## 📊 Data Integration

The dashboard currently uses mock data for demonstration. To integrate with real data:

1. **API Integration**: Replace mock data with API calls
2. **WebSocket Support**: Add real-time data updates
3. **Database Connection**: Connect to your restaurant's database

```javascript
// Example API integration
async function fetchRevenueData() {
  const response = await fetch('/api/revenue');
  const data = await response.json();
  updateRevenueChart(data);
}
```

## 🌟 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Nikhil Roy**
- GitHub: [@nikhilroy2](https://github.com/nikhilroy2)

## 🙏 Acknowledgments

- **TailwindCSS** for the utility-first CSS framework
- **Chart.js** for beautiful, responsive charts
- **Unsplash** for high-quality food photography
- **Google Fonts** for the Inter font family

## 📞 Support

If you found this project helpful, please give it a ⭐ on GitHub!

For questions or support, please open an issue on GitHub.

---

**Made with ❤️ for the restaurant industry**