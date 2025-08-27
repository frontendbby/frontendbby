import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navigation } from "./components/Navigation";
import { TuzobusMap } from "./components/TuzobusMap";
import { RouteSearch } from "./components/RouteSearch";
import { DepartureBoard } from "./components/DepartureBoard";
import { ServiceAlerts } from "./components/ServiceAlerts";
import { TuzobusLogo } from "./components/TuzobusLogo";
import { Button } from "./components/ui/button";
import { Sun, Moon, Accessibility, Bell } from "lucide-react";
import { toast, Toaster } from "sonner@2.0.3";

export default function App() {
  const [activeTab, setActiveTab] = useState('map');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('tuzobus-theme');
    const savedContrast = localStorage.getItem('tuzobus-contrast');
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    if (savedContrast === 'high') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  // Simulate real-time notifications
  useEffect(() => {
    const notifications = [
      { id: 1, title: "L1 - Retraso menor", message: "2 min de retraso en Línea 1", type: "warning", delay: 5000 },
      { id: 2, title: "Zona Dorada", message: "Tu bus llega en 3 minutos", type: "info", delay: 15000 },
      { id: 3, title: "Servicio restaurado", message: "L4 operando normalmente", type: "success", delay: 25000 }
    ];

    notifications.forEach((notification) => {
      setTimeout(() => {
        toast[notification.type as keyof typeof toast](notification.message, {
          description: new Date().toLocaleTimeString('es-MX'),
          action: {
            label: "Ver",
            onClick: () => setActiveTab('alerts'),
          },
        });
      }, notification.delay);
    });
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('tuzobus-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('tuzobus-theme', 'light');
    }
  };

  const toggleContrast = () => {
    const newHighContrast = !isHighContrast;
    setIsHighContrast(newHighContrast);
    
    if (newHighContrast) {
      document.documentElement.classList.add('high-contrast');
      localStorage.setItem('tuzobus-contrast', 'high');
    } else {
      document.documentElement.classList.remove('high-contrast');
      localStorage.setItem('tuzobus-contrast', 'normal');
    }
  };

  const renderActiveComponent = () => {
    const components = {
      'map': <TuzobusMap />,
      'search': <RouteSearch />,
      'departures': <DepartureBoard />,
      'alerts': <ServiceAlerts />
    };

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="h-full"
        >
          {components[activeTab as keyof typeof components]}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-background transition-colors duration-300">
      {/* Enhanced Header with Accessibility Controls */}
      <motion.header 
        className="bg-gradient-to-r from-[var(--tuzobus-wine)] to-[var(--tuzobus-dark-wine)] text-white p-4 shadow-lg relative overflow-hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--tuzobus-gold)] rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-[var(--tuzobus-light-gold)] rounded-full translate-x-12 translate-y-12 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <TuzobusLogo size="sm" showText={false} />
              </motion.div>
              <div>
                <motion.h1 
                  className="font-bold text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  TUZOBUS
                </motion.h1>
                <motion.p 
                  className="text-xs opacity-90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Sistema de Transporte • Pachuca, Hidalgo
                </motion.p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleContrast}
                  className="text-white hover:bg-white/20 transition-colors"
                  aria-label={isHighContrast ? "Desactivar alto contraste" : "Activar alto contraste"}
                >
                  <Accessibility className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="text-white hover:bg-white/20 transition-colors"
                  aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Live Status Indicator */}
          <motion.div 
            className="mt-2 flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs">En vivo</span>
            </div>
            <div className="w-px h-3 bg-white/30"></div>
            <span className="text-xs opacity-75">7 líneas activas</span>
          </motion.div>
        </div>
      </motion.header>
      
      {/* Main Content with Enhanced Animations */}
      <main className="flex-1 overflow-hidden relative">
        {renderActiveComponent()}
      </main>
      
      {/* Enhanced Navigation */}
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Toast Notifications */}
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: isDarkMode ? 'var(--tuzobus-dark-wine)' : 'var(--tuzobus-light-gold)',
            color: isDarkMode ? 'white' : 'var(--tuzobus-wine)',
            border: `1px solid ${isDarkMode ? 'var(--tuzobus-gold)' : 'var(--tuzobus-wine)'}`,
          },
        }}
        richColors
      />
    </div>
  );
}