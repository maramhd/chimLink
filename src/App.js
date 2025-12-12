/* استيراد ملف التنسيق العام */
import "./App.css";

/* استيراد عناصر التوجيه للتنقل بين الصفحات */
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

/* استيراد الأيقونات */
/* أيقونة قسم التجارب */
import { RiFlaskLine } from "react-icons/ri";
/* أيقونة قسم المواد */
import { GiChemicalDrop } from "react-icons/gi";
/* أيقونة قسم التنبيهات */
import { MdOutlineWarningAmber } from "react-icons/md";
/* أيقونة قسم الإرشادات */
import { BiBookContent } from "react-icons/bi";

/* استيراد الصفحات */
import Experiments from "./pages/Experiments"; /* صفحة التجارب */
import Materials from "./pages/Materials"; /* صفحة المواد */
import Alerts from "./pages/Alerts"; /* صفحة التنبيهات */
import Guidelines from "./pages/Guidelines"; /* صفحة الإرشادات */
import Settings from "./pages/Settings"; /* صفحة الإعدادات */

/* مكوّن شريط التنقل */
function Navbar() {
  const location = useLocation(); /* تحديد الصفحة الحالية */

  return (
    <header className="header">
      <h2 className="logo"> Lab A</h2> {/* شعار الموقع */}

      <nav className="nav">
        {/* روابط التنقل */}
        <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
        <Link to="/experiments" className={`nav-link ${location.pathname === "/experiments" ? "active" : ""}`}>Experiments</Link>
        <Link to="/materials" className={`nav-link ${location.pathname === "/materials" ? "active" : ""}`}>Materials</Link>
        <Link to="/alerts" className={`nav-link ${location.pathname === "/alerts" ? "active" : ""}`}>Alerts</Link>
        <Link to="/guidelines" className={`nav-link ${location.pathname === "/guidelines" ? "active" : ""}`}>Guidelines</Link>
        <Link to="/settings" className={`nav-link ${location.pathname === "/settings" ? "active" : ""}`}>Settings</Link>
      </nav>
    </header>
  );
}

/* مكوّن الصفحة الرئيسية */
function Home() {
  return (
    <div className="home-page">

      {/* قسم الهيرو */}
      <section className="hero-section">
        <div className="overlay"></div> {/* طبقة تغميق */}

        <div className="hero-content">
          <h1>Welcome to Lab A</h1> {/* العنوان */}
          <p>Your comprehensive laboratory management platform for experiments, materials, and safety protocols</p>
          <button className="hero-btn">Get Started</button> {/* زر البداية */}
        </div>
      </section>

      {/* قسم الميزات */}
      <section className="features">
        <h2 className="section-title">Platform</h2>

        <div className="card-container">

          {/* كرت التجارب */}
          <div className="feature-card blue">
            <RiFlaskLine className="icon blue-icon" />
            <h3>Experiments</h3>
            <p>Track and manage all your laboratory experiments with detailed results.</p>
          </div>

          {/* كرت المواد */}
          <div className="feature-card green">
            <GiChemicalDrop className="icon green-icon" />
            <h3>Materials</h3>
            <p>Monitor chemical inventory, expiration dates, and hazard levels.</p>
          </div>

          {/* كرت التنبيهات */}
          <div className="feature-card red">
            <MdOutlineWarningAmber className="icon red-icon" />
            <h3>Alerts</h3>
            <p>Stay informed with real-time notifications and warnings.</p>
          </div>

          {/* كرت الإرشادات */}
          <div className="feature-card purple">
            <BiBookContent className="icon purple-icon" />
            <h3>Guidelines</h3>
            <p>Access safety protocols and laboratory best practices.</p>
          </div>

        </div>
      </section>

      {/* قسم الدعوة لاتخاذ إجراء */}
      <section className="cta-section">
        <h2>Ready to optimize your laboratory workflow?</h2>
        <p>Start managing your experiments and materials efficiently today</p>

        {/* زر الانتقال إلى صفحة التجارب */}
        <Link to="/experiments" className="cta-btn">
          Explore Experiments
        </Link>

      </section>

    </div>
  );
}

/* المكوّن الأساسي الذي يحتوي جميع الصفحات */
function App() {
  return (
    <Router> {/* تفعيل نظام التوجيه */}
      <Navbar /> {/* شريط التنقل */}

      <Routes> {/* تحديد الصفحات */}
        <Route path="/" element={<Home />} /> {/* الصفحة الرئيسية */}
        <Route path="/experiments" element={<Experiments />} /> {/* صفحة التجارب */}
        <Route path="/materials" element={<Materials />} /> {/* صفحة المواد */}
        <Route path="/alerts" element={<Alerts />} /> {/* صفحة التنبيهات */}
        <Route path="/guidelines" element={<Guidelines />} /> {/* صفحة الإرشادات */}
        <Route path="/settings" element={<Settings />} /> {/* صفحة الإعدادات */}
      </Routes>
    </Router>
  );
}

export default App; /* تصدير المكون الأساسي */
