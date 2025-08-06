import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  FaChevronLeft, FaChevronRight, FaHome, FaBuilding, 
  FaBullseye, FaTasks, FaEdit, FaFileAlt, FaUpload, 
  FaImages, FaUsersCog, FaCog, FaMoon, FaSun 
} from 'lucide-react';
import companyLogo from '../assets/logo.png'


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved preference or system preference
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             (window.matchMedia('(prefers-color-scheme: dark)').matches && 
              localStorage.getItem('darkMode') !== 'false');
    }
    return false;
  });

  // Apply dark mode on initial render and when it changes
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex h-screen transition-all duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar with hidden scroll */}
      <div
        className={`fixed w-64 text-gray-900 bg-white dark:text-white dark:bg-gray-900 p-4 h-screen z-40 transition-all duration-300 ${
          isOpen ? 'left-0' : '-left-64'
        } flex flex-col`}
      >
        {/* Close button on the right side of sidebar */}
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className={`absolute -right-8 top-1/2 transform -translate-y-1/2 rounded-r-md hover:bg-gray-700  hover:dark:text-white${
              darkMode ? 'bg-gray-900 text-gray-600' : 'bg-gray-800 text-white'
            }`}
          >
          </button>
        )}

        <h2 className="font-bold text-lg mb-4 flex items-center">
          <span className=' w-40 text-pretty'><img src={companyLogo} alt="Company Logo" /></span> Harar Urban And Development Bureau
        </h2>
        
        {/* Scrollable navigation area */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide mb-4">
          <div className="flex flex-col gap-3 pr-2"> {/* Added padding to prevent scrollbar overlap */}
            <NavLink to="/" className="hover:bg-gray-800 hover:text-white flex items-center px-3 py-1 hover:rounded-sm" onClick={() => window.innerWidth < 768 && toggleSidebar()}>
              <FaHome className="mr-2" /> Dashboard
            </NavLink>
            <NavLink to="/companies" className="hover:bg-gray-800 hover:text-white flex items-center px-3 py-1 hover:rounded-sm" onClick={() => window.innerWidth < 768 && toggleSidebar()}>
              <FaBuilding className="mr-2" /> Companies
            </NavLink>
            <NavLink to="/goals" className="hover:bg-gray-800 hover:text-white flex items-center px-3 py-1 hover:rounded-sm" onClick={() => window.innerWidth < 768 && toggleSidebar()}>
              <FaBullseye className="mr-2" /> Goals
            </NavLink>
            <NavLink to="/goals/:id" className="hover:bg-gray-800 hover:text-white flex items-center px-3 py-1 hover:rounded-sm" onClick={() => window.innerWidth < 768 && toggleSidebar()}>
              <FaTasks className="mr-2" /> Goal Detail
            </NavLink>
            <NavLink to="/tasks/:id" className="hover:bg-gray-800 hover:text-white flex items-center px-3 py-1 hover:rounded-sm" onClick={() => window.innerWidth < 768 && toggleSidebar()}>
              <FaTasks className="mr-2" /> Tasks Detail
            </NavLink>
            <NavLink to="/activities" className="hover:bg-gray-800 hover:text-white flex items-center px-3 py-1 hover:rounded-sm" onClick={() => window.innerWidth < 768 && toggleSidebar()}>
              <FaEdit className="mr-2" /> Activity Editor
            </NavLink>
            <NavLink to="/reports/builder" className="hover:bg-gray-800 hover:text-white flex items-center px-3 py-1 hover:rounded-sm" onClick={() => window.innerWidth < 768 && toggleSidebar()}>
              <FaFileAlt className="mr-2" /> Report Builder
            </NavLink>
            <NavLink to="/reports/submission" className="hover:bg-gray-800 hover:text-white flex items-center px-3 py-1 hover:rounded-sm" onClick={() => window.innerWidth < 768 && toggleSidebar()}>
              <FaUpload className="mr-2" /> Report Submission
            </NavLink>
            <NavLink to="/attachments" className="hover:bg-gray-800 hover:text-white flex items-center px-3 py-1 hover:rounded-sm" onClick={() => window.innerWidth < 768 && toggleSidebar()}>
              <FaImages className="mr-2" /> Attachment Gallery
            </NavLink>
            <NavLink to="/admin/users" className="hover:bg-gray-800 hover:text-white flex items-center px-3 py-1 hover:rounded-sm" onClick={() => window.innerWidth < 768 && toggleSidebar()}>
              <FaUsersCog className="mr-2" /> Users (Admin)
            </NavLink>
            <NavLink to="/settings-audit" className="hover:bg-gray-800 hover:text-white flex items-center px-3 py-1 hover:rounded-sm" onClick={() => window.innerWidth < 768 && toggleSidebar()}>
              <FaCog className="mr-2" /> Settings & Audit Log
            </NavLink>
          </div>
        </nav>

        {/* Footer with dark mode toggle */}
        <div className={`p-3 flex justify-between items-center border-t-1`}>
          <span className="text-sm">© {new Date().getFullYear()} Your Company</span>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-700"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon />}
          </button>
        </div>
      </div>

      {/* Toggle button - moves with sidebar */}
      <button
        onClick={toggleSidebar}
        className={`fixed z-40 p-2 h-screen flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'left-64' : 'left-0'
        } ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'
        }`}
        style={{ width: '24px' }}
        aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        <p className="transform whitespace-nowrap">
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </p>
      </button>

      {/* shifts with sidebar */}
      <div 
        className={`flex-1 transition-all duration-300 ${
          isOpen ? 'ml-64' : 'ml-0'
        } bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen`}
      >
      </div>

      
    </div>
  );
}