import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Creator from './pages/Creator';
import Admin from './pages/Admin';
import Modes from './pages/Modes';
import Logistics from './pages/Logistics';
import AdminItems from './pages/AdminItems';
import AddFormulas from './pages/AddFormulas';
import AddStore from './pages/AddStore';
import AddSafe from './pages/AddSafe';
import AddBotka from './pages/AddBotka';
import GiveAdmin from './pages/GiveAdmin';
import SaveSettings from './pages/SaveSettings';
import RenderedRoute from './pages/RenderedRoute';
import CalculatorPage from './pages/CalculatorPage';

import BanPage from './pages/BanPage';
import MutePage from './pages/MutePage';
import OnlineList from './pages/OnlineList';

import ThirdPersonPage from './pages/ThirdPersonPage';
import StealthPage from './pages/StealthPage';
import GodModePage from './pages/GodModePage';

import AddPetsPage from './pages/AddPetsPage';
import AddItemsPage from './pages/AddItemsPage';
import AddSuppliesPage from './pages/AddSuppliesPage';

import CallCargoPage from './pages/CallCargoPage';
import HelicopterPage from './pages/HelicopterPage';
import CallTankPage from './pages/CallTankPage';
import CallDropPage from './pages/CallDropPage';

import KikAdminPanel from './pages/KikAdminPanel';

import XConfig from './pages/XConfig';
import CardRoomsTimer from './pages/CardRoomsTimer';
import MedalTime from './pages/MedalTime';
import MechTalentsHide from './pages/MechTalentsHide';
import ServerInfo from './pages/ServerInfo';
import ServerStart from './pages/ServerStart';
import DemoMode from './pages/DemoMode';
import BackpackStacks from './pages/BackpackStacks';
import WipeTime from './pages/WipeTime';

import ExpFormula from './pages/ExpFormula';
import GunpowderFormula from './pages/GunpowderFormula';
import X2TitanFormula from './pages/X2TitanFormula';

import AdminWeapons from './pages/AdminWeapons';
import AdminArmor from './pages/AdminArmor';

import PvpBandit from './pages/PvpBandit';

import VehicleDropTimer from './pages/VehicleDropTimer';



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/creator/modes" element={<Modes />} />
          <Route path="/creator/logistics" element={<Logistics />} />
          <Route path="/creator/admin-items" element={<AdminItems />} />
          <Route path="/creator/add-formulas" element={<AddFormulas />} />
          <Route path="/creator/add-store" element={<AddStore />} />
          <Route path="/creator/add-safe" element={<AddSafe />} />
          <Route path="/creator/add-botka" element={<AddBotka />} />
          <Route path="/creator/give-admin" element={<GiveAdmin />} />
          <Route path="/creator/save-settings" element={<SaveSettings />} />

          <Route path="/status" element={<RenderedRoute />} />

          <Route path="/admin/ban" element={<BanPage />} />
          <Route path="/admin/mute" element={<MutePage />} />
          <Route path="/admin/online" element={<OnlineList />} />
          <Route path="/admin/spectate" element={<ThirdPersonPage />} />
          <Route path="/admin/stealth" element={<StealthPage />} />
          <Route path="/admin/godmode" element={<GodModePage />} />
          <Route path="/admin/add-pets" element={<AddPetsPage />} />
          <Route path="/admin/add-items" element={<AddItemsPage />} />
          <Route path="/admin/add-supplies" element={<AddSuppliesPage />} />
          <Route path="/admin/spawn-cargo" element={<CallCargoPage />} />
          <Route path="/admin/spawn-heli" element={<HelicopterPage />} />
          <Route path="/admin/spawn-tank" element={<CallTankPage />} />
          <Route path="/admin/spawn-drop" element={<CallDropPage />} />

          <Route path="/admin/kik" element={<KikAdminPanel />} />

          <Route path="/creator/calculator" element={<CalculatorPage />} />
          <Route path="/x-config" element={<XConfig />} />
          <Route path="/card-rooms-timer" element={<CardRoomsTimer />} />
          <Route path="/medal-time" element={<MedalTime />} />
          <Route path="/mech-talents-hide" element={<MechTalentsHide />} />
          <Route path="/server-info" element={<ServerInfo />} />
          <Route path="/server-start" element={<ServerStart />} />
          <Route path="/demo-mode" element={<DemoMode />} />
          <Route path="/backpack-stacks" element={<BackpackStacks />} />
          <Route path="/wipe-time" element={<WipeTime />} />
          <Route path="/formulas/exp" element={<ExpFormula />} />
          <Route path="/formulas/gunpowder" element={<GunpowderFormula />} />
          <Route path="/formulas/x2titan" element={<X2TitanFormula />} />
          <Route path="/creator/admin-weapons" element={<AdminWeapons />} />
          <Route path="/creator/admin-armor" element={<AdminArmor />} />
          <Route path="/creator/pvp-bandit" element={<PvpBandit />} />

          {/* ✅ Обновлённый маршрут */}
          <Route path="/vehicle-drop-timer" element={<VehicleDropTimer />} />

        </Routes>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}

export default App;





